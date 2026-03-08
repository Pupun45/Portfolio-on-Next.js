import Skills from "@/components/Skills";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Skills | Jyotiranjan Behera",
  description: "A comprehensive overview of my technical skills and competencies.",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-20">
      <PageTransition>
        <Skills />
      </PageTransition>
    </main>
  );
}
