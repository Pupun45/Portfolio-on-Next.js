import Experience from "@/components/Experience";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Experience | Jyotiranjan Behera",
  description: "A timeline of my career journey and educational background.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-20">
      <PageTransition>
        <Experience />
      </PageTransition>
    </main>
  );
}
