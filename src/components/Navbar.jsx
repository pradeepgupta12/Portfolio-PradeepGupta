import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="flex items-center justify-center px-4">
        <div className={`flex items-center gap-8 px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#111827]/90 backdrop-blur-xl border border-white/10 shadow-2xl'
            : 'bg-[#111827]/70 backdrop-blur-md border border-white/5'
        }`}>
          {/* Logo */}
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-white font-bold text-lg mr-2 cursor-pointer"
          >
            Portfolio<span className="text-orange-500">.</span>
          </motion.span>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active-nav"
                className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Dark mode toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDark}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-orange-400 transition-colors"
          >
            {darkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
          </motion.button>

          {/* Hire Me Button */}
          <motion.a
            href="mailto:pradeep13022002@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
          >
            Hire Me
          </motion.a>

          {/* Mobile menu */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 mx-4 bg-[#111827] border border-white/10 rounded-2xl p-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-4 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors"
              >
                {link}
              </Link>
            ))}
            <a
              href="mailto:pradeep13022002@gmail.com"
              className="block mt-2 text-center bg-orange-500 text-white py-2 rounded-full font-semibold"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
