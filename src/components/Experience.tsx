"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

const typeBadgeColor: Record<string, string> = {
  "Full-time": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Internship: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Part-time": "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

// Simple letter-based company logo fallback
function CompanyLogo({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-12 h-12 rounded-xl bg-foreground/8 border border-foreground/10 flex items-center justify-center shrink-0 text-sm font-bold text-foreground/60">
      {initials}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm font-mono uppercase tracking-widest text-foreground/40 mb-3">
            Career
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">
            Experience.
          </h2>
        </motion.div>

        {/* Company Groups */}
        <div className="space-y-12">
          {experienceData.map((company, cIdx) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: cIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-foreground/8 bg-foreground/[0.02] overflow-hidden"
            >
              {/* Company Header */}
              <div className="flex items-center gap-4 px-6 py-5 border-b border-foreground/8">
                <CompanyLogo name={company.name} />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground leading-tight truncate">
                    {company.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-foreground/50">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={12} />
                      {company.tenure}
                    </span>
                    <span className="hidden sm:block">·</span>
                    <span className="flex items-center gap-1">
                      <FiMapPin size={12} />
                      {company.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Roles Timeline */}
              <div className="px-6 py-4 space-y-0">
                {company.roles.map((role, rIdx) => (
                  <div key={rIdx} className="relative flex gap-4">

                    {/* Timeline line + dot */}
                    <div className="flex flex-col items-center pt-5">
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-foreground/40 bg-background shrink-0 z-10" />
                      {rIdx < company.roles.length - 1 && (
                        <div className="w-px flex-1 bg-foreground/10 mt-1" />
                      )}
                    </div>

                    {/* Role Content */}
                    <div className={`flex-1 pb-8 ${rIdx === company.roles.length - 1 ? "pb-4" : ""}`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 pt-3">
                        <div>
                          <h4 className="text-base font-semibold text-foreground">
                            {role.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-2 mt-1.5">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium border ${typeBadgeColor[role.type]}`}
                            >
                              <FiBriefcase size={10} />
                              {role.type}
                            </span>
                            {role.location && (
                              <span className="text-xs text-foreground/40 flex items-center gap-1">
                                <FiMapPin size={10} />
                                {role.location}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs font-mono text-foreground/50">{role.period}</p>
                          <p className="text-xs text-foreground/35 mt-0.5">{role.duration}</p>
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
                        {role.description}
                      </p>

                      {/* Skill Tags */}
                      {role.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {role.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-lg text-xs bg-foreground/5 text-foreground/60 border border-foreground/8"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
