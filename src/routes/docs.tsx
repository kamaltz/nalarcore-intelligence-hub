import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { createFileRouteMetaHelper } from "@/lib/meta";
import { PageHeader, Section } from "@/components/common/Section";
import { siteConfig, isConfigured } from "@/config/site";

export const Route = createFileRoute("/docs")({
  head: () =>
    createFileRouteMetaHelper({
      title: "Documentation — NalarCore",
      description:
        "Dokumentasi NalarCore: memulai, menambahkan bot, izin, perintah, fitur AI, privasi, keamanan, integrasi Hermes, dan FAQ.",
      path: "/docs",
    }),
  component: DocsPage,
});

interface DocSection {
  id: string;
  title: string;
  body: ReactNode;
}

function DocsPage() {
  const supportEmail = isConfigured(siteConfig.supportEmail) ? siteConfig.supportEmail : null;
  const discord = isConfigured(siteConfig.discordInviteUrl) ? siteConfig.discordInviteUrl : null;

  const sections: DocSection[] = [
    {
      id: "getting-started",
      title: "Getting Started",
      body: (
        <>
          <p>
            NalarCore adalah pendamping Discord untuk ekosistem Teras Bernalar. Dokumentasi ini
            menjelaskan cara kerja, cara menambahkannya, dan bagaimana arsitekturnya disiapkan untuk
            integrasi Hermes Agent di masa depan.
          </p>
          <p>
            Proyek ini berada pada tahap awal. Fitur yang belum tersedia ditandai sebagai{" "}
            <span className="text-warn">In Development</span> atau{" "}
            <span className="text-warn">Planned</span>.
          </p>
        </>
      ),
    },
    {
      id: "introduction",
      title: "Introduction",
      body: (
        <>
          <p>Alur permintaan NalarCore mengikuti empat langkah yang dapat dijelaskan:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Anggota mengirim perintah, mention, atau permintaan yang didukung.</li>
            <li>NalarCore mengenali permintaan beserta konteks server yang relevan.</li>
            <li>Permintaan diproses melalui layanan AI yang dikonfigurasi.</li>
            <li>
              NalarCore mengembalikan informasi atau menjalankan aksi server yang terotorisasi.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: "adding-nalarcore",
      title: "Adding NalarCore",
      body: (
        <>
          <p>
            Tautan undangan bot akan aktif setelah dikonfigurasi oleh pengelola melalui variabel
            lingkungan{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">VITE_BOT_INVITE_URL</code>.
          </p>
          <p>
            Setelah tersedia, tombol <span className="text-foreground">Add to Discord</span> di
            navigasi akan mengarah ke alur otorisasi Discord dengan scope dan izin seminimal
            mungkin.
          </p>
        </>
      ),
    },
    {
      id: "permissions",
      title: "Permissions",
      body: (
        <>
          <p>
            NalarCore mengikuti prinsip <span className="text-foreground">least privilege</span>.
            Bot hanya meminta izin yang benar-benar diperlukan oleh fitur yang diaktifkan, misalnya:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Read Message History</code> —
              untuk fitur ringkasan percakapan.
            </li>
            <li>
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Manage Messages</code> —
              hanya untuk alur bantuan moderasi, dengan keputusan akhir pada moderator manusia.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "commands",
      title: "Commands",
      body: (
        <p>
          Daftar perintah lengkap tersedia di{" "}
          <Link to="/commands" className="text-primary hover:underline">
            direktori perintah
          </Link>
          . Perintah saat ini bersifat contoh/placeholder sampai diimplementasikan di bot.
        </p>
      ),
    },
    {
      id: "ai-features",
      title: "AI Features",
      body: (
        <>
          <p>
            Fitur AI menggunakan penyedia LLM yang dikonfigurasi pengelola di sisi server. Kunci API
            dan kredensial tidak pernah berada di kode frontend.
          </p>
          <p>
            Respons AI dapat mengandung kesalahan. Pengguna disarankan memverifikasi informasi
            penting secara independen.
          </p>
        </>
      ),
    },
    {
      id: "privacy",
      title: "Privacy",
      body: (
        <p>
          Ringkasan praktik data ada di{" "}
          <Link to="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          . Cakupan pengumpulan data bergantung pada fitur yang diaktifkan dan wajib ditinjau
          pengembang sebelum peluncuran publik.
        </p>
      ),
    },
    {
      id: "security",
      title: "Security",
      body: (
        <>
          <p>Arsitektur NalarCore menerapkan batas backend yang jelas untuk:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Discord Bot</li>
            <li>Hermes Agent</li>
            <li>LLM provider</li>
            <li>database</li>
          </ul>
          <p>
            Semua konfigurasi sensitif dibaca dari variabel lingkungan sisi server. Tidak ada token
            bot, kunci API, atau rahasia OAuth yang dikirim ke klien.
          </p>
        </>
      ),
    },
    {
      id: "hermes-integration",
      title: "Hermes Integration",
      body: (
        <>
          <p>
            NalarCore dirancang dengan arsitektur{" "}
            <span className="text-foreground">agent-ready</span>. Alur yang direncanakan (belum
            tersedia):
          </p>
          <p className="rounded-lg border border-dashed border-warn/40 bg-warn/10 p-3 font-mono text-xs text-warn">
            Discord → NalarCore Bot → NalarCore API / Agent Gateway → Hermes Agent → LLM Provider →
            Tools / Knowledge / External Services
          </p>
          <p>
            Integrasi Hermes akan memperluas kemampuan NalarCore untuk bernalar lintas tugas,
            memakai tool terotorisasi, dan mengoordinasikan alur kerja yang lebih kompleks — dengan
            model izin tool eksplisit sehingga tool agen tidak dapat menjalankan aksi Discord yang
            privileged tanpa otorisasi. Detail kredensial dan infrastruktur sensitif tidak
            didokumentasikan di sini.
          </p>
        </>
      ),
    },
    {
      id: "faq",
      title: "FAQ",
      body: (
        <dl className="space-y-4">
          <div>
            <dt className="font-medium text-foreground">Apakah Hermes Agent sudah aktif?</dt>
            <dd className="mt-1">
              Belum. Hermes Agent masih dalam pengembangan dan belum terintegrasi.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Apakah NalarCore menyimpan pesan saya?</dt>
            <dd className="mt-1">
              Konten pesan hanya diproses bila diperlukan untuk fitur yang Anda minta. Lihat Privacy
              Policy untuk detail.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Bagaimana cara melaporkan masalah?</dt>
            <dd className="mt-1">
              {supportEmail ? (
                <a className="text-primary hover:underline" href={`mailto:${supportEmail}`}>
                  {supportEmail}
                </a>
              ) : discord ? (
                <a
                  className="text-primary hover:underline"
                  href={discord}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Melalui server Discord komunitas
                </a>
              ) : (
                <span>Kanal dukungan akan diumumkan setelah dikonfigurasi.</span>
              )}
            </dd>
          </div>
        </dl>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Documentation"
        title="Dokumentasi NalarCore"
        description="Panduan tingkat tinggi tentang cara kerja NalarCore, cara menambahkannya, serta arsitektur keamanan dan integrasi Hermes."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <nav aria-label="Navigasi dokumentasi" className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Getting Started
            </p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 space-y-12">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
