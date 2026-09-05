export type CommandCategory =
  | "AI"
  | "Knowledge"
  | "Discussion"
  | "Utility"
  | "Moderation"
  | "Community";

export interface BotCommand {
  name: string;
  description: string;
  category: CommandCategory;
  example: string;
  permission?: string;
  /** Commands below are examples/placeholders until implemented in the bot. */
  status: "example" | "available" | "planned";
}

export const commandCategories: CommandCategory[] = [
  "AI",
  "Knowledge",
  "Discussion",
  "Utility",
  "Moderation",
  "Community",
];

export const commands: BotCommand[] = [
  {
    name: "/ask",
    description:
      "Ajukan pertanyaan kepada NalarCore dan dapatkan penjelasan yang ringkas serta kontekstual.",
    category: "AI",
    example: "/ask pertanyaan: Apa perbedaan induksi dan deduksi?",
    status: "example",
  },
  {
    name: "/explain",
    description:
      "Minta penjelasan bertahap atas sebuah konsep, istilah, atau argumen yang sedang dibahas.",
    category: "AI",
    example: "/explain topik: falsifiability",
    status: "example",
  },
  {
    name: "/summarize",
    description:
      "Ringkas konteks percakapan yang didukung menjadi poin-poin utama yang mudah dibaca.",
    category: "Knowledge",
    example: "/summarize jumlah_pesan: 50",
    permission: "Read Message History",
    status: "example",
  },
  {
    name: "/source",
    description:
      "Bantu menelusuri jenis rujukan atau sudut pandang yang relevan dengan diskusi berjalan.",
    category: "Knowledge",
    example: "/source topik: bias kognitif",
    status: "example",
  },
  {
    name: "/topic",
    description:
      "Hasilkan pemantik diskusi untuk kanal tertentu berdasarkan tema yang dipilih.",
    category: "Discussion",
    example: "/topic kategori: filsafat",
    status: "example",
  },
  {
    name: "/counterpoint",
    description:
      "Tawarkan perspektif alternatif atau sanggahan yang wajar terhadap sebuah argumen.",
    category: "Discussion",
    example: "/counterpoint argumen: <teks argumen>",
    status: "example",
  },
  {
    name: "/help",
    description: "Tampilkan daftar perintah yang tersedia beserta penjelasannya.",
    category: "Utility",
    example: "/help",
    status: "example",
  },
  {
    name: "/ping",
    description: "Periksa apakah NalarCore merespons di server ini.",
    category: "Utility",
    example: "/ping",
    status: "example",
  },
  {
    name: "/rules",
    description: "Tampilkan pedoman diskusi komunitas yang dikonfigurasi server.",
    category: "Community",
    example: "/rules",
    status: "example",
  },
  {
    name: "/intro",
    description:
      "Bantu anggota baru memperkenalkan diri dengan format yang konsisten.",
    category: "Community",
    example: "/intro minat: psikologi, sains",
    status: "example",
  },
  {
    name: "/review",
    description:
      "Bantu moderator meninjau sebuah pesan yang dilaporkan; keputusan akhir tetap pada moderator manusia.",
    category: "Moderation",
    example: "/review pesan_id: 1234567890",
    permission: "Manage Messages",
    status: "example",
  },
  {
    name: "/modnote",
    description:
      "Catat ringkasan tindakan moderasi pada kanal internal moderator.",
    category: "Moderation",
    example: "/modnote catatan: peringatan pertama",
    permission: "Manage Messages",
    status: "example",
  },
];
