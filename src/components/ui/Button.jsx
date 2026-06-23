import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  ...props 
}) {
  const baseStyle = "relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink text-white shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/40",
    secondary: "bg-white/10 hover:bg-white/15 text-white backdrop-blur-md border border-white/10",
    outline: "border border-accent-blue/30 text-accent-blue hover:bg-accent-blue/10 backdrop-blur-md"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Glare effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
