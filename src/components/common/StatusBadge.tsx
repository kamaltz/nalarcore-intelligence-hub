import { cn } from "@/lib/utils";

export type StatusTone =
  | "operational"
  | "development"
  | "planned"
  | "unconfigured"
  | "degraded";

const toneStyles: Record<StatusTone, string> = {
  operational: "border-signal/40 bg-signal/10 text-signal",
  development: "border-warn/40 bg-warn/10 text-warn",
  planned: "border-accent/40 bg-accent/10 text-accent",
  unconfigured: "border-border-strong bg-muted/50 text-muted-foreground",
  degraded: "border-destructive/40 bg-destructive/10 text-destructive",
};

export function StatusBadge({
  tone,
  label,
  className,
}: {
  tone: StatusTone;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        toneStyles[tone],
        className,
      )}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full bg-current"
        style={{ animation: "pulse-node 2.4s ease-in-out infinite" }}
      />
      {label}
    </span>
  );
}
