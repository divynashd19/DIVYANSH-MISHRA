import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certs = [
    {
      title: 'Deloitte Data Analytics',
      issuer: 'Deloitte',
      description: 'Hands-on training in business intelligence, dashboard visualization, and formulating data-driven strategy proposals for complex enterprise scenarios.',
      color: 'from-[#86bc25]/20 to-transparent',
      borderColor: 'group-hover:border-[#86bc25]/40',
      textColor: 'text-[#86bc25]',
    },
    {
      title: 'Tata Data Analytics',
      issuer: 'Tata Group',
      description: 'Focused on enterprise-level data modeling, executive dashboard design, and translating operational requirements into actionable visual narratives.',
      color: 'from-[#005a9c]/20 to-transparent',
      borderColor: 'group-hover:border-[#005a9c]/40',
      textColor: 'text-[#00c0ff]',
    },
    {
      title: 'IBM Data Analytics',
      issuer: 'IBM',
      description: 'Comprehensive curriculum covering data manipulation, statistical analysis frameworks, machine learning models, and interactive dashboard tools.',
      color: 'from-[#0f62fe]/20 to-transparent',
      borderColor: 'group-hover:border-[#0f62fe]/40',
      textColor: 'text-[#0f62fe]',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="certifications">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-pink/5 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-accent-pink uppercase tracking-widest mb-3"
          >
            Verified Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Certifications
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {certs.map((cert) => (
            <motion.div key={cert.title} variants={itemVariants} className="group">
              <GlassCard className={`h-full flex flex-col justify-between hover:scale-[1.02] border border-white/5 ${cert.borderColor}`}>
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} border border-white/5 flex items-center justify-center mb-6`}>
                    <ShieldCheck className={cert.textColor} size={28} />
                  </div>
                  
                  <span className={`text-xs font-bold ${cert.textColor} tracking-wider uppercase block mb-2`}>
                    {cert.issuer}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">
                  <CheckCircle2 size={14} className={cert.textColor} /> Verified Credential
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
