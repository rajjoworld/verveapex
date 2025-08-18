import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const values = [
    {
      title: 'Excellence & Precision',
      description: 'Commitment to high-quality, meticulously crafted solutions that exceed expectations.',
      icon: '⭐'
    },
    {
      title: 'Transparency & Integrity',
      description: 'Open communication, honest pricing, and ethical practices in all our interactions.',
      icon: '🤝'
    },
    {
      title: 'Partnership & Collaboration',
      description: 'Working hand-in-hand with clients, truly understanding their vision and goals.',
      icon: '🤜🤛'
    },
    {
      title: 'Innovation & Adaptability',
      description: 'Embracing new technologies and flexibly responding to evolving market needs.',
      icon: '🚀'
    },
    {
      title: 'Impact & Growth',
      description: 'Focused on delivering tangible business results and fostering long-term client success.',
      icon: '📈'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Understanding your vision, market, and technical requirements through comprehensive analysis.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Bringing ideas to life visually with user-centric design and interactive prototypes.',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Agile Development Sprints',
      description: 'Iterative building with regular demos, feedback loops, and continuous refinement.',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Rigorous QA & Testing',
      description: 'Ensuring flawless performance through comprehensive testing and quality assurance.',
      icon: '✅'
    },
    {
      step: '05',
      title: 'Launch & Deployment',
      description: 'Getting your product to market with seamless deployment and launch support.',
      icon: '🚀'
    },
    {
      step: '06',
      title: 'Post-Launch Support & Evolution',
      description: 'Continuous improvement and partnership for ongoing success and growth.',
      icon: '🔄'
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
            About{' '}
            <span className="bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">
              Verve Apex
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your premier full-stack technology partner, empowering international clients to transform 
            ideas into impactful, scalable digital products.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Verve Apex was born from a simple yet powerful vision: to bridge the gap between 
                  ambitious international entrepreneurs and world-class technical expertise, without 
                  the premium price tag of traditional agencies.
                </p>
                <p>
                  As seasoned technology leaders with over 15 years of experience in full-stack 
                  development and team management, we recognized a critical need in the market. 
                  Talented founders worldwide had groundbreaking ideas but faced barriers in 
                  accessing affordable, high-quality technical partnership.
                </p>
                <p>
                  We founded Verve Apex to democratize access to senior-level development expertise, 
                  enabling startups and growing businesses to compete on a global scale without 
                  compromising on quality or breaking their budget.
                </p>
                <p>
                  Today, we're proud to be the trusted technical partner for innovative companies 
                  across the US, UK, Canada, and Australia, helping them launch successful products 
                  and secure funding for their growth.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://placehold.co/600x400/B065FF/ffffff?text=Our+Journey"
                alt="Our Journey"
                className="rounded-2xl shadow-xl border border-[#B065FF]/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">
              Mission
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            "To empower global innovators with cutting-edge, cost-effective technology solutions 
            that transform ideas into impactful, scalable products. We believe every entrepreneur 
            deserves access to world-class technical expertise, regardless of their location or budget."
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-white/70">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-[#0A0A0A] border border-[#B065FF]/20 p-8 rounded-2xl hover:border-[#B065FF]/40 hover:shadow-lg hover:shadow-[#B065FF]/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{value.title}</h3>
                <p className="text-white/70 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Lead */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Meet the{' '}
              <span className="bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">
                Lead
              </span>
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-[#0A0A0A] border border-[#B065FF]/20 rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">John Smith</h3>
                    <p className="text-[#B065FF] font-semibold mb-6">Founder & Lead Architect / Product Strategist</p>
                    <div className="space-y-4 text-white/70">
                      <p>
                        With over 15 years of experience as a team lead and full-stack architect, 
                        John has successfully guided dozens of startups from concept to market success.
                      </p>
                      <p>
                        His expertise spans the entire technology stack, from mobile and web development 
                        to cloud infrastructure and AI integration. But what sets him apart is his deep 
                        understanding of business strategy and product development lifecycle.
                      </p>
                      <p>
                        John's passion lies in helping entrepreneurs turn their vision into reality, 
                        providing not just technical execution but strategic guidance to ensure 
                        long-term success and scalability.
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {['Team Leadership', 'Full-Stack Development', 'Product Strategy', 'Startup Mentoring'].map((skill) => (
                        <span key={skill} className="bg-[#B065FF]/20 text-[#B065FF] px-3 py-1 rounded-full text-sm border border-[#B065FF]/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#B065FF]/20 to-[#6633CC]/20 flex items-center justify-center p-8">
                  <img
                    src="https://placehold.co/300x300/B065FF/ffffff?text=John+Smith"
                    alt="John Smith"
                    className="w-64 h-64 rounded-full shadow-2xl border-4 border-[#B065FF]/30"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-[#B065FF] to-white bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-white/70">
              A proven methodology that ensures quality, transparency, and successful project delivery
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 rounded-2xl border border-[#B065FF]/20 hover:border-[#B065FF]/40 hover:shadow-lg hover:shadow-[#B065FF]/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#B065FF] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-3">
                    {step.step}
                  </div>
                  <div className="text-3xl">{step.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-[#B065FF] to-[#6633CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why International Clients Choose Verve Apex</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '💰', title: 'Cost-Effective Excellence', description: 'Senior-level expertise at 60-70% less than US/UK agencies, without compromising quality.' },
              { icon: '🌍', title: 'Global Communication', description: 'Fluent English, international business experience, and timezone flexibility for seamless collaboration.' },
              { icon: '🎯', title: 'Startup-Focused', description: 'Deep understanding of startup challenges, funding cycles, and the need for rapid, strategic development.' }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </motion.div>
            ))}
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
            Ready to Partner with Us?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss your vision and create a roadmap for bringing your ideas to life.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-[#B065FF] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#B065FF]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#B065FF]/20"
            >
              Start the Conversation
            </Link>
            <Link
              to="/portfolio"
              className="border border-[#B065FF] text-[#B065FF] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#B065FF] hover:text-white transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
