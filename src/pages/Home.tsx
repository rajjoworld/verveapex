import React from 'react';
import { Link } from 'react-router-dom';
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
      image: 'https://placehold.co/400x250/0ea5e9/ffffff?text=Remittance+App'
    },
    {
      id: 'kyc-system',
      name: 'Document Verification',
      industry: 'Identity Verification',
      tagline: 'Reduced KYC Time by 75%',
      image: 'https://placehold.co/400x250/0ea5e9/ffffff?text=KYC+System'
    },
    {
      id: 'pharmbot-ai',
      name: 'PharmBot AI',
      industry: 'HealthTech AI',
      tagline: '40% Efficiency Improvement for Doctors',
      image: 'https://placehold.co/400x250/0ea5e9/ffffff?text=PharmBot+AI'
    },
    {
      id: 'hiring-platform',
      name: 'AI Hiring Platform',
      industry: 'HR Tech AI',
      tagline: '30% Faster Hiring Process',
      image: 'https://placehold.co/400x250/0ea5e9/ffffff?text=AI+Hiring'
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
    <div className="min-h-screen">
      {/* Premium Extraordinary Hero Section */}
      <PremiumHero onCTAClick={handleCTAClick} />

      {/* Trust Signals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary-600">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">50+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">24h</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with Verve Apex */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unlock Your Digital Potential: The Verve Apex Advantage
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Offerings
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 rounded-2xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transforming Ideas into Impactful Products
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioProjects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden group"
              >
                <div className="aspect-w-16 aspect-h-10">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary-600 mb-2">{project.industry}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm">{project.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            What Our Clients Say
          </h2>
          <blockquote className="text-xl lg:text-2xl text-primary-100 mb-8">
            "Verve Apex transformed our idea into a market-ready fintech platform in just 4 months. 
            Their expertise in both technology and business strategy helped us secure $2M in seed funding. 
            Exceptional quality at competitive rates."
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src="https://placehold.co/80x80/ffffff/000000?text=Client"
              alt="Client"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="text-left">
              <div className="text-white font-semibold">Sarah Johnson</div>
              <div className="text-primary-200">CEO, FinTech Startup</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join successful entrepreneurs who trusted Verve Apex to bring their ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="border border-primary-600 text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              Explore Our Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
