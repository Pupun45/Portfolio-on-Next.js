"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter">
            Core Competencies.
          </h2>
          <p className="mt-6 text-xl text-foreground/50 font-light max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build modern digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-foreground/[0.03] border border-foreground/[0.05] p-10 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:bg-foreground/[0.05]"
            >
              <h3 className="text-2xl font-medium tracking-tight mb-8 text-foreground">
                {category.category}
              </h3>
              <div className="space-y-8">
                {category.items.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-3 text-sm">
                      <span className="font-medium text-foreground/80 tracking-wide">
                        {skill.name}
                      </span>
                      <span className="text-foreground/40 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-foreground rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.level / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
