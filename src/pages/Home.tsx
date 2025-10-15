import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PremiumHero from '../components/PremiumHero';
import ProjectsShowcase from '../components/ProjectsShowcase';
import { trackEvent } from '../services/analytics';
import SEO from '../components/SEO';
import UltimateHowWeWork from '../components/UltimateHowWeWork';
import { submitContactForm } from '../services/email';
import { getStoredUtm } from '../utils/utm';

const Home: React.FC = () => {
  const bookRef = useRef<HTMLDivElement | null>(null);

  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [vision, setVision] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ ok: boolean; message: string } | null>(null);

  // Form validation
  const canSubmit = fullName.trim().length > 0 && email.trim().length > 0 && !submitting;

  // Scroll to contact form
  const scrollToContact = () => {
    if (bookRef.current) {
      const headerOffset = 72;
      const elementPosition = bookRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Form submission handler
  async function onContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    setSubmitStatus(null);
    const utm = getStoredUtm();
    const message = vision.trim() ? vision.trim() : `Quick contact request from homepage.\n\nUTM: ${JSON.stringify(utm)}`;
    trackEvent('contact_submit_attempt', { location: 'home_contact_simple' });
    const result = await submitContactForm({
      fullName: fullName.trim(),
      email: email.trim(),
      company: company.trim(),
      message,
    });
    if (result.ok) {
      setSubmitStatus({ ok: true, message: 'Thanks! We\'ll get back to you within 24 hours. For urgent inquiries, email contact@verveapex.com.' });
      setFullName('');
      setEmail('');
      setCompany('');
      setVision('');
      trackEvent('contact_submit_success', { location: 'home_contact_simple' });
    } else {
      setSubmitStatus({ ok: false, message: 'Please email us directly at contact@verveapex.com with your project details.' });
      trackEvent('contact_submit_error', { location: 'home_contact_simple', error: result.error });
    }
    setSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <SEO
        title="Verve Apex — MVP Development & Digital Solutions"
        description="Transform your ideas into market-ready products. We build scalable MVPs, web applications, and digital solutions for startups and enterprises."
        path="/"
      />

      {/* Hero Section */}
      <PremiumHero onCTAClick={scrollToContact} />

      {/* Projects Showcase */}
      <ProjectsShowcase />

      {/* How We Work */}
      <UltimateHowWeWork />

      {/* Contact Form Section */}
      <section id="book-a-call" ref={bookRef} className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Build Your Vision?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Tell us about your project and we'll respond within 24 hours with a tailored approach.
            </p>
          </motion.div>

          <motion.form
            className="bg-[#0A0A0A] border border-primary-500/20 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={onContactSubmit}
          >
            {/* Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-primary-500/30 text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors placeholder-white/50"
                placeholder="What should we call you?"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-primary-500/30 text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors placeholder-white/50"
                placeholder="your@email.com"
              />
            </div>

            {/* Company Field */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                Company <span className="text-white/50">(Optional)</span>
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-primary-500/30 text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors placeholder-white/50"
                placeholder="Your company or organization"
              />
            </div>

            {/* Vision Field */}
            <div>
              <label htmlFor="vision" className="block text-sm font-medium text-white mb-2">
                Tell us about your vision <span className="text-white/50">(Optional)</span>
              </label>
              <textarea
                id="vision"
                value={vision}
                onChange={(e) => setVision(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-primary-500/30 text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors placeholder-white/50"
                placeholder="Share your goals, ideas, or what you'd like to build. We'd love to hear about your vision!"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={!canSubmit || submitting}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                onClick={() => trackEvent('book_call_click', { location: 'home_contact_simple_button' })}
              >
                {submitting ? 'Sending…' : 'Send Message'}
              </button>
              {submitStatus && (
                <span className={`${submitStatus.ok ? 'text-emerald-400' : 'text-red-400'} text-sm`}>
                  {submitStatus.message}
                </span>
              )}
            </div>
          </motion.form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Email', icon: '📧', value: 'contact@verveapex.com' },
              { title: 'Location', icon: '🌍', value: 'Based in India, serving globally' },
              { title: 'Response', icon: '⏱️', value: 'Within 24 business hours' }
            ].map((item) => (
              <div key={item.title} className="bg-[#0A0A0A] border border-primary-500/20 p-6 rounded-2xl text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white font-semibold">{item.title}</div>
                <div className="text-white/70 text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
