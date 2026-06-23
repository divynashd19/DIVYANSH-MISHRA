import React from 'react';
import { motion } from 'framer-motion';

export default function Badge({ children, className = '', ...props }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -1 }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-default ${className}`}
      {...props}
    >
      {children}
    </motion.span>
  );
}
