import { createFileRoute } from "@tanstack/react-router";
import { createFileRouteMetaHelper } from "@/lib/meta";
import { PageHeader, Section } from "@/components/common/Section";
import { StatusBadge, type StatusTone } from "@/components/common/StatusBadge";
import { siteConfig, isConfigured } from "@/config/site";

export const Route = createFileRoute("/status")({
  head: () =>
    createFileRouteMetaHelper({
      title: "Status — NalarCore",
      description:
        "Status komponen NalarCore: bot Discord, gateway, API, penyedia AI, Hermes Agent, dan database.",
      path: "/status",
    }),
  component: StatusPage,
});

interface Component {
  name: string;
  description: string;
  tone: StatusTone;
  label: string;
}

const components: Component[] = [
  {
    name: "NalarCore Bot",
    description: "Proses bot yang menerima perintah dan interaksi dari Discord.",
    tone: "development",
    label: "In Development",
  },
  {
    name: "Discord Gateway",
    description: "Koneksi real-time ke Discord Gateway untuk event server.",
    tone: "development",
    label: "In Development",
  },
  {
    name: "NalarCore API",
    description: "API / Agent Gateway internal untuk layanan NalarCore.",
    tone: "development",
    label: "In Development",
  },
  {
    name: "AI Provider",
    description: "Penyedia LLM yang dikonfigurasi pengelola untuk fitur AI.",
    tone: "unconfigured",
    label: "Configurable",
  },
  {
    name: "Hermes Agent",
    description: "Arsitektur agen untuk penalaran lintas tugas dan penggunaan tool.",
    tone: "planned",
    label: "In Development",
  },
  {
    name: "Database",
    description: "Lapisan penyimpanan opsional (mis. Supabase) bila diperlukan.",
    tone: "unconfigured",
    label: "Not Configured",
  },
];

function StatusPage() {
  const monitoringConfigured = isConfigured(siteConfig.apiBaseUrl);

  return (
    <>
      <PageHeader
        eyebrow="Status"
        title="Status komponen NalarCore"
        description="Halaman ini menampilkan status setiap komponen. Pemantauan otomatis akan terhubung setelah NalarCore API tersedia."
      />

      <Section>
        <div
          className="surface-panel flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
          role="status"
        >
          <div>
            <p className="text-sm font-semibold">Ringkasan</p>
            <p className="mt-1 text-sm text-muted-foreground">
              NalarCore sedang dalam pengembangan aktif. Status di bawah bersifat indikatif.
            </p>
          </div>
          <StatusBadge tone="development" label="In Development" />
        </div>

        <ul className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border">
          {components.map((component) => (
            <li
              key={component.name}
              className="flex flex-col gap-3 bg-surface/30 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="text-sm font-semibold">{component.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{component.description}</p>
              </div>
              <StatusBadge tone={component.tone} label={component.label} className="shrink-0" />
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl border border-border bg-surface/40 p-5 text-sm leading-relaxed text-muted-foreground">
          {monitoringConfigured ? (
            <p>
              Endpoint pemantauan dikonfigurasi. Data status real-time akan ditarik dari{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                {siteConfig.apiBaseUrl}
              </code>
              .
            </p>
          ) : (
            <p>
              Pemantauan otomatis belum dikonfigurasi. Tidak ada persentase uptime atau riwayat
              insiden yang ditampilkan sampai API monitoring resmi terhubung.
            </p>
          )}
        </div>
      </Section>
    </>
  );
}
