


// import React, { useRef, useState } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
// import { projects } from '../data/portfolioData';

// const projectColors = [
//   'from-orange-500/20 to-red-500/10',
//   'from-blue-500/20 to-purple-500/10',
//   'from-green-500/20 to-teal-500/10',
// ];

// function ProjectCard({ project, index }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-50px' });
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.15 }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       whileHover={{ y: -8 }}
//       className="group bg-[#0d1224] border border-white/[0.07] hover:border-orange-500/30 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full"
//     >
//       {/* Project Image / Preview */}
//       <div className={`relative h-52 bg-gradient-to-br ${projectColors[index % 3]} overflow-hidden flex-shrink-0`}>
//         {/* Mockup browser frame */}
//         <div className="absolute inset-3 bg-[#0a0e1a] rounded-lg border border-white/10 overflow-hidden">
//           <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.03] border-b border-white/[0.05]">
//             <div className="w-2 h-2 rounded-full bg-red-500/60" />
//             <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
//             <div className="w-2 h-2 rounded-full bg-green-500/60" />
//             <div className="flex-1 mx-2 bg-white/[0.05] rounded text-[9px] text-gray-600 px-2 py-0.5 truncate">
//               {project.demo}
//             </div>
//           </div>
//           <div className="p-3 flex flex-col gap-2">
//             {[1,2,3,4].map(i => (
//               <div key={i} className={`h-2 rounded-full bg-white/[0.05]`} style={{width: `${60 + i * 10}%`}} />
//             ))}
//             <div className="grid grid-cols-3 gap-2 mt-2">
//               {[1,2,3].map(i => (
//                 <div key={i} className="h-10 rounded-lg bg-white/[0.03] border border-white/[0.05]" />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Hover overlay with links */}
//         <motion.div
//           animate={{ opacity: hovered ? 1 : 0 }}
//           className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 backdrop-blur-sm"
//         >
//           <motion.a
//             href={project.demo}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all"
//           >
//             <FaExternalLinkAlt size={12} /> Demo
//           </motion.a>
//         </motion.div>
//       </div>

//       {/* Card Content - flex column to push button to bottom */}
//       <div className="p-6 flex flex-col flex-grow">
//         <div className="flex-grow">
//           <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors">
//             {project.title}
//           </h3>
//           <p className="text-gray-500 text-sm leading-relaxed mb-4">
//             {project.description}
//           </p>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mb-5">
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="text-xs text-gray-400 border border-white/10 px-3 py-1 rounded-full"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Buttons - always at bottom */}
//         <div className="flex gap-3 mt-auto">
//           <motion.a
//             href={project.demo}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(249,115,22,0.4)' }}
//             whileTap={{ scale: 0.97 }}
//             className="flex items-center gap-2 flex-1 justify-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2.5 rounded-xl transition-all duration-200"
//           >
//             <FaExternalLinkAlt size={12} /> Demo
//           </motion.a>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function Projects() {
//   const titleRef = useRef(null);
//   const inView = useInView(titleRef, { once: true });

//   return (
//     <section id="projects" className="py-24 relative overflow-hidden">
//       <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           ref={titleRef}
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-14"
//         >
//           <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3 block">My Work</span>
//           <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
//             My <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="text-gray-500 text-sm">A showcase of my recent work</p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, i) => (
//             <ProjectCard key={project.title} project={project} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const projectColors = [
  'from-orange-500/20 to-red-500/10',
  'from-blue-500/20 to-purple-500/10',
  'from-green-500/20 to-teal-500/10',
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      className="group bg-[#0d1224] border border-white/[0.07] hover:border-orange-500/30 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Image / Preview */}
      <div className={`relative h-52 bg-gradient-to-br ${projectColors[index % 3]} overflow-hidden flex-shrink-0`}>
        {project.image && !imageError ? (
          // Actual project screenshot
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover object-top"
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback mockup browser frame
          <div className="absolute inset-3 bg-[#0a0e1a] rounded-lg border border-white/10 overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.03] border-b border-white/[0.05]">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-2 bg-white/[0.05] rounded text-[9px] text-gray-600 px-2 py-0.5 truncate">
                {project.demo}
              </div>
            </div>
            <div className="p-3 flex flex-col gap-2">
              {[1,2,3,4].map(i => (
                <div key={i} className={`h-2 rounded-full bg-white/[0.05]`} style={{width: `${60 + i * 10}%`}} />
              ))}
              <div className="grid grid-cols-3 gap-2 mt-2">
                {[1,2,3].map(i => (
                  <div key={i} className="h-10 rounded-lg bg-white/[0.03] border border-white/[0.05]" />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hover overlay with links */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 backdrop-blur-sm"
        >
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all"
          >
            <FaExternalLinkAlt size={12} /> Demo
          </motion.a>
        </motion.div>
      </div>

      {/* Card Content - flex column to push button to bottom */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-400 border border-white/10 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons - always at bottom */}
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(249,115,22,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 flex-1 justify-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2.5 rounded-xl transition-all duration-200"
          >
            <FaExternalLinkAlt size={12} /> Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3 block">My Work</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-500 text-sm">A showcase of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}