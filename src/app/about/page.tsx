import About from "@/components/About";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "About | Jyotiranjan Behera",
  description: "Learn more about my background, focus, and experience as a MERN stack developer.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <PageTransition>
        <About />
      </PageTransition>
    </main>
  );
}
