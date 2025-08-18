import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 'remittance-software',
      name: 'Remittance Software',
      industry: 'FinTech',
      tagline: 'Secured 50,000+ Users, 30% Lower Fees',
      description: 'A secure, efficient cross-border money transfer platform with AI-powered fraud detection.',
      image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Remittance+Platform',
      technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'AWS'],
      results: ['50,000+ Users', '30% Lower Fees', '90% Faster Transfers']
    },
    {
      id: 'kyc-system',
      name: 'Document Verification System',
      industry: 'FinTech / Identity Verification',
      tagline: 'Reduced KYC Time by 75%',
      description: 'Automated KYC system with AI-powered OCR and facial recognition for streamlined onboarding.',
      image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=KYC+Verification',
      technologies: ['React', 'Flutter', 'Python/Django', 'AWS Rekognition'],
      results: ['75% Time Reduction', '20% Higher Conversion', '99.5% Accuracy']
    },
    {
      id: 'pharmbot-ai',
      name: 'PharmBot AI',
      industry: 'HealthTech / AI',
      tagline: '40% Efficiency Improvement for Doctors',
      description: 'AI-powered conversational chatbot providing instant drug information and clinical decision support.',
      image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=PharmBot+AI',
      technologies: ['Flutter', 'Python', 'Google Cloud AI', 'PostgreSQL'],
      results: ['40% Efficiency Gain', '15% Error Reduction', '95% User Satisfaction']
    },
    {
      id: 'hiring-platform',
      name: 'AI-Powered Hiring Platform',
      industry: 'HR Tech / AI',
      tagline: '30% Faster Hiring Process',
      description: 'Full-stack platform leveraging AI for resume analysis, candidate matching, and screening automation.',
      image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=AI+Hiring+Platform',
      technologies: ['React', 'React Native', 'Python/Flask', 'TensorFlow'],
      results: ['30% Faster Hiring', '25% Better Quality', '50% Reduced Workload']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-600">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Concrete evidence of our expertise and the tangible impact we deliver for international clients. 
            Each project showcases our commitment to building scalable, innovative solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
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
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.industry}
                    </span>
                    <span className="text-sm text-gray-500">Case Study →</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-primary-600 font-semibold mb-4">
                    {project.tagline}
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {project.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-sm font-semibold text-primary-600">{result}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven Track Record
            </h2>
            <p className="text-xl text-gray-600">
              Our portfolio demonstrates consistent delivery of high-impact solutions across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">4+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">$5M+</div>
              <div className="text-gray-600">Funding Raised by Clients</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">100K+</div>
              <div className="text-gray-600">End Users Served</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">AI/ML</div>
              <div className="text-gray-600">Cutting-Edge Tech</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industries We Excel In
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'FinTech', icon: '💰', description: 'Payment solutions, trading platforms, digital banking' },
              { name: 'HealthTech', icon: '🏥', description: 'Medical apps, AI diagnostics, patient management' },
              { name: 'HR Tech', icon: '👥', description: 'Recruitment platforms, workforce management, AI matching' },
              { name: 'EdTech', icon: '📚', description: 'Learning platforms, skill assessment, educational AI' }
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 rounded-2xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join the ranks of successful entrepreneurs who trusted Verve Apex to bring their vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
