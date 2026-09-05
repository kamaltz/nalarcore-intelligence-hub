import { createFileRoute, Link } from "@tanstack/react-router";
import { createFileRouteMetaHelper } from "@/lib/meta";
import { PageHeader, Section, SectionHeading } from "@/components/common/Section";
import { LogoMark } from "@/components/brand/Logo";

export const Route = createFileRoute("/about")({
  head: () =>
    createFileRouteMetaHelper({
      title: "About — NalarCore",
      description:
        "NalarCore adalah lapisan intelijen teknologi untuk ekosistem Teras Bernalar: infrastruktur untuk diskusi komunitas, akses informasi, dan operasional server.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Lapisan penalaran teknologi untuk Teras Bernalar"
        description="NalarCore dikembangkan sebagai bagian dari ekosistem Teras Bernalar untuk menyediakan infrastruktur teknologi bagi diskusi komunitas, akses informasi, dan operasional server."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Teras Bernalar adalah komunitas diskusi dan berbagi pengetahuan berbahasa Indonesia
              yang berfokus pada percakapan yang reflektif, rasional, terbuka, dan berbasis bukti —
              melintasi topik seperti filsafat, psikologi, sains, teknologi, ekonomi, hukum &amp;
              politik, sosial &amp; budaya, kesehatan, literasi, sastra, dan pengembangan diri.
            </p>
            <p>
              NalarCore hadir sebagai sistem pendukung yang cerdas untuk server Discord komunitas:
              membantu anggota bertanya, meringkas diskusi, menemukan konteks, dan menjaga kualitas
              percakapan — dengan moderator manusia tetap memegang kendali.
            </p>
            <p>
              Ke depan, NalarCore dirancang untuk terintegrasi dengan arsitektur{" "}
              <span className="text-foreground">Hermes Agent</span>. Kemampuan agen yang lebih
              lanjut masih <span className="text-warn">dalam pengembangan</span> dan belum tersedia
              saat ini.
            </p>
          </div>

          <div className="surface-panel p-6">
            <div className="flex items-center gap-3">
              <LogoMark className="h-8 w-8 text-primary" />
              <p className="text-sm font-semibold">Arti nama</p>
            </div>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-foreground">Nalar</dt>
                <dd className="mt-1 text-muted-foreground">
                  Penalaran, pemikiran, dan eksplorasi intelektual.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Core</dt>
                <dd className="mt-1 text-muted-foreground">
                  Fondasi teknologi yang menopang komunitas.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">NalarCore</dt>
                <dd className="mt-1 text-muted-foreground">
                  Lapisan penalaran teknologi di inti ekosistem digital Teras Bernalar.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Prinsip"
          title="Dibangun sebagai infrastruktur komunitas terbuka tahap awal"
          description="Bukan korporasi yang sudah mapan — melainkan proyek infrastruktur komunitas yang kredibel dan berkembang secara bertahap."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <li key={item.title} className="surface-panel p-5">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">
          Built for Teras Bernalar. Pelajari lebih lanjut di{" "}
          <Link to="/docs" className="text-primary hover:underline">
            dokumentasi
          </Link>
          .
        </p>
      </Section>
    </>
  );
}

const principles = [
  {
    title: "Human-in-the-loop",
    body: "Aksi yang berdampak selalu melewati persetujuan manusia. Bot mendukung, bukan menggantikan moderator.",
  },
  {
    title: "Privacy by design",
    body: "Kredensial dan konfigurasi sensitif diproses di sisi server. Tidak ada rahasia di kode frontend.",
  },
  {
    title: "Transparan",
    body: "Tidak ada statistik, testimoni, atau klaim kemampuan yang dibuat-buat. Fitur yang belum ada ditandai jelas.",
  },
  {
    title: "Least privilege",
    body: "Izin bot dan scope OAuth diminta seperlunya. Tool agen tidak bisa menjalankan aksi privileged tanpa otorisasi.",
  },
  {
    title: "Agent-ready",
    body: "Arsitektur disiapkan untuk integrasi Hermes Agent tanpa perlu merombak keseluruhan aplikasi.",
  },
  {
    title: "Komunitas dulu",
    body: "Dirancang khusus untuk kebutuhan diskusi dan operasional ekosistem Teras Bernalar.",
  },
];
