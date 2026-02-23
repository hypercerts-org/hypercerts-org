"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const partners = [
  { href: "https://www.protocol.ai", img: "/img/protocollabs_logo.png", alt: "Protocol Labs" },
  { href: "https://www.optimism.io/", img: "/img/optimism_logo.png", alt: "Optimism" },
  { href: "https://octant.build/", img: "/img/octant_logo.png", alt: "Octant" },
  { href: "https://www.gitcoin.co/", img: "/img/gitcoin_logo.png", alt: "Gitcoin" },
  { href: "https://fundingthecommons.io/", img: "/img/fundingthecommons_logo.png", alt: "Funding the Commons" },
  { href: "https://www.opensource.observer/", img: "/img/opensourceobserver_logo.png", alt: "Open Source Observer" },
  { href: "https://www.raidguild.org/", img: "/img/raidguild_logo.webp", alt: "RaidGuild" },
  { href: "https://www.zuzalu.city/", img: "/img/zuzalu_logo.png", alt: "Zuzalu" },
  { href: "https://www.edgecity.live/", img: "/img/edgecity_logo.png", alt: "EdgeCity" },
  { href: "https://fabdaotw.github.io/", img: "/img/greensofa_logo.png", alt: "GreenSofa" },
];

const triplePartners = [...partners, ...partners, ...partners];

export default function PartnerLogos() {
  const rowRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

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

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
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
                width={120}
                height={40}
                className="grayscale object-contain max-w-[120px] max-h-[40px]"
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
