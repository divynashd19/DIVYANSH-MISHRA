import React from 'react';
import { Code2, Monitor, Server, Wrench, Brain } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillsData = [
    {
      category: 'Languages',
      icon: <Code2 className="text-accent-blue" size={24} />,
      skills: ['JavaScript (ES6+)', 'Python', 'C++', 'SQL'],
      color: 'from-accent-blue/15 to-transparent'
    },
    {
      category: 'Frontend Web',
      icon: <Monitor className="text-accent-purple" size={24} />,
      skills: ['React.js', 'Tailwind CSS', 'HTML5 & CSS3', 'Framer Motion'],
      color: 'from-accent-purple/15 to-transparent'
    },
    {
      category: 'Backend & DB',
      icon: <Server className="text-accent-pink" size={24} />,
      skills: ['Node.js', 'Express.js', 'MySQL', 'MongoDB'],
      color: 'from-accent-pink/15 to-transparent'
    },
    {
      category: 'Tools & Workflow',
      icon: <Wrench className="text-emerald-400" size={24} />,
      skills: ['Git & GitHub', 'Vite', 'Postman', 'npm / yarn'],
      color: 'from-emerald-400/15 to-transparent'
    },
    {
      category: 'Core Engineering',
      icon: <Brain className="text-amber-400" size={24} />,
      skills: ['Data Structures', 'Algorithms', 'OOPs Concepts', 'RESTful APIs'],
      color: 'from-amber-400/15 to-transparent'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3"
          >
            My Toolbox
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Skills & Core Competencies
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-pink rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((categoryData) => (
            <motion.div key={categoryData.category} variants={cardVariants} className="group">
              <GlassCard className="h-full hover:border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryData.color} border border-white/5`}>
                    {categoryData.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
                    {categoryData.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categoryData.skills.map((skill) => (
                    <Badge key={skill} className="bg-white/5 border border-white/10 text-xs py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
