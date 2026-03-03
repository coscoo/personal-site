import { ExperienceItem } from "@/types";
import TimelineItem from "./TimelineItem";

export default function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="mt-10 relative">
      {/* Vertical line */}
      <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--border)]" />
      <div className="space-y-10">
        {items.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
