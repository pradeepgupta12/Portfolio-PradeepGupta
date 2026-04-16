



import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaDownload , FaEnvelope , FaInstagram , FaWhatsapp } from 'react-icons/fa';
import { personalInfo, stats } from '../data/portfolioData';

const floatingIcons = [
  { icon: '⚛️', top: '15%', left: '12%', delay: 0, size: 'text-3xl' },
  { icon: '🟨', top: '20%', right: '15%', delay: 0.5, size: 'text-2xl' },
  { icon: '🍃', top: '55%', left: '8%', delay: 1, size: 'text-2xl' },
  { icon: '🎨', top: '65%', right: '12%', delay: 1.5, size: 'text-2xl' },
  { icon: '💻', top: '80%', left: '20%', delay: 0.8, size: 'text-2xl' },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[80px]" />
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
          className={`absolute ${item.size} opacity-60 hidden lg:block`}
          style={{ top: item.top, left: item.left, right: item.right }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 relative z-10">
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-10"
          >
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'React.js Developer', 2000,
                'MERN Stack Developer', 2000,
                'Full-Stack Developer', 2000,
                'SEO-Optimized App Builder', 2000,
              ]}
              repeat={Infinity}
              className="text-orange-400"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <Link to="projects" smooth={true} offset={-80} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(249,115,22,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
              >
                View Projects
              </motion.button>
            </Link>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-orange-500/50 hover:border-orange-500 text-orange-400 hover:text-orange-300 font-semibold px-8 py-3 rounded-full transition-all duration-200"
            >
              <FaDownload size={14} /> Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 justify-center lg:justify-start mb-10"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/pradeepgupta12', label: 'GitHub' },
              { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FaEnvelope, href: 'mailto:pradeep13022002@gmail.com', label: 'Email' },
              { icon: FaInstagram, href: 'https://instagram.com/pr_adeep0000/', label: 'Instagram' },
              { icon: FaWhatsapp, href: 'https://wa.me/8574097550', label: 'WhatsApp' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-8 justify-center lg:justify-start"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                className="text-center lg:text-left"
              >
                <div className="text-2xl font-bold text-orange-400">{s.number}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: Anime/Cartoon Character Decor (Replacing Star) and Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0 relative w-72 h-72 md:w-96 md:h-96"
        >
          {/* Anime/Cartoon Character Container (Replacing Star) */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none" // Corrected positioning
          >
            <img 
              src="/avtar.png.png" // Replace with your cartoon mask/anime image path
              alt="Cartoon Mask Character" // Corrected alternative text
              className="w-4/5 h-4/5 object-contain" // Set responsive width/height within container
            />
          </motion.div>

          {/* Avatar Container */}
          {/* <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-orange-500/50 bg-gradient-to-br from-orange-400/20 to-blue-600/20 flex items-center justify-center"
            >
              <img
                src="/pradeep photo.jpeg"
                alt="Pradeep"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div> */}

          {/* Floating tech badges around avatar */}
          {[
            { label: 'React', pos: 'top-4 -left-6', color: 'bg-blue-500/20 border-blue-500/40 text-blue-300' },
            { label: 'Node.js', pos: 'top-4 -right-6', color: 'bg-green-500/20 border-green-500/40 text-green-300' },
            { label: 'MongoDB', pos: '-bottom-2 left-8', color: 'bg-green-600/20 border-green-600/40 text-green-400' },
            { label: 'Tailwind', pos: '-bottom-2 right-8', color: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300' },
          ].map(({ label, pos, color }) => (
            <motion.div
              key={label}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute ${pos} z-20 border text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${color}`}
            >
              {label}
            </motion.div>
          ))}

          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[-20px] z-0 border-2 border-dashed border-orange-500/20 rounded-full"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs">Scroll Down</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </section>
  );
}