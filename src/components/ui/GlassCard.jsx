import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hoverGlow = true, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`glass rounded-2xl p-6 glow-card transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
