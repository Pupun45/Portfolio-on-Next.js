"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiBootstrap, SiHtml5, SiJavascript, SiTypescript,
  SiChartdotjs, SiNodedotjs, SiMongodb, SiPhp, SiNginx,
  SiRedux, SiAngular, SiDocker, SiSass, SiFigma,
  SiArduino, SiTailwindcss, SiMysql,
  SiVuedotjs, SiNextdotjs, SiExpress,
  SiGooglecloud, SiKubernetes, SiLinux,
} from "react-icons/si";
import {
  FaGitAlt, FaCss3Alt, FaAws,
} from "react-icons/fa";
import { VscTerminalBash } from "react-icons/vsc";
import { DiPhotoshop } from "react-icons/di";

const frontendSkills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Chart.js", icon: SiChartdotjs, color: "#FF6384" },
];

const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Sass", icon: SiSass, color: "#CC6699" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Arduino", icon: SiArduino, color: "#00979D" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
  { name: "Photoshop", icon: DiPhotoshop, color: "#31A8FF" },
];

const devopsSkills = [
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Bash", icon: VscTerminalBash, color: "#89D051" },
];

type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
};

function SkillIcon({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.12 }}
      className="flex flex-col items-center gap-2 group cursor-default"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-foreground/5 border border-foreground/10 group-hover:bg-foreground/10 transition-all duration-300">
        <Icon size={30} color={skill.color} />
      </div>
      <span className="text-xs text-foreground/50 group-hover:text-foreground/80 transition-colors font-medium">
        {skill.name}
      </span>
    </motion.div>
  );
}

function CategorySection({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14"
    >
      <h3 className="text-lg font-semibold text-foreground/80 mb-6 pb-3 border-b border-foreground/10 uppercase tracking-widest">
        {title}
      </h3>
      <div className="flex flex-wrap gap-5">
        {skills.map((skill, i) => (
          <SkillIcon key={skill.name + i} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">


        <CategorySection title="Frontend" skills={frontendSkills} />
        <CategorySection title="Backend" skills={backendSkills} />
        <CategorySection title="DevOps" skills={devopsSkills} />
      </div>
    </section>
  );
}
