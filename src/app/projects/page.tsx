import Projects from "@/components/Projects";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Projects | Jyotiranjan Behera",
  description: "A showcase of my recent projects demonstrating my ability to build scalable applications.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <PageTransition>
        <Projects />
      </PageTransition>
    </main>
  );
}
