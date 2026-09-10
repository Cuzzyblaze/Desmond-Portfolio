import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/data";
import { TikTokIcon } from "./TikTokIcon";
import { LinkedinIcon, InstagramIcon } from "./SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-bold text-foreground">
            Desmond<span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-xs text-muted">
            Software Developer — Websites, Automated Systems &amp; Sales Funnels
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent-light"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted transition-colors hover:text-accent-light"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href={contact.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-muted transition-colors hover:text-accent-light"
          >
            <TikTokIcon size={16} />
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-muted transition-colors hover:text-accent-light"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        <p className="text-xs text-muted">
          © {year} Desmond Didacus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
