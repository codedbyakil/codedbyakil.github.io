"use client"

import { Code2, Layers, Terminal, Video, Radio, Palette, Server, GitBranch } from "lucide-react"

const skills = [
  { icon: Code2, name: "Kotlin & Android", level: "CORE FOCUS", progress: 90, desc: "Android Studio, Jetpack Compose, Media UI, Coroutines" },
  { icon: Radio, name: "ExoPlayer & HLS/DASH", level: "ADVANCED", progress: 85, desc: "Custom renderers, M3U8 parsing, live buffering" },
  { icon: Layers, name: "React & Next.js", level: "PROFICIENT", progress: 82, desc: "SSR, Turbopack, App Router, responsive design" },
  { icon: Palette, name: "Neomorphic & Liquid UI", level: "SPECIALTY", progress: 88, desc: "Dark mode depth, glassmorphism, micro-interactions" },
  { icon: Video, name: "FFmpeg & Streaming", level: "PRACTICAL", progress: 78, desc: "Video transcode pipelines, codecs, stream muxing" },
  { icon: Terminal, name: "TypeScript & JavaScript", level: "PROFICIENT", progress: 84, desc: "Async patterns, strict typing, DOM optimizations" },
  { icon: Server, name: "Node.js & Backend APIs", level: "EXPLORING", progress: 72, desc: "RESTful endpoints, automation scripts, server utilities" },
  { icon: GitBranch, name: "Git & GitHub CI", level: "PROFICIENT", progress: 85, desc: "Version control, release tags, open-source workflow" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-heading">
            Skills & Capabilities
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Technical proficiencies built through hands-on development and live projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl neo-card border border-white/5 hover:border-rose-500/35 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 group-hover:scale-110 transition-transform">
                    <skill.icon className="h-4 sm:h-5 w-4 sm:w-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-semibold text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-rose-200 transition-colors font-heading">
                  {skill.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 sm:mt-5 pt-3 border-t border-white/5">
                <div className="flex justify-between text-[10px] font-mono text-zinc-400 mb-1">
                  <span>Proficiency</span>
                  <span className="text-rose-400 font-bold">{skill.progress}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#08090e] border border-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-rose-600 to-red-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
