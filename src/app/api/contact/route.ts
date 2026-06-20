import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT_EMAIL = "sejalnayak2001@gmail.com";
const FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 20;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const MIN_FORM_FILL_MS = 2500;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
  startedAt?: unknown;
};

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitRecord>();

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  existing.count += 1;
  return existing.count > RATE_LIMIT_MAX_REQUESTS;
}

function asCleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const payload = (await request.json()) as ContactPayload;
    const name = asCleanString(payload.name);
    const email = asCleanString(payload.email).toLowerCase();
    const message = asCleanString(payload.message);
    const honeypot = asCleanString(payload.company);
    const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : 0;
    const timestamp = new Date().toISOString();

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (startedAt && Date.now() - startedAt < MIN_FORM_FILL_MS) {
      return NextResponse.json({ error: "Submission rejected." }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (message.length < MIN_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be at least ${MIN_MESSAGE_LENGTH} characters.` },
        { status: 400 },
      );
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many messages. Please try again later." },
        { status: 429 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact - ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Message: ${message}`,
        `Timestamp: ${timestamp}`,
      ].join("\n\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h2>New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong><br />${safeMessage}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
