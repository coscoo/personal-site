"use client";

import Image from "next/image";
import { useState } from "react";

export default function Avatar() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-36 h-36 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
        <span className="text-3xl font-semibold text-[var(--muted)]">AH</span>
      </div>
    );
  }

  return (
    <div className="w-36 h-36 rounded-full overflow-hidden border border-[var(--border)]">
      <Image
        src="/avatar.jpg"
        alt="Ali Hussain"
        width={144}
        height={144}
        className="object-cover w-full h-full"
        priority
        onError={() => setError(true)}
      />
    </div>
  );
}
