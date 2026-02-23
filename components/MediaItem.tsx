import Image from "next/image";

interface MediaItemProps {
  tags: string[];
  title: string;
  titleLink: string;
  authors: { name: string; link: string }[];
  image?: string;
}

export default function MediaItem({
  tags,
  title,
  titleLink,
  authors,
  image,
}: MediaItemProps) {
  return (
    <div>
      {image && (
        <div className="mb-4">
          <Image
            src={image}
            alt={title}
            width={800}
            height={450}
            className="w-full h-auto rounded-brand"
          />
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-ui-grey-tag text-xs rounded-lg px-2 py-0.5 font-body"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-display text-[28px] max-sm:text-[24px] leading-[1.2] tracking-[-0.02em] mb-1">
        <a
          href={titleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black no-underline hover:text-black"
        >
          {title}
        </a>
      </h3>

      {/* Authors */}
      <p className="font-body text-base font-medium text-black mb-4">
        {authors.map((author, index) => (
          <span key={author.name}>
            {index > 0 && ", "}
            <a
              href={author.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline hover:text-brand-teal"
            >
              {author.name}
            </a>
          </span>
        ))}
      </p>

      <hr className="border-ui-separator" />
    </div>
  );
}
