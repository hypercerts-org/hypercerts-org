"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { partners } from "@/lib/data/partners";

const triplePartners = [...partners, ...partners, ...partners];

export default function PartnerLogos() {
  const rowRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    // Observe visibility
    const container = row.parentElement;
    if (container) {
      const reducedMotionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

      const startLoop = () => {
        if (reducedMotionMq.matches) return; // respect reduced-motion preference
        if (rafRef.current !== null) return; // already running
        const animate = () => {
          offsetRef.current += 0.5;
          const totalWidth = row.scrollWidth;
          const oneThird = totalWidth / 3;
          if (offsetRef.current >= oneThird) {
            offsetRef.current = 0;
          }
          row.style.transform = `translateX(-${offsetRef.current}px)`;
          rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
      };

      const stopLoop = () => {
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      };

      const handleReducedMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          stopLoop();
        } else if (visibleRef.current && document.visibilityState === "visible") {
          startLoop();
        }
      };

      reducedMotionMq.addEventListener("change", handleReducedMotionChange);

      const observer = new IntersectionObserver(
        ([entry]) => {
          visibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting && document.visibilityState === "visible") {
            startLoop();
          } else {
            stopLoop();
          }
        },
        { threshold: 0 }
      );
      observer.observe(container);

      const handleVisibilityChange = () => {
        if (document.visibilityState === "hidden") {
          stopLoop();
        } else if (visibleRef.current) {
          startLoop();
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      // Start immediately if visible and motion is not reduced
      if (visibleRef.current && document.visibilityState === "visible") {
        startLoop();
      }

      return () => {
        observer.disconnect();
        document.removeEventListener("visibilitychange", handleVisibilityChange);
        reducedMotionMq.removeEventListener("change", handleReducedMotionChange);
        stopLoop();
      };
    }
  }, []);

  return (
    <div className="w-full bg-brand-white">
      {/* Top separator */}
      <div className="h-px bg-ui-separator" />

      <div className="w-full h-[50px] bg-brand-white overflow-hidden relative">
        <div
          ref={rowRef}
          className="absolute flex flex-row top-0 left-0"
        >
          {triplePartners.map((partner, index) => (
            <a
              key={index}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[150px] h-[50px] flex items-center justify-center bg-brand-white shrink-0 transition-transform duration-200 ease-in-out hover:scale-110"
            >
              <Image
                src={partner.img}
                alt={partner.alt}
                sizes="120px"
                width={120}
                height={40}
                className={`grayscale object-contain max-w-[120px] max-h-[40px]${partner.invert ? " invert" : ""}`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-px bg-ui-separator" />
    </div>
  );
}
