import { announcementBanner as cfg } from "@/lib/data/announcementBanner";
import AnnouncementBannerDismiss from "./AnnouncementBannerDismiss";

const safeScriptJSON = (v: unknown) =>
  JSON.stringify(v)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

const parseExpiry = (v?: string): number | null => {
  if (!v) return null;
  const n = Date.parse(v);
  if (!Number.isFinite(n)) {
    console.warn(`[banner] invalid expiresAt: ${v}`);
    return null;
  }
  return n;
};

const buildPreHideScript = (id: string, exp: number | null) =>
  `(function(){try{var id=${safeScriptJSON(id)},exp=${
    Number.isFinite(exp as number) ? String(exp) : "null"
  };if(exp!==null&&Date.now()>=exp){document.documentElement.setAttribute("data-banner-hidden","expired");return;}if(new RegExp("(?:^|;\\\\s*)banner-dismissed-"+id+"=true").test(document.cookie)){document.documentElement.setAttribute("data-banner-hidden","dismissed");}}catch(e){}})()`;

// CSP note: this inline script requires script-src 'unsafe-inline' (or a nonce).
// If a strict CSP is added later, move the script to /public/banner-init.js,
// load it with integrity/nonce, and inject { id, expiresAt } via a <meta> tag.

export default function AnnouncementBanner() {
  if (!cfg.enabled) return null;
  const exp = parseExpiry(cfg.expiresAt);

  return (
    <>
      {/* Ordering invariant: this <script> must precede [data-banner-role="announcement"]
          in source order so it can set html[data-banner-hidden] before paint. */}
      <script
        dangerouslySetInnerHTML={{
          __html: buildPreHideScript(cfg.id, exp),
        }}
      />
      <aside
        aria-label="Site announcement"
        data-banner-role="announcement"
        data-banner-id={cfg.id}
        className="bg-surface-cream text-brand-black text-[0.84rem] leading-[1.5]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 px-6 py-2">
          <span className="hidden md:inline font-semibold opacity-75 text-[0.78rem] tracking-wide whitespace-nowrap">
            {cfg.date}
          </span>
          <span className="text-center min-w-0">
            <strong className="font-semibold">{cfg.title}</strong>
            {" — "}
            {cfg.description}{" "}
            <a
              href={cfg.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 font-medium whitespace-nowrap hover:opacity-80 visited:text-brand-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-cream focus-visible:ring-brand-navy"
            >
              {cfg.ctaText}
              {" "}
              <span aria-hidden="true">→</span>
            </a>
          </span>
          <AnnouncementBannerDismiss bannerId={cfg.id} />
        </div>
      </aside>
    </>
  );
}
