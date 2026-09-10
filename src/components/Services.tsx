import { Code2, Workflow, TrendingUp, type LucideIcon } from "lucide-react";
import { services, type Service } from "@/lib/data";
import { Reveal } from "./Reveal";

const icons: Record<Service["icon"], LucideIcon> = {
  code: Code2,
  workflow: Workflow,
  funnel: TrendingUp,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
              What I Do
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Services built for growth
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 0.1}>
                <div className="group glass h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-dim text-accent-light transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
