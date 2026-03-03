import { Github, Linkedin, Twitter } from "lucide-react";
import { SiInstagram, SiTiktok } from "react-icons/si";
import type { ComponentType } from "react";

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/coscoo",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ali8hsn/",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    href: "https://x.com/Ali8hsn",
    icon: Twitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ali8hsn/",
    icon: SiInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ali8hsn",
    icon: SiTiktok,
  },
];
