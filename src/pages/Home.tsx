import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PremiumHero from '../components/PremiumHero';

const Home: React.FC = () => {
  const handleCTAClick = () => {
    const element = document.querySelector('[href="/contact"]');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioProjects = [
    {
      id: 'remittance-software',
      name: 'Remittance Software',
      industry: 'FinTech Innovation',
      tagline: 'Secured 50,000+ Users, 30% Lower Fees',
      image: 'https://placehold.co/400x250/B065FF/ffffff?text=Remittance+App'
    },
    {
      id: 'kyc-system',
      name: 'Document Verification',
      industry: 'Identity Verification',
      tagline: 'Reduced KYC Time by 75%',
      image: 'https://placehold.co/400x250/6633CC/ffffff?text=KYC+System'
    },
    {
      id: 'pharmbot-ai',
      name: 'PharmBot AI',
      industry: 'HealthTech AI',
      tagline: '40% Efficiency Improvement for Doctors',
      image: 'https://placehold.co/400x250/B065FF/ffffff?text=PharmBot+AI'
    },
    {
      id: 'hiring-platform',
      name: 'AI Hiring Platform',
      industry: 'HR Tech AI',
      tagline: '30% Faster Hiring Process',
      image: 'https://placehold.co/400x250/6633CC/ffffff?text=AI+Hiring'
    }
  ];

  const services = [
    {
      title: 'MVP & Product Development',
      description: 'From concept validation to market-ready products, we build scalable solutions that grow with your business.',
      icon: '🚀'
    },
    {
      title: 'Full-Stack Capabilities',
      description: 'Mobile, web, backend, cloud, and APIs - we handle every layer of your digital product with expertise.',
      icon: '⚡'
    },
    {
      title: 'Post-Launch & Growth Support',
      description: 'Continuous partnership for feature updates, optimization, and strategic product evolution.',
      icon: '📈'
    }
  ];

  const advantages = [
    {
      title: 'Global Expertise, Localized Value',
      description: 'Leverage senior-level talent at competitive international rates, ensuring significant cost savings without compromising quality.'
    },
    {
      title: 'End-to-End Product Realization',
      description: 'From concept to launch and beyond, we handle mobile, web, backend, and cloud, providing a seamless development journey.'
    },
    {
      title: 'Your Dedicated Tech Partner',
      description: 'Benefit from a single, expert point of contact who understands your business goals and manages the entire project lifecycle.'
    },
    {
      title: 'Built for Scale, Designed for Impact',
      description: 'We craft custom, robust solutions that grow with your ambition, ensuring long-term viability and market success.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Premium Extraordinary Hero Section */}
      <PremiumHero onCTAClick={handleCTAClick} />

      {/* Trust Signals */}
      <section className="py-16 bg-[#0A0A0A] border-t border-[#B065FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">15+</div>
              <div className="text-white/70">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">50+</div>
              <div className="text-white/70">Projects Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">98%</div>
              <div className="text-white/70">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">24h</div>
              <div className="text-white/70">Response Time</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner with Verve Apex */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Unlock Your Digital Potential: The{' '}
              <span className="bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">
                Verve Apex Advantage
              </span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div 
                key={index} 
                className="bg-[#0A0A0A] border border-[#B065FF]/20 p-8 rounded-2xl hover:border-[#B065FF]/40 hover:shadow-lg hover:shadow-[#B065FF]/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-[#B065FF] mb-4">{advantage.title}</h3>
                <p className="text-white/70">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Core Offerings
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="text-center p-8 rounded-2xl border border-[#B065FF]/20 hover:border-[#B065FF]/40 hover:shadow-lg hover:shadow-[#B065FF]/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-block text-[#B065FF] font-semibold hover:text-white transition-colors"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transforming Ideas into{' '}
              <span className="bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">
                Impactful Products
              </span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="block bg-[#0A0A0A] border border-[#B065FF]/20 rounded-2xl hover:border-[#B065FF]/40 hover:shadow-lg hover:shadow-[#B065FF]/10 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-w-16 aspect-h-10">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-[#B065FF] mb-2">{project.industry}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
                    <p className="text-white/70 text-sm">{project.tagline}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-[#B065FF]/20 to-[#6633CC]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.blockquote 
            className="text-xl lg:text-2xl text-white/80 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            "Verve Apex transformed our idea into a market-ready fintech platform in just 4 months. 
            Their expertise in both technology and business strategy helped us secure $2M in seed funding. 
            Exceptional quality at competitive rates."
          </motion.blockquote>
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://placehold.co/80x80/B065FF/ffffff?text=Client"
              alt="Client"
              className="w-16 h-16 rounded-full mr-4 border-2 border-[#B065FF]"
            />
            <div className="text-left">
              <div className="text-white font-semibold">Sarah Johnson</div>
              <div className="text-[#B065FF]">CEO, FinTech Startup</div>
            </div>
          </motion.div>
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
            Ready to Build Your Vision?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join successful entrepreneurs who trusted Verve Apex to bring their ideas to life.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-[#B065FF] to-[#6633CC] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-[#B065FF]/30 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="inline-block border border-[#B065FF] text-[#B065FF] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#B065FF]/10 transition-all duration-300"
              >
                Explore Our Success Stories
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
