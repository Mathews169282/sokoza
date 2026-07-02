import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG } from '@/data/content';
import { ArrowLeft, Calendar } from 'lucide-react';

export function generateStaticParams() {
  return BLOG.map((b) => ({ slug: b.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="bg-[#FBFAF8] pt-28 pb-12">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-[#8B2D6E] hover:text-[#5E1E49] mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-[#8B2D6E] bg-[#8B2D6E]/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1E2024] leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-gray-500 text-sm mb-8">By {post.author} · {post.readTime}</p>
          <img src={post.img} alt={post.title} className="w-full h-[400px] object-cover rounded-xl mb-10" />
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, i) =>
              block.heading ? (
                <h2 key={i} className="font-serif text-2xl font-bold text-[#1E2024] mt-8 mb-4">{block.heading}</h2>
              ) : (
                <p key={i} className="text-gray-700 leading-relaxed mb-5">{block.body}</p>
              )
            )}
          </div>
        </div>
      </article>
    </>
  );
}
