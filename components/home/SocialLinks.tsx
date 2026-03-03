import { socials } from "@/data/socials";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 pt-1">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-200"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
