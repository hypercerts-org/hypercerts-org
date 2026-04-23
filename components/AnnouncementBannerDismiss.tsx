"use client";

import { useEffect } from "react";

export default function AnnouncementBannerDismiss({
  bannerId: id,
}: {
  bannerId: string;
}) {
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== `banner-dismissed-${id}`) return;
      if (e.newValue !== "true") return;
      document.documentElement.setAttribute("data-banner-hidden", "dismissed");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [id]);

  const dismiss = () => {
    try {
      document.cookie = `banner-dismissed-${id}=true; path=/; max-age=31536000; SameSite=Lax; Secure`;
    } catch {}
    try {
      localStorage.setItem(`banner-dismissed-${id}`, "true");
    } catch {}

    const status = document.getElementById("banner-status");
    if (status) status.textContent = "";

    const mainById = document.getElementById("main-content");
    if (!mainById && process.env.NODE_ENV !== "production") {
      console.warn(
        "[AnnouncementBanner] #main-content not found on this route; falling back to <main> or <body>."
      );
    }
    const focusTarget = mainById ?? document.querySelector("main") ?? document.body;
    (focusTarget as HTMLElement | null)?.focus?.({ preventScroll: true });

    requestAnimationFrame(() => {
      if (status) status.textContent = "Banner dismissed";
      requestAnimationFrame(() => {
        document.documentElement.setAttribute("data-banner-hidden", "dismissed");
      });
    });
  };

  return (
    <button
      type="button"
      onClick={dismiss}
      aria-label="Dismiss announcement"
      className="w-8 h-8 -m-1 inline-flex items-center justify-center rounded text-brand-navy hover:bg-brand-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/40 transition-colors motion-reduce:transition-none"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 4l8 8M12 4l-8 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
