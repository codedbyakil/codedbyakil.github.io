import { LiquidBackground } from "@/components/liquid-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ConnectSection } from "@/components/connect-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen text-white selection:bg-rose-500/30 selection:text-rose-200">
      <LiquidBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  )
}
