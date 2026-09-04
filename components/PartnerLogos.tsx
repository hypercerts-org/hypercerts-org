import Image from "next/image";
import { partners } from "@/lib/data/partners";

export default function PartnerLogos() {
  return (
    <nav
      aria-label="Hypercerts partners"
      className="overflow-x-auto border-y border-ui-separator bg-white"
    >
      <div className="flex w-max min-w-full justify-center">
        {partners.map((partner) => (
          <a
            key={partner.href}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[50px] w-[150px] shrink-0 items-center justify-center transition-opacity hover:opacity-70 focus-visible:-outline-offset-4"
          >
            <Image
              src={partner.img}
              alt={partner.alt}
              sizes="120px"
              width={120}
              height={40}
              className={`max-h-[40px] max-w-[120px] object-contain grayscale${partner.invert ? " invert" : ""}`}
            />
          </a>
        ))}
      </div>
    </nav>
  );
}
