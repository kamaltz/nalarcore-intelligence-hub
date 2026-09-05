import { createFileRoute, Link } from "@tanstack/react-router";
import { createFileRouteMetaHelper } from "@/lib/meta";
import { PageHeader, Section, SectionHeading } from "@/components/common/Section";
import { FeatureGrid } from "@/components/features/FeatureGrid";
import { FlowDiagram } from "@/components/architecture/FlowDiagram";

export const Route = createFileRoute("/features")({
  head: () =>
    createFileRouteMetaHelper({
      title: "Features — NalarCore",
      description:
        "Fitur inti NalarCore: AI assistant, pendamping diskusi, dukungan pengetahuan, ringkasan konten, utilitas komunitas, dan bantuan moderasi.",
      path: "/features",
    }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Kemampuan yang dirancang untuk diskusi bernalar"
        description="NalarCore membantu anggota memahami topik, meringkas percakapan, dan menjaga kualitas diskusi — dengan kontrol manusia tetap di depan."
      />
      <Section>
        <FeatureGrid />
      </Section>
      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Alur permintaan"
          title="Dari pesan Discord ke jawaban yang berguna"
        />
        <div className="mt-8">
          <FlowDiagram
            nodes={[
              { label: "Member interacts", hint: "Perintah, mention, atau permintaan." },
              { label: "Context", hint: "Konteks kanal & server yang relevan." },
              { label: "Intelligence layer", hint: "Layanan AI terkonfigurasi." },
              { label: "Response / Action", hint: "Jawaban atau aksi terotorisasi." },
            ]}
          />
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Ingin melihat perintahnya?{" "}
          <Link to="/commands" className="text-primary hover:underline">
            Buka direktori perintah →
          </Link>
        </p>
      </Section>
    </>
  );
}
