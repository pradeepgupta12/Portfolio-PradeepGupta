import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaCircle, FaTrophy, FaCertificate } from 'react-icons/fa';
import { experience, achievements, certifications } from '../data/portfolioData';

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connector line */}
      <div className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-orange-500/50 to-transparent" />

      <div className="flex gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center justify-center z-10 mt-1">
          <FaBriefcase className="text-orange-400" size={16} />
        </div>

        {/* Content */}
        <motion.div
          whileHover={{ x: 4 }}
          className="flex-1 bg-[#0d1224] border border-white/[0.07] hover:border-orange-500/20 rounded-2xl p-6 mb-6 transition-all duration-300"
        >
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="text-white font-bold text-base">{item.role}</h3>
              <p className="text-orange-400 text-sm font-medium">{item.company}</p>
            </div>
            <span className="text-xs text-gray-500 bg-white/[0.03] border border-white/[0.07] px-3 py-1 rounded-full whitespace-nowrap">
              {item.period}
            </span>
          </div>
          <ul className="space-y-2">
            {item.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                <FaCircle className="text-orange-500 mt-1.5 flex-shrink-0" size={5} />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3 block">My Journey</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-2">
          {/* Left: Timeline */}
          <div>
            {experience.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>

          {/* Right: Achievements + Certifications */}
          <div className="space-y-8">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <FaTrophy className="text-orange-400" />
                <span>Achievements</span>
              </h3>
              <div className="space-y-3">
                {achievements.map((a, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4, borderColor: 'rgba(249,115,22,0.3)' }}
                    className="flex items-start gap-3 bg-[#0d1224] border border-white/[0.07] rounded-xl p-4 transition-all duration-200"
                  >
                    <span className="text-orange-400 mt-0.5 flex-shrink-0">★</span>
                    <span className="text-gray-400 text-sm leading-relaxed">{a}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <FaCertificate className="text-orange-400" />
                <span>Certifications</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((c, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(249,115,22,0.1)' }}
                    className="text-xs text-gray-400 border border-white/10 hover:border-orange-500/30 hover:text-orange-300 px-4 py-2 rounded-full transition-all duration-200 cursor-default"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
