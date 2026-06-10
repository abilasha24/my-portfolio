import { useState, useRef, useEffect } from 'react';
import { Calendar, Tag, X, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogs';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const headerVisible = useScrollAnimation(headerRef);

  // ESC to close modal (important UX upgrade)
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <section
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Notes from my journey in software development, projects, and real-world problem solving.
          </p>
        </section>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              onClick={() => setSelectedPost(post)}
            />
          ))}

        </div>

        {/* MODAL */}
        {selectedPost && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className="bg-white dark:bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >

              {/* HEADER */}
              <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-6 flex justify-between">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedPost.title}
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    {new Date(selectedPost.date).toDateString()}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TEXT */}
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {selectedPost.content.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

/* ---------------- BLOG CARD ---------------- */

function BlogCard({
  post,
  index,
  onClick,
}: {
  post: typeof blogPosts[0];
  index: number;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(cardRef);

  const isFeatured = index === 0; // simple upgrade logic

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`cursor-pointer group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white dark:bg-slate-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${isFeatured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >

      {/* HEADER */}
      <div className="h-36 bg-gradient-to-r from-blue-600 to-cyan-500 relative">

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* BODY */}
      <div className="p-5">

        <div className="flex items-center text-xs text-slate-500 mb-2 gap-1">
          <Calendar className="w-4 h-4" />
          {new Date(post.date).toDateString()}
        </div>

        <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-500 transition">
          {post.title}
        </h3>

        <p className="text-sm text-slate-500 mt-2 line-clamp-3">
          {post.summary}
        </p>

        <div className="mt-4 text-blue-600 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
          Read article <ArrowRight className="w-4 h-4" />
        </div>

      </div>

    </div>
  );
}