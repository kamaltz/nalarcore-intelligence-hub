import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ExternalLink, LayoutDashboard } from "lucide-react";
import { Wordmark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { siteConfig, isConfigured } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/commands", label: "Commands" },
  { to: "/docs", label: "Docs" },
  { to: "/status", label: "Status" },
  { to: "/about", label: "About" },
] as const;

function AddToDiscordButton({ className }: { className?: string }) {
  if (!isConfigured(siteConfig.botInviteUrl)) {
    return (
      <Button
        variant="default"
        className={cn("bg-primary text-primary-foreground hover:bg-primary/90", className)}
        disabled
        title="Bot invite URL belum dikonfigurasi"
      >
        Add to Discord
      </Button>
    );
  }
  return (
    <Button
      asChild
      className={cn("bg-primary text-primary-foreground hover:bg-primary/90", className)}
    >
      <a href={siteConfig.botInviteUrl} target="_blank" rel="noreferrer noopener">
        Add to Discord
        <ExternalLink className="ml-1.5 h-4 w-4" aria-hidden />
      </a>
    </Button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Navigasi utama"
        className="container-page flex h-16 items-center justify-between gap-4"
      >
        <Link to="/" aria-label="NalarCore — beranda" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "text-foreground bg-secondary" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" className="border-border-strong bg-transparent">
            <Link to="/dashboard">
              <LayoutDashboard className="mr-1.5 h-4 w-4" aria-hidden />
              Dashboard
              <span className="ml-2 rounded-full border border-warn/40 bg-warn/10 px-1.5 py-0.5 text-[10px] font-medium text-warn">
                Beta
              </span>
            </Link>
          </Button>
          <AddToDiscordButton />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Menu className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          {open ? <X className="hidden" aria-hidden /> : null}
        </button>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-secondary" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex flex-col gap-2 px-3 pb-2">
              <Button asChild variant="outline" className="border-border-strong bg-transparent">
                <Link to="/dashboard" onClick={() => setOpen(false)}>
                  Dashboard (Beta)
                </Link>
              </Button>
              <AddToDiscordButton className="w-full" />
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
