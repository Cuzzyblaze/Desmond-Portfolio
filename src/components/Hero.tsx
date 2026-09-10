"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Avatar } from "./Avatar";
import { CountUp } from "./CountUp";
import { contact, stats } from "@/lib/data";
import { TikTokIcon } from "./TikTokIcon";
import { LinkedinIcon, InstagramIcon } from "./SocialIcons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 grid-fade" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-blob" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-accent-light/10 blur-[120px] animate-blob animation-delay-2000" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 md:flex-row md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-xl text-center md:text-left"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-accent-light">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for new projects
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Desmond Didacus
          </h1>

          <p className="glow-text mt-4 text-lg font-medium text-accent-light sm:text-xl">
            Software Developer — 5+ Years Building Websites, Automated
            Systems &amp; Sales Funnels That Convert
          </p>

          <p className="mt-5 text-base leading-relaxed text-muted">
            Founder of{" "}
            <a
              href="https://ictresult.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-accent/50 underline-offset-4 hover:text-accent-light"
            >
              ICT Result
            </a>
            . I design and ship complete digital products — from
            conversion-focused websites to full custom platforms with
            dashboards, payments, and automation.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start justify-center">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-light"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 md:justify-start">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-2xl font-bold text-foreground sm:text-3xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
            <SocialLink href={contact.linkedin} label="LinkedIn">
              <LinkedinIcon size={18} />
            </SocialLink>
            <SocialLink href={contact.instagram} label="Instagram">
              <InstagramIcon size={18} />
            </SocialLink>
            <SocialLink href={contact.tiktok} label="TikTok">
              <TikTokIcon size={16} />
            </SocialLink>
            <SocialLink href={contact.whatsapp} label="WhatsApp">
              <MessageCircle size={18} />
            </SocialLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Avatar size={260} />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-light"
    >
      {children}
    </a>
  );
}
