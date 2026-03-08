export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export const experienceData: Experience[] = [
  {
    id: 1,
    company: "College Level Student",
    role: "MCA Student",
    duration: "Present",
    description: "Currently pursuing Master of Computer Applications (MCA) and building full-stack applications to solve real-world problems. Specialized in the MERN stack.",
  },
  {
    id: 2,
    company: "Freelance",
    role: "Full Stack Developer",
    duration: "2023 - Present",
    description: "Developed and delivered various web applications for clients, including comprehensive ERP systems and AI-powered utilities using modern web technologies.",
  }
];
