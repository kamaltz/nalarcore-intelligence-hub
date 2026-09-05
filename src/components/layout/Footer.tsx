import { Link } from "@tanstack/react-router";
import { Wordmark } from "@/components/brand/Logo";
import { siteConfig, isConfigured, currentYear } from "@/config/site";

export function Footer() {
  const external: Array<{ label: string; href: string }> = [];
  if (isConfigured(siteConfig.discordInviteUrl))
    external.push({ label: "Discord", href: siteConfig.discordInviteUrl });
  if (isConfigured(siteConfig.githubUrl))
    external.push({ label: "GitHub", href: siteConfig.githubUrl });

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {siteConfig.tagline}
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {siteConfig.taglineId}
          </p>
        </div>

        <FooterColumn title="Product">
          <FooterLink to="/features">Features</FooterLink>
          <FooterLink to="/commands">Commands</FooterLink>
          <FooterLink to="/status">Status</FooterLink>
        </FooterColumn>

        <FooterColumn title="Resources">
          <FooterLink to="/docs">Documentation</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/docs" hash="faq">
            Support
          </FooterLink>
          {isConfigured(siteConfig.supportEmail) ? (
            <a
              className="text-sm text-muted-foreground hover:text-foreground"
              href={`mailto:${siteConfig.supportEmail}`}
            >
              Contact
            </a>
          ) : (
            <span className="text-sm text-muted-foreground/60">
              Contact — belum dikonfigurasi
            </span>
          )}
        </FooterColumn>

        <FooterColumn title="Community">
          <span className="text-sm text-muted-foreground">Teras Bernalar</span>
          {external.length > 0 ? (
            external.map((item) => (
              <a
                key={item.label}
                className="text-sm text-muted-foreground hover:text-foreground"
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {item.label}
              </a>
            ))
          ) : (
            <span className="text-sm text-muted-foreground/60">
              Tautan komunitas belum dikonfigurasi
            </span>
          )}
        </FooterColumn>

        <FooterColumn title="Legal">
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/terms">Terms of Service</FooterLink>
        </FooterColumn>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} NalarCore / Teras Bernalar. All rights reserved.
          </p>
          <p>Not affiliated with Discord Inc.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  to,
  hash,
  children,
}: {
  to: "/features" | "/commands" | "/status" | "/docs" | "/about" | "/privacy" | "/terms";
  hash?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      hash={hash}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}
