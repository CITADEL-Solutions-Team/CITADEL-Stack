import type { EmailMessage } from "cloudflare:email";
import type { ExecutionContext } from "@cloudflare/workers-types";

interface Env {}

const RECIPIENTS: string[] = [
  "dylanjonclark+citadelsolutions@gmail.com",
  "tanisgeorgi+citadelsolutions@gmail.com",
];

export default {
  async email(message: EmailMessage, env: Env, ctx: ExecutionContext): Promise<void> {
    const results = await Promise.allSettled(
      RECIPIENTS.map((address) => message.forward(address))
    );

    for (const [i, result] of results.entries()) {
      if (result.status === "rejected") {
        console.error(`Failed to forward to ${RECIPIENTS[i]}:`, result.reason);
      }
    }
  },
};