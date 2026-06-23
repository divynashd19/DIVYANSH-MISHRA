import React from 'react';
import { Calendar, ArrowUpRight, TrendingUp, ShieldAlert, Award, Database } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Forensic Data Analytics Engine',
      date: 'June 2025',
      category: 'Software & Security',
      icon: <ShieldAlert className="text-accent-pink" size={24} />,
      gradient: 'from-accent-pink/10 to-transparent',
      borderColor: 'group-hover:border-accent-pink/40',
      tags: ['Python', 'SQL', 'Forensics', 'Anomaly Detection', 'Tableau'],
      achievements: [
        'Developed parsing scripts in Python to ingest and structure high-volume forensic log datasets.',
        'Implemented anomaly detection logic to isolate and flag fraudulent financial transaction patterns.',
        'Built interactive visual reporting suites using Tableau to present forensic findings to stakeholders.'
      ]
    },
    {
      title: 'Tata Business Intelligence Application',
      date: 'Jan 2026',
      category: 'Full-Stack & BI',
      icon: <TrendingUp className="text-accent-blue" size={24} />,
      gradient: 'from-accent-blue/10 to-transparent',
      borderColor: 'group-hover:border-accent-blue/40',
      tags: ['Power BI', 'SQL', 'Database Tuning', 'REST APIs', 'React'],
      achievements: [
        'Engineered dynamic dashboard integrations and visual wrappers for operational metrics.',
        'Wrote and optimized complex SQL queries, enhancing data extraction and reducing load latency.',
        'Improved reporting and dashboard data reload cycles by 30% through automated pipeline caching.'
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3"
          >
            Select Projects
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Featured Work
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-pink rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group"
            >
              <GlassCard className={`h-full flex flex-col justify-between hover:scale-[1.01] border border-white/5 ${project.borderColor}`}>
                <div>
                  
                  {/* Top Bar */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
                      <Calendar size={14} className="text-accent-pink" /> {project.date}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                      <ArrowUpRight size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Icon & Category */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${project.gradient} border border-white/5`}>
                      {project.icon}
                    </div>
                    <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>

                  {/* Achievements List */}
                  <ul className="space-y-3.5 mb-8">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed hover:text-slate-200 transition-colors">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-pink shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Tags Footer */}
                <div className="border-t border-white/5 pt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
