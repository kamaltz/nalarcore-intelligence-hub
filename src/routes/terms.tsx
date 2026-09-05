import { createFileRoute } from "@tanstack/react-router";
import { createFileRouteMetaHelper } from "@/lib/meta";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { legalPlaceholders } from "@/config/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    createFileRouteMetaHelper({
      title: "Terms of Service — NalarCore",
      description:
        "Ketentuan penggunaan NalarCore: layanan Discord bot dan fitur AI untuk ekosistem Teras Bernalar.",
      path: "/terms",
    }),
  component: TermsPage,
});

const sections: LegalSection[] = [
  {
    id: "acceptance",
    heading: "Penerimaan Ketentuan",
    body: (
      <p>
        Dengan menambahkan, menggunakan, atau berinteraksi dengan NalarCore, Anda menyetujui
        Ketentuan Layanan ini. Jika Anda tidak setuju, jangan gunakan layanan.
      </p>
    ),
  },
  {
    id: "description",
    heading: "Deskripsi Layanan",
    body: (
      <p>
        NalarCore adalah bot Discord dengan fitur berbantuan AI yang mendukung diskusi, akses
        informasi, dan operasional server dalam ekosistem Teras Bernalar. Sebagian fitur masih dalam
        pengembangan dan dapat berubah.
      </p>
    ),
  },
  {
    id: "eligibility",
    heading: "Kelayakan",
    body: (
      <p>
        Anda harus memenuhi persyaratan usia minimum Discord dan hukum yang berlaku di yurisdiksi
        Anda untuk menggunakan layanan.
      </p>
    ),
  },
  {
    id: "discord-compliance",
    heading: "Kepatuhan Platform Discord",
    body: (
      <p>
        Penggunaan NalarCore harus mematuhi Persyaratan Layanan dan Pedoman Komunitas Discord.
        NalarCore tidak berafiliasi dengan Discord Inc.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    heading: "Penggunaan yang Dapat Diterima",
    body: (
      <>
        <p>Pengguna tidak boleh menggunakan NalarCore untuk:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>spam</li>
          <li>pelecehan</li>
          <li>aktivitas ilegal</li>
          <li>upaya mengeksploitasi bot</li>
          <li>menghindari mekanisme keamanan</li>
          <li>otomatisasi yang tidak sah</li>
          <li>penyalahgunaan fitur AI</li>
          <li>mengganggu komunitas Discord</li>
        </ul>
      </>
    ),
  },
  {
    id: "ai-content",
    heading: "Konten yang Dihasilkan AI",
    body: (
      <p>
        Respons yang dihasilkan AI dapat mengandung kesalahan. Pengguna harus memverifikasi
        informasi penting secara independen. NalarCore bukan pengganti nasihat profesional di bidang
        hukum, keuangan, atau medis.
      </p>
    ),
  },
  {
    id: "admin-responsibilities",
    heading: "Tanggung Jawab Administrator Server",
    body: (
      <p>
        Administrator server bertanggung jawab mengonfigurasi izin bot secara tepat, menetapkan
        fitur yang diaktifkan, dan menginformasikan anggota tentang penggunaan NalarCore di server
        mereka.
      </p>
    ),
  },
  {
    id: "availability",
    heading: "Ketersediaan Layanan",
    body: (
      <p>
        NalarCore dapat diperbarui, dihentikan sementara, dimodifikasi, atau dihentikan sepenuhnya
        kapan saja. Tidak ada jaminan uptime.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Kekayaan Intelektual",
    body: (
      <p>
        Nama, merek visual, dan materi NalarCore adalah milik proyek NalarCore / Teras Bernalar.
        Konten pihak ketiga tetap menjadi milik pemiliknya masing-masing.
      </p>
    ),
  },
  {
    id: "third-party",
    heading: "Layanan Pihak Ketiga",
    body: (
      <p>
        NalarCore bergantung pada layanan pihak ketiga yang dapat mencakup Discord, penyedia AI, dan
        penyedia hosting. Penggunaan layanan tersebut tunduk pada ketentuan masing-masing.
      </p>
    ),
  },
  {
    id: "liability",
    heading: "Batasan Tanggung Jawab",
    body: (
      <p>
        Sepanjang diizinkan oleh hukum yang berlaku, NalarCore dan kontributornya tidak bertanggung
        jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari
        penggunaan layanan. Ketentuan ini tidak secara otomatis memenuhi persyaratan setiap
        yurisdiksi.
      </p>
    ),
  },
  {
    id: "suspension",
    heading: "Penangguhan dan Penghentian",
    body: (
      <p>
        Akses ke NalarCore dapat ditangguhkan atau dihentikan jika terjadi pelanggaran ketentuan
        ini, penyalahgunaan, atau risiko terhadap keamanan dan keandalan layanan.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Perubahan Ketentuan",
    body: (
      <p>
        Ketentuan ini dapat diperbarui. Perubahan material akan diinformasikan melalui kanal resmi
        NalarCore, dan tanggal berlaku di atas akan diperbarui.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Kontak",
    body: (
      <p>Pertanyaan tentang ketentuan ini dapat dikirim ke {legalPlaceholders.contactEmail}.</p>
    ),
  },
];

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="Ketentuan ini mengatur penggunaan NalarCore — bot Discord dan fitur AI untuk ekosistem Teras Bernalar."
      effectiveDate={legalPlaceholders.effectiveDate}
      contactEmail={legalPlaceholders.contactEmail}
      sections={sections}
    />
  );
}
