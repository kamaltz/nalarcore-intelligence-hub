import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  MessagesSquare,
  Library,
  FileText,
  Wrench,
  ShieldCheck,
  Users,
  Network,
} from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  status?: "In Development" | "Planned";
}

export const features: Feature[] = [
  {
    title: "AI Assistant",
    description:
      "Membantu anggota bertanya, memahami topik, dan mengeksplorasi gagasan langsung di dalam Discord.",
    icon: Sparkles,
  },
  {
    title: "Discussion Companion",
    description:
      "Mendukung diskusi terstruktur dengan pemantik pertanyaan, ringkasan, konteks, dan perspektif alternatif.",
    icon: MessagesSquare,
  },
  {
    title: "Knowledge Support",
    description:
      "Membantu anggota menemukan dan memahami informasi yang relevan dengan percakapan yang sedang berjalan.",
    icon: Library,
  },
  {
    title: "Content Summarization",
    description:
      "Meringkas diskusi panjang, artikel, atau konten yang didukung menjadi penjelasan yang padat.",
    icon: FileText,
  },
  {
    title: "Community Utilities",
    description:
      "Menyediakan utilitas praktis bagi anggota server maupun moderator dalam aktivitas sehari-hari.",
    icon: Wrench,
  },
  {
    title: "Moderation Assistance",
    description:
      "Membantu alur kerja moderasi sambil memastikan keputusan akhir tetap berada di tangan moderator manusia.",
    icon: ShieldCheck,
  },
  {
    title: "Teras Bernalar Integration",
    description:
      "Dirancang khusus untuk mendukung ekosistem komunitas Teras Bernalar dan kebutuhan diskusinya.",
    icon: Users,
  },
  {
    title: "Hermes Agent Integration",
    description:
      "Arsitektur agen di masa depan untuk penalaran lebih lanjut, penggunaan tool, alur kerja, dan eksekusi tugas terotorisasi.",
    icon: Network,
    status: "In Development",
  },
];
