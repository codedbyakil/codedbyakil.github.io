"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"

const navLinks = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#technologies", id: "technologies", label: "Tech" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#connect", id: "connect", label: "Connect" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    document.documentElement.classList.add("dark")

    // Zero-overhead IntersectionObserver for scrollspy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    )

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    // Throttled scroll listener using requestAnimationFrame for 120 FPS
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          setIsScrolled(scrollY > 25)

          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          if (docHeight > 0) {
            setScrollProgress(Math.min(100, Math.max(0, (scrollY / docHeight) * 100)))
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2.5 sm:py-4 px-3 sm:px-6 transition-all duration-300 ease-out pointer-events-none">
      <div 
        className={`mx-auto transition-all duration-300 ease-out pointer-events-auto ${
          isScrolled ? "max-w-4xl" : "max-w-5xl"
        }`}
      >
        <nav
          className={`relative overflow-hidden flex items-center justify-between rounded-2xl transition-all duration-300 ease-out ${
            isScrolled
              ? "h-14 px-5 sm:px-6 bg-[#090b14]/90 backdrop-blur-2xl backdrop-saturate-200 border-t border-white/20 border-x border-white/10 border-b border-black/70 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),inset_0_-1px_1px_0_rgba(0,0,0,0.8),0_20px_45px_-10px_rgba(0,0,0,0.9),0_0_25px_-5px_rgba(225,29,72,0.25)]"
              : "h-16 px-6 sm:px-7 bg-[#0b0e18]/75 backdrop-blur-xl backdrop-saturate-150 border-t border-white/15 border-x border-white/10 border-b border-black/50 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_15px_35px_-8px_rgba(0,0,0,0.8)]"
          }`}
        >
          {/* Specular Edge Sheen (Top light bounce) */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

          {/* Brand Logo without any dot */}
          <Link
            href="#home"
            className="group flex items-center transition-colors py-1"
          >
            <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-rose-400 transition-colors">
              codedbyakil
            </span>
          </Link>

          {/* Desktop Navigation Links with Modern Squircle Inset Trench */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-[#060810]/85 border border-white/[0.08] shadow-[inset_0_2px_4px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-heading font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-white bg-gradient-to-b from-rose-500/30 via-rose-600/15 to-transparent border border-rose-500/45 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_12px_rgba(225,29,72,0.3)]"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Tactile Modern Squircle CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="#connect"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-b from-rose-500 via-rose-600 to-red-700 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.5),0_4px_16px_rgba(225,29,72,0.45),0_0_20px_rgba(225,29,72,0.2)] border-t border-rose-300/40 border-b border-rose-950/80 hover:brightness-110 active:scale-95 transition-all"
            >
              <Sparkles className="h-3.5 w-3.5 text-rose-100" />
              <span>Connect</span>
            </Link>

            {/* Mobile Menu Button with Squircle Styling */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/[0.06] border-t border-white/20 border-b border-black/40 text-zinc-300 hover:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {/* Micro Liquid Scroll Progress Laser Trace */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.04]">
            <div
              className="h-full bg-gradient-to-r from-rose-600 via-red-500 to-amber-300 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(225,29,72,0.85)]"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </nav>

        {/* Mobile Dropdown Menu with Frosted Glass Squircle */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 p-3 rounded-2xl bg-[#090b14]/95 backdrop-blur-2xl border-t border-white/20 border-x border-white/10 border-b border-black/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_20px_50px_rgba(0,0,0,0.95)] max-h-[calc(100vh-5rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2.5 text-xs font-heading font-semibold rounded-xl transition-all ${
                      isActive
                        ? "text-white bg-gradient-to-r from-rose-500/25 to-transparent border border-rose-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-2 border-t border-white/10 mt-1">
                <Link
                  href="#connect"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-b from-rose-500 to-rose-700 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.4),0_4px_16px_rgba(225,29,72,0.4)] border-t border-rose-300/40"
                >
                  <Sparkles className="h-3.5 w-3.5 text-rose-100" />
                  <span>Get In Touch</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
