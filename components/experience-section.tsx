"use client"

import { CheckCircle2 } from "lucide-react"

const experiences = [
  {
    period: "2024 — PRESENT",
    phase: "ACTIVE PHASE",
    title: "High-Performance Android & IPTV Systems",
    company: "Open Source Creator @ codedbyakil",
    description:
      "Architecting open-source Kotlin Android applications with custom ExoPlayer pipelines, testing Android TV Leanback UI interactions, and managing IPTV playlist architectures on GitHub.",
    highlights: [
      "Custom ExoPlayer caching & live stream buffer tuning",
      "Android TV remote D-Pad navigation architectures",
      "Public repository releases with community stars & forks",
    ],
  },
  {
    period: "2023 — 2024",
    phase: "FOUNDATION PHASE",
    title: "Web Systems, Glassmorphism & Modern UI",
    company: "Self-Directed Mastery — Next.js & Frontend",
    description:
      "Deep dive into semantic web engineering, reactive layout design, dark-mode skeuomorphism, and modern JavaScript. Dissected production design systems from Linear, Vercel, and Apple to build custom interfaces.",
    highlights: [
      "Crafted custom CSS variable design tokens & liquid blur animations",
      "Integrated Next.js with Tailwind CSS & Turbopack",
      "Mastered SEO structured metadata, JSON-LD, and web performance",
    ],
  },
  {
    period: "2022 — 2023",
    phase: "ORIGIN PHASE",
    title: "First Steps in Native Android Development",
    company: "Self-Taught — Kotlin & Android Studio",
    description:
      "Began the coding journey as a Grade 10 student. Taught myself Kotlin syntax, object-oriented principles, Android lifecycle management, and built foundational media apps from scratch.",
    highlights: [
      "Configured Android Studio toolchain and Gradle build scripts",
      "Built initial video and audio player test apps",
      "Established GitHub portfolio and open source publishing habit",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-heading">
            Experience & Journey
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            From first lines of Kotlin to engineered streaming platforms — a chronology of relentless curiosity.
          </p>
        </div>

        {/* Timeline Pipeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Pipeline */}
          <div className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500/60 via-red-500/30 to-rose-500/5 md:-translate-x-1/2 shadow-[0_0_12px_rgba(225,29,72,0.4)]" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-6 sm:gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Clean Solid Glowing Node */}
                <div className="absolute left-3 sm:left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="h-3.5 sm:h-4 w-3.5 sm:w-4 rounded-full bg-rose-500 border-2 border-[#07080b] shadow-[0_0_12px_rgba(225,29,72,0.9)]" />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full pl-8 sm:pl-12 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-left" : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl neo-card border border-white/5 hover:border-rose-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                      <span className="text-[10px] font-mono tracking-wider font-semibold text-rose-400 uppercase">
                        {exp.phase}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-xl font-bold text-white mb-1 font-heading">
                      {exp.title}
                    </h3>
                    <p className="text-xs font-mono text-rose-300/80 mb-3">
                      {exp.company}
                    </p>

                    <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 pt-3 border-t border-white/5">
                      {exp.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[11px] sm:text-xs text-zinc-400">
                          <CheckCircle2 className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for opposite side on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
