import { features } from "@/data/features";

export function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <article
            key={feature.title}
            className="surface-panel group relative flex flex-col gap-3 p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              {feature.status ? (
                <span className="rounded-full border border-warn/40 bg-warn/10 px-2 py-0.5 text-[11px] font-medium text-warn">
                  {feature.status}
                </span>
              ) : null}
            </div>
            <h3 className="text-base font-semibold">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
