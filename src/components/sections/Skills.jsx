import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Grouped exactly as they appear in your resume
  const skillCategories = [
    {
      title: "Languages",
      skills: ['C','C++','Python', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: "Frontend",
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI']
    },
    {
      title: "Backend",
      skills: ['Node.js', 'Express.js', 'Socket.io', 'JWT Authentication']
    },
    {
      title: "Databases & Cloud",
      skills: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Redis', 'BullMQ', 'Supabase', 'Cloudinary']
    },
    {
      title: "Tools",
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Linux', 'Render', 'Vercel']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section 
      id="skills" 
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24"
    >
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[var(--brand-primary)]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full" ref={ref}>
        
        {/* Main Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-sm md:text-base font-bold mb-4 text-[var(--text-muted)] uppercase tracking-widest">
            The Arsenal
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-main)]">
            Technical <span className="font-ogg italic font-normal text-[var(--brand-primary)]">Expertise</span>
          </h2>
        </motion.div>

        {/* Categories & Pill Structure matching the screenshot */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-col gap-16"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div key={catIndex} variants={item} className="flex flex-col items-center">
              
              {/* Centered Category Heading */}
              <h3 className="text-lg md:text-xl font-medium text-[var(--text-main)] mb-6 text-center tracking-wide">
                {category.title}
              </h3>
              
              {/* Wrapping Pill Container */}
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-6 py-3 rounded-full border border-[var(--border-light)] glass-panel flex items-center justify-center text-center hover:bg-[var(--bg-surface-hover)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <span className="text-sm md:text-base font-medium text-current transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;