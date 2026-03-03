interface TagProps {
  children: React.ReactNode;
  size?: "sm" | "md";
}

export default function Tag({ children, size = "md" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-mono bg-[var(--surface)] text-[var(--muted)] ${
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"
      }`}
    >
      {children}
    </span>
  );
}
