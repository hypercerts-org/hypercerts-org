import { initBotId } from "botid/client/core";

/* Vercel BotID runs an invisible check in the visitor's browser (no
   challenge, nothing to click) and attaches the result to requests to these
   paths. app/api/contact/route.ts reads it with checkBotId() and only sends
   the confirmation email to visitors who pass. */
initBotId({
  protect: [{ path: "/api/contact", method: "POST" }],
});
