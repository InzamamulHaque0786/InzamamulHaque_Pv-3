import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const projectList = [
    {
      id: 1,
      title: 'Chronos Desk',
      description: 'AI-Powered Enterprise Customer Support & SLA Management Platform',
      tags: ['TypeScript', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Redis', 'BullMQ', 'Docker'],
      link: '#',
      videoPlaceholder: 'https://www.w3schools.com/html/mov_bbb.mp4' 
    },
    {
      id: 2,
      title: 'Guard Lens',
      description: 'AI-Powered Map-Based Crime Reporting Web Application',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Leaflet.js', 'Gemini AI', 'Cloudinary'],
      link: '#',
      videoPlaceholder: 'https://www.w3schools.com/html/mov_bbb.mp4' 
    },
    {
      id: 3,
      title: 'Task Flow',
      description: 'Modern Full-Stack Task Management and Workflow Automation Platform', 
      tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'], 
      link: '#',
      videoPlaceholder: 'https://www.w3schools.com/html/mov_bbb.mp4' 
    }
  ];

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-24 px-6 md:px-12"
    >
      {/* Background glow for the glassy effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--brand-primary)]/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Reduced max-width to 5xl so stacked videos don't become massively wide on big screens */}
      <div className="max-w-5xl mx-auto w-full" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <p className="text-sm md:text-base font-bold mb-4 text-[var(--text-muted)] uppercase tracking-widest">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-main)]">
            Featured <span className="font-ogg italic font-normal text-[var(--brand-primary)]">Projects</span>
          </h2>
        </motion.div>

        {/* Huge gaps between projects for clean scroll reveals */}
        <div className="flex flex-col gap-32 md:gap-48">
          {projectList.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col gap-8 md:gap-10"
            >
              
              {/* 1. Video Area (Top) */}
              <div className="w-full overflow-hidden rounded-3xl glass-panel border border-[var(--border-light)] aspect-video relative group-hover:border-[var(--brand-primary)]/50 transition-colors duration-500 shadow-xl">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                >
                  <source src={project.videoPlaceholder} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-[var(--bg-base)]/10 mix-blend-overlay pointer-events-none" />
              </div>

              {/* 2. Text Content Area (Bottom) */}
              <div className="w-full flex flex-col items-start gap-6 px-2 md:px-4">
                <div>
                  <h3 className="font-grandslang text-5xl md:text-6xl lg:text-7xl text-[var(--text-main)]  tracking-tight mb-4 leading-[1.1]">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-sm text-[var(--text-muted)] uppercase font-normal tracking-wide max-w-3xl">
                    {project.description}
                  </p>
                </div>
                
                {/* Pill Shaped Tech Stack */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-4 py-2 rounded-full border border-[var(--border-light)] text-sm font-medium text-[var(--text-main)] bg-[var(--bg-base)]/50 glass-panel"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Minimalist Arrow Button */}
                <a 
                  href={project.link}
                  className="mt-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-transparent border border-[var(--border-light)] text-[var(--text-main)] hover:bg-[var(--brand-primary)] hover:text-[var(--text-inverse)] hover:border-[var(--brand-primary)] hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label={`View ${project.title}`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;