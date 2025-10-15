import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { trackEvent } from '../services/analytics';

interface NewsletterSignupProps {
  variant?: 'inline' | 'popup' | 'hero' | 'footer';
  title?: string;
  description?: string;
  ctaText?: string;
  tags?: string[];
  className?: string;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  variant = 'inline',
  title = "Get weekly insights on product development",
  description = "Join 500+ founders getting actionable tips on building better products",
  ctaText = "Subscribe",
  tags = ['newsletter-signup'],
  className = ""
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      // Track signup attempt
      trackEvent('newsletter_signup_attempt', {
        email: email,
        variant: variant,
        tags: tags
      });

      // Simulate API call - replace with actual newsletter service
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Track successful signup
      trackEvent('newsletter_signup_success', {
        email: email,
        variant: variant,
        tags: tags
      });

      setStatus('success');
      setEmail('');

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      trackEvent('newsletter_signup_error', {
        email: email,
        variant: variant,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  const variants = {
    inline: {
      container: "bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100",
      title: "text-xl font-semibold text-gray-900 mb-2",
      description: "text-gray-600 mb-4",
      form: "flex flex-col sm:flex-row gap-3",
      input: "flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
      button: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
    },
    popup: {
      container: "bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-md mx-auto",
      title: "text-2xl font-bold text-gray-900 mb-3",
      description: "text-gray-600 mb-6",
      form: "space-y-4",
      input: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
      button: "w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
    },
    hero: {
      container: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl",
      title: "text-2xl font-bold mb-3",
      description: "text-blue-100 mb-6",
      form: "space-y-4",
      input: "w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-blue-200",
      button: "w-full px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
    },
    footer: {
      container: "bg-gray-900 text-white p-6 rounded-lg",
      title: "text-lg font-semibold mb-2",
      description: "text-gray-300 mb-4",
      form: "flex flex-col sm:flex-row gap-3",
      input: "flex-1 px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white",
      button: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
    }
  };

  const styles = variants[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${styles.container} ${className}`}
    >
      <div className="flex items-start gap-3 mb-4">
        <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={styles.input}
          disabled={status === 'loading'}
          required
        />

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`${styles.button} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Subscribing...
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Subscribed!
            </>
          ) : (
            ctaText
          )}
        </button>
      </form>

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </motion.div>
      )}

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2"
        >
          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
          <p className="text-green-700 text-sm">
            Thanks for subscribing! Check your email for a confirmation link.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

// Specialized newsletter components for different contexts
export const BlogNewsletterSignup: React.FC = () => (
  <NewsletterSignup
    variant="inline"
    title="Never miss a development insight"
    description="Get our weekly newsletter with product development tips, case studies, and industry trends"
    tags={['blog-signup', 'content-nurture']}
  />
);

export const CaseStudyNewsletterSignup: React.FC = () => (
  <NewsletterSignup
    variant="popup"
    title="Want more success stories?"
    description="Get notified when we publish new case studies and product development insights"
    tags={['case-study-signup', 'social-proof']}
  />
);

export const FooterNewsletterSignup: React.FC = () => (
  <NewsletterSignup
    variant="footer"
    title="Stay updated"
    description="Weekly insights on building better products"
    ctaText="Subscribe"
    tags={['footer-signup', 'general']}
  />
);