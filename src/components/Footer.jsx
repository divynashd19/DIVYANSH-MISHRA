import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-dark-bg py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold tracking-tight text-white">
            Divyansh<span className="text-gradient">.</span>
          </span>
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Divyansh Mishra. All rights reserved.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-400">
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
          <a href="#education" className="hover:text-white transition-colors duration-200">Education</a>
          <a href="#certifications" className="hover:text-white transition-colors duration-200">Certifications</a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </div>

        {/* Social Node Badges */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:divyanshmishra.d19@gmail.com"
            className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}
