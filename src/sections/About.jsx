


import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaCode } from 'react-icons/fa';
import { personalInfo, stats, education, achievements, certifications } from '../data/portfolioData';

function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
      {children}
    </h2>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Profile Image */}
          <motion.div variants={itemVariants} className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Avatar area */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-orange-500/30 shadow-xl">
                  <img 
                    src="/pradeep photo.jpeg" 
                    alt="Pradeep Gupta" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Tech icons floating around */}
              <motion.div animate={{ y: [0,-8,0] }} transition={{ duration:3, repeat:Infinity }}
                className="absolute top-2 left-0 text-2xl">⚛️</motion.div>
              <motion.div animate={{ y: [0,-6,0] }} transition={{ duration:4, repeat:Infinity, delay:1 }}
                className="absolute top-2 right-0 text-2xl">🌿</motion.div>
              <motion.div animate={{ y: [0,-10,0] }} transition={{ duration:3.5, repeat:Infinity, delay:0.5 }}
                className="absolute bottom-8 right-4 text-3xl">🟨</motion.div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3 block">About Me</span>
              <SectionTitle>
                About <span className="text-gradient">Me</span>
              </SectionTitle>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed mb-8">
              {personalInfo.summary} I'm passionate about creating beautiful, performant web experiences and constantly learning new technologies to stay at the cutting edge of the industry.
            </motion.p>

            {/* Info cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location },
                { icon: FaEnvelope, label: 'Email', value: 'pradeep13022002@gmail.com' },
                { icon: FaLinkedin, label: 'LinkedIn', value: 'pradeep-gupta-1237b9220' },
                { icon: FaCode, label: 'Degree', value: 'MCA – JIM Kanpur' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                  <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-orange-400" size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-0.5">{label}</div>
                    <div className="text-sm text-gray-300 font-medium break-all">{value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8 mb-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-orange-400">{s.number}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.a
                href="mailto:pradeep13022002@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(249,115,22,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-block border-2 border-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-500 transition-all duration-300"
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Education section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            My <span className="text-gradient">Education</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: 'rgba(249,115,22,0.5)' }}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-orange-400 font-bold text-lg">{i + 1}</span>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm leading-snug">{edu.degree}</h4>
                <p className="text-gray-500 text-xs mb-2">{edu.institution}</p>
                <span className="text-orange-400 text-xs bg-orange-500/10 px-3 py-1 rounded-full">{edu.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}