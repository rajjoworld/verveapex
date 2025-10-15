import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, Wrench, FileText, Lock } from 'lucide-react';
import PremiumHero from '../components/PremiumHero';
import ProjectsShowcase from '../components/ProjectsShowcase';
import { trackEvent, trackFormSubmission, trackCTAConversion } from '../services/analytics';
import SEO from '../components/SEO';
import UltimateHowWeWork from '../components/UltimateHowWeWork';
import TeamSection from '../components/TeamSection';
import FAQ from '../components/FAQ';
import ExitIntentPopup from '../components/ExitIntentPopup';
import { submitContactForm } from '../services/email';
import { getStoredUtm } from '../utils/utm';
import { useBehaviorTracking } from '../hooks/useBehaviorTracking';
import { ABText } from '../components/ABTestComponent';
import { AB_TESTS } from '../utils/abTesting';

const Home: React.FC = () => {
  const bookRef = useRef<HTMLDivElement | null>(null);

  // Initialize behavior tracking
  useBehaviorTracking({
    trackClicks: true,
    trackMouseMovement: true,
    trackFormInteractions: true,
    trackTimeOnPage: true,
    pageName: 'home'
  });

  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [timeline, setTimeline] = useState('');
  const [vision, setVision] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ ok: boolean; message: string } | null>(null);

  // Form validation
  const canSubmit = fullName.trim().length > 0 && email.trim().length > 0 && !submitting;

  // Scroll depth tracking
  useEffect(() => {
    let lastScrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track milestones: 25%, 50%, 75%, 90%
      const milestones = [25, 50, 75, 90];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && lastScrollDepth < milestone) {
          trackEvent('scroll_depth', {
            scroll_percentage: milestone,
            event_category: 'engagement',
            event_label: `${milestone}%_scrolled`
          });
        }
      });

      lastScrollDepth = scrollPercent;
    };

    window.addEventListener('scroll', trackScrollDepth);
    return () => window.removeEventListener('scroll', trackScrollDepth);
  }, []);

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
    trackFormSubmission('contact_form', {
      project_type: projectType,
      budget_range: budgetRange,
      timeline: timeline,
      has_file: !!file
    });
    const result = await submitContactForm({
      fullName: fullName.trim(),
      email: email.trim(),
      company: company.trim(),
      projectType: projectType,
      budgetRange: budgetRange,
      timeline: timeline,
      message,
      file: file || undefined,
    });
    if (result.ok) {
      setSubmitStatus({ ok: true, message: 'Thanks! We\'ll get back to you within 24 hours. For urgent inquiries, email contact@verveapex.com.' });
      setFullName('');
      setEmail('');
      setCompany('');
      setProjectType('');
      setBudgetRange('');
      setTimeline('');
      setVision('');
      setFile(null);
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
      <ProjectsShowcase onCTAClick={scrollToContact} />

      {/* How We Work */}
      <UltimateHowWeWork />

      {/* Team Section */}
      <TeamSection />

      {/* FAQ Section */}
      <FAQ onCTAClick={scrollToContact} />

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
              Share your idea and get a tailored project plan — free, no commitment. Attach your deck for the fastest response. Limited early partner slots available.
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

            {/* Project Type Field */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-primary-500/30 text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              >
                <option value="">Select project type</option>
                <option value="MVP">MVP</option>
                <option value="Iteration">Iteration</option>
                <option value="Audit">Audit</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Budget Range Field */}
            <div>
              <label htmlFor="budgetRange" className="block text-sm font-medium text-white mb-2">
                Budget Range
              </label>
              <select
                id="budgetRange"
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-primary-500/30 text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              >
                <option value="">Select budget range</option>
                <option value="$10k - $25k">$10k - $25k</option>
                <option value="$25k - $50k">$25k - $50k</option>
                <option value="$50k - $100k">$50k - $100k</option>
                <option value="$100k+">$100k+</option>
              </select>
            </div>

            {/* Timeline Field */}
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
                Timeline
              </label>
              <select
                id="timeline"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-primary-500/30 text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              >
                <option value="">Select timeline</option>
                <option value="1-2 months">1-2 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
                <option value="ASAP">ASAP</option>
              </select>
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

            {/* File Upload Field */}
            <div>
              <label htmlFor="file" className="block text-sm font-medium text-white mb-2">
                Attach deck / spec <span className="text-white/50">(Optional, max 25MB)</span>
              </label>
              <input
                type="file"
                id="file"
                accept=".pdf,.pptx,.docx,.zip"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-primary-500/30 text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-500 file:text-white hover:file:bg-primary-600"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={!canSubmit || submitting}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                onClick={() => trackCTAConversion('contact_form_submit', 'Send Message — Get Custom Plan', 'contact_section')}
              >
                {submitting ? 'Sending…' : 'Send Message — Get Custom Plan'}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-primary-500/50 text-primary-400 px-6 py-3 font-semibold hover:bg-primary-500/10 transition-colors"
                onClick={() => {
                  trackCTAConversion('schedule_call', 'Schedule a Free Call', 'contact_section');
                  // Already in contact form, maybe scroll to top of form or just track
                  bookRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule a Free Call
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

      {/* Guarantee Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-primary-500/10 to-primary-700/10 backdrop-blur-xl border border-primary-500/20 rounded-2xl p-16 max-w-4xl mx-auto shadow-2xl shadow-primary-500/10">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2 
                  className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(52, 211, 153, 0.5)",
                      "0 0 30px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(52, 211, 153, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💎 Our Guarantee
                </motion.h2>
                <p className="text-white/90 text-xl font-medium mb-2">
                  We'll make it right. Always.
                </p>
                <p className="text-white/70 text-lg">
                  Unlimited free fixes until you're fully satisfied. (Fair-use terms apply.)
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <FileText className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold text-lg mb-2">NDA on Request</h3>
                  <p className="text-white/70 text-sm">Your ideas stay protected</p>
                </motion.div>

                <motion.div 
                  className="bg-white/5 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Search className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold text-lg mb-2">Code Audit Available</h3>
                  <p className="text-white/70 text-sm">Deep technical review included</p>
                </motion.div>

                <motion.div 
                  className="bg-white/5 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Wrench className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold text-lg mb-2">1-Month Free Support</h3>
                  <p className="text-white/70 text-sm">Post-launch assistance included</p>
                </motion.div>
              </div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex justify-center items-center gap-4 mb-4">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  <Lock className="w-6 h-6 text-blue-400" />
                  <FileText className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-white/80 text-lg font-medium">
                  Our Promise: Zero surprises, zero excuses — just results and accountability.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exit Intent Popup - Temporarily disabled */}
      {/* <ExitIntentPopup /> */}
    </div>
  );
};

export default Home;
