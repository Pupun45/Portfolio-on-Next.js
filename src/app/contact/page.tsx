import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Contact | Jyotiranjan Behera",
  description: "Get in touch with me for work opportunities or to just say hi.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <PageTransition>
        <Contact />
      </PageTransition>
    </main>
  );
}
