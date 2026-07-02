import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5">
      <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#8B2D6E] mb-4">404</h1>
      <p className="text-gray-600 text-lg mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="inline-flex items-center gap-2 rounded bg-[#8B2D6E] hover:bg-[#5E1E49] text-white text-sm font-semibold uppercase tracking-wide px-7 py-4 transition-colors">
        Go Home
      </Link>
    </div>
  );
}
