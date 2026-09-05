import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  Bot,
  Boxes,
  Cpu,
  FileClock,
  Gauge,
  Library,
  Settings,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { createFileRouteMetaHelper } from "@/lib/meta";
import { PageHeader, Section } from "@/components/common/Section";
import { StatusBadge, type StatusTone } from "@/components/common/StatusBadge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  head: () =>
    createFileRouteMetaHelper({
      title: "Dashboard (Beta) — NalarCore",
      description:
        "Fondasi UI dashboard NalarCore. Autentikasi dan backend belum diimplementasikan.",
      path: "/dashboard",
      noindex: true,
    }),
  component: DashboardPage,
});

type SectionId =
  | "overview"
  | "server"
  | "ai"
  | "commands"
  | "knowledge"
  | "agent"
  | "moderation"
  | "logs"
  | "settings";

const nav: { id: SectionId; label: string; icon: LucideIcon }[] = [
  { id: "overview", label: "Overview", icon: Gauge },
  { id: "server", label: "Server", icon: Boxes },
  { id: "ai", label: "AI Settings", icon: Cpu },
  { id: "commands", label: "Commands", icon: Terminal },
  { id: "knowledge", label: "Knowledge", icon: Library },
  { id: "agent", label: "Agent", icon: Bot },
  { id: "moderation", label: "Moderation", icon: ShieldCheck },
  { id: "logs", label: "Logs", icon: FileClock },
  { id: "settings", label: "Settings", icon: Settings },
];

function DashboardPage() {
  const [active, setActive] = useState<SectionId>("overview");

  return (
    <>
      <PageHeader
        eyebrow="Dashboard"
        title="Panel kontrol NalarCore"
        description="Ini adalah fondasi antarmuka. Autentikasi Discord OAuth2 dan backend belum diimplementasikan — data di bawah bersifat placeholder."
      >
        <StatusBadge tone="development" label="Beta — UI foundation only" />
      </PageHeader>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <nav aria-label="Navigasi dashboard" className="lg:sticky lg:top-24 lg:self-start">
            <ul className="flex gap-1 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {nav.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;
                return (
                  <li key={item.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setActive(item.id)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                        isActive
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                      )}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="min-w-0">
            {active === "overview" ? <Overview /> : null}
            {active === "agent" ? <AgentSection /> : null}
            {active !== "overview" && active !== "agent" ? (
              <PlaceholderPanel title={nav.find((n) => n.id === active)?.label ?? ""} />
            ) : null}
          </div>
        </div>
      </Section>
    </>
  );
}

function Overview() {
  const cards: { label: string; tone: StatusTone; status: string }[] = [
    { label: "Server", tone: "unconfigured", status: "Not Connected" },
    { label: "NalarCore Bot", tone: "development", status: "In Development" },
    { label: "AI", tone: "unconfigured", status: "Not Configured" },
    { label: "Hermes Agent", tone: "planned", status: "In Development" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="surface-panel p-5">
            <p className="text-xs text-muted-foreground">{card.label}</p>
            <div className="mt-3">
              <StatusBadge tone={card.tone} label={card.status} />
            </div>
          </div>
        ))}
      </div>

      <div className="surface-panel p-6">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" aria-hidden />
          <h2 className="text-sm font-semibold">Recent activity</h2>
        </div>
        <div className="mt-5 rounded-lg border border-dashed border-border bg-background/40 p-8 text-center">
          <p className="text-sm font-medium text-foreground">Belum ada aktivitas</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Log aktivitas akan muncul di sini setelah NalarCore API terhubung.
          </p>
        </div>
      </div>
    </div>
  );
}

function AgentSection() {
  const fields = [
    { label: "Agent Endpoint", hint: "URL Agent Gateway (dibaca sisi server)." },
    { label: "Model Provider", hint: "Penyedia LLM yang digunakan Hermes Agent." },
    { label: "Tool Permissions", hint: "Daftar tool yang diizinkan beserta cakupannya." },
    { label: "Knowledge Sources", hint: "Sumber pengetahuan yang dapat diakses agen." },
    { label: "Memory Configuration", hint: "Kebijakan memori jangka pendek/panjang." },
  ];

  return (
    <div className="space-y-6">
      <div className="surface-panel flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold">Hermes Agent</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Konfigurasi agen belum aktif. Semua nilai sensitif akan ditangani di sisi server.
          </p>
        </div>
        <StatusBadge tone="planned" label="Not Connected / In Development" />
      </div>

      <div className="surface-panel divide-y divide-border p-0">
        {fields.map((field) => (
          <div
            key={field.label}
            className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-medium text-foreground">{field.label}</p>
              <p className="text-sm text-muted-foreground">{field.hint}</p>
            </div>
            <span className="shrink-0 rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground">
              Placeholder
            </span>
          </div>
        ))}
      </div>

      <p className="rounded-xl border border-border bg-surface/40 p-4 text-sm leading-relaxed text-muted-foreground">
        Keamanan: token bot, kunci API, secret keys, OAuth secrets, dan kredensial Hermes tidak
        pernah ditampilkan atau disimpan di klien. Konfigurasi sensitif ditangani server-side.
      </p>
    </div>
  );
}

function PlaceholderPanel({ title }: { title: string }) {
  return (
    <div className="surface-panel p-6">
      <h2 className="text-sm font-semibold">{title}</h2>
      <div className="mt-5 rounded-lg border border-dashed border-border bg-background/40 p-10 text-center">
        <p className="text-sm font-medium text-foreground">Bagian ini belum tersedia</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Antarmuka {title} akan diaktifkan setelah autentikasi dan backend NalarCore
          diimplementasikan.
        </p>
      </div>
    </div>
  );
}
