import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { createFileRouteMetaHelper } from "@/lib/meta";
import { PageHeader, Section } from "@/components/common/Section";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { commandCategories, commands, type CommandCategory } from "@/data/commands";

export const Route = createFileRoute("/commands")({
  head: () =>
    createFileRouteMetaHelper({
      title: "Commands — NalarCore",
      description:
        "Direktori perintah NalarCore yang dapat dicari: AI, Knowledge, Discussion, Utility, Moderation, dan Community.",
      path: "/commands",
    }),
  component: CommandsPage,
});

type Filter = "All" | CommandCategory;

function CommandsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return commands.filter((command) => {
      const matchesCategory = filter === "All" || command.category === filter;
      const matchesQuery =
        q.length === 0 ||
        command.name.toLowerCase().includes(q) ||
        command.description.toLowerCase().includes(q) ||
        command.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, filter]);

  const filters: Filter[] = ["All", ...commandCategories];

  return (
    <>
      <PageHeader
        eyebrow="Commands"
        title="Direktori perintah NalarCore"
        description="Daftar perintah berikut adalah contoh/placeholder sampai diimplementasikan di bot. Gunakan pencarian dan filter kategori untuk menelusuri."
      />

      <Section>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari perintah, deskripsi, atau kategori…"
              aria-label="Cari perintah"
              className="pl-9"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  filter === item
                    ? "border-primary/50 bg-primary/15 text-primary"
                    : "border-border bg-surface/40 text-muted-foreground hover:text-foreground",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground" aria-live="polite">
          Menampilkan {filtered.length} dari {commands.length} perintah
        </p>

        {filtered.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-border bg-surface/30 p-10 text-center">
            <p className="text-sm font-medium text-foreground">Tidak ada perintah yang cocok</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Coba kata kunci lain atau atur ulang filter kategori.
            </p>
          </div>
        ) : (
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {filtered.map((command) => (
              <li key={command.name} className="surface-panel flex flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <code className="rounded-md bg-muted px-2 py-1 font-mono text-sm text-foreground">
                    {command.name}
                  </code>
                  <span className="rounded-full border border-border bg-background/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {command.category}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {command.description}
                </p>
                <div className="mt-auto space-y-2 text-xs">
                  <div>
                    <span className="text-muted-foreground">Contoh: </span>
                    <code className="font-mono text-foreground/90">{command.example}</code>
                  </div>
                  {command.permission ? (
                    <div>
                      <span className="text-muted-foreground">Izin: </span>
                      <span className="text-foreground/90">{command.permission}</span>
                    </div>
                  ) : null}
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-warn/40 bg-warn/10 px-2 py-0.5 text-[10px] font-medium text-warn">
                    {statusLabel(command.status)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}

function statusLabel(status: "example" | "available" | "planned"): string {
  switch (status) {
    case "available":
      return "Available";
    case "planned":
      return "Planned";
    default:
      return "Example — belum diimplementasikan";
  }
}
