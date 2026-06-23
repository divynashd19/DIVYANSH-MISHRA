import React from 'react';
import { Award, Code2, Zap } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    {
      value: '3',
      label: 'Industry Certifications',
      icon: <Award className="text-accent-blue" size={28} />,
    },
    {
      value: '2+',
      label: 'Core Software Projects',
      icon: <Code2 className="text-accent-purple" size={28} />,
    },
    {
      value: '30%',
      label: 'Performance Optimizations',
      icon: <Zap className="text-accent-pink" size={28} />,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3"
          >
            Behind the Code
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            About Me
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-pink rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Bio (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6 text-slate-300 text-base md:text-lg leading-relaxed"
          >
            <p>
              I am a motivated and detail-oriented <strong className="text-white font-semibold">Software Engineer</strong> currently pursuing my B.Tech in Computer Science and Engineering with a focus on Software Engineering at Maharana Pratap Engineering College.
            </p>
            <p>
              My passion lies in writing clean, modular code, designing intuitive user interfaces, and solving complex architectural problems. I enjoy building frontend platforms using modern React frameworks and setting up fast, secure backend APIs.
            </p>
            <p>
              By combining algorithms and data structures with web design systems, I build full-stack web applications that are responsive, accessible, and performant.
            </p>
          </motion.div>

          {/* Stats Grid (Right) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {stats.map((stat, i) => (
              <GlassCard 
                key={stat.label} 
                className="flex items-center gap-5 hover:border-white/20"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    {stat.value}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
