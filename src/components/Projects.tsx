"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter">
            Selected Work.
          </h2>
          <p className="mt-6 text-xl text-foreground/50 font-light max-w-2xl mx-auto">
            A showcase of my recent projects, demonstrating my ability to build scalable and intuitive applications.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col gap-12 lg:gap-24 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Side */}
                <div className="flex-1 w-full group">
                  <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center p-8 transition-transform duration-700 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Placeholder for project image */}
                    <motion.div 
                      className="w-full h-full rounded-2xl bg-background border border-foreground/10 shadow-2xl overflow-hidden flex items-center justify-center relative"
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src={`/images/project-${index + 1}.webp`} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop`;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <span className="text-3xl font-bold tracking-tighter text-foreground/20 mix-blend-difference">{project.title}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 w-full space-y-8">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-xl text-foreground/70 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-foreground/[0.03] border border-foreground/10 text-foreground/80 tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform flex items-center gap-2 text-sm"
                    >
                      <FiExternalLink size={18} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
                    >
                      <FiGithub size={18} /> View Source
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
