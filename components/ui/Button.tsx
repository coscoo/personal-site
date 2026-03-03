import Link from "next/link";

interface ButtonProps {
  href: string;
  variant: "primary" | "ghost";
  children: React.ReactNode;
}

export default function Button({ href, variant, children }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200";
  const styles = {
    primary: `${base} bg-[var(--fg)] text-[var(--bg)] hover:opacity-80`,
    ghost: `${base} border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--muted)]`,
  };
  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
}
