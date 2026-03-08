export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MERN Dashboard",
    description: "A comprehensive administrative dashboard built with the MERN stack. Features real-time data visualization, user management, and secure authentication.",
    image: "/images/projects/mern-dashboard.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "College ERP System",
    description: "An enterprise resource planning system for colleges. Includes modules for student attendance, grades, fee management, and faculty portal.",
    image: "/images/projects/college-erp.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Face Attendance System",
    description: "An AI-powered attendance tracking system utilizing facial recognition technology for seamless and secure student check-ins.",
    image: "/images/projects/face-attendance.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "face-api.js"],
    githubUrl: "#",
    liveUrl: "#"
  }
];
