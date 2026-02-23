import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="font-display text-display-1 max-sm:text-[80px] text-brand-black">
          404
        </h1>
        <p className="font-body text-body-lg text-ui-grey-dark mt-4 mb-8">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="inline-block bg-brand-black text-brand-white px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-brand-navy transition"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
