import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    country: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 
    'France', 'Netherlands', 'Sweden', 'Denmark', 'Norway', 'Other'
  ];

  const projectTypes = [
    'MVP Development',
    'Full Product Build',
    'Post-Launch Support',
    'Consultation',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handling)
    try {
      // In a real implementation, you would send this data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        company: '',
        country: '',
        projectType: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A0A0A] via-[#1A0A1A] to-[#0A0A0A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Build Your{' '}
            <span className="bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">
              Vision?
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Schedule a free consultation to discuss your project and discover how Verve Apex 
            can help you achieve your goals.
          </motion.p>
          <motion.div 
            className="bg-[#0A0A0A] border border-[#B065FF]/30 p-4 rounded-xl shadow-lg inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm text-white/70">
              <span className="font-semibold text-[#B065FF]">Quick Response:</span> We typically respond to all inquiries within 24 business hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#0A0A0A] border border-[#B065FF]/20 p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6">Get Your Free Consultation</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-xl">
                    <p className="text-green-400">
                      Thank you for your inquiry! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                    <p className="text-red-400">
                      There was an error submitting your form. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#B065FF]/30 text-white rounded-xl focus:ring-2 focus:ring-[#B065FF] focus:border-[#B065FF] transition-colors placeholder-white/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Professional Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#B065FF]/30 text-white rounded-xl focus:ring-2 focus:ring-[#B065FF] focus:border-[#B065FF] transition-colors placeholder-white/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#B065FF]/30 text-white rounded-xl focus:ring-2 focus:ring-[#B065FF] focus:border-[#B065FF] transition-colors placeholder-white/50"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-white mb-2">
                        Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#B065FF]/30 text-white rounded-xl focus:ring-2 focus:ring-[#B065FF] focus:border-[#B065FF] transition-colors"
                      >
                        <option value="" className="bg-[#0A0A0A] text-white">Select your country</option>
                        {countries.map((country) => (
                          <option key={country} value={country} className="bg-[#0A0A0A] text-white">{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#B065FF]/30 text-white rounded-xl focus:ring-2 focus:ring-[#B065FF] focus:border-[#B065FF] transition-colors"
                    >
                      <option value="" className="bg-[#0A0A0A] text-white">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0A0A0A] text-white">{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#B065FF]/30 text-white rounded-xl focus:ring-2 focus:ring-[#B065FF] focus:border-[#B065FF] transition-colors placeholder-white/50"
                      placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#B065FF] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#B065FF]/90 focus:ring-2 focus:ring-[#B065FF] focus:ring-offset-2 focus:ring-offset-[#0A0A0A] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#B065FF]/20"
                  >
                    {isSubmitting ? 'Sending...' : 'Get My Free Consultation'}
                  </button>

                  <p className="text-xs text-white/50 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="bg-[#0A0A0A] border border-[#B065FF]/20 p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-white mb-6">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#B065FF]/20 border border-[#B065FF]/30 rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#B065FF]">📧</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-white/70">contact@verveapex.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#B065FF]/20 border border-[#B065FF]/30 rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#B065FF]">🌍</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Location</p>
                        <p className="text-white/70">Based in India, serving clients globally</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#B065FF]/20 border border-[#B065FF]/30 rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#B065FF]">⏱️</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Response Time</p>
                        <p className="text-white/70">Within 24 business hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-gradient-to-br from-[#B065FF]/10 to-[#6633CC]/10 border border-[#B065FF]/30 p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-white mb-6">What to Expect Next</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#B065FF] text-white rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-white">Initial Response</p>
                        <p className="text-white/70 text-sm">We'll acknowledge your inquiry within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#B065FF] text-white rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-white">Discovery Call</p>
                        <p className="text-white/70 text-sm">30-minute consultation to understand your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#B065FF] text-white rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-white">Custom Proposal</p>
                        <p className="text-white/70 text-sm">Detailed project plan and transparent pricing</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-[#0A0A0A] border border-[#B065FF]/20 p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-white mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-white mb-1">How much does a typical MVP cost?</p>
                      <p className="text-white/70 text-sm">MVPs typically range from $15,000-$50,000 depending on complexity and features.</p>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">What's your typical timeline?</p>
                      <p className="text-white/70 text-sm">Most MVPs are delivered within 8-16 weeks, depending on scope and requirements.</p>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Do you work across time zones?</p>
                      <p className="text-white/70 text-sm">Yes, we accommodate US, UK, and Australian business hours for seamless communication.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Not Ready to Start Yet?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our portfolio and services to learn more about how we can help.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/portfolio"
              className="bg-transparent border border-[#B065FF] text-[#B065FF] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#B065FF] hover:text-white transition-all duration-300"
            >
              View Our Work
            </a>
            <a
              href="/services"
              className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn About Services
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
