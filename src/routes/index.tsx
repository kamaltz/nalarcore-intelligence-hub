import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, MessageSquare, Cpu, Boxes, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/common/Section";
import { FeatureGrid } from "@/components/features/FeatureGrid";
import { FlowDiagram, StackDiagram } from "@/components/architecture/FlowDiagram";
import { LogoMark } from "@/components/brand/Logo";
import { siteConfig, isConfigured } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NalarCore — Intelligence at the Core of Conversation" },
      {
        name: "description",
        content:
          "NalarCore is an intelligent Discord companion built for the Teras Bernalar community ecosystem.",
      },
      { property: "og:title", content: "NalarCore — Intelligence at the Core of Conversation" },
      {
        property: "og:description",
        content:
          "Reasoning infrastructure for better communities: AI assistance, discussion support, and an agent-ready architecture.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const steps = [
  {
    title: "Member interacts",
    body: "Anggota Discord mengirim perintah, mention, atau permintaan yang didukung.",
    icon: MessageSquare,
  },
  {
    title: "NalarCore receives context",
    body: "NalarCore mengenali permintaan beserta konteks server yang relevan.",
    icon: Boxes,
  },
  {
    title: "Intelligence layer",
    body: "Permintaan diproses melalui layanan AI yang dikonfigurasi, dan ke depan melalui Hermes Agent.",
    icon: Cpu,
  },
  {
    title: "Response / Action",
    body: "NalarCore mengembalikan informasi yang berguna atau menjalankan aksi server yang terotorisasi.",
    icon: Shield,
  },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 core-glow" aria-hidden />
        <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
        <div className="container-page relative grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              Dibangun untuk ekosistem {siteConfig.community}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Reasoning Infrastructure for Better Communities.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              NalarCore adalah pendamping Discord yang cerdas untuk mendukung percakapan,
              penelusuran pengetahuan, alur kerja moderasi, dan aktivitas komunitas di dalam
              ekosistem Teras Bernalar.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {isConfigured(siteConfig.botInviteUrl) ? (
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={siteConfig.botInviteUrl} target="_blank" rel="noreferrer noopener">
                    Add to Discord
                    <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
                  </a>
                </Button>
              ) : (
                <Button size="lg" disabled className="bg-primary text-primary-foreground">
                  Add to Discord
                </Button>
              )}
              <Button asChild size="lg" variant="outline" className="border-border-strong bg-transparent">
                <Link to="/features">
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="mt-5 text-sm">
              <Link to="/docs" className="text-primary hover:underline">
                View Documentation →
              </Link>
            </p>
            {!isConfigured(siteConfig.botInviteUrl) ? (
              <p className="mt-3 text-xs text-muted-foreground">
                Tautan undangan bot akan aktif setelah dikonfigurasi oleh pengelola.
              </p>
            ) : null}
          </div>

          <HeroDiagram />
        </div>
      </section>

      <Section id="features">
        <SectionHeading
          eyebrow="Core features"
          title="Kemampuan inti NalarCore"
          description="Fokus pada dukungan diskusi yang jernih, akses informasi, dan operasional server — bukan sekadar chatbot."
        />
        <div className="mt-10">
          <FeatureGrid />
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <SectionHeading
          eyebrow="How it works"
          title="Empat langkah, satu alur yang jelas"
          description="Setiap permintaan melewati jalur yang dapat dijelaskan, sehingga perilaku bot mudah dipahami dan diaudit."
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="surface-panel relative p-6">
                <span className="text-xs font-mono text-primary">0{i + 1}</span>
                <Icon className="mt-3 h-5 w-5 text-primary" aria-hidden />
                <h3 className="mt-3 text-sm font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </Section>

      <Section id="architecture">
        <SectionHeading
          eyebrow="Hermes Agent architecture"
          title="Arsitektur hari ini dan yang direncanakan"
          description="NalarCore dirancang dengan arsitektur agent-ready. Integrasi Hermes akan memperluas kemampuannya untuk bernalar lintas tugas, memakai tool terotorisasi, dan mengoordinasikan alur kerja yang lebih kompleks."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="surface-panel p-6">
            <h3 className="text-sm font-semibold">Current</h3>
            <p className="mt-1 text-xs text-muted-foreground">Alur yang berjalan saat ini.</p>
            <div className="mt-5">
              <StackDiagram
                nodes={[
                  { label: "Discord", hint: "Pesan, perintah, dan interaksi anggota." },
                  { label: "NalarCore Bot", hint: "Menangani perintah dan konteks server." },
                  { label: "AI / API services", hint: "Layanan AI yang dikonfigurasi pengelola." },
                ]}
              />
            </div>
          </div>
          <div className="surface-panel p-6">
            <h3 className="text-sm font-semibold">Planned</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Belum tersedia — sedang dalam pengembangan.
            </p>
            <div className="mt-5">
              <StackDiagram
                nodes={[
                  { label: "Discord" },
                  { label: "NalarCore Bot" },
                  { label: "NalarCore API / Agent Gateway", tone: "planned" },
                  { label: "Hermes Agent", tone: "planned" },
                  { label: "LLM Provider", tone: "planned" },
                  { label: "Tools / Knowledge / External Services", tone: "planned" },
                ]}
              />
            </div>
          </div>
        </div>
        <p className="mt-6 rounded-xl border border-border bg-surface/40 p-4 text-sm leading-relaxed text-muted-foreground">
          NalarCore is designed with an agent-ready architecture. Hermes integration will extend its
          ability to reason across tasks, use authorized tools, and coordinate more complex
          workflows. Kemampuan agen otonom belum tersedia saat ini.
        </p>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Security & privacy by design"
          title="Izin eksplisit di setiap lapisan"
          description="Tool agen tidak dapat menjalankan aksi Discord yang privileged tanpa melewati lapisan izin. Kredensial hanya diproses di sisi server."
        />
        <div className="mt-10">
          <FlowDiagram
            nodes={[
              { label: "User" },
              { label: "Discord" },
              { label: "NalarCore" },
              { label: "Permission Layer" },
              { label: "Hermes Agent", tone: "planned" },
              { label: "Authorized Tools", tone: "planned" },
            ]}
          />
        </div>
      </Section>
    </>
  );
}

function HeroDiagram() {
  const lanes = [
    { label: "Discord messages", hint: "Pertanyaan & diskusi anggota" },
    { label: "NalarCore", hint: "Konteks server + perintah" },
    { label: "AI Agent", hint: "Hermes Agent — in development", planned: true },
    { label: "Knowledge / Tools", hint: "Ringkasan, rujukan, utilitas", planned: true },
  ];

  return (
    <div className="surface-panel relative p-6 sm:p-8" style={{ boxShadow: "var(--shadow-glow)" }}>
      <div className="flex items-center gap-3">
        <LogoMark className="h-7 w-7 text-primary" />
        <p className="text-sm font-medium">Request pipeline</p>
      </div>
      <div className="hairline my-5" aria-hidden />
      <ul className="flex flex-col gap-3">
        {lanes.map((lane, i) => (
          <li key={lane.label} className="flex items-start gap-3">
            <div className="flex flex-col items-center pt-1.5">
              <span
                className="h-2 w-2 rounded-full bg-primary"
                style={{ animation: `pulse-node 2.6s ease-in-out ${i * 0.35}s infinite` }}
                aria-hidden
              />
              {i < lanes.length - 1 ? (
                <span className="mt-1 h-9 w-px bg-border-strong" aria-hidden />
              ) : null}
            </div>
            <div className="flex-1 rounded-lg border border-border bg-background/40 px-3.5 py-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-medium">{lane.label}</p>
                {lane.planned ? (
                  <span className="rounded-full border border-warn/40 bg-warn/10 px-2 py-0.5 text-[10px] font-medium text-warn">
                    In Development
                  </span>
                ) : null}
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">{lane.hint}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
