import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart , FaEnvelope , FaInstagram ,FaWhatsapp   } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="text-white font-bold text-xl cursor-pointer">
            Portfolio<span className="text-orange-500">.</span>
          </motion.div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-gray-500 hover:text-orange-400 text-sm cursor-pointer capitalize transition-colors"
              >
                {section}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { icon: FaGithub, href: 'https://github.com/pradeepgupta12' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/pradeep-gupta-1237b9220' },
              { icon: FaEnvelope, href: 'mailto:pradeep13022002@gmail.com', label: 'Email' },
                            { icon: FaInstagram, href: 'https://instagram.com/pr_adeep0000/', label: 'Instagram' },
                            { icon: FaWhatsapp, href: 'https://wa.me/8574097550', label: 'WhatsApp' }
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 bg-white/[0.03] border border-white/[0.07] hover:border-orange-500/40 rounded-full flex items-center justify-center text-gray-500 hover:text-orange-400 transition-all"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 text-xs flex items-center justify-center gap-1">
          <span>Made with</span>
          <FaHeart className="text-orange-500 mx-0.5" size={10} />
          <span>by Pradeep Gupta © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
