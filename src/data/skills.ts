export interface Skill {
  name: string;
  level: number; // Percentage (0-100)
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
    ],
  },
];
