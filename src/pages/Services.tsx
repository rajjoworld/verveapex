import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const mvpPackages = [
    {
      title: 'Basic Validation MVP',
      goal: 'Rapidly test core business hypotheses and validate market demand',
      features: [
        'User authentication & profiles',
        'Single key feature implementation',
        'Basic data display & management',
        'Simple admin dashboard',
        'Basic analytics integration'
      ],
      techStack: 'Flutter + Firebase',
      idealFor: 'Pre-seed startups, entrepreneurs validating a new idea',
      price: 'Starting from $15,000'
    },
    {
      title: 'Feature-Rich Product',
      goal: 'Build a robust, scalable product for market entry and user acquisition',
      features: [
        'Comprehensive core features',
        'Advanced UI/UX design',
        'Payment gateway integration',
        'Third-party API integrations',
        'Admin dashboards & analytics',
        'Cloud infrastructure setup'
      ],
      techStack: 'Flutter/React Native + MERN/Python + AWS/Azure',
      idealFor: 'Seed-stage startups, growing businesses ready for full launch',
      price: 'Starting from $35,000'
    },
    {
      title: 'Ongoing Growth & Support',
      goal: 'Long-term partnership for continuous product evolution and maintenance',
      features: [
        'New feature implementation',
        'Performance optimization',
        'Security updates & monitoring',
        'Bug fixes & maintenance',
        'Scalability enhancements',
        'User feedback analysis'
      ],
      techStack: 'Technology agnostic - we work with your existing stack',
      idealFor: 'Clients seeking a reliable, long-term technical partner',
      price: 'Custom monthly retainer'
    }
  ];

  const capabilities = [
    {
      title: 'Mobile Development',
      description: 'Crafting intuitive and high-performance apps for iOS & Android with Flutter & React Native. Benefit from 30-40% cost savings and faster development cycles.',
      icon: '📱',
      technologies: ['Flutter', 'React Native', 'iOS Native', 'Android Native']
    },
    {
      title: 'Web Development',
      description: 'Building dynamic and responsive web applications with React.js, Vue.js, and modern frameworks.',
      icon: '🌐',
      technologies: ['React.js', 'Vue.js', 'Next.js', 'TypeScript']
    },
    {
      title: 'Backend Development',
      description: 'Designing and implementing robust, secure, and scalable server-side logic and APIs with Node.js and Python/Django.',
      icon: '⚙️',
      technologies: ['Node.js', 'Python/Django', 'Express.js', 'GraphQL']
    },
    {
      title: 'Cloud & DevOps',
      description: 'Leveraging Firebase, AWS, and Azure for secure hosting, efficient deployment, and scalable infrastructure.',
      icon: '☁️',
      technologies: ['AWS', 'Azure', 'Firebase', 'Docker', 'Kubernetes']
    },
    {
      title: 'Third-Party Integrations',
      description: 'Seamlessly connecting your product with essential services like payment gateways, social media, and analytics.',
      icon: '🔗',
      technologies: ['Stripe', 'PayPal', 'Google Analytics', 'Social APIs']
    },
    {
      title: 'Strategic UI/UX Design',
      description: 'Creating engaging, user-centric interfaces that drive adoption and delight your audience.',
      icon: '🎨',
      technologies: ['Figma', 'Adobe XD', 'User Research', 'Prototyping']
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing protocols to ensure a bug-free, high-performance, and reliable user experience.',
      icon: '✅',
      technologies: ['Automated Testing', 'Manual Testing', 'Performance Testing']
    },
    {
      title: 'Post-Launch Support',
      description: 'Beyond launch, we help you analyze user feedback, prioritize feature updates, and strategically iterate for continuous improvement.',
      icon: '📈',
      technologies: ['Analytics', 'User Feedback', 'A/B Testing', 'Monitoring']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Product Journey, <span className="text-primary-600">Simplified</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on solving a single, core user problem exceptionally well for MVPs, ensuring real user value 
            and avoiding the "hollow MVP" problem. Our agile, client-centric approach puts your success first.
          </p>
        </div>
      </section>

      {/* MVP Development Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              From Concept to Market: Our Tiered Development Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mvpPackages.map((pkg, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-primary-600 font-semibold text-lg">{pkg.price}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Goal:</h4>
                  <p className="text-gray-600 text-sm">{pkg.goal}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <p className="text-gray-600 text-sm">{pkg.techStack}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Ideal For:</h4>
                  <p className="text-gray-600 text-sm">{pkg.idealFor}</p>
                </div>

                <Link
                  to="/contact"
                  className="block w-full text-center bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Stack Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mastering Every Layer of Your Digital Product
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{capability.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{capability.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{capability.description}</p>
                <div className="flex flex-wrap gap-1">
                  {capability.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Code vs Low-Code */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Build for Tomorrow: Why Custom Code Outperforms Low-Code
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Appeal of Low-Code</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">⚠️</span>
                    <span className="text-gray-600">Quick initial setup and speed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">⚠️</span>
                    <span className="text-gray-600">Lower upfront costs</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Low-Code Limitations</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-600">Limited customization options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-600">Vendor lock-in and dependency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-600">Scalability bottlenecks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-600">Security vulnerabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-600">Complex integration challenges</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Verve Apex Custom Code Advantage</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Complete customization freedom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">True scalability for growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Enterprise-grade security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Seamless third-party integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Future-proof architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">No vendor dependencies</span>
                </li>
              </ul>
              
              <div className="bg-primary-50 p-6 rounded-xl">
                <h4 className="font-semibold text-primary-900 mb-2">Long-term Value</h4>
                <p className="text-primary-700 text-sm">
                  Our custom-coded solutions provide superior ROI through reduced technical debt, 
                  easier maintenance, and unlimited growth potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Ready to Build Your Product?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss your project and create a custom solution that drives real business results.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
