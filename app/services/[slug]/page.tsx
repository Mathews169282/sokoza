import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/data/content';
import { ArrowLeft, Lightbulb, ClipboardList, MapPin, Users, Megaphone } from 'lucide-react';

const ICONS: Record<string, React.ElementType> = {
  Lightbulb,
  ClipboardList,
  MapPin,
  Users,
  Megaphone,
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = ICONS[service.icon];

  return (
    <>
      <section className="bg-[#FBFAF8] pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-[#8B2D6E] hover:text-[#5E1E49] mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
              <Icon className="w-8 h-8 text-[#8B2D6E]" strokeWidth={1.5} />
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1E2024] leading-tight">
              {service.title}
            </h1>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            {service.desc}
          </p>
        </div>
      </section>
    </>
  );
}
