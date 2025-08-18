import React, { useState } from 'react';

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Build Your <span className="text-primary-600">Vision?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Schedule a free consultation to discuss your project and discover how Verve Apex 
            can help you achieve your goals.
          </p>
          <div className="bg-white p-4 rounded-xl shadow-lg inline-block">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-primary-600">Quick Response:</span> We typically respond to all inquiries within 24 business hours
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Consultation</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <p className="text-green-800">
                      Thank you for your inquiry! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-800">
                      There was an error submitting your form. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Professional Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                        Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Get My Free Consultation'}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary-600">📧</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">contact@verveapex.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary-600">🌍</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">Based in India, serving clients globally</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary-600">⏱️</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Response Time</p>
                        <p className="text-gray-600">Within 24 business hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-primary-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">What to Expect Next</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Initial Response</p>
                        <p className="text-gray-600 text-sm">We'll acknowledge your inquiry within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Discovery Call</p>
                        <p className="text-gray-600 text-sm">30-minute consultation to understand your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Custom Proposal</p>
                        <p className="text-gray-600 text-sm">Detailed project plan and transparent pricing</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-white p-8 rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900 mb-1">How much does a typical MVP cost?</p>
                      <p className="text-gray-600 text-sm">MVPs typically range from $15,000-$50,000 depending on complexity and features.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">What's your typical timeline?</p>
                      <p className="text-gray-600 text-sm">Most MVPs are delivered within 8-16 weeks, depending on scope and requirements.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Do you work across time zones?</p>
                      <p className="text-gray-600 text-sm">Yes, we accommodate US, UK, and Australian business hours for seamless communication.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Not Ready to Start Yet?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our portfolio and services to learn more about how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/portfolio"
              className="bg-white border border-primary-600 text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              View Our Work
            </a>
            <a
              href="/services"
              className="bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Learn About Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
