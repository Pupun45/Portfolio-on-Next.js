"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experienceData } from "@/data/experience";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="experience" className="py-32 relative bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter">
            Career Journey.
          </h2>
        </motion.div>

        <div className="relative border-l border-foreground/10 pl-8 md:pl-16 space-y-24">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[73px] top-2 w-5 h-5 rounded-full bg-background border-4 border-foreground group-hover:scale-125 transition-transform duration-300" />

              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-lg font-mono text-foreground/40 uppercase tracking-widest">
                    {exp.duration}
                  </span>
                </div>
                
                <h4 className="text-xl md:text-2xl font-light text-foreground/70">
                  {exp.company}
                </h4>
                
                <p className="mt-6 text-lg text-foreground/60 leading-relaxed max-w-2xl font-light">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
