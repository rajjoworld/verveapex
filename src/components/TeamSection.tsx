import React from 'react';
import { motion } from 'framer-motion';
import Atropos from 'atropos/react';
import { Crown, Database, Shield, Smartphone, Users, CheckCircle } from 'lucide-react';

const teamMembers = [
  { name: 'Rajkumar', role: 'Founder & Team Lead', specialty: 'Full-stack, 6+ yrs', icon: Crown, color: 'from-yellow-400 to-orange-500', category: 'leadership' },
  { name: 'Utkarsh', role: 'Backend Lead', specialty: '8+ yrs (scalable systems)', icon: Database, color: 'from-blue-400 to-blue-600', category: 'backend' },
  { name: 'Aditya', role: 'Backend', specialty: '6+ yrs (payments & infra)', icon: Database, color: 'from-blue-400 to-blue-600', category: 'backend' },
  { name: 'Priya', role: 'DevOps/QA', specialty: '6+ yrs', icon: Shield, color: 'from-green-400 to-green-600', category: 'devops' },
  { name: 'Mohsin', role: 'Frontend', specialty: '3+ yrs (React/Flutter)', icon: Smartphone, color: 'from-purple-400 to-purple-600', category: 'frontend' },
  { name: 'Nayan', role: 'Frontend', specialty: '4+ yrs', icon: Smartphone, color: 'from-purple-400 to-purple-600', category: 'frontend' },
  { name: 'Himanshu', role: 'PM', specialty: '6+ yrs', icon: Users, color: 'from-red-400 to-red-600', category: 'pm' },
  { name: 'Nisin', role: 'PM', specialty: '8+ yrs', icon: Users, color: 'from-red-400 to-red-600', category: 'pm' },
  { name: 'Anshuman', role: 'PM', specialty: '8+ yrs', icon: Users, color: 'from-red-400 to-red-600', category: 'pm' },
  { name: 'Shrikant', role: 'QA', specialty: '5+ yrs', icon: CheckCircle, color: 'from-green-400 to-green-600', category: 'qa' },
  { name: 'Sandhesh', role: 'QA', specialty: '5+ yrs', icon: CheckCircle, color: 'from-green-400 to-green-600', category: 'qa' },
];

const categoryStats = {
  leadership: 1,
  backend: 2,
  frontend: 2,
  devops: 1,
  pm: 3,
  qa: 2
};

const TeamSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#0A0A0A] border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
            Meet Our Team
          </h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Expert developers and product managers ready to bring your vision to life.
          </p>
        </motion.div>

        {/* Team Stats Overview */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(categoryStats).map(([category, count], index) => (
            <div key={category} className="flex items-center gap-2 px-3 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full">
              <span className="text-primary-400 text-xs font-medium capitalize">{category}</span>
              <span className="text-white/80 text-xs">×{count}</span>
            </div>
          ))}
        </motion.div>

        {/* Compact Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
          {teamMembers.map((member, i) => {
            const IconComponent = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
              >
                <Atropos
                  className="group"
                  data-atropos-offset="3"
                >
                  <div
                    className="relative bg-black/20 backdrop-blur-xl border border-gray-700/50 p-3 rounded-lg hover:border-primary-500/50 transition-all duration-500 hover:bg-black/30 hover:shadow-2xl hover:shadow-black/50 bg-gradient-to-br from-black/20 to-black/10"
                    data-atropos-offset="0"
                  >
                    {/* Floating orb */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10 blur-xl group-hover:blur-2xl transition-all" data-atropos-offset="2" />
                    {/* Role indicator */}
                    <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center shadow-lg`} data-atropos-offset="5">
                      <IconComponent className="w-2.5 h-2.5 text-white" />
                    </div>

                    {/* Avatar */}
                    <div className="flex items-center gap-2 mb-2" data-atropos-offset="2">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-white font-bold text-xs shadow-md`}>
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-sm truncate">{member.name}</h3>
                        <p className="text-primary-400 text-xs truncate">{member.role}</p>
                      </div>
                    </div>

                    {/* Specialty */}
                    <p className="text-white/70 text-xs leading-tight" data-atropos-offset="1">
                      {member.specialty}
                    </p>
                  </div>
                </Atropos>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-2 py-1 bg-primary-500/10 border border-primary-500/30 text-primary-400 rounded-full text-xs font-medium">
              NDA on request
            </span>
            <span className="px-2 py-1 bg-primary-500/10 border border-primary-500/30 text-primary-400 rounded-full text-xs font-medium">
              Code audit available
            </span>
            <span className="px-2 py-1 bg-primary-500/10 border border-primary-500/30 text-primary-400 rounded-full text-xs font-medium">
              1 month free support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;