import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  
  // Controls the initial fade-in for the whole section
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Tracks the scroll progress specifically while this section is on screen
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Maps scroll progress to continuous horizontal movement
  // Work moves Left to Right (-80px to 80px)
  const workX = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  // Experience moves Right to Left (80px to -80px)
  const experienceX = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const experienceData = [
    {
      role: "Full Stack Developer",
      company: "Expertmind Technologies LLP",
      location: "Bilaspur, India",
      period: "Sep 2024 - Feb 2026",
      responsibilities: [
        "Built and shipped a production-ready multi-tenant SaaS platform using the MERN stack.",
        "Gathered client requirements and modernized a legacy office management system.",
        "Developed core modules including RBAC, task management, file management, dashboards, and real-time communication.",
        "Optimized MUI Data Grid performance, reducing large dataset load times from 5–10 minutes to a few seconds.",
        "Built reusable, responsive UI components with loading skeletons to improve user experience.",
        "Collaborated with stakeholders to deliver production-ready features through iterative feedback.",
      ],
    },
    {
      role: "Frontend Development Intern",
      company: "Presear Softwares Private Limited",
      location: "Bhubaneshwar, India",
      period: "May 2023 - Oct 2023",
      responsibilities: [
        "Built responsive React interfaces and reusable UI components for commercial projects.",
        "Converted design prototypes into clean, maintainable frontend code.",
        "Collaborated with designers and developers to deliver client features on schedule.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 py-24 overflow-x-hidden"
    >
      <div className="max-w-4xl mx-auto w-full" ref={ref}>
        {/* Section Heading matching About & Works sizing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 text-center w-full"
        >
          <h2 className="font-grandslang text-5xl md:text-7xl lg:text-8xl text-[var(--brand-primary)] uppercase tracking-tight leading-[.9]">
            {/* Work - Moves Left to Right */}
            <motion.span 
              style={{ x: workX, display: "inline-block" }}
            >
              <span className="italic">Wo</span>rk
            </motion.span>
            
            <br />
            
            {/* Experience - Moves Right to Left */}
            <motion.span 
              style={{ x: experienceX, display: "inline-block" }}
              className="font-grandslang italic lowercase font-normal text-[var(--text-main)]"
            >
              Experience
            </motion.span>
          </h2>
        </motion.div>

        {/* Experience List Container */}
        <div className="flex flex-col gap-16 w-full">
          {experienceData.map((exp, index) => {
            const expCardRef = useRef(null);
            const isCardInView = useInView(expCardRef, {
              once: true,
              margin: "-10%",
            });

            return (
              <motion.div
                key={index}
                ref={expCardRef}
                initial={{ opacity: 0, y: 60 }}
                animate={
                  isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }
                }
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col gap-6 p-6 sm:p-8 md:p-10 rounded-3xl glass-panel border border-[var(--border-light)] box-border overflow-hidden"
              >
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-light)] pb-6 text-left">
                  <div className="min-w-0">
                    <h3 className="font-cardo  font-extrabold text-xl sm:text-2xl md:text-3xl text-[var(--text-main)] uppercase tracking-wide break-words">
                      {exp.role}
                    </h3>
                    <p className="text-sm italic sm:text-base font-medium text-[var(--brand-primary)] mt-1 break-words">
                      {exp.company}{" "}
                      <span className="text-[var(--text-muted)] font-normal">
                        • {exp.location}
                      </span>
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-wider text-[var(--text-muted)] uppercase bg-[var(--bg-base)]/60 px-4 py-2 rounded-full border border-[var(--border-light)] self-start md:self-auto whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Responsibilities Bullet Points */}
                <ul className="flex flex-col gap-4 text-left">
                  {exp.responsibilities.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-3 text-sm md:text-base text-[var(--text-muted)] leading-relaxed"
                    >
                      <span className="text-[var(--brand-primary)] flex-shrink-0">
                        ✦
                      </span>
                      <span className="break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;