import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Facebook, Twitter, Linkedin, Link2, ArrowRight } from 'lucide-react';
import Logo from '@/components/sokoza/Logo';
import Footer from '@/components/sokoza/Footer';
import { BLOG } from '@/data/content';
import { toast } from '@/components/ui/use-toast';

const BlogArticle: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BLOG.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FBFAF8] px-5 text-center">
        <h1 className="font-serif text-3xl font-bold text-[#1E2024] mb-3">Article Not Found</h1>
        <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
        <Link to="/" className="rounded-lg bg-[#8B2D6E] text-white font-semibold px-6 py-3">Back to Home</Link>
      </div>
    );
  }

  const related = BLOG.filter((b) => b.id !== post.id && b.category === post.category)
    .concat(BLOG.filter((b) => b.id !== post.id && b.category !== post.category))
    .slice(0, 3);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(post.title);

  const share = (network: 'facebook' | 'twitter' | 'linkedin') => {
    const u = encodeURIComponent(shareUrl);
    const links = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      twitter: `https://twitter.com/intent/tweet?url=${u}&text=${shareText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    };
    window.open(links[network], '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({ title: 'Link copied!', description: 'The article link is on your clipboard.' });
    } catch {
      toast({ title: 'Copy this link', description: shareUrl });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Lightweight header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-20">
          <Logo />
          <Link to="/#blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#8B2D6E]">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-[42vh] min-h-[320px] bg-[#1E2024]">
        <img src={post.img} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2024] via-[#1E2024]/50 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-8 h-full flex flex-col justify-end pb-10">
          <span className="self-start text-xs font-semibold text-white bg-[#8B2D6E] px-3 py-1 rounded-full mb-4">{post.category}</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">{post.title}</h1>
        </div>
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-5 lg:px-8 py-12">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 border-b border-gray-100 pb-6 mb-8">
          <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-[#8B2D6E]" />{post.author}</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#8B2D6E]" />{post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B2D6E]" />{post.readTime}</span>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">{post.excerpt}</p>

        <div className="space-y-7">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="font-serif text-2xl font-bold text-[#1E2024] mb-3">{block.heading}</h2>
              )}
              <p className="text-gray-700 leading-relaxed text-[1.05rem]">{block.body}</p>
            </div>
          ))}
        </div>

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm font-semibold text-[#1E2024] mb-4 uppercase tracking-wide">Share this article</p>
          <div className="flex items-center gap-3">
            <button onClick={() => share('facebook')} aria-label="Share on Facebook" className="w-11 h-11 rounded-full bg-[#FBFAF8] hover:bg-[#8B2D6E] text-[#8B2D6E] hover:text-white flex items-center justify-center transition-colors border border-gray-200">
              <Facebook className="w-5 h-5" />
            </button>
            <button onClick={() => share('twitter')} aria-label="Share on X" className="w-11 h-11 rounded-full bg-[#FBFAF8] hover:bg-[#8B2D6E] text-[#8B2D6E] hover:text-white flex items-center justify-center transition-colors border border-gray-200">
              <Twitter className="w-5 h-5" />
            </button>
            <button onClick={() => share('linkedin')} aria-label="Share on LinkedIn" className="w-11 h-11 rounded-full bg-[#FBFAF8] hover:bg-[#8B2D6E] text-[#8B2D6E] hover:text-white flex items-center justify-center transition-colors border border-gray-200">
              <Linkedin className="w-5 h-5" />
            </button>
            <button onClick={copyLink} aria-label="Copy link" className="w-11 h-11 rounded-full bg-[#FBFAF8] hover:bg-[#7A8B2E] text-[#7A8B2E] hover:text-white flex items-center justify-center transition-colors border border-gray-200">
              <Link2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-[#FBFAF8] py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1E2024] mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-7">
            {related.map((b) => (
              <article key={b.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                <Link to={`/blog/${b.slug}`} className="overflow-hidden aspect-[16/10] block">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[#8B2D6E] bg-[#8B2D6E]/10 px-3 py-1 rounded-full">{b.category}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="w-3.5 h-3.5" />{b.date}</span>
                  </div>
                  <Link to={`/blog/${b.slug}`}>
                    <h3 className="font-serif text-lg font-bold text-[#1E2024] mb-2 group-hover:text-[#8B2D6E] transition-colors">{b.title}</h3>
                  </Link>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{b.excerpt}</p>
                  <Link to={`/blog/${b.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B2D6E]">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => navigate('/#blog')} className="inline-flex items-center gap-2 rounded-lg border-2 border-[#8B2D6E] text-[#8B2D6E] hover:bg-[#8B2D6E] hover:text-white font-semibold px-6 py-3 transition-colors">
              <ArrowLeft className="w-4 h-4" /> View All Articles
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogArticle;
