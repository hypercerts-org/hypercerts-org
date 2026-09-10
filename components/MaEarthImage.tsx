import Image from "next/image";

export default function MaEarthImage({
  priority = false,
}: {
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden rounded-brand">
        <Image
          src="/img/case-studies/ma-earth-community.webp"
          alt="Community members tending rows of crops together"
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
          priority={priority}
        />
      </div>
      <figcaption className="mt-3 font-body text-body-sm leading-relaxed text-ui-grey-dark">
        Community-led regeneration. Image:{" "}
        <a
          href="https://www.maearth.com/"
          className="underline underline-offset-4"
        >
          Ma Earth
        </a>
        .
      </figcaption>
    </figure>
  );
}
