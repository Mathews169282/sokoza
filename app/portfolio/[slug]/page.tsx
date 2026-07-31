import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { PORTFOLIO } from '@/data/content';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sokoza.co.ke';

export function generateStaticParams() {
  return PORTFOLIO.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | Sokoza Events`,
    description: project.desc,
    openGraph: {
      title: `${project.title} | Sokoza Events`,
      description: project.desc,
      images: [project.img],
      url: `${SITE_URL}/portfolio/${project.slug}`,
    },
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PORTFOLIO.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="bg-[#FBFAF8] pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-[#8B2D6E] hover:text-[#5E1E49] mb-6">
          <ChevronLeft className="w-4 h-4" /> Back to Our Work
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1E2024] leading-tight mb-4">
          {project.title}
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mb-10">{project.desc}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {project.gallery.map((img, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden aspect-[4/3]">
              <img src={img} alt={`${project.title} - ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
