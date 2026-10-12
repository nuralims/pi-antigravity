/**
 * pi-antigravity root entry point.
 * Chains core provider + accounts management, google-search tool, and generate-image tool.
 */
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import antigravityCore from "./src/index.js";
import googleSearchFeature from "./src/features/google-search.js";
import generateImageFeature from "./src/features/generate-image.js";

export default function (pi: ExtensionAPI): void {
  antigravityCore(pi);
  googleSearchFeature(pi);
  generateImageFeature(pi);

  // Indonesian command aliases
  pi.registerCommand("antigravity.akun", {
    description: "Alias bahasa Indonesia untuk /antigravity.accounts",
    handler: async (args, ctx) => {
      const def = (pi as any).commands?.get?.("antigravity.accounts");
      if (def?.handler) return def.handler(args, ctx);
    },
  });

  pi.registerCommand("antigravity.kuota", {
    description: "Alias bahasa Indonesia untuk /antigravity.usage",
    handler: async (args, ctx) => {
      const def = (pi as any).commands?.get?.("antigravity.usage");
      if (def?.handler) return def.handler(args, ctx);
    },
  });
}
