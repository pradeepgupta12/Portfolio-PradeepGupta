import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaJs
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTailwindcss, SiFramer, SiTypescript,
  SiNextdotjs, SiMysql, SiGit, SiVite, SiJavascript
} from 'react-icons/si';
import { skills } from '../data/portfolioData';

const iconMap = {
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaPython: FaPython,
  SiMongodb: SiMongodb,
  SiExpress: SiExpress,
  SiTailwindcss: SiTailwindcss,
  SiFramer: SiFramer,
  SiJavascript: SiJavascript,
};

const colorMap = {
  '#61DAFB': 'from-cyan-400 to-blue-400',
  '#68A063': 'from-green-400 to-green-600',
  '#4DB33D': 'from-green-500 to-emerald-600',
  '#f97316': 'from-orange-400 to-orange-600',
  '#38BDF8': 'from-cyan-400 to-sky-500',
  '#F7DF1E': 'from-yellow-400 to-amber-500',
  '#3776AB': 'from-blue-400 to-blue-600',
  '#BB4ADD': 'from-purple-400 to-violet-600',
};

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = iconMap[skill.icon] || FaReact;
  const gradient = colorMap[skill.color] || 'from-orange-400 to-orange-600';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(0,0,0,0.3)` }}
      className="bg-[#0d1224] border border-white/[0.07] hover:border-orange-500/30 rounded-2xl p-6 transition-all duration-300 cursor-default"
    >
      {/* Icon + Name */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <Icon size={22} className="text-white" />
        </div>
        <span className="text-white font-semibold text-base">{skill.name}</span>
      </div>

      {/* Proficiency label + percent */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500 text-sm">Proficiency</span>
        <span className="text-orange-400 font-bold text-sm">{skill.proficiency}%</span>
      </div>

      {/* Animated progress bar */}
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.08 + 0.3, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
        />
      </div>

      {/* Second thinner bar (decoration like original) */}
      <div className="w-full h-0.5 bg-white/[0.03] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.proficiency * 0.5}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay: index * 0.08 + 0.5, ease: 'easeOut' }}
          className="h-full rounded-full bg-orange-500/30"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3 block">What I Know</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Technologies I work with daily to build fast, responsive, and scalable web applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Tech tags row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          {['HTML5', 'CSS3', 'Git', 'VS Code', 'REST APIs', 'SEO', 'CMS', 'SQL', 'C', 'C++', 'Java'].map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.08, backgroundColor: 'rgba(249,115,22,0.15)' }}
              className="text-sm text-gray-400 border border-white/10 hover:border-orange-500/40 hover:text-orange-400 px-4 py-2 rounded-full transition-all duration-200 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
