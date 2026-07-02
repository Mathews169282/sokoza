import Blog from '@/components/home/Blog';

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#FBFAF8] pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">Insights & Blog</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#1E2024] leading-tight">
            Latest from the Sokoza Journal
          </h1>
        </div>
      </section>
      <Blog />
    </>
  );
}
