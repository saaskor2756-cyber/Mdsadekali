
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Latest Insights</h2>
            <h3 className="text-4xl font-bold text-white">Digital Security & Growth</h3>
          </div>
          <a href="#" className="hidden md:flex items-center space-x-2 text-blue-400 hover:text-white transition-colors mt-4 md:mt-0">
            <span>View All Articles</span>
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 text-slate-500 text-sm mb-4">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h4>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="mt-auto flex items-center space-x-2 text-blue-500 font-bold text-sm">
                  <span>Read Full Article</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
