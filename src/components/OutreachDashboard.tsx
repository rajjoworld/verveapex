import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Calendar,
  BarChart3,
  Users,
  TrendingUp,
  Target,
  Send,
  Eye,
  MousePointer,
  MessageSquare,
  Plus,
  Filter,
  Download
} from 'lucide-react';
import { ContentCalendar, sampleContentItems } from './ContentCalendar';
import { emailTemplates, outreachSequences } from '../utils/emailTemplates';
import { trackEvent } from '../services/analytics';

interface OutreachMetrics {
  totalEmailsSent: number;
  openRate: number;
  clickRate: number;
  replyRate: number;
  conversionRate: number;
  totalSubscribers: number;
  contentViews: number;
  socialShares: number;
}

interface OutreachDashboardProps {
  className?: string;
}

export const OutreachDashboard: React.FC<OutreachDashboardProps> = ({
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'emails' | 'content' | 'analytics'>('overview');
  const [selectedSequence, setSelectedSequence] = useState<string>('founder');

  // Mock data - in real app, this would come from your analytics service
  const metrics: OutreachMetrics = {
    totalEmailsSent: 1250,
    openRate: 34.2,
    clickRate: 8.7,
    replyRate: 12.1,
    conversionRate: 3.2,
    totalSubscribers: 387,
    contentViews: 5420,
    socialShares: 156
  };

  const recentActivity = [
    { type: 'email_sent', description: 'Founder outreach sequence started', count: 25, timestamp: '2 hours ago' },
    { type: 'content_published', description: 'Case study published: FinTech Wallet', views: 234, timestamp: '1 day ago' },
    { type: 'newsletter_signup', description: 'New subscriber from blog', source: 'blog', timestamp: '3 hours ago' },
    { type: 'social_share', description: 'Case study shared on LinkedIn', platform: 'linkedin', timestamp: '5 hours ago' }
  ];

  const MetricCard: React.FC<{
    title: string;
    value: string | number;
    change?: number;
    icon: React.ReactNode;
    color: string;
  }> = ({ title, value, change, icon, color }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change !== undefined && (
            <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? '+' : ''}{change}% from last month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'emails', label: 'Email Campaigns', icon: Mail },
    { id: 'content', label: 'Content Calendar', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp }
  ];

  return (
    <div className={`bg-gray-50 min-h-screen ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Outreach Dashboard</h1>
          <p className="text-gray-600">Manage your content marketing and lead generation campaigns</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-white p-1 rounded-lg border border-gray-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                  title="Total Emails Sent"
                  value={metrics.totalEmailsSent.toLocaleString()}
                  change={12.5}
                  icon={<Send className="w-6 h-6 text-white" />}
                  color="bg-blue-600"
                />
                <MetricCard
                  title="Open Rate"
                  value={`${metrics.openRate}%`}
                  change={2.1}
                  icon={<Eye className="w-6 h-6 text-white" />}
                  color="bg-green-600"
                />
                <MetricCard
                  title="Click Rate"
                  value={`${metrics.clickRate}%`}
                  change={-0.8}
                  icon={<MousePointer className="w-6 h-6 text-white" />}
                  color="bg-purple-600"
                />
                <MetricCard
                  title="Reply Rate"
                  value={`${metrics.replyRate}%`}
                  change={5.2}
                  icon={<MessageSquare className="w-6 h-6 text-white" />}
                  color="bg-orange-600"
                />
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MetricCard
                  title="Newsletter Subscribers"
                  value={metrics.totalSubscribers}
                  change={8.3}
                  icon={<Users className="w-6 h-6 text-white" />}
                  color="bg-indigo-600"
                />
                <MetricCard
                  title="Content Views"
                  value={metrics.contentViews.toLocaleString()}
                  change={15.7}
                  icon={<Eye className="w-6 h-6 text-white" />}
                  color="bg-teal-600"
                />
                <MetricCard
                  title="Social Shares"
                  value={metrics.socialShares}
                  change={22.4}
                  icon={<Target className="w-6 h-6 text-white" />}
                  color="bg-pink-600"
                />
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          {activity.type === 'email_sent' && <Send className="w-4 h-4 text-blue-600" />}
                          {activity.type === 'content_published' && <Calendar className="w-4 h-4 text-green-600" />}
                          {activity.type === 'newsletter_signup' && <Users className="w-4 h-4 text-purple-600" />}
                          {activity.type === 'social_share' && <Target className="w-4 h-4 text-orange-600" />}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                          <p className="text-xs text-gray-500">{activity.timestamp}</p>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        {activity.count && <span>{activity.count} sent</span>}
                        {activity.views && <span>{activity.views} views</span>}
                        {activity.source && <span>via {activity.source}</span>}
                        {activity.platform && <span>on {activity.platform}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'emails' && (
            <motion.div
              key="emails"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Email Sequences */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Email Sequences</h3>
                    <button
                      onClick={() => trackEvent('create_sequence_click')}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      New Sequence
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(outreachSequences).map(([key, sequence]) => (
                      <div
                        key={key}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedSequence === key
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedSequence(key)}
                      >
                        <h4 className="font-medium text-gray-900 mb-2">{sequence.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {sequence.steps.length} emails • {sequence.steps[sequence.steps.length - 1].delay} days total
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {sequence.steps.map((step, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            >
                              Day {step.delay}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Templates */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Email Templates</h3>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Filter className="w-4 h-4" />
                        Filter
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Download className="w-4 h-4" />
                        Export
                      </button>
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  {emailTemplates.slice(0, 5).map((template) => (
                    <div key={template.id} className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{template.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{template.subject}</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {template.category.replace('-', ' ')}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            {template.recipientType.replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Open Rate:</span>
                          <span className="ml-2 font-medium">{template.successMetrics?.expectedOpenRate}%</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Click Rate:</span>
                          <span className="ml-2 font-medium">{template.successMetrics?.expectedClickRate}%</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Reply Rate:</span>
                          <span className="ml-2 font-medium">{template.successMetrics?.expectedReplyRate}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'content' && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ContentCalendar
                contentItems={sampleContentItems}
                onCreateContent={() => trackEvent('content_create_click', { source: 'dashboard' })}
                onEditContent={(id) => trackEvent('content_edit_click', { content_id: id })}
                onDeleteContent={(id) => trackEvent('content_delete_click', { content_id: id })}
                onViewContent={(id) => trackEvent('content_view_click', { content_id: id })}
              />
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Analytics Charts Placeholder */}
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Analytics</h3>
                  <p className="text-gray-600 mb-6">
                    Detailed analytics dashboard with conversion funnels, A/B test results, and performance insights.
                  </p>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    View Full Analytics
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h4 className="font-medium text-gray-900 mb-4">Top Performing Content</h4>
                  <div className="space-y-3">
                    {[
                      { title: 'MVP Development Guide', views: 1250, conversions: 45 },
                      { title: 'FinTech Case Study', views: 890, conversions: 32 },
                      { title: 'API Design Best Practices', views: 756, conversions: 28 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-sm text-gray-900">{item.title}</span>
                        <div className="text-right text-sm">
                          <div className="text-gray-900">{item.views} views</div>
                          <div className="text-green-600">{item.conversions} conversions</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h4 className="font-medium text-gray-900 mb-4">Lead Sources</h4>
                  <div className="space-y-3">
                    {[
                      { source: 'Organic Search', leads: 89, percentage: 32 },
                      { source: 'Email Campaigns', leads: 67, percentage: 24 },
                      { source: 'Social Media', leads: 45, percentage: 16 },
                      { source: 'Referrals', leads: 34, percentage: 12 },
                      { source: 'Direct', leads: 28, percentage: 10 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-sm text-gray-900">{item.source}</span>
                        <div className="text-right text-sm">
                          <div className="text-gray-900">{item.leads} leads</div>
                          <div className="text-gray-500">{item.percentage}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};