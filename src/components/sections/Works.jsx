import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Set this initial state to exactly match your main site background color hex
  const [bgColor, setBgColor] = useState('#1e2125'); 

  const projectList = [
    {
      id: 1,
      title: 'Chronos Desk',
      description: 'AI-Powered Enterprise Customer Support & SLA Management Platform',
      tags: ['TypeScript', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Redis', 'BullMQ', 'Docker'],
      link: 'https://chronos-desk-u7oe-cyan.vercel.app/',
      image: '/project1.png',
      color: '#1A2A40' // Lighter Slate/Navy Blue
    },
    {
      id: 2,
      title: 'Guard Lens',
      description: 'AI-Powered Map-Based Crime Reporting Web Application',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Leaflet.js', 'Gemini AI', 'Cloudinary'],
      link: 'https://guard-lens.vercel.app/',
      image: '/project2.png',
      color: '#2A161E' // Lighter Muted Burgundy
    },
    {
      id: 3,
      title: 'Task Flow',
      description: 'Modern Full-Stack Task Management and Workflow Automation Platform', 
      tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'], 
      link: 'https://task-flow-sooty-two-36.vercel.app/landingpage',
      image: '/project3.png',
      color: '#162B21' // Lighter Pine/Teal Green
    }
  ];

  return (
    <motion.section 
      id="works" 
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen py-24 px-6 md:px-12 transition-colors"
    >
      {/* 
        =========================================
        MAGIC BLEND FADES (Top & Bottom)
        Height significantly increased to md:h-[500px] 
        for an ultra-smooth, seamless transition.
        =========================================
      */}
      <div className="absolute top-0 left-0 w-full h-72 md:h-[500px] bg-gradient-to-b from-[var(--bg-base)] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-72 md:h-[500px] bg-gradient-to-t from-[var(--bg-base)] to-transparent pointer-events-none z-10" />

      {/* Background glow for the glassy effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--brand-primary)]/15 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto w-full relative z-20" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          // Added negative margin here (-mt-10 md:-mt-16) to pull the title up into the black fade
          className="-mt-10 md:-mt-16 mb-24 text-center relative z-30"
        >
          <h2 className="font-grandslang text-5xl md:text-7xl lg:text-8xl text-[var(--brand-primary)] uppercase tracking-tight leading-[1.1]">
            Featured <span className="font-grandslang italic lowercase font-normal text-[var(--text-main)]">Works</span>
          </h2>
        </motion.div>

        {/* Huge gaps between projects for clean scroll reveals */}
        <div className="flex flex-col gap-32 md:gap-48">
          {projectList.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              setBgColor={setBgColor} 
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Sub-component handling strict zoom-out as it approaches/reaches the center
const ProjectCard = ({ project, setBgColor }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);

  // Trigger color change when this specific card enters the center 40% of the screen
  const isCardActive = useInView(cardRef, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isCardActive) {
      setBgColor(project.color);
    }
  }, [isCardActive, project.color, setBgColor]);

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col items-center gap-8 md:gap-10"
    >
      
      {/* Image Area */}
      <div className="w-full max-w-3xl overflow-hidden rounded-3xl glass-panel border border-[var(--border-light)] relative">
        <motion.img 
          src={project.image} 
          alt={project.title}
          style={{ scale: imageScale }}
          className="w-full h-auto block pointer-events-none"
        />
        <div className="absolute inset-0 bg-[var(--bg-base)]/10 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Text Content Area */}
      <div className="w-full max-w-3xl flex flex-col items-start gap-6 px-2 md:px-0">
        <div>
          <h3 className="font-grandslang text-5xl md:text-6xl lg:text-7xl text-[var(--text-main)] tracking-tight mb-4 leading-[1.1]">
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
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-transparent border border-[var(--border-light)] text-[var(--text-main)] hover:bg-[var(--brand-primary)] hover:text-[var(--text-inverse)] hover:border-[var(--brand-primary)] hover:scale-110 transition-all duration-300"
          aria-label={`View ${project.title}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Works;