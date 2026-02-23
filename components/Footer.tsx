import Link from "next/link";

const socialLinks = [
  {
    href: "https://twitter.com/hypercerts",
    icon: "/img/social-icons/x.svg",
    alt: "Twitter / X",
  },
  {
    href: "https://t.me/+FODiLtCV2TgwNzRi",
    icon: "/img/social-icons/support.svg",
    alt: "Support Telegram",
  },
  {
    href: "https://hypercerts.org",
    icon: "/img/hypercerts_logo_b_transparent.png",
    alt: "Hypercerts",
  },
  {
    href: "https://github.com/hypercerts-org",
    icon: "/img/social-icons/github.svg",
    alt: "GitHub",
  },
  {
    href: "https://t.me/+YF9AYb6zCv1mNDJi",
    icon: "/img/social-icons/telegram.svg",
    alt: "Telegram",
  },
];

export default function Footer() {
  return (
    <footer className="w-full py-10 flex flex-col items-center gap-4">
      {/* Social Icons Row */}
      <div className="flex items-center gap-5">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.alt}
            className="grayscale hover:grayscale-0 transition-all duration-200"
          >
            <img
              src={link.icon}
              alt={link.alt}
              width={30}
              height={30}
              className="w-[30px] h-[30px] object-contain"
            />
          </a>
        ))}
      </div>

      {/* Privacy / Terms */}
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <Link href="/privacy" className="hover:underline">
          Privacy policy
        </Link>
        <span>|</span>
        <Link href="/terms" className="hover:underline">
          Terms of use
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500">
        Copyright &copy; 2026 Hypercerts Foundation
      </p>
    </footer>
  );
}
