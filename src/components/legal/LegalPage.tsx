import type { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { PageHeader, Section } from "@/components/common/Section";

export interface LegalSection {
  id: string;
  heading: string;
  body: ReactNode;
}

export function LegalPage({
  title,
  eyebrow,
  intro,
  effectiveDate,
  contactEmail,
  sections,
}: {
  title: string;
  eyebrow: string;
  intro: string;
  effectiveDate: string;
  contactEmail: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={intro} />

      <Section>
        <div
          className="mb-10 flex gap-3 rounded-xl border border-warn/40 bg-warn/10 p-4 text-sm leading-relaxed text-warn"
          role="note"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <p>
            Catatan untuk pengelola: dokumen hukum ini harus ditinjau dan diperbarui agar
            mencerminkan infrastruktur NalarCore yang sebenarnya, praktik pemrosesan data,
            yurisdiksi, serta penyedia pihak ketiga sebelum peluncuran publik.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <nav aria-label="Daftar isi" className="hidden lg:block">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Daftar isi
            </p>
            <ol className="mt-4 space-y-2 text-sm">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {index + 1}. {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div>
            <dl className="mb-8 grid gap-3 rounded-xl border border-border bg-surface/40 p-5 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-muted-foreground">Tanggal berlaku</dt>
                <dd className="mt-1 font-medium text-foreground">{effectiveDate}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Kontak</dt>
                <dd className="mt-1 font-medium text-foreground">{contactEmail}</dd>
              </div>
            </dl>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-lg font-semibold text-foreground">
                    {index + 1}. {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
