"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import profile from "../../public/jyoti.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background pt-20">

      {/* Background Gradients */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-accent/20 rounded-full blur-[100px] pointer-events-none -z-10"
      />

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl">

        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-foreground/70">Available for work</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl text-foreground/60 font-light mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-foreground">
              Jyoti Ranjan Behera
            </h1>
            <h3 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6">
              Web Developer · MERN Stack
            </h3>
            <p className="text-lg text-foreground/60 max-w-xl font-light leading-relaxed mb-10">
              Seeking to grow professionally as a Full Stack Developer — building scalable, responsive web applications using the MERN stack.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform flex items-center justify-center min-w-[160px]"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-foreground/20 text-foreground font-medium hover:bg-foreground/5 transition-colors flex items-center justify-center min-w-[160px] gap-2 group"
            >
              Let's Talk
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Profile & Skills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex-1 flex flex-col items-center justify-center relative"
        >
          {/* Profile Image Box */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden bg-foreground/5 p-4 backdrop-blur-sm border border-foreground/10 mb-12">
            <div className="w-full h-full rounded-3xl overflow-hidden relative">
              <img
                src="/jyoti.jpg"
                alt="Jyoti Ranjan Behera"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=Jyoti+Ranjan+Behera&size=512&background=0D8ABC&color=fff";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>

          {/* Skill Icons Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <motion.div whileHover={{ y: -5 }} className="text-foreground/50 hover:text-[#61DAFB] transition-colors"><SiReact size={32} /></motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-foreground/50 hover:text-foreground transition-colors"><SiNextdotjs size={32} /></motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-foreground/50 hover:text-[#339933] transition-colors"><SiNodedotjs size={32} /></motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-foreground/50 hover:text-[#47A248] transition-colors"><SiMongodb size={32} /></motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-foreground/50 hover:text-[#38B2AC] transition-colors"><SiTailwindcss size={32} /></motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-foreground/50 hover:text-[#3178C6] transition-colors"><SiTypescript size={32} /></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
