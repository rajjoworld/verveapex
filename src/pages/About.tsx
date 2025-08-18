import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-primary-600">Verve Apex</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your premier full-stack technology partner, empowering international clients to transform 
            ideas into impactful, scalable digital products.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
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
            </div>
            <div>
              <img
                src="https://placehold.co/600x400/E0F2F7/000000?text=Our+Journey"
                alt="Our Journey"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            "To empower global innovators with cutting-edge, cost-effective technology solutions 
            that transform ideas into impactful, scalable products. We believe every entrepreneur 
            deserves access to world-class technical expertise, regardless of their location or budget."
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Lead */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet the Lead</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">John Smith</h3>
                    <p className="text-primary-600 font-semibold mb-6">Founder & Lead Architect / Product Strategist</p>
                    <div className="space-y-4 text-gray-600">
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
                        <span key={skill} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center p-8">
                  <img
                    src="https://placehold.co/300x300/0ea5e9/ffffff?text=John+Smith"
                    alt="John Smith"
                    className="w-64 h-64 rounded-full shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              A proven methodology that ensures quality, transparency, and successful project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center p-6 rounded-2xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-3">
                    {step.step}
                  </div>
                  <div className="text-3xl">{step.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why International Clients Choose Verve Apex</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cost-Effective Excellence</h3>
              <p className="text-primary-100">Senior-level expertise at 60-70% less than US/UK agencies, without compromising quality.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Communication</h3>
              <p className="text-primary-100">Fluent English, international business experience, and timezone flexibility for seamless collaboration.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Startup-Focused</h3>
              <p className="text-primary-100">Deep understanding of startup challenges, funding cycles, and the need for rapid, strategic development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your vision and create a roadmap for bringing your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Start the Conversation
            </Link>
            <Link
              to="/portfolio"
              className="border border-primary-600 text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
