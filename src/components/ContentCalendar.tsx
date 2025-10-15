import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Plus,
  Edit,
  Trash2,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter
} from 'lucide-react';
import { trackEvent } from '../services/analytics';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'webinar' | 'newsletter';
  status: 'draft' | 'scheduled' | 'published' | 'archived';
  publishDate: Date;
  author: string;
  category: string;
  tags: string[];
  description: string;
  estimatedReadTime?: number;
  targetAudience: string[];
  goals: string[];
  performance?: {
    views: number;
    shares: number;
    conversions: number;
  };
}

interface ContentCalendarProps {
  contentItems: ContentItem[];
  onCreateContent?: () => void;
  onEditContent?: (id: string) => void;
  onDeleteContent?: (id: string) => void;
  onViewContent?: (id: string) => void;
  className?: string;
}

export const ContentCalendar: React.FC<ContentCalendarProps> = ({
  contentItems,
  onCreateContent,
  onEditContent,
  onDeleteContent,
  onViewContent,
  className = ''
}) => {
  const [filter, setFilter] = useState<'all' | 'blog' | 'case-study' | 'webinar' | 'newsletter'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'draft' | 'scheduled' | 'published'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'status' | 'type'>('date');

  const filteredAndSortedContent = useMemo(() => {
    let filtered = contentItems;

    if (filter !== 'all') {
      filtered = filtered.filter(item => item.type === filter);
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(item => item.status === statusFilter);
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
        case 'status':
          return a.status.localeCompare(b.status);
        case 'type':
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });
  }, [contentItems, filter, statusFilter, sortBy]);

  const getStatusColor = (status: ContentItem['status']) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'published': return 'bg-green-100 text-green-800';
      case 'archived': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: ContentItem['status']) => {
    switch (status) {
      case 'draft': return <Edit className="w-4 h-4" />;
      case 'scheduled': return <Clock className="w-4 h-4" />;
      case 'published': return <CheckCircle className="w-4 h-4" />;
      case 'archived': return <AlertCircle className="w-4 h-4" />;
      default: return <Edit className="w-4 h-4" />;
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const isUpcoming = (date: Date) => {
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 && diffDays <= 7;
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Content Calendar</h2>
          </div>
          {onCreateContent && (
            <button
              onClick={() => {
                trackEvent('content_create_click', { source: 'calendar' });
                onCreateContent();
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              New Content
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">All Types</option>
              <option value="blog">Blog Posts</option>
              <option value="case-study">Case Studies</option>
              <option value="webinar">Webinars</option>
              <option value="newsletter">Newsletters</option>
            </select>
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm"
          >
            <option value="all">All Status</option>
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
            <option value="published">Published</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm"
          >
            <option value="date">Sort by Date</option>
            <option value="status">Sort by Status</option>
            <option value="type">Sort by Type</option>
          </select>
        </div>
      </div>

      {/* Content List */}
      <div className="divide-y divide-gray-200">
        <AnimatePresence>
          {filteredAndSortedContent.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {getStatusIcon(item.status)}
                      {item.status}
                    </span>
                    {isUpcoming(item.publishDate) && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        <Clock className="w-3 h-3" />
                        Upcoming
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                    <span>•</span>
                    <span>{formatDate(item.publishDate)}</span>
                    <span>•</span>
                    <span>{item.author}</span>
                    <span>•</span>
                    <span>{item.category}</span>
                    {item.estimatedReadTime && (
                      <>
                        <span>•</span>
                        <span>{item.estimatedReadTime} min read</span>
                      </>
                    )}
                  </div>

                  <p className="text-gray-700 mb-3 line-clamp-2">{item.description}</p>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          +{item.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {item.performance && (
                      <div className="flex items-center gap-3 text-gray-500">
                        <span>{item.performance.views} views</span>
                        <span>{item.performance.shares} shares</span>
                        <span>{item.performance.conversions} conversions</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  {onViewContent && (
                    <button
                      onClick={() => onViewContent(item.id)}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                      title="View content"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                  {onEditContent && (
                    <button
                      onClick={() => onEditContent(item.id)}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                      title="Edit content"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                  )}
                  {onDeleteContent && (
                    <button
                      onClick={() => onDeleteContent(item.id)}
                      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded"
                      title="Delete content"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredAndSortedContent.length === 0 && (
          <div className="p-12 text-center">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">
              {filter !== 'all' || statusFilter !== 'all'
                ? 'Try adjusting your filters to see more content.'
                : 'Get started by creating your first piece of content.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Sample content data for demonstration
export const sampleContentItems: ContentItem[] = [
  {
    id: '1',
    title: 'How We Built a FinTech App That Processes $2M Monthly',
    type: 'case-study',
    status: 'published',
    publishDate: new Date('2024-01-15'),
    author: 'Rajkumar',
    category: 'FinTech',
    tags: ['fintech', 'mobile-app', 'payments', 'success-story'],
    description: 'A comprehensive case study about building a secure payment processing app that handles millions in transactions.',
    estimatedReadTime: 8,
    targetAudience: ['founders', 'cto', 'product-managers'],
    goals: ['lead-generation', 'credibility', 'social-proof'],
    performance: {
      views: 1250,
      shares: 45,
      conversions: 12
    }
  },
  {
    id: '2',
    title: 'MVP Development: Common Mistakes and How to Avoid Them',
    type: 'blog',
    status: 'scheduled',
    publishDate: new Date('2024-01-22'),
    author: 'Utkarsh',
    category: 'Product Development',
    tags: ['mvp', 'product-development', 'mistakes', 'best-practices'],
    description: 'Learn from real examples of MVP development pitfalls and proven strategies to avoid them.',
    estimatedReadTime: 6,
    targetAudience: ['founders', 'product-managers'],
    goals: ['education', 'lead-magnet', 'seo']
  },
  {
    id: '3',
    title: 'Building Scalable APIs: REST vs GraphQL vs tRPC',
    type: 'blog',
    status: 'draft',
    publishDate: new Date('2024-01-29'),
    author: 'Utkarsh',
    category: 'Technical',
    tags: ['api', 'backend', 'scalability', 'architecture'],
    description: 'A technical deep-dive into different API architectures and when to use each approach.',
    estimatedReadTime: 12,
    targetAudience: ['developers', 'cto', 'architects'],
    goals: ['thought-leadership', 'seo', 'lead-generation']
  }
];