import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { motion } from 'framer-motion';

export default function Experience() {
  const jobs = [
    {
      role: 'Software Engineer',
      company: 'Townmanor Technologies P-Ltd',
      duration: 'Apr 2026 - Present',
      location: 'Kanpur Nagar, UP, India (Remote/Hybrid)',
      type: 'Engineering & Software Industry',
      color: 'from-accent-blue/15 to-transparent',
      borderColor: 'group-hover:border-accent-blue/40',
      bullets: [
        'Engineered responsive web applications and interface modules using React.js and modern Tailwind CSS.',
        'Collaborated with design and product teams to translate pixel-perfect UI/UX assets into performant frontend code.',
        'Optimized frontend asset compilation and loading behaviors, increasing Core Web Vitals scoring.',
        'Developed backend API connectors to structure operational datasets and secure application pathways.'
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="experience">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-blue/10 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3"
          >
            Work History
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Professional Experience
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-pink rounded-full mt-4" />
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12 py-2 space-y-12">
          {jobs.map((job, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute -left-[43px] md:-left-[59px] top-6 w-5 h-5 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple border-4 border-dark-bg z-10 shadow-lg"
              />

              <GlassCard className={`max-w-4xl hover:scale-[1.01] border border-white/5 ${job.borderColor}`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold mb-3">
                      <Briefcase size={14} /> {job.role}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {job.company}
                    </h3>
                    <p className="text-slate-400 font-medium flex items-center gap-2 text-sm md:text-base">
                      <MapPin size={16} className="text-accent-purple shrink-0" /> {job.location}
                    </p>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                      <Calendar size={16} className="text-accent-pink" /> {job.duration}
                    </div>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider md:mr-1">
                      {job.type}
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <ul className="space-y-3">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed hover:text-slate-200 transition-colors">
                        <CheckCircle2 size={16} className="text-accent-blue mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
