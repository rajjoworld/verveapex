import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 'remittance-software',
      name: 'Remittance Software',
      industry: 'FinTech',
      tagline: 'Secured 50,000+ Users, 30% Lower Fees',
      description: 'A secure, efficient cross-border money transfer platform with AI-powered fraud detection.',
      image: 'https://placehold.co/600x400/B065FF/ffffff?text=Remittance+Platform',
      technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'AWS'],
      results: ['50,000+ Users', '30% Lower Fees', '90% Faster Transfers']
    },
    {
      id: 'kyc-system',
      name: 'Document Verification System',
      industry: 'FinTech / Identity Verification',
      tagline: 'Reduced KYC Time by 75%',
      description: 'Automated KYC system with AI-powered OCR and facial recognition for streamlined onboarding.',
      image: 'https://placehold.co/600x400/B065FF/ffffff?text=KYC+Verification',
      technologies: ['React', 'Flutter', 'Python/Django', 'AWS Rekognition'],
      results: ['75% Time Reduction', '20% Higher Conversion', '99.5% Accuracy']
    },
    {
      id: 'pharmbot-ai',
      name: 'PharmBot AI',
      industry: 'HealthTech / AI',
      tagline: '40% Efficiency Improvement for Doctors',
      description: 'AI-powered conversational chatbot providing instant drug information and clinical decision support.',
      image: 'https://placehold.co/600x400/B065FF/ffffff?text=PharmBot+AI',
      technologies: ['Flutter', 'Python', 'Google Cloud AI', 'PostgreSQL'],
      results: ['40% Efficiency Gain', '15% Error Reduction', '95% User Satisfaction']
    },
    {
      id: 'hiring-platform',
      name: 'AI-Powered Hiring Platform',
      industry: 'HR Tech / AI',
      tagline: '30% Faster Hiring Process',
      description: 'Full-stack platform leveraging AI for resume analysis, candidate matching, and screening automation.',
      image: 'https://placehold.co/600x400/B065FF/ffffff?text=AI+Hiring+Platform',
      technologies: ['React', 'React Native', 'Python/Flask', 'TensorFlow'],
      results: ['30% Faster Hiring', '25% Better Quality', '50% Reduced Workload']
    }
  ];

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
            Our{' '}
            <span className="bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Concrete evidence of our expertise and the tangible impact we deliver for international clients. 
            Each project showcases our commitment to building scalable, innovative solutions.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="group bg-[#0A0A0A] border border-[#B065FF]/20 rounded-2xl hover:border-[#B065FF]/40 hover:shadow-2xl hover:shadow-[#B065FF]/10 transition-all duration-300 overflow-hidden block"
                >
                  <div className="aspect-w-16 aspect-h-10">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#B065FF]/20 text-[#B065FF] px-3 py-1 rounded-full text-sm font-medium border border-[#B065FF]/30">
                        {project.industry}
                      </span>
                      <span className="text-sm text-white/50">Case Study →</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#B065FF] transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-[#B065FF] font-semibold mb-4">
                      {project.tagline}
                    </p>
                    
                    <p className="text-white/70 mb-6">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-[#B065FF]/10 text-[#B065FF] px-2 py-1 rounded text-sm border border-[#B065FF]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {project.results.map((result, index) => (
                          <div key={index} className="text-center">
                            <div className="text-sm font-semibold text-[#B065FF]">{result}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven{' '}
              <span className="bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">
                Track Record
              </span>
            </h2>
            <p className="text-xl text-white/70">
              Our portfolio demonstrates consistent delivery of high-impact solutions across industries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '4+', label: 'Industries Served' },
              { value: '$5M+', label: 'Funding Raised by Clients' },
              { value: '100K+', label: 'End Users Served' },
              { value: 'AI/ML', label: 'Cutting-Edge Tech' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center bg-[#0A0A0A] border border-[#B065FF]/20 p-8 rounded-2xl hover:border-[#B065FF]/40 hover:shadow-lg hover:shadow-[#B065FF]/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-[#B065FF] mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industries We{' '}
              <span className="bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">
                Excel In
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'FinTech', icon: '💰', description: 'Payment solutions, trading platforms, digital banking' },
              { name: 'HealthTech', icon: '🏥', description: 'Medical apps, AI diagnostics, patient management' },
              { name: 'HR Tech', icon: '👥', description: 'Recruitment platforms, workforce management, AI matching' },
              { name: 'EdTech', icon: '📚', description: 'Learning platforms, skill assessment, educational AI' }
            ].map((industry, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 rounded-2xl border border-[#B065FF]/20 hover:border-[#B065FF]/40 hover:shadow-lg hover:shadow-[#B065FF]/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-white/70 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B065FF] to-[#6633CC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Create Your Success Story?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the ranks of successful entrepreneurs who trusted Verve Apex to bring their vision to life.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-white text-[#B065FF] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-[#B065FF] transition-all duration-300"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
