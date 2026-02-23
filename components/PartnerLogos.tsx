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
    <div
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        ref={rowRef}
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          top: 0,
          left: 0,
        }}
      >
        {triplePartners.map((partner, index) => (
          <a
            key={index}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "150px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #000000",
              flexShrink: 0,
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            }}
          >
            <Image
              src={partner.img}
              alt={partner.alt}
              width={120}
              height={40}
              style={{
                filter: "grayscale(100%)",
                objectFit: "contain",
                maxWidth: "120px",
                maxHeight: "40px",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
