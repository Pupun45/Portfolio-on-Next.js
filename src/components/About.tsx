"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center w-full">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 space-y-12"
          >
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-foreground/50 mb-4 font-semibold">
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight">
                Building the web, <br className="hidden md:block" />
                one stack at a time.
              </h3>
            </div>

            <div className="space-y-6 text-xl text-foreground/70 font-light leading-relaxed max-w-2xl">
              <p>
                I am <strong className="font-medium text-foreground">Jyoti Ranjan Behera</strong>,
                a Web Developer and MCA student at GIFT Autonomous College, Bhubaneswar.
                My journey started with a curiosity for how the web works, and evolved into
                a passion for building full-stack applications that solve real problems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-2 uppercase tracking-wider">Focus</h4>
                  <p className="text-base">
                    Building end-to-end MERN stack applications — from responsive React UIs to scalable Node.js + MongoDB backends with REST APIs.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-2 uppercase tracking-wider">Experience</h4>
                  <p className="text-base">
                    Worked at Robogenesis as a Junior Web Developer and interned at Wayindia Software Solution, building real-world web applications including a Blood Donation platform and an NGO Survey system.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image with Parallax */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden">
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src="/about-bg.png"
                alt="Developer workspace"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop";
                }}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
