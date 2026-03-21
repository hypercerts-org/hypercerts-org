import Image from "next/image";

interface MediaItemProps {
  tags: string[];
  title: string;
  titleLink: string;
  authors: { name: string; link: string }[];
  image?: string;
  variant?: "featured" | "list";
}

export default function MediaItem({
  tags,
  title,
  titleLink,
  authors,
  image,
  variant = image ? "featured" : "list",
}: MediaItemProps) {
  if (variant === "featured") {
    return (
      <div className="bg-brand-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition">
        {image && (
          <div className="relative w-full aspect-video">
            <Image
              src={image}
              alt={title}
              sizes="(max-width: 768px) 100vw, 400px"
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-ui-grey-tag text-brand-black text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-md font-body font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-display text-[22px] md:text-[24px] leading-[1.2] tracking-[-0.02em] mb-2">
            <a
              href={titleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-black no-underline hover:text-brand-teal transition"
            >
              {title}
            </a>
          </h3>

          {/* Authors */}
          <p className="font-body text-body-sm text-ui-grey-dark">
            {authors.map((author, index) => (
              <span key={author.name}>
                {index > 0 && ", "}
                <a
                  href={author.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-brand-teal transition"
                >
                  {author.name}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    );
  }

  // List variant
  return (
    <div className="py-4 border-b border-ui-separator last:border-0">
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-ui-grey-tag text-brand-black text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-md font-body font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-display text-[22px] md:text-[24px] leading-[1.2] tracking-[-0.02em] mb-1">
        <a
          href={titleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-black no-underline hover:text-brand-teal transition"
        >
          {title}
        </a>
      </h3>

      {/* Authors */}
      <p className="font-body text-body-sm text-ui-grey-dark">
        {authors.map((author, index) => (
          <span key={author.name}>
            {index > 0 && ", "}
            <a
              href={author.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-brand-teal transition"
            >
              {author.name}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
}
