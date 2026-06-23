import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { motion } from 'framer-motion';

export default function Education() {
  const courses = [
    'Data Structures & Algorithms', 'Object-Oriented Programming (OOPs)',
    'Database Management Systems', 'Web Development (React / Node.js)',
    'Software Engineering & Agile', 'Operating Systems & Networks'
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="education">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-purple/10 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-accent-purple uppercase tracking-widest mb-3"
          >
            Academic Foundation
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Education
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12 py-2">
          
          {/* Timeline Dot */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute -left-[11px] top-4 w-5 h-5 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple border-4 border-dark-bg z-10"
          />

          <GlassCard className="max-w-4xl hover:border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold mb-3">
                  <GraduationCap size={14} /> B.Tech CSE (Software Engineering Focus)
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Computer Science & Engineering
                </h3>
                <p className="text-slate-400 font-medium flex items-center gap-2">
                  <MapPin size={16} className="text-accent-purple" /> Maharana Pratap Engineering College
                </p>
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                <Calendar size={16} className="text-accent-pink" /> Expected July 2027
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6">
              Core B.Tech CSE program emphasizing system architectures, full-stack application development, software design patterns, and analysis of algorithms.
            </p>

            <div className="border-t border-white/5 pt-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <BookOpen size={16} className="text-accent-blue" /> Key Coursework
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {courses.map((course, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 font-medium hover:bg-white/10 hover:border-white/15 transition-all duration-200 cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
