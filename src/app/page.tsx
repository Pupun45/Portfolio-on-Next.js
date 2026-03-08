import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageTransition>
        <Hero />
      </PageTransition>
    </main>
  );
}
