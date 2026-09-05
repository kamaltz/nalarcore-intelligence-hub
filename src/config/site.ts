/**
 * Centralised, non-secret configuration for NalarCore.
 *
 * Only public values belong here. Bot tokens, OAuth client secrets, LLM API
 * keys and Hermes credentials must NEVER appear in client code — they are read
 * server-side (server functions / API routes) from environment variables.
 *
 * Public build-time values may be supplied via `VITE_*` env vars.
 */

const env = import.meta.env as Record<string, string | undefined>;

export const siteConfig = {
  appName: "NalarCore",
  community: "Teras Bernalar",
  tagline: "Intelligence at the Core of Conversation.",
  taglineId: "Pendukung diskusi, informasi, dan komunitas Teras Bernalar.",
  description:
    "NalarCore is an intelligent Discord companion built for the Teras Bernalar community ecosystem.",

  /** Configure these when the infrastructure is ready. Empty = link hidden. */
  discordInviteUrl: env["VITE_DISCORD_INVITE_URL"] ?? "",
  botInviteUrl: env["VITE_BOT_INVITE_URL"] ?? "",
  supportEmail: env["VITE_SUPPORT_EMAIL"] ?? "",
  githubUrl: env["VITE_GITHUB_URL"] ?? "",
  /** Public base URL of the future NalarCore API / Agent Gateway. */
  apiBaseUrl: env["VITE_API_BASE_URL"] ?? "",
  /** Canonical public origin of this site, e.g. "https://nalarcore.example". Empty = use relative URLs. */
  siteUrl: env["VITE_SITE_URL"] ?? "",
} as const;

export const legalPlaceholders = {
  effectiveDate: "[EFFECTIVE DATE]",
  contactEmail: "[CONTACT EMAIL]",
} as const;

export function isConfigured(value: string | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export const currentYear = new Date().getFullYear();
