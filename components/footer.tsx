"use client"

import Link from "next/link"
import { Github, Instagram, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 sm:py-14 border-t border-white/10 bg-[#08090e]/80 backdrop-blur-xl relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Brand & SEO tagline */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-lg font-black tracking-wider text-white font-heading">AKIL</p>
            <p className="text-xs text-zinc-400 font-mono">
              Grade 12 Self-Taught Developer · Kanyakumari, Tamil Nadu, India
            </p>
            <p className="text-[11px] text-zinc-400">
              © {new Date().getFullYear()} codedbyakil · Android · Streaming Systems · Web Design
            </p>
          </div>

          {/* Social Links & Back-to-Top */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href="https://github.com/codedbyakil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl neo-btn-glass text-zinc-400 hover:text-white transition-all active:scale-95"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </Link>

            <Link
              href="https://www.instagram.com/justdeploy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl neo-btn-glass text-zinc-400 hover:text-white transition-all active:scale-95"
              aria-label="Instagram Profile @justdeploy"
            >
              <Instagram className="h-4 w-4" />
            </Link>

            <Link
              href="mailto:akilaskan@gmail.com"
              className="p-2.5 rounded-xl neo-btn-glass text-zinc-400 hover:text-white transition-all active:scale-95"
              aria-label="Direct Email"
            >
              <Mail className="h-4 w-4" />
            </Link>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl neo-btn-glass text-rose-400 hover:text-white hover:border-rose-500/40 transition-all flex items-center gap-1.5 ml-1 sm:ml-2 text-xs font-mono active:scale-95"
              aria-label="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  )
}
