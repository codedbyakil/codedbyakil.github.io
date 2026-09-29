"use client"

import Link from "next/link"
import { MapPin, GraduationCap, Code2, Cpu, Radio, Terminal } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background liquid accent orb */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-rose-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-heading">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Grade 12 student from Kanyakumari, Tamil Nadu — engineering native Android apps, 
            IPTV engines, and modern web experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Clean Engineering Profile Card */}
          <div className="lg:col-span-5 flex">
            <div className="w-full p-5 sm:p-7 rounded-2xl sm:rounded-3xl neo-card border border-white/10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3 sm:pb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-rose-400" />
                    <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">
                      DEVELOPER SPECS
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                    Grade 12 Builder
                  </span>
                </div>

                {/* Key Stack Breakdown */}
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl neo-inset border border-white/5">
                    <div className="flex items-center gap-2.5 mb-1">
                      <Code2 className="h-4 w-4 text-rose-400" />
                      <p className="text-xs font-bold text-white">Native Android Core</p>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Kotlin, Android TV, Media3, Jetpack architecture in Android Studio.
                    </p>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl neo-inset border border-white/5">
                    <div className="flex items-center gap-2.5 mb-1">
                      <Radio className="h-4 w-4 text-rose-400" />
                      <p className="text-xs font-bold text-white">Media & IPTV Streaming</p>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      ExoPlayer playback, M3U playlist parsers, live HLS buffering pipelines.
                    </p>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl neo-inset border border-white/5">
                    <div className="flex items-center gap-2.5 mb-1">
                      <Cpu className="h-4 w-4 text-rose-400" />
                      <p className="text-xs font-bold text-white">Modern Frontend & Edge</p>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Next.js, TailwindCSS, fluid neomorphic UI, Cloudflare & GitHub Pages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Developer Mindset Metrics */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl neo-inset border border-white/5 text-center">
                    <p className="text-xl sm:text-2xl font-black text-rose-400">100%</p>
                    <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Self-Taught</p>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl neo-inset border border-white/5 text-center">
                    <p className="text-xl sm:text-2xl font-black text-white">0%</p>
                    <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Bloatware</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-1">
                  <MapPin className="h-4 w-4 text-rose-500 shrink-0" />
                  <span>Kanyakumari, Tamil Nadu, India</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight font-heading">
                Self-Taught Builder Obsessed With Speed, Media & Design.
              </h3>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                I am a self-taught high school developer based in Kanyakumari, Tamil Nadu. 
                Instead of waiting for traditional courses, I dove directly into building real projects. 
                My focus centers on mastering Android development with Kotlin, orchestrating media playback 
                pipelines using ExoPlayer, and engineering responsive web experiences.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                I believe the most effective way to understand technology is to construct real products. 
                Whether architecting IPTV streaming playlists, designing Android TV user interfaces, or crafting 
                fluid neomorphic web apps, every commit represents a hands-on technical milestone.
              </p>
            </div>

            {/* 4 Neomorphic Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-2">
              
              <div className="p-4 rounded-xl sm:rounded-2xl neo-card border border-white/5 hover:border-rose-500/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Grade 12 Student</h4>
                    <p className="text-[11px] font-mono text-zinc-400">Tamil Nadu, India</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Balancing academic milestones with daily software development and open-source explorations.
                </p>
              </div>

              <div className="p-4 rounded-xl sm:rounded-2xl neo-card border border-white/5 hover:border-rose-500/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Android Systems</h4>
                    <p className="text-[11px] font-mono text-zinc-400">Native Kotlin & TV</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Building native applications in Android Studio with clean architecture and modern Jetpack libraries.
                </p>
              </div>

              <div className="p-4 rounded-xl sm:rounded-2xl neo-card border border-white/5 hover:border-rose-500/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
                    <Radio className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">IPTV & Streaming</h4>
                    <p className="text-[11px] font-mono text-zinc-400">ExoPlayer / HLS</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Hands-on experience with M3U playlists, live channel parsing, and HLS/DASH media streams.
                </p>
              </div>

              <div className="p-4 rounded-xl sm:rounded-2xl neo-card border border-white/5 hover:border-rose-500/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Modern Frontend</h4>
                    <p className="text-[11px] font-mono text-zinc-400">Next.js & Design</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Crafting hyper-polished liquid glass, neomorphic depth, responsive grids, and clean interactions.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
