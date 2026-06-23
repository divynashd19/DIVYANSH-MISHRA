import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Brain, ArrowDown } from 'lucide-react';
import Button from './ui/Button';
import GlassCard from './ui/GlassCard';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const handleDownloadCV = () => {
    alert('Preparing your CV download...');
  };

  const handleGetInTouch = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const focusAreas = [
    {
      title: 'Full-Stack Dev',
      desc: 'Building responsive web interfaces and secure backend APIs.',
      icon: <Code2 className="text-accent-blue" size={24} />,
      color: 'from-accent-blue/20 to-transparent'
    },
    {
      title: 'UI/UX Design',
      desc: 'Crafting minimalist, intuitive, and modern user experiences.',
      icon: <Layers className="text-accent-purple" size={24} />,
      color: 'from-accent-purple/20 to-transparent'
    },
    {
      title: 'Problem Solving',
      desc: 'Applying core structures and algorithms to optimize logic.',
      icon: <Brain className="text-accent-pink" size={24} />,
      color: 'from-accent-pink/20 to-transparent'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
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
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/15 rounded-full filter blur-[100px] animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full filter blur-[100px] animate-glow [animation-delay:2s]" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.15] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Text Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            Open for Software Roles
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Hi, I'm <span className="text-gradient">Divyansh Mishra</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-400 max-w-xl mb-10 font-normal leading-relaxed"
          >
            Software Engineer & B.Tech CSE Graduate. Specialized in building clean, interactive frontend interfaces and high-performance, robust software architectures.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button variant="primary" onClick={handleDownloadCV}>
              Download CV
            </Button>
            <Button variant="outline" onClick={handleGetInTouch}>
              Get in Touch
            </Button>
          </motion.div>

          {/* Inline mini grid for focus areas */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
          >
            {focusAreas.map((area) => (
              <div 
                key={area.title} 
                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${area.color} border border-white/5`}>
                    {area.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white">{area.title}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Photo Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative group w-72 sm:w-80 h-72 sm:h-80">
            {/* Glowing backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-pink rounded-[32px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
            
            {/* Outer glass frame */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full h-full p-3 rounded-[32px] glass hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center overflow-hidden"
            >
              <img 
                src={profileImg} 
                alt="Divyansh Mishra Profile" 
                className="w-full h-full object-cover rounded-[24px] saturate-[1.05] contrast-[1.02] filter"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <a 
          href="#about"
          className="flex flex-col items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors group"
        >
          <span>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={14} className="group-hover:text-accent-blue" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
