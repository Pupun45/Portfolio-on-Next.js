export interface Role {
  title: string;
  type: "Full-time" | "Internship" | "Part-time";
  duration: string;
  period: string;
  location?: string;
  description: string;
  skills: string[];
}

export interface Company {
  id: number;
  name: string;
  logo?: string;
  location: string;
  tenure: string;
  roles: Role[];
}

export const experienceData: Company[] = [
  {
    id: 1,
    name: "Robogenesis",
    location: "Bhubaneswar, Odisha, India",
    tenure: "10 mos",
    roles: [
      {
        title: "Full-stack Developer",
        type: "Full-time",
        duration: "5 mos",
        period: "Nov 2025 – Present",
        description:
          "Working as a Full-stack Developer, developing scalable web applications using the MERN stack and contributing to both frontend and backend development.",
        skills: ["MERN Stack"],
      },
      {
        title: "Junior Web Developer",
        type: "Full-time",
        duration: "6 mos",
        period: "Aug 2025 – Jan 2026",
        location: "On-site",
        description:
          "Worked on web application development while improving technical expertise during the MCA program, focusing on MERN stack technologies and modern web development practices.",
        skills: ["Software Industry", "MERN Stack", "+6 skills"],
      },
      {
        title: "Full-stack Developer",
        type: "Internship",
        duration: "2 mos",
        period: "Jun 2025 – Jul 2025",
        description:
          "Assisted in building web application features, integrating APIs, and supporting full-stack development tasks.",
        skills: ["APIs (REST)", "MERN Stack", "+2 skills"],
      },
    ],
  },
  {
    id: 2,
    name: "Wayindia Software Solution Pvt. Ltd.",
    location: "Bhubaneswar, Odisha, India",
    tenure: "3 mos",
    roles: [
      {
        title: "Frontend Developer",
        type: "Internship",
        duration: "3 mos",
        period: "Feb 2024 – Apr 2024",
        location: "On-site",
        description:
          "Worked as a Frontend Developer responsible for building responsive user interfaces, improving UI/UX, and collaborating with the development team on web projects.",
        skills: ["Software Infrastructure", "E-Commerce", "+1 skill"],
      },
    ],
  },
];
