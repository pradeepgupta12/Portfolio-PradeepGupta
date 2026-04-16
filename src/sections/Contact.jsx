import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS or any backend here
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Reach Out</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-500 text-sm">Let's discuss your project</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Character + Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            {/* Avatar with mail icon */}
            <div className="relative inline-block mb-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-48 h-48 bg-gradient-to-br from-orange-500/20 to-blue-500/10 border border-orange-500/20 rounded-3xl flex flex-col items-center justify-center mx-auto lg:mx-0"
              >
                <div className="text-6xl mb-2">📞</div>
                <div className="text-white font-semibold text-sm">Let's Talk!</div>
              </motion.div>
              {/* Mail badge */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-3 -right-3 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <FaEnvelope className="text-white" size={16} />
              </motion.div>
              {/* Sparkles */}
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 -left-4 text-yellow-400 text-lg"
              >✦</motion.span>
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-4 -right-6 text-yellow-400 text-sm"
              >✦</motion.span>
            </div>

            {/* Contact info cards */}
            <div className="space-y-4">
              {[
                { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: '#' },
                { icon: FaPhone, label: 'LinkedIn', value: 'pradeep-gupta-1237b9220', href: personalInfo.linkedin },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6, borderColor: 'rgba(249,115,22,0.4)' }}
                  className="flex items-center gap-4 bg-[#0d1224] border border-white/[0.07] rounded-xl p-4 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="text-orange-400" size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">{label}</div>
                    <div className="text-sm text-gray-300 font-medium">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#0d1224] border border-white/[0.07] rounded-2xl p-8 space-y-4">
              {/* First + Last Name */}
              <div className="grid grid-cols-2 gap-4">
                {['firstName', 'lastName'].map((field) => (
                  <div key={field}>
                    <input
                      type="text"
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      placeholder={field === 'firstName' ? 'First Name' : 'Last Name'}
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-orange-500/60 text-white placeholder-gray-600 text-sm px-4 py-3 rounded-xl outline-none transition-all duration-200"
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-orange-500/60 text-white placeholder-gray-600 text-sm px-4 py-3 rounded-xl outline-none transition-all duration-200"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-orange-500/60 text-white placeholder-gray-600 text-sm px-4 py-3 rounded-xl outline-none transition-all duration-200"
              />

              {/* Message */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-orange-500/60 text-white placeholder-gray-600 text-sm px-4 py-3 rounded-xl outline-none transition-all duration-200 resize-none"
              />

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(249,115,22,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200"
              >
                {sent ? (
                  <span>✅ Message Sent!</span>
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
