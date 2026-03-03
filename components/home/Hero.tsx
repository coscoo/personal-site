import SocialLinks from "./SocialLinks";
import Button from "@/components/ui/Button";
import Avatar from "./Avatar";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row md:items-center gap-10">
      {/* Text */}
      <div className="flex-1 space-y-5">
        <div>
          <p className="text-sm text-[var(--muted)] mb-1 tracking-wide uppercase">
            Student @ UT Austin · ECE &apos;29
          </p>
          <h1 className="text-4xl font-bold tracking-tight">Ali Hussain</h1>
        </div>
        <p className="text-[var(--muted)] leading-relaxed text-base max-w-prose">
          Interested in trading and startups. I&apos;ve had experience at Amazon,
          Jane Street, and Goldman Sachs. I study Electrical &amp; Computer
          Engineering at UT Austin and love sharing what I learn — find me on
          TikTok or just shoot me a message, I always reply.
        </p>
        <div className="flex gap-3 pt-1">
          <Button href="/projects" variant="primary">
            View Projects
          </Button>
          <Button href="/blog" variant="ghost">
            Read Writing
          </Button>
        </div>
        <SocialLinks />
      </div>

      {/* Photo */}
      <div className="shrink-0">
        <Avatar />
      </div>
    </section>
  );
}
