"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiArrowRight, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      // Replace these with actual EmailJS credentials later
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          to_name: "Jyotiranjan Behera",
          from_email: formData.email,
          to_email: "your_email@example.com",
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
      
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter">
            Let's connect.
          </h2>
          <p className="mt-6 text-xl text-foreground/50 font-light max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message and I'll get back to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-foreground/20 px-0 py-4 text-xl text-foreground placeholder-transparent focus:outline-none focus:border-foreground transition-colors"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-4 text-xl text-foreground/40 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-foreground peer-valid:-top-3 peer-valid:text-xs pointer-events-none"
                >
                  Name
                </label>
              </div>

              <div className="flex-1 relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-foreground/20 px-0 py-4 text-xl text-foreground placeholder-transparent focus:outline-none focus:border-foreground transition-colors"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-4 text-xl text-foreground/40 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-foreground peer-valid:-top-3 peer-valid:text-xs pointer-events-none"
                >
                  Email
                </label>
              </div>
            </div>

            <div className="relative mt-8">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-foreground/20 px-0 py-4 text-xl text-foreground placeholder-transparent focus:outline-none focus:border-foreground transition-colors resize-none"
              />
              <label 
                htmlFor="message" 
                className="absolute left-0 top-4 text-xl text-foreground/40 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-foreground peer-valid:-top-3 peer-valid:text-xs pointer-events-none"
              >
                Message
              </label>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group w-full md:w-auto px-12 py-5 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2 disabled:opacity-70 text-lg"
              >
                {status === "loading" ? (
                  <div className="w-6 h-6 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                ) : (
                  <>
                    Send <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              <div className="h-6">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-green-500 font-medium"
                  >
                    <FiCheckCircle size={20} /> Received. I'll be in touch!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-red-500 font-medium"
                  >
                    <FiAlertCircle size={20} /> Failed to send. Please try again.
                  </motion.div>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
