import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/blog" },
  { label: "Experience", href: "/experience" },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--border)]"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)",
        backdropFilter: "blur(8px)",
      }}
    >
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-sm tracking-tight hover:opacity-60 transition-opacity"
        >
          Ali Hussain
        </Link>
        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-colors duration-200 rounded-md"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
