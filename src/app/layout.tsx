import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sejalnayak.dev"),
  title: {
    default: "Sejal Nayak | Senior Software Engineer",
    template: "%s | Sejal Nayak",
  },
  description:
    "Premium 3D portfolio for Sejal Nayak, a Senior Software Engineer building backend, media workflow, cloud, and distributed systems with Golang, Python, AWS, Kubernetes, and event-driven architecture.",
  keywords: [
    "Sejal Nayak",
    "Senior Software Engineer",
    "Golang",
    "Python",
    "AWS",
    "Kubernetes",
    "Media Workflow",
    "Broadcast Automation",
    "Backend Engineer",
    "Cloud Technologies",
  ],
  authors: [{ name: "Sejal Nayak" }],
  creator: "Sejal Nayak",
  openGraph: {
    title: "Sejal Nayak | Senior Software Engineer",
    description:
      "Building scalable backend, media workflow, cloud, and distributed systems with Golang, Python, AWS, Kubernetes, and event-driven architecture.",
    url: "https://sejalnayak.dev",
    siteName: "Sejal Nayak Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sejal Nayak Senior Software Engineer portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sejal Nayak | Senior Software Engineer",
    description:
      "Building scalable backend, media workflow, cloud, and distributed systems with Golang, Python, AWS, Kubernetes, and event-driven architecture.",
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body>{children}</body>
    </html>
  );
}
