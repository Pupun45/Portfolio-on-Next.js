"use client";

import { motion } from "framer-motion";
import {
  FiDownload,
  FiBriefcase,
  FiBook,
  FiCode,
  FiAward,
  FiUser,
  FiMapPin,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiPhone,
  FiLayers,
} from "react-icons/fi";

// ─── Data (sourced from Jyoti.pdf) ────────────────────────────────────────────

const profile = {
  name: "Jyoti Ranjan Behera",
  title: "Web Developer",
  address: "At-Tarito, Po-Tarito, Dist-Cuttack, Odisha – 754131",
  phone: "+91 9040682566",
  email: "jyotiranjanbehera282@gmail.com",
  emailHref: "mailto:jyotiranjanbehera282@gmail.com",
  github: "github.com/Pupun45",
  githubHref: "https://github.com/Pupun45",
  linkedin: "linkedin.com/in/jyotiranjan-behera",
  linkedinHref: "https://www.linkedin.com/in/jyotiranjan-behera-2b50902aa",
  summary:
    "I am seeking employment with a company where I can grow professionally and personally. I want to become a Full Stack Developer.",
};

const experience = [
  {
    company: "Robogenesis, Bhubaneswar",
    roles: [
      {
        title: "Junior Web Developer",
        type: "Full-time",
        period: "Aug 2025 – Present",
        bullets: [
          "Develop and maintain full-stack web applications using the MERN stack.",
          "Enhance platform performance by optimizing APIs, frontend components, and database queries.",
          "Collaborate with senior developers to build scalable features and implement UI/UX improvements.",
          "Work closely with the product team to refine requirements and deliver high-quality solutions.",
        ],
      },
      {
        title: "Full-stack Developer",
        type: "Internship",
        period: "Jun 2025 – Aug 2025",
        bullets: [
          "Built end-to-end features using MongoDB, Express.js, React, and Node.js.",
          "Implemented REST APIs and integrated them with the frontend.",
          "Worked on real-world projects involving API integration and data handling.",
        ],
      },
    ],
  },
  {
    company: "Wayindia Software Solution Pvt. Ltd., Bhubaneswar",
    roles: [
      {
        title: "Frontend Developer",
        type: "Internship",
        period: "Feb 2024 – Apr 2024",
        bullets: [
          "Developed responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.",
          "Collaborated with backend teams to integrate APIs and ensure seamless performance.",
          "Improved web layouts and optimized UI for faster loading and mobile responsiveness.",
        ],
      },
    ],
  },
];

const projects = [
  {
    name: "Blood Donation Web Application",
    stack: "React.js · Node.js · Express.js · MongoDB",
    description:
      "A full-stack web application designed to manage and streamline blood donation, requests, and availability tracking. Secure and efficient data handling with REST APIs.",
  },
  {
    name: "NGO Survey & Donation Web Application",
    stack: "React.js · HTML · CSS",
    description:
      "A responsive web application for NGOs to manage surveys, donations, and food distribution activities. Mobile-friendly UI with structured forms and reusable components.",
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "GIFT Autonomous College, Bhubaneswar (BPUT)",
    period: "Pursuing",
    grade: "CGPA: 8.5",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Nabapravat Academy for Management Education, Salepur (Utkal University)",
    period: "Completed 2024",
    grade: "70.69%",
  },
  {
    degree: "Higher Secondary (+2 Science)",
    institution: "Subhadra Mahatab HS School, Asureswara (CHSE)",
    period: "Completed 2021",
    grade: "53.16%",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "React Hooks", "Redux", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "Authentication & Authorization"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Mongoose (ODM)"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "VS Code", "NPM", "Netlify"],
  },
  {
    category: "Other",
    items: ["JSON Handling", "Responsive Web Design", "State Management", "API Integration"],
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="p-2 rounded-lg bg-foreground/5 text-foreground/60">{icon}</span>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <div className="flex-1 h-px bg-foreground/8" />
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-foreground/8 bg-foreground/[0.02] p-6 ${className}`}>
      {children}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ResumePage() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-sm font-mono uppercase tracking-widest text-foreground/40 mb-2">Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter">Resume.</h1>
          </div>
          <a
            href="/resume.pdf"
            download="Jyoti_Ranjan_Behera_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform text-sm shrink-0 self-start sm:self-auto"
          >
            <FiDownload size={16} />
            Download PDF
          </a>
        </motion.div>

        {/* About Me */}
        <motion.div {...fadeUp(0.1)}>
          <Card className="mb-6">
            <SectionTitle icon={<FiUser size={16} />} title="About Me" />
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-20 h-20 rounded-2xl bg-foreground/8 border border-foreground/10 flex items-center justify-center text-2xl font-bold text-foreground/50 shrink-0">
                JB
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold">{profile.name}</h2>
                <p className="text-foreground/60 mt-0.5">{profile.title}</p>

                {/* Contact Buttons */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center gap-1.5 text-sm text-foreground/50 px-3 py-1 rounded-lg border border-foreground/8 bg-foreground/[0.02]">
                    <FiMapPin size={12} />{profile.address}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-foreground/50 px-3 py-1 rounded-lg border border-foreground/8 bg-foreground/[0.02]">
                    <FiPhone size={12} />{profile.phone}
                  </span>
                  <a href={profile.emailHref}
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors px-3 py-1 rounded-lg border border-foreground/8 hover:border-foreground/20 hover:bg-foreground/5">
                    <FiMail size={12} />{profile.email}
                  </a>
                  <a href={profile.githubHref} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors px-3 py-1 rounded-lg border border-foreground/8 hover:border-foreground/20 hover:bg-foreground/5">
                    <FiGithub size={12} />{profile.github}
                  </a>
                  <a href={profile.linkedinHref} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors px-3 py-1 rounded-lg border border-foreground/8 hover:border-foreground/20 hover:bg-foreground/5">
                    <FiLinkedin size={12} />{profile.linkedin}
                  </a>
                </div>

                <p className="mt-4 text-sm text-foreground/60 leading-relaxed">{profile.summary}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Experience */}
        <motion.div {...fadeUp(0.15)}>
          <Card className="mb-6">
            <SectionTitle icon={<FiBriefcase size={16} />} title="Work Experience" />
            <div className="space-y-6">
              {experience.map((comp) => (
                <div key={comp.company}>
                  <p className="text-sm font-semibold text-foreground mb-3">{comp.company}</p>
                  <div className="pl-4 border-l border-foreground/10 space-y-5">
                    {comp.roles.map((r) => (
                      <div key={r.period}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-foreground">{r.title}</span>
                            <span className="text-xs px-2 py-0.5 rounded-md bg-foreground/5 text-foreground/50 border border-foreground/8">{r.type}</span>
                          </div>
                          <span className="text-xs font-mono text-foreground/40">{r.period}</span>
                        </div>
                        <ul className="space-y-1">
                          {r.bullets.map((b, i) => (
                            <li key={i} className="flex gap-2 text-sm text-foreground/60">
                              <span className="text-foreground/30 mt-1 shrink-0">▸</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Projects */}
        <motion.div {...fadeUp(0.2)}>
          <Card className="mb-6">
            <SectionTitle icon={<FiLayers size={16} />} title="Projects" />
            <div className="space-y-5">
              {projects.map((p) => (
                <div key={p.name} className="pl-4 border-l border-foreground/10">
                  <p className="text-sm font-semibold text-foreground">{p.name}</p>
                  <p className="text-xs text-foreground/40 mt-0.5 font-mono">{p.stack}</p>
                  <p className="text-sm text-foreground/60 mt-1.5 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Education */}
          <motion.div {...fadeUp(0.25)}>
            <Card className="h-full">
              <SectionTitle icon={<FiBook size={16} />} title="Education" />
              <div className="space-y-5">
                {education.map((edu) => (
                  <div key={edu.degree} className="pl-3 border-l border-foreground/10">
                    <p className="text-sm font-semibold text-foreground">{edu.degree}</p>
                    <p className="text-xs text-foreground/55 mt-0.5">{edu.institution}</p>
                    <div className="flex gap-3 mt-1 text-xs text-foreground/40">
                      <span>{edu.period}</span>
                      <span>·</span>
                      <span className="font-medium">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div {...fadeUp(0.3)}>
            <Card className="h-full">
              <SectionTitle icon={<FiCode size={16} />} title="Skills" />
              <div className="space-y-4">
                {skills.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-2">{group.category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 rounded-lg text-xs bg-foreground/5 text-foreground/70 border border-foreground/8">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

        </div>

        {/* Bottom Download */}
        <motion.div {...fadeUp(0.35)} className="mt-6 p-4 rounded-xl border border-foreground/8 bg-foreground/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
          <p>Want the full PDF version? Download it directly.</p>
          <a
            href="/resume.pdf"
            download="Jyoti_Ranjan_Behera_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-foreground/15 text-foreground/70 hover:bg-foreground/5 transition-colors text-sm"
          >
            <FiDownload size={14} />
            Download Resume
          </a>
        </motion.div>

      </div>
    </main>
  );
}
