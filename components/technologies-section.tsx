"use client"

import { Palette, Layers, Radio, Smartphone, CheckCircle2 } from "lucide-react"

const technologies = [
  {
    icon: Smartphone,
    title: "Android Systems & Kotlin",
    subtitle: "NATIVE MOBILE & TV ARCHITECTURE",
    description:
      "Writing native Android apps in Kotlin using Android Studio. Constructing fluid media player UIs with ExoPlayer, implementing custom adapters, and architecting lean layouts for smartphones and Android TV.",
    tools: ["Kotlin", "Android Studio", "Jetpack Compose", "Android TV Leanback", "Coroutines"],
    accentColor: "from-rose-500/20 to-transparent",
    iconColor: "text-rose-400 bg-rose-500/10",
  },
  {
    icon: Radio,
    title: "Streaming Technologies & IPTV",
    subtitle: "EXOPLAYER & PROTOCOL ENGINES",
    description:
      "Deep exploration of HLS and DASH streaming protocols, dynamic M3U8 playlist parsing, live broadcast token management, and ExoPlayer cache optimization for low-latency live playback.",
    tools: ["ExoPlayer", "HLS / M3U8", "DASH", "FFmpeg", "IPTV Parsers"],
    accentColor: "from-red-500/20 to-transparent",
    iconColor: "text-red-400 bg-red-500/10",
  },
  {
    icon: Layers,
    title: "Modern Frontend Systems",
    subtitle: "NEXT.JS & HIGH-PERFORMANCE WEB",
    description:
      "Building lightning-fast web applications with Next.js, React, and TypeScript. Focused on high Lighthouse scores, semantic SEO tags, smooth animations, and clean modular component architecture.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    accentColor: "from-rose-500/20 to-transparent",
    iconColor: "text-rose-400 bg-rose-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX & Liquid Neomorphism",
    subtitle: "VISUAL SYSTEMS & MICRO-INTERACTIONS",
    description:
      "Crafting dark-mode skeuomorphic depth, frosted liquid blur layers, responsive grids, and micro-animations inspired by modern cyber-luxe aesthetics. Eliminating clunky templates in favor of bespoke craftsmanship.",
    tools: ["Dark Neomorphism", "Glassmorphism", "Micro-Animations", "CSS Variables"],
    accentColor: "from-pink-500/20 to-transparent",
    iconColor: "text-pink-400 bg-pink-500/10",
  },
]

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-heading">
            Technologies & Focus
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            The domains and systems I actively explore, engineer, and refine every single day.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {technologies.map((tech) => (
            <article
              key={tech.title}
              className="group relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl neo-card border border-white/5 hover:border-rose-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div 
                className={`absolute top-0 right-0 w-40 sm:w-48 h-40 sm:h-48 rounded-bl-full bg-gradient-to-bl ${tech.accentColor} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none -z-10`}
              />

              <div className="flex flex-col h-full justify-between space-y-5 sm:space-y-6">
                
                {/* Header with Icon */}
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl ${tech.iconColor} border border-rose-500/20 shadow-[0_0_15px_rgba(225,29,72,0.15)]`}>
                      <tech.icon className="h-5 sm:h-6 w-5 sm:w-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      ACTIVE SPEC
                    </span>
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-[11px] font-mono tracking-wider text-rose-400 uppercase font-semibold">
                      {tech.subtitle}
                    </p>
                    <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-rose-200 transition-colors mt-0.5 font-heading">
                      {tech.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Tool Pills */}
                <div className="pt-3.5 sm:pt-4 border-t border-white/10">
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-2">KEY LIBRARIES & TOOLS</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {tech.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-mono bg-[#090b10] border border-white/10 text-zinc-300 group-hover:border-rose-500/25 group-hover:text-white transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                      >
                        <CheckCircle2 className="h-3 w-3 text-rose-400" />
                        <span>{tool}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
