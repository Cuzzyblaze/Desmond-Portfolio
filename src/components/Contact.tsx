import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/data";
import { Reveal } from "./Reveal";
import { TikTokIcon } from "./TikTokIcon";
import { LinkedinIcon, InstagramIcon } from "./SocialIcons";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            Get In Touch
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s build something great together
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
            Have a project in mind — a website, an automated system, or a
            sales funnel? I&apos;d love to hear about it.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-light"
            >
              <Phone size={16} />
              {contact.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <SocialLink href={contact.linkedin} label="LinkedIn">
              <LinkedinIcon size={20} />
            </SocialLink>
            <SocialLink href={contact.instagram} label="Instagram">
              <InstagramIcon size={20} />
            </SocialLink>
            <SocialLink href={contact.tiktok} label="TikTok">
              <TikTokIcon size={18} />
            </SocialLink>
          </div>
        </Reveal>
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
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-light"
    >
      {children}
    </a>
  );
}
