import Portfolio from '@/components/home/Portfolio';

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#FBFAF8] pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[#9aae3a] font-semibold tracking-[0.2em] text-xs uppercase mb-4">Our Work</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#1E2024] leading-tight">
            Events We&apos;ve Brought to Life
          </h1>
        </div>
      </section>
      <Portfolio />
    </>
  );
}
