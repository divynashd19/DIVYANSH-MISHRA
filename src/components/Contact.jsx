import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      title: 'Email',
      value: 'divyanshmishra.d19@gmail.com',
      href: 'mailto:divyanshmishra.d19@gmail.com',
      icon: <Mail className="text-accent-blue" size={20} />,
      color: 'from-accent-blue/15 to-transparent'
    },
    {
      title: 'Phone',
      value: '+91-7080715106',
      href: 'tel:+917080715106',
      icon: <Phone className="text-accent-purple" size={20} />,
      color: 'from-accent-purple/15 to-transparent'
    },
    {
      title: 'Location',
      value: 'Kanpur Nagar, UP, India',
      href: null,
      icon: <MapPin className="text-accent-pink" size={20} />,
      color: 'from-accent-pink/15 to-transparent'
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/divyansh-mishra',
      href: 'https://linkedin.com', // Replace with user LinkedIn if known, otherwise base link
      icon: <Linkedin className="text-cyan-400" size={20} />,
      color: 'from-cyan-400/15 to-transparent'
    }
  ];

  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address';
      }
    } else if (name === 'message' && value.length < 10) {
      error = 'Message must be at least 10 characters';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTouched({});
        // Reset success state after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3"
          >
            Get In Touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Let's Collaborate
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-pink rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Have a software project that needs building, an application that needs designing, or an interesting engineering role? Feel free to reach out. I will get back to you as soon as possible.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, idx) => (
                <div key={info.title} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} border border-white/5`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-semibold text-white hover:text-accent-blue transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-white">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7">
            <GlassCard className="hover:border-white/10">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="John Doe"
                        className={`px-4 py-3.5 rounded-xl bg-white/5 border ${
                          touched.name && errors.name 
                            ? 'border-red-500/50 focus:border-red-500' 
                            : touched.name && !errors.name 
                            ? 'border-emerald-500/50 focus:border-emerald-500' 
                            : 'border-white/10 focus:border-accent-blue'
                        } text-white placeholder-slate-600 outline-none transition-colors duration-200`}
                      />
                      {touched.name && errors.name && (
                        <span className="text-xs font-medium text-red-400 mt-1">{errors.name}</span>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="john@example.com"
                        className={`px-4 py-3.5 rounded-xl bg-white/5 border ${
                          touched.email && errors.email 
                            ? 'border-red-500/50 focus:border-red-500' 
                            : touched.email && !errors.email 
                            ? 'border-emerald-500/50 focus:border-emerald-500' 
                            : 'border-white/10 focus:border-accent-blue'
                        } text-white placeholder-slate-600 outline-none transition-colors duration-200`}
                      />
                      {touched.email && errors.email && (
                        <span className="text-xs font-medium text-red-400 mt-1">{errors.email}</span>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows="5"
                        placeholder="Tell me about your project..."
                        className={`px-4 py-3.5 rounded-xl bg-white/5 border ${
                          touched.message && errors.message 
                            ? 'border-red-500/50 focus:border-red-500' 
                            : touched.message && !errors.message 
                            ? 'border-emerald-500/50 focus:border-emerald-500' 
                            : 'border-white/10 focus:border-accent-blue'
                        } text-white placeholder-slate-600 outline-none resize-none transition-colors duration-200`}
                      />
                      {touched.message && errors.message && (
                        <span className="text-xs font-medium text-red-400 mt-1">{errors.message}</span>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full py-4 mt-2 justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    className="flex flex-col items-center justify-center py-16 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                      <CheckCircle2 size={36} className="text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400 max-w-sm">
                      Thank you for reaching out. I've received your inquiry and will respond within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}
