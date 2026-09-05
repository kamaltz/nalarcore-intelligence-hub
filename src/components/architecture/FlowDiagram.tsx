import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FlowNode {
  label: string;
  hint?: string;
  tone?: "current" | "planned";
}

/** Horizontal on wide screens, vertical on mobile — never a shrunken desktop row. */
export function FlowDiagram({
  nodes,
  className,
}: {
  nodes: FlowNode[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "flex flex-col items-stretch gap-3 lg:flex-row lg:items-center",
        className,
      )}
    >
      {nodes.map((node, index) => (
        <li key={node.label} className="flex flex-col gap-3 lg:flex-1 lg:flex-row lg:items-center">
          <div
            className={cn(
              "surface-panel flex-1 px-4 py-3.5",
              node.tone === "planned" && "border-dashed border-warn/40",
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-medium">{node.label}</p>
              {node.tone === "planned" ? (
                <span className="rounded-full border border-warn/40 bg-warn/10 px-2 py-0.5 text-[10px] font-medium text-warn">
                  Planned
                </span>
              ) : null}
            </div>
            {node.hint ? (
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{node.hint}</p>
            ) : null}
          </div>
          {index < nodes.length - 1 ? (
            <span className="flex justify-center text-primary/70" aria-hidden>
              <ArrowDown className="h-4 w-4 lg:hidden" />
              <ArrowRight className="hidden h-4 w-4 lg:block" />
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/** Strictly vertical stack — used for the layered Hermes architecture. */
export function StackDiagram({ nodes }: { nodes: FlowNode[] }) {
  return (
    <ol className="flex flex-col gap-2">
      {nodes.map((node, index) => (
        <li key={node.label}>
          <div
            className={cn(
              "surface-panel px-4 py-3.5",
              node.tone === "planned" && "border-dashed border-warn/40",
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-medium">{node.label}</p>
              <span
                className={cn(
                  "rounded-full border px-2 py-0.5 text-[10px] font-medium",
                  node.tone === "planned"
                    ? "border-warn/40 bg-warn/10 text-warn"
                    : "border-signal/40 bg-signal/10 text-signal",
                )}
              >
                {node.tone === "planned" ? "Planned" : "Current"}
              </span>
            </div>
            {node.hint ? (
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{node.hint}</p>
            ) : null}
          </div>
          {index < nodes.length - 1 ? (
            <div className="flex justify-center py-1 text-primary/60" aria-hidden>
              <ArrowDown className="h-4 w-4" />
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
