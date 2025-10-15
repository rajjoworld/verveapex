import React from 'react';
import { motion } from 'framer-motion';
import {
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  Copy,
  CheckCircle
} from 'lucide-react';
import { trackEvent } from '../services/analytics';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  hashtags?: string[];
  variant?: 'horizontal' | 'vertical' | 'minimal';
  className?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({
  url,
  title,
  description = '',
  hashtags = ['productdevelopment', 'startup', 'mvp'],
  variant = 'horizontal',
  className = ''
}) => {
  const [copied, setCopied] = React.useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const hashtagString = hashtags.map(tag => `%23${tag}`).join('');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${hashtagString}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  };

  const handleShare = (platform: string, link: string) => {
    trackEvent('social_share_click', {
      platform,
      content_url: url,
      content_title: title,
      variant
    });

    window.open(link, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackEvent('link_copy', {
        content_url: url,
        content_title: title,
        variant
      });

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareButtons = [
    {
      platform: 'twitter',
      icon: Twitter,
      label: 'Share on Twitter',
      color: 'hover:bg-blue-50 hover:text-blue-600',
      link: shareLinks.twitter
    },
    {
      platform: 'linkedin',
      icon: Linkedin,
      label: 'Share on LinkedIn',
      color: 'hover:bg-blue-50 hover:text-blue-700',
      link: shareLinks.linkedin
    },
    {
      platform: 'facebook',
      icon: Facebook,
      label: 'Share on Facebook',
      color: 'hover:bg-blue-50 hover:text-blue-800',
      link: shareLinks.facebook
    }
  ];

  const variants = {
    horizontal: {
      container: "flex items-center gap-2 p-4 bg-gray-50 rounded-lg",
      button: "flex items-center gap-2 px-4 py-2 rounded-md transition-colors text-gray-600",
      copyButton: "flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-gray-600"
    },
    vertical: {
      container: "flex flex-col gap-2 p-4 bg-gray-50 rounded-lg",
      button: "flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-gray-600 w-full justify-start",
      copyButton: "flex items-center gap-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-gray-600 w-full justify-start"
    },
    minimal: {
      container: "flex items-center gap-1",
      button: "p-2 rounded-md transition-colors text-gray-500 hover:text-gray-700 hover:bg-gray-100",
      copyButton: "p-2 rounded-md transition-colors text-gray-500 hover:text-gray-700 hover:bg-gray-100"
    }
  };

  const styles = variants[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${styles.container} ${className}`}
    >
      {variant !== 'minimal' && (
        <div className="flex items-center gap-2 mb-3">
          <Share2 className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Share this article</span>
        </div>
      )}

      <div className={`flex ${variant === 'vertical' ? 'flex-col' : 'flex-wrap'} gap-2`}>
        {shareButtons.map(({ platform, icon: Icon, label, color, link }) => (
          <button
            key={platform}
            onClick={() => handleShare(platform, link)}
            className={`${styles.button} ${color}`}
            aria-label={label}
          >
            <Icon className="w-4 h-4" />
            {variant !== 'minimal' && <span className="text-sm">{label}</span>}
          </button>
        ))}

        <button
          onClick={handleCopyLink}
          className={`${styles.copyButton} ${copied ? 'bg-green-100 text-green-700' : ''}`}
          aria-label="Copy link"
        >
          {copied ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {variant !== 'minimal' && (
            <span className="text-sm">{copied ? 'Copied!' : 'Copy link'}</span>
          )}
        </button>
      </div>

      {variant === 'horizontal' && (
        <p className="text-xs text-gray-500 mt-2">
          Help others discover this content by sharing it on social media
        </p>
      )}
    </motion.div>
  );
};

// Specialized social share components for different content types
export const BlogSocialShare: React.FC<{
  url: string;
  title: string;
  description?: string;
}> = ({ url, title, description }) => (
  <SocialShare
    url={url}
    title={title}
    description={description}
    hashtags={['productdevelopment', 'startup', 'mvp', 'tech']}
    variant="horizontal"
    className="mt-8 mb-8"
  />
);

export const CaseStudySocialShare: React.FC<{
  url: string;
  title: string;
  description?: string;
}> = ({ url, title, description }) => (
  <SocialShare
    url={url}
    title={title}
    description={description}
    hashtags={['casestudy', 'productdevelopment', 'startup', 'success']}
    variant="vertical"
    className="mt-6"
  />
);

export const MinimalSocialShare: React.FC<{
  url: string;
  title: string;
}> = ({ url, title }) => (
  <SocialShare
    url={url}
    title={title}
    variant="minimal"
    className="border-t pt-4 mt-8"
  />
);

// Share stats component for analytics
export const ShareStats: React.FC<{
  shares: { platform: string; count: number }[];
  className?: string;
}> = ({ shares, className = '' }) => (
  <div className={`flex items-center gap-4 text-sm text-gray-500 ${className}`}>
    <span className="font-medium">Share stats:</span>
    {shares.map(({ platform, count }) => (
      <span key={platform} className="capitalize">
        {platform}: {count}
      </span>
    ))}
  </div>
);