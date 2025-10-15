import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, Search } from 'lucide-react';
import { BlogNewsletterSignup } from './NewsletterSignup';
import { BlogSocialShare } from './SocialShare';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: number;
  tags: string[];
  category: string;
  featured: boolean;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'mvp-development-guide',
    title: 'The Ultimate Guide to MVP Development: From Idea to Launch in 8 Weeks',
    excerpt: 'Learn how to build a minimum viable product that validates your business idea, attracts early users, and sets you up for scalable growth.',
    content: 'Building an MVP is both an art and a science...',
    author: {
      name: 'Raj',
      avatar: '👨‍💻',
      role: 'Founder & Lead Developer'
    },
    publishedAt: '2025-01-15',
    readTime: 8,
    tags: ['MVP', 'Product Development', 'Startups'],
    category: 'Product Strategy',
    featured: true,
    slug: 'mvp-development-guide'
  },
  {
    id: 'choosing-tech-stack',
    title: 'How to Choose the Right Tech Stack for Your Startup',
    excerpt: 'A comprehensive guide to selecting technologies that scale with your business, considering factors like team expertise, budget, and long-term goals.',
    content: 'Choosing the right technology stack...',
    author: {
      name: 'Utkarsh',
      avatar: '👨‍🔧',
      role: 'Backend Lead'
    },
    publishedAt: '2025-01-10',
    readTime: 6,
    tags: ['Technology', 'Architecture', 'Scalability'],
    category: 'Technical Guide',
    featured: false,
    slug: 'choosing-tech-stack'
  },
  {
    id: 'user-research-methods',
    title: 'Essential User Research Methods Every Founder Should Know',
    excerpt: 'Discover proven techniques to understand your target users, validate assumptions, and build products that people actually want to use.',
    content: 'User research is the foundation...',
    author: {
      name: 'Himanshu',
      avatar: '👨‍🎯',
      role: 'Product Manager'
    },
    publishedAt: '2025-01-05',
    readTime: 7,
    tags: ['User Research', 'UX', 'Product Validation'],
    category: 'Product Strategy',
    featured: false,
    slug: 'user-research-methods'
  },
  {
    id: 'scaling-saas-applications',
    title: 'Scaling SaaS Applications: Lessons from 10+ Successful Launches',
    excerpt: 'Real-world insights on handling growth, managing infrastructure costs, and maintaining performance as your user base expands rapidly.',
    content: 'Scaling a SaaS application...',
    author: {
      name: 'Aditya',
      avatar: '👨‍🚀',
      role: 'Backend Developer'
    },
    publishedAt: '2024-12-28',
    readTime: 10,
    tags: ['SaaS', 'Scaling', 'Performance'],
    category: 'Technical Guide',
    featured: false,
    slug: 'scaling-saas-applications'
  },
  {
    id: 'startup-funding-guide',
    title: 'Startup Funding: When to Raise, How Much to Ask For, and What Investors Look For',
    excerpt: 'Navigate the complex world of startup funding with insights on valuation, dilution, runway management, and building investor relationships.',
    content: 'Securing funding is a critical milestone...',
    author: {
      name: 'Raj',
      avatar: '👨‍💼',
      role: 'Founder & CEO'
    },
    publishedAt: '2024-12-20',
    readTime: 9,
    tags: ['Funding', 'Investors', 'Growth'],
    category: 'Business Strategy',
    featured: false,
    slug: 'startup-funding-guide'
  },
  {
    id: 'api-design-best-practices',
    title: 'API Design Best Practices: Building Developer-Friendly Interfaces',
    excerpt: 'Learn how to design APIs that developers love to use, with practical examples, common pitfalls to avoid, and tools for testing and documentation.',
    content: 'A well-designed API is the backbone...',
    author: {
      name: 'Utkarsh',
      avatar: '👨‍💻',
      role: 'Backend Lead'
    },
    publishedAt: '2024-12-15',
    readTime: 11,
    tags: ['API', 'Backend', 'Developer Experience'],
    category: 'Technical Guide',
    featured: false,
    slug: 'api-design-best-practices'
  }
];

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 group cursor-pointer ${
        post.featured ? 'ring-2 ring-primary-500/20' : ''
      }`}
    >
      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
              {post.category}
            </span>
            {post.featured && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400">
                ⭐ Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <Clock className="w-3 h-3" />
            {post.readTime} min read
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/50"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Author & Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center text-sm">
              {post.author.avatar}
            </div>
            <div>
              <div className="text-white text-sm font-medium">{post.author.name}</div>
              <div className="text-gray-400 text-xs">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <Calendar className="w-3 h-3" />
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors">
            Read Article
          </span>
          <ArrowRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Social Share */}
        <BlogSocialShare
          url={`https://verveapex.com/blog/${post.slug}`}
          title={post.title}
          description={post.excerpt}
        />
      </div>
    </motion.article>
  );
};

interface BlogProps {
  showFeaturedOnly?: boolean;
  maxItems?: number;
  category?: string;
}

const Blog: React.FC<BlogProps> = ({
  showFeaturedOnly = false,
  maxItems,
  category
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || 'All');

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    const matchesFeatured = !showFeaturedOnly || post.featured;

    return matchesSearch && matchesCategory && matchesFeatured;
  });

  const displayedPosts = maxItems
    ? filteredPosts.slice(0, maxItems)
    : filteredPosts;

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Search className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-medium">Blog</span>
          </motion.div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Insights & Strategies for Building Better Products
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert advice on product development, startup growth, and technology trends from our team of experienced builders.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post (if showing all) */}
        {!showFeaturedOnly && displayedPosts.length > 0 && displayedPosts[0].featured && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-primary-500/10 to-primary-700/10 border border-primary-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-400">
                  ⭐ Featured Article
                </span>
                <span className="text-gray-400 text-sm">
                  {displayedPosts[0].readTime} min read
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {displayedPosts[0].title}
              </h3>
              <p className="text-gray-300 mb-4">
                {displayedPosts[0].excerpt}
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors">
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Load More / CTA */}
        {displayedPosts.length >= 6 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <BlogNewsletterSignup />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;