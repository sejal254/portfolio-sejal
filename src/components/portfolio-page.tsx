"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
  ExternalLink,
  FileText,
  Menu,
  Moon,
  Send,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  aboutMilestones,
  capabilityCards,
  certifications,
  contactLinks,
  education,
  experiences,
  navItems,
  profile,
  projects,
  skillCategories,
} from "@/data/portfolio";
import { CursorGlow, LoadingScreen, ScrollProgress } from "@/components/site-effects";
import { ThreeHero } from "@/components/three-hero";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

function sectionId(label: string) {
  return label.toLowerCase();
}

function isExternalLink(href: string) {
  return href.startsWith("http");
}

function AnimatedSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
    >
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.34em] text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="glass-card mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <a href="#home" className="font-display text-base font-semibold tracking-wide text-white">
          Sejal<span className="text-cyan-300">.</span>
        </a>
        <div className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${sectionId(item)}`}
              className="rounded-full px-3 py-2 text-xs text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 xl:flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-medium text-cyan-100">
            <Moon className="h-3.5 w-3.5" />
            Dark Mode
          </span>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-cyan-300 to-blue-600 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.03]"
          >
            Hire Me
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <motion.div
          className="glass-card mx-4 mt-3 rounded-3xl p-4 lg:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${sectionId(item)}`}
              className="block rounded-2xl px-4 py-3 text-sm text-slate-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-28 sm:px-8">
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            Available for backend, cloud, and platform engineering
          </div>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-4 text-2xl font-semibold text-cyan-200 sm:text-3xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {profile.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#resume"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-600 px-7 py-4 font-semibold text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:scale-[1.03]"
            >
              View Resume <FileText className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Me <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-7 py-4 font-semibold text-cyan-100 transition hover:bg-cyan-300/15"
            >
              Explore Experience <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="relative h-[360px] sm:h-[500px] lg:h-[620px]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
        >
          <div className="absolute inset-6 rounded-full bg-cyan-400/20 blur-3xl" />
          <ThreeHero />
        </motion.div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-white/10 p-3 text-cyan-100 md:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

function AboutSection() {
  return (
    <AnimatedSection id="about" eyebrow="About" title="Engineering reliable systems with polish.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card rounded-[2rem] p-7 sm:p-9">
          <p className="text-lg leading-8 text-slate-300">
            Senior Software Engineer with experience building scalable backend systems,
            media workflow platforms, distributed architectures, serverless applications, and
            cloud-native solutions. Experienced in Golang, Python, Ruby on Rails, AWS,
            Kubernetes, distributed systems, and event driven architectures.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Passionate about building resilient and scalable systems serving millions of users.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilityCards.slice(0, 4).map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <Icon className="mb-4 h-6 w-6 text-cyan-300" />
                  <h3 className="font-display text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <div className="absolute bottom-4 left-7 top-4 w-px bg-gradient-to-b from-cyan-300 via-blue-500 to-transparent" />
          <div className="space-y-6">
            {aboutMilestones.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative pl-16"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="absolute left-4 top-2 h-6 w-6 rounded-full border-4 border-[#050816] bg-cyan-300 shadow-lg shadow-cyan-400/40" />
                <div className="glass-card rounded-3xl p-6">
                  <span className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                    {item.year}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ExperienceSection() {
  return (
    <AnimatedSection id="experience" eyebrow="Experience" title="Interactive timeline of backend impact.">
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-blue-500 to-transparent sm:block" />
        <div className="space-y-7">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}-${experience.period}`}
              className={`glass-card group relative rounded-[2rem] p-6 transition sm:ml-14 sm:p-8 ${
                experience.highlighted ? "border-cyan-300/40 shadow-cyan-500/20" : ""
              }`}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute -left-[3.85rem] top-8 hidden h-8 w-8 rounded-full border-4 border-[#050816] bg-gradient-to-br from-cyan-300 to-blue-600 sm:block" />
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                    {experience.period}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                    {experience.role} at {experience.company}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{experience.location}</p>
                </div>
                {experience.highlighted ? (
                  <span className="w-fit rounded-full bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                    Amagi Highlight
                  </span>
                ) : null}
              </div>
              <ul className="mt-5 max-w-4xl space-y-3 text-slate-300">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-7">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProjectsSection() {
  return (
    <AnimatedSection id="projects" eyebrow="Projects" title="3D cards for production-minded builds.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass-card group flex min-h-[340px] transform-gpu flex-col rounded-[2rem] p-6"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="mb-8 h-32 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.32),transparent_34%),linear-gradient(135deg,rgba(37,99,235,0.32),rgba(15,23,42,0.72))] p-4">
              <div className="h-full rounded-2xl border border-cyan-300/20 bg-slate-950/50 p-4 shadow-inner shadow-cyan-500/10">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                </div>
                <div className="mt-5 space-y-2">
                  <span className="block h-2 w-3/4 rounded-full bg-cyan-300/30" />
                  <span className="block h-2 w-1/2 rounded-full bg-blue-300/20" />
                </div>
              </div>
            </div>
            <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 flex-1 leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-7">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/15"
              >
                Discuss Impact <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}

function SkillsSection() {
  return (
    <AnimatedSection id="skills" eyebrow="Skills" title="Animated technical categories.">
      <div className="glass-card relative overflow-hidden rounded-[2.25rem] p-6 sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_34rem)]" />
        <div className="relative grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-300 to-blue-600 opacity-40 blur-sm"
                animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
                transition={{ duration: 3 + index * 0.18, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-white">{category.title}</h3>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function EducationSection() {
  return (
    <AnimatedSection id="education" eyebrow="Education" title="Computer science foundation.">
      <motion.div
        className="glass-card rounded-[2.25rem] p-7 sm:p-10"
        whileHover={{ y: -8, rotateX: 2 }}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              {education.duration}
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-white">
              {education.institution}
            </h3>
            <p className="mt-4 text-xl text-slate-200">
              {education.degree}, {education.field}
            </p>
          </div>
          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">CGPA</p>
            <p className="mt-3 font-display text-5xl font-semibold text-white">{education.cgpa}</p>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

function CertificationsSection() {
  return (
    <AnimatedSection id="certifications" eyebrow="Certifications" title="AWS certified cloud expertise.">
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((certification, index) => (
          <motion.article
            key={certification.name}
            className="glass-card rounded-[2rem] p-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-600 text-slate-950">
              <CloudBadge />
            </div>
            <h3 className="font-display text-2xl font-semibold text-white">{certification.name}</h3>
            <p className="mt-3 text-slate-300">{certification.validity}</p>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}

function CloudBadge() {
  return <span className="text-sm font-black">AWS</span>;
}

function ResumeSection() {
  return (
    <AnimatedSection id="resume" eyebrow="Resume" title="Premium resume preview.">
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="glass-card relative rounded-[2.25rem] p-5 sm:p-8"
          whileHover={{ y: -12, rotateX: 3, rotateY: -3 }}
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-cyan-400/20 blur-3xl" />
          <div className="resume-paper relative overflow-hidden rounded-[1.75rem] p-5 shadow-2xl shadow-cyan-500/10">
            <iframe
              title="Sejal Nayak resume preview"
              src="/resume/sejal-nayak-resume.pdf#toolbar=0&navpanes=0"
              className="h-[620px] w-full rounded-2xl bg-white"
            />
          </div>
        </motion.div>
        <div>
          <p className="text-lg leading-8 text-slate-300">
            A concise snapshot of Sejal&apos;s senior backend engineering experience across
            Amagi, KreditBee, AWS cloud systems, resilience testing, media workflows, data
            pipelines, and production product platforms.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/resume/sejal-nayak-resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-600 px-7 py-4 font-semibold text-slate-950 shadow-2xl shadow-cyan-500/20"
            >
              Download Resume <Download className="h-5 w-5" />
            </a>
            <a
              href="/resume/sejal-nayak-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white hover:bg-white/10"
            >
              View Resume <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ContactSection() {
  return (
    <AnimatedSection id="contact" eyebrow="Contact" title="Let's build something scalable.">
      <div className="glass-card rounded-[2.25rem] p-7 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Reach out for backend engineering roles, cloud platform work, API design,
              distributed systems, or polished full-stack products.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 font-display text-2xl font-semibold text-cyan-200 sm:text-4xl"
            >
              {profile.email}
              <ArrowUpRight className="h-6 w-6" />
            </a>
            <p className="mt-4 text-lg font-semibold text-slate-300">{profile.phone}</p>
          </div>
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternalLink(link.href) ? "_blank" : undefined}
                    rel={isExternalLink(link.href) ? "noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                  >
                    <span className="flex items-center gap-4 text-base font-semibold text-white">
                      <Icon className="h-5 w-5 text-cyan-300" />
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-cyan-200" />
                  </a>
                );
              })}
            </div>
            <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  aria-label="Name"
                  placeholder="Your name"
                  className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                />
                <input
                  aria-label="Email"
                  type="email"
                  placeholder="Your email"
                  className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                />
              </div>
              <textarea
                aria-label="Message"
                placeholder="Tell me about the role, team, or opportunity"
                rows={5}
                className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
              />
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-600 px-6 py-3 font-semibold text-slate-950"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-3 px-5 pb-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>&copy; {new Date().getFullYear()} Sejal Nayak. Built with Next.js, Three.js, and motion.</p>
        <a href="#home" className="text-cyan-200 hover:text-white">
          Back to top
        </a>
      </footer>
    </main>
  );
}
