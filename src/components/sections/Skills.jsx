import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  
  // Controls the initial fade-in for the whole section
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Tracks the scroll progress specifically while this section is on screen
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Maps scroll progress to continuous horizontal movement
  const leftX = useTransform(scrollYProgress, [0, 1], [-40, 90]); // Moves Left to Right
  const rightX = useTransform(scrollYProgress, [0, 1], [40, -90]); // Moves Right to Left

  // Grouped with monochrome-ready Devicon classes
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: 'C', icon: 'devicon-c-plain' },
        { name: 'C++', icon: 'devicon-cplusplus-plain' },
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
        { name: 'SQL', icon: 'devicon-azuresqldatabase-plain' }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: 'React.js', icon: 'devicon-react-original' },
        { name: 'HTML5', icon: 'devicon-html5-plain' },
        { name: 'CSS3', icon: 'devicon-css3-plain' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
        { name: 'Material UI', icon: 'devicon-materialui-plain' }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        { name: 'Express.js', icon: 'devicon-express-original' },
        { name: 'Socket.io', icon: 'devicon-socketio-original' },
        { name: 'JWT Authentication', icon: 'devicon-json-plain' }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
        { name: 'Prisma ORM', icon: 'devicon-prisma-original' },
        { name: 'Redis', icon: 'devicon-redis-plain' },
        { name: 'BullMQ', icon: 'devicon-redis-plain' },
        { name: 'Supabase', icon: 'devicon-supabase-plain' },
        { name: 'Cloudinary', icon: 'devicon-cloudflare-plain' }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: 'Git', icon: 'devicon-git-plain' },
        { name: 'GitHub', icon: 'devicon-github-original' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'Postman', icon: 'devicon-postman-plain' },
        { name: 'VS Code', icon: 'devicon-vscode-plain' },
        { name: 'Linux', icon: 'devicon-linux-plain' },
        { name: 'Render', icon: 'devicon-render-plain' },
        { name: 'Vercel', icon: 'devicon-vercel-original' }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      // Added overflow-x-hidden to prevent horizontal scrollbars from the animation
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 overflow-x-hidden"
    >
      <div className="max-w-4xl mx-auto w-full" ref={ref}>
        
        {/* Main Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 text-center w-full"
        >
          <h2 className="py-6 font-grandslang text-5xl md:text-7xl lg:text-8xl text-[var(--brand-primary)] uppercase tracking-tight leading-[.9]">
            {/* Technical - Moves Left to Right */}
            <motion.span 
              style={{ x: leftX, display: "inline-block" }}
            >
              Technical
            </motion.span>
            
            <br />
            
            {/* Expertise - Moves Right to Left */}
            <motion.span 
              style={{ x: rightX, display: "inline-block" }}
              className="font-grandslang italic font-normal lowercase text-[var(--text-main)]"
            >
              
              <span className='uppercase'>C</span>ompetencies
            </motion.span>
          </h2>
        </motion.div>

        {/* Categories with large gaps and individual scroll reveal animations */}
        <div className="flex flex-col gap-24 md:gap-32">
          {skillCategories.map((category, catIndex) => {
            const categoryRef = useRef(null);
            const isCategoryInView = useInView(categoryRef, { once: true, margin: "-10%" });

            return (
              <motion.div 
                key={catIndex} 
                ref={categoryRef}
                initial={{ opacity: 0, y: 60 }}
                animate={isCategoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center"
              >
                
                {/* Category Heading */}
                <h3 className="text-xl md:text-2xl  text-[var(--text-main)] mb-8 tracking-wide uppercase font-sans">
                  {category.title}
                </h3>
                
                {/* Wrapping Pill Container */}
                <div className="flex flex-wrap justify-center gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isCategoryInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      className="px-5 py-3 rounded-full border border-[var(--border-light)] glass-panel flex items-center gap-3 text-center hover:bg-[var(--bg-surface-hover)] hover:border-[var(--brand-primary)] hover:-translate-y-1 transition-all duration-300 cursor-default group shadow-sm"
                    >
                      <i className={`${skill.icon} text-xl flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--brand-primary)] transition-colors`} />
                      <span className="text-sm md:text-base font-medium text-[var(--text-main)]">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;