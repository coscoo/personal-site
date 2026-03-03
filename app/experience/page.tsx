import { experience } from "@/data/experience";
import Timeline from "@/components/experience/Timeline";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 animate-[fadeIn_0.4s_ease-in-out]">
      <SectionHeader
        title="Experience"
        subtitle="Where I've worked and what I've built."
      />
      <Timeline items={experience} />
    </div>
  );
}
