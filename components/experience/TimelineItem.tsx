"use client";

import { useState } from "react";
import Image from "next/image";
import { ExperienceItem } from "@/types";
import Tag from "@/components/ui/Tag";

function CompanyLogo({
  logoUrl,
  company,
}: {
  logoUrl?: string;
  company: string;
}) {
  const [error, setError] = useState(false);
  const initial = company.charAt(0).toUpperCase();

  if (!logoUrl || error) {
    return (
      <div className="w-10 h-10 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
        <span className="text-xs font-semibold text-[var(--muted)]">
          {initial}
        </span>
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-lg bg-white border border-[var(--border)] overflow-hidden shrink-0 flex items-center justify-center p-1.5">
      <Image
        src={logoUrl}
        alt={`${company} logo`}
        width={64}
        height={64}
        className="object-contain w-full h-full"
        onError={() => setError(true)}
        unoptimized
      />
    </div>
  );
}

export default function TimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <div className="pl-6 relative">
      {/* Timeline dot */}
      <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-[var(--muted)] -translate-x-[3.5px] ring-2 ring-[var(--bg)]" />
      <div className="space-y-2">
        {/* Logo + role + company */}
        <div className="flex items-center gap-2.5">
          <CompanyLogo logoUrl={item.logoUrl} company={item.company} />
          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 min-w-0">
            <h3 className="font-semibold text-base leading-tight">{item.role}</h3>
            <span className="hidden sm:block text-[var(--border)]">·</span>
            <span className="text-[var(--muted)] text-sm">{item.company}</span>
          </div>
        </div>

        <p className="text-xs text-[var(--muted)]">
          {item.startDate} – {item.endDate} · {item.location}
        </p>

        {item.description.length > 0 && (
          <ul className="space-y-1 pt-1">
            {item.description.map((bullet, i) => (
              <li
                key={i}
                className="text-sm text-[var(--muted)] leading-relaxed pl-3 border-l border-[var(--border)]"
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {item.techStack && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.techStack.map((tech) => (
              <Tag key={tech} size="sm">
                {tech}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
