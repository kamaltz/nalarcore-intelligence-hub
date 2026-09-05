import { createFileRoute } from "@tanstack/react-router";
import { createFileRouteMetaHelper } from "@/lib/meta";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { legalPlaceholders } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    createFileRouteMetaHelper({
      title: "Privacy Policy — NalarCore",
      description:
        "Bagaimana NalarCore menangani informasi saat pengguna berinteraksi dengan bot, situs web, dan layanan terkait.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

const sections: LegalSection[] = [
  {
    id: "introduction",
    heading: "Pendahuluan",
    body: (
      <p>
        Kebijakan Privasi ini menjelaskan bagaimana NalarCore menangani informasi ketika pengguna
        berinteraksi dengan bot, situs web, dan layanan terkait. Cakupan pengumpulan data yang
        sebenarnya bergantung pada fitur yang diaktifkan oleh pengelola server dan pengembang.
      </p>
    ),
  },
  {
    id: "information-we-process",
    heading: "Informasi yang Diproses",
    body: (
      <>
        <p>Bergantung pada fitur yang diaktifkan, informasi berikut mungkin diproses:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Discord User ID</li>
          <li>Discord Server/Guild ID</li>
          <li>Channel ID</li>
          <li>Konten pesan hanya bila diperlukan untuk memproses fitur bot yang diminta</li>
          <li>Perintah dan interaksi yang dikirim langsung ke NalarCore</li>
          <li>Log teknis yang diperlukan untuk keamanan, keandalan, dan debugging</li>
        </ul>
        <p>
          Pengumpulan yang sebenarnya bergantung pada fitur yang diaktifkan. Jika sebuah fitur tidak
          digunakan, data terkait fitur tersebut tidak diproses.
        </p>
      </>
    ),
  },
  {
    id: "how-information-is-used",
    heading: "Bagaimana Informasi Digunakan",
    body: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Merespons perintah</li>
        <li>Menyediakan fitur AI</li>
        <li>Menjaga keandalan layanan</li>
        <li>Mencegah penyalahgunaan</li>
        <li>Debugging</li>
        <li>Meningkatkan fungsionalitas layanan</li>
      </ul>
    ),
  },
  {
    id: "ai-processing",
    heading: "Pemrosesan AI",
    body: (
      <p>
        Konten yang dikirim ke fitur berbasis AI dapat diproses oleh penyedia AI/LLM yang
        dikonfigurasi. Kami tidak mengklaim retensi nol pada penyedia tersebut kecuali hal itu
        dijamin secara teknis. Praktik retensi penyedia mengikuti ketentuan masing-masing.
      </p>
    ),
  },
  {
    id: "data-retention",
    heading: "Retensi Data",
    body: (
      <p>
        Periode retensi dibatasi seperlunya untuk mengoperasikan dan mengamankan layanan.{" "}
        <span className="text-foreground">
          [PENGEMBANG: tentukan periode retensi spesifik untuk setiap jenis data — mis. log 30 hari,
          konteks percakapan sementara, dsb.]
        </span>
      </p>
    ),
  },
  {
    id: "data-sharing",
    heading: "Pembagian Data",
    body: (
      <p>
        Informasi tidak dijual. Data dapat diproses oleh penyedia infrastruktur atau penyedia AI
        yang diperlukan untuk mengoperasikan NalarCore, sesuai dengan tujuan yang dijelaskan dalam
        kebijakan ini.
      </p>
    ),
  },
  {
    id: "discord",
    heading: "Discord",
    body: (
      <p>
        NalarCore berjalan di atas platform Discord. Discord beroperasi di bawah kebijakan privasi
        dan ketentuan layanannya sendiri, yang berada di luar kendali NalarCore.
      </p>
    ),
  },
  {
    id: "security",
    heading: "Keamanan",
    body: (
      <p>
        Kami menerapkan langkah teknis dan organisasi yang wajar untuk melindungi informasi,
        termasuk pemrosesan kredensial hanya di sisi server. Tidak ada sistem yang dapat menjamin
        keamanan mutlak.
      </p>
    ),
  },
  {
    id: "user-choices",
    heading: "Pilihan Pengguna dan Permintaan Data",
    body: (
      <p>
        Pengguna dapat mengajukan permintaan akses, koreksi, atau penghapusan data.{" "}
        <span className="text-foreground">
          [PENGEMBANG: sediakan mekanisme resmi — mis. alamat email privasi atau formulir — sebelum
          peluncuran publik.]
        </span>
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    heading: "Privasi Anak",
    body: (
      <p>
        NalarCore ditujukan untuk digunakan sesuai persyaratan usia minimum platform Discord dan
        hukum yang berlaku di yurisdiksi pengguna. Kami tidak secara sengaja memproses data dari
        pengguna yang berada di bawah usia yang diizinkan oleh ketentuan tersebut.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Perubahan Kebijakan Ini",
    body: (
      <p>
        Kebijakan ini dapat diperbarui dari waktu ke waktu. Perubahan material akan diinformasikan
        melalui kanal komunikasi resmi NalarCore, dan tanggal berlaku di atas akan diperbarui.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Kontak",
    body: (
      <p>Pertanyaan tentang kebijakan ini dapat dikirim ke {legalPlaceholders.contactEmail}.</p>
    ),
  },
];

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Kebijakan ini menjelaskan bagaimana NalarCore menangani informasi saat Anda berinteraksi dengan bot, situs web, dan layanan terkait."
      effectiveDate={legalPlaceholders.effectiveDate}
      contactEmail={legalPlaceholders.contactEmail}
      sections={sections}
    />
  );
}
