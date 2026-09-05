import { cn } from "@/lib/utils";

/**
 * NalarCore mark: a reasoning network — a central core node with connected
 * knowledge nodes. Abstract, no third-party marks.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-label="NalarCore"
      className={cn("h-8 w-8", className)}
      fill="none"
    >
      <defs>
        <linearGradient id="nc-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <g stroke="url(#nc-grad)" strokeWidth="1.4" strokeLinecap="round">
        <path d="M16 7v4.5M16 20.5V25M9.2 11.2l3.6 2.2M19.2 18.6l3.6 2.2M22.8 11.2l-3.6 2.2M12.8 18.6l-3.6 2.2" />
        <circle cx="16" cy="16" r="10.5" strokeOpacity="0.28" />
      </g>
      <g fill="currentColor">
        <circle cx="16" cy="5.6" r="1.9" />
        <circle cx="7.6" cy="10.4" r="1.6" opacity="0.85" />
        <circle cx="24.4" cy="10.4" r="1.6" opacity="0.85" />
        <circle cx="7.6" cy="21.6" r="1.6" opacity="0.7" />
        <circle cx="24.4" cy="21.6" r="1.6" opacity="0.7" />
        <circle cx="16" cy="26.4" r="1.9" opacity="0.85" />
      </g>
      <circle cx="16" cy="16" r="3.6" fill="currentColor" opacity="0.18" />
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-8 w-8 text-primary" />
      <span className="text-[0.98rem] font-semibold tracking-tight text-foreground">
        Nalar<span className="text-primary">Core</span>
      </span>
    </span>
  );
}
