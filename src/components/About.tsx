import { Code2, Workflow, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const pills = [
  { icon: Code2, label: "Websites" },
  { icon: Workflow, label: "Automated Software" },
  { icon: TrendingUp, label: "Sales Funnels" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            About Me
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            I build digital products that do the work for you
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m a full-stack developer and founder with 5+ years of
            experience designing and shipping complete digital products —
            for schools, fintech and investment brands, e-commerce stores,
            education platforms, and trading academies. From the first line
            of code to the last payment integration, I build things that are
            fast, reliable, and made to grow with the business behind them.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {pills.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
              >
                <Icon size={16} className="text-accent-light" />
                {label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
