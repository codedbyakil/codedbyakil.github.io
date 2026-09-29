"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Globe, Github, Cloud, Smartphone } from "lucide-react"
import { myProjects, Project } from "@/data/projects"

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All")

  const platforms = ["All", ...Array.from(new Set(myProjects.map((p) => p.platform)))]

  const filteredProjects = filter === "All"
    ? myProjects
    : myProjects.filter((p) => p.platform === filter)

  const getPlatformIcon = (platform: Project["platform"]) => {
    switch (platform) {
      case "Cloudflare":
        return <Cloud className="h-3.5 w-3.5 text-amber-400" />
      case "GitHub":
        return <Github className="h-3.5 w-3.5 text-zinc-300" />
      case "Android":
        return <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
      default:
        return <Globe className="h-3.5 w-3.5 text-rose-400" />
    }
  }

  const getPlatformBadgeStyle = (platform: Project["platform"]) => {
    switch (platform) {
      case "Cloudflare":
        return "bg-amber-500/10 text-amber-300 border-amber-500/30"
      case "GitHub":
        return "bg-white/10 text-zinc-200 border-white/15"
      case "Android":
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
      default:
        return "bg-rose-500/10 text-rose-300 border-rose-500/30"
    }
  }

  return (
    <section id="projects" className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-heading">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Live projects engineered and deployed across GitHub and Cloudflare Pages.
          </p>
        </div>

        {/* Platform Filter Tabs */}
        {platforms.length > 1 && (
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="inline-flex flex-wrap justify-center p-1.5 rounded-xl sm:rounded-2xl neo-inset border border-white/5 gap-1">
              {platforms.map((plat) => (
                <button
                  key={plat}
                  onClick={() => setFilter(plat)}
                  className={`px-3.5 sm:px-4 py-1.5 text-xs font-semibold rounded-lg sm:rounded-xl transition-all ${
                    filter === plat
                      ? "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-[0_2px_15px_rgba(225,29,72,0.4)]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {plat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Curated Projects Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {filteredProjects.map((project) => (
            <article
              key={project.id || project.name}
              className="group flex flex-col justify-between p-5 sm:p-8 rounded-2xl sm:rounded-3xl neo-card border border-white/5 hover:border-rose-500/35 transition-all duration-300"
            >
              <div>
                {/* Header line with Platform badge and Language */}
                <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider rounded-lg border ${getPlatformBadgeStyle(project.platform)}`}>
                    {getPlatformIcon(project.platform)}
                    <span>{project.platform.toUpperCase()}</span>
                  </span>

                  <span className="text-[10px] font-mono tracking-wider text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    {project.language}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-rose-300 transition-colors mb-2 font-mono break-words">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 sm:mb-5">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-mono rounded-md bg-[#090b10] border border-white/5 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer with Direct Links */}
              <div className="pt-3.5 sm:pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-zinc-400">
                  {project.platform}
                </span>

                <div className="flex items-center gap-2">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold text-white neo-btn-primary hover:scale-[1.02] transition-all"
                  >
                    <span>View Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
