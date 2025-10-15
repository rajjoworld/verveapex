import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { CaseStudyNewsletterSignup } from './NewsletterSignup';
import { CaseStudySocialShare } from './SocialShare';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  timeline: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  featured: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-wallet',
    title: 'Secure Digital Wallet Platform',
    industry: 'FinTech',
    challenge: 'A fintech startup needed a secure, scalable digital wallet with KYC/AML compliance, real-time transfers, and advanced analytics. They had a basic MVP but needed enterprise-grade security and performance.',
    solution: 'Built a comprehensive wallet platform with PCI DSS compliance, biometric authentication, multi-currency support, and real-time transaction monitoring. Integrated with major payment processors and implemented advanced fraud detection.',
    results: [
      {
        metric: 'User Onboarding',
        value: '40% faster',
        description: 'Reduced KYC completion time from 15 to 9 minutes'
      },
      {
        metric: 'Transaction Volume',
        value: '300% increase',
        description: 'Monthly transactions grew from 10K to 40K'
      },
      {
        metric: 'Security Incidents',
        value: '0 reported',
        description: 'Zero security breaches in 18 months of operation'
      }
    ],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
    timeline: '4 months',
    featured: true,
    testimonial: {
      quote: 'Verve Apex delivered beyond our expectations. The wallet platform handles millions in transactions daily with zero downtime. Their security-first approach gave us the confidence to scale aggressively.',
      author: 'Sarah Chen',
      role: 'CTO',
      company: 'PayFlow Technologies'
    }
  },
  {
    id: 'healthcare-telemedicine',
    title: 'Telemedicine Platform for Rural Healthcare',
    industry: 'Healthcare',
    challenge: 'A healthcare provider needed to connect rural patients with specialists through a HIPAA-compliant telemedicine platform with appointment scheduling, video consultations, and prescription management.',
    solution: 'Developed a comprehensive telemedicine solution with secure video calls, electronic prescription system, patient records management, and integration with major health insurance providers.',
    results: [
      {
        metric: 'Patient Reach',
        value: '5x increase',
        description: 'Expanded from 1,000 to 5,000 monthly consultations'
      },
      {
        metric: 'Wait Times',
        value: '60% reduction',
        description: 'Average specialist appointment wait reduced from 3 weeks to 5 days'
      },
      {
        metric: 'Patient Satisfaction',
        value: '4.8/5 rating',
        description: 'Based on 2,000+ consultation reviews'
      }
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'WebRTC', 'Twilio', 'Docker'],
    timeline: '5 months',
    featured: false,
    testimonial: {
      quote: 'The telemedicine platform transformed how we deliver care in rural areas. Patients can now access specialists without traveling hours, and our doctors can serve 3x more patients daily.',
      author: 'Dr. Michael Rodriguez',
      role: 'Medical Director',
      company: 'Rural Health Network'
    }
  },
  {
    id: 'ecommerce-marketplace',
    title: 'Multi-Vendor E-commerce Marketplace',
    industry: 'E-commerce',
    challenge: 'An emerging marketplace needed a scalable platform to connect vendors with customers, featuring advanced search, real-time inventory, payment processing, and vendor dashboards.',
    solution: 'Built a robust marketplace with vendor management system, advanced product catalog, real-time inventory sync, integrated payment processing, and comprehensive analytics dashboard.',
    results: [
      {
        metric: 'GMV',
        value: '$2.5M',
        description: 'Monthly gross merchandise value achieved within 6 months'
      },
      {
        metric: 'Vendor Onboarding',
        value: '200+ vendors',
        description: 'Successfully onboarded and integrated 200+ vendors'
      },
      {
        metric: 'Order Fulfillment',
        value: '98% accuracy',
        description: 'Maintained 98% order accuracy with automated systems'
      }
    ],
    technologies: ['Next.js', 'Python', 'Django', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
    timeline: '6 months',
    featured: false,
    testimonial: {
      quote: 'The marketplace platform exceeded our wildest expectations. We went from concept to $2.5M monthly GMV in just 6 months. The vendor tools are intuitive and the customer experience is seamless.',
      author: 'Jennifer Park',
      role: 'CEO',
      company: 'MarketHub'
    }
  }
];

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 ${
        caseStudy.featured ? 'ring-2 ring-primary-500/20' : ''
      }`}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{caseStudy.title}</h3>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
              {caseStudy.industry}
            </span>
          </div>
          {caseStudy.featured && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400">
              ⭐ Featured
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {caseStudy.timeline}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {caseStudy.technologies.length} technologies
          </span>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="p-6 space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-red-400 mb-2">Challenge</h4>
          <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.challenge}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-green-400 mb-2">Solution</h4>
          <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.solution}</p>
        </div>
      </div>

      {/* Results */}
      <div className="px-6 pb-6">
        <h4 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Key Results
        </h4>
        <div className="grid grid-cols-1 gap-3">
          {caseStudy.results.map((result, idx) => (
            <div key={idx} className="bg-gray-800/30 rounded-lg p-3">
              <div className="flex justify-between items-start mb-1">
                <span className="text-white font-medium text-sm">{result.metric}</span>
                <span className="text-primary-400 font-bold text-sm">{result.value}</span>
              </div>
              <p className="text-gray-400 text-xs">{result.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <div className="px-6 pb-6 border-t border-gray-700/50">
          <blockquote className="text-gray-300 text-sm italic mb-3">
            "{caseStudy.testimonial.quote}"
          </blockquote>
          <div className="text-xs text-gray-400">
            <div className="font-medium text-white">{caseStudy.testimonial.author}</div>
            <div>{caseStudy.testimonial.role}, {caseStudy.testimonial.company}</div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="px-6 pb-6">
        <CaseStudySocialShare
          url={`https://verveapex.com/case-studies/${caseStudy.id}`}
          title={caseStudy.title}
          description={caseStudy.challenge}
        />
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 border border-primary-500/30 rounded-lg transition-colors text-sm font-medium mt-4">
          <ExternalLink className="w-4 h-4" />
          View Full Case Study
        </button>
      </div>
    </motion.div>
  );
};

interface CaseStudiesProps {
  showFeaturedOnly?: boolean;
  maxItems?: number;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({
  showFeaturedOnly = false,
  maxItems
}) => {
  const filteredStudies = showFeaturedOnly
    ? caseStudies.filter(study => study.featured)
    : caseStudies;

  const displayedStudies = maxItems
    ? filteredStudies.slice(0, maxItems)
    : filteredStudies;

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <CheckCircle className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-medium">Case Studies</span>
          </motion.div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped startups and enterprises build successful products that drive real business outcomes.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayedStudies.map((study, index) => (
            <CaseStudyCard key={study.id} caseStudy={study} index={index} />
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <CaseStudyNewsletterSignup />
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CaseStudyNewsletterSignup />
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;