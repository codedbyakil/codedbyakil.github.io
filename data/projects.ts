export interface Project {
  id: string
  name: string
  description: string
  platform: "GitHub" | "Cloudflare" | "Live Web" | "Android"
  language: string
  tags: string[]
  url: string
  demoUrl?: string
  featured?: boolean
}

/**
 * Curated projects list
 * Hand-selected projects showcasing real builds across GitHub and Cloudflare Pages.
 */
export const myProjects: Project[] = [
  {
    id: "portfolio",
    name: "codedbyakil.github.io",
    description: "Personal developer portfolio engineered with Next.js, dark neomorphic depth, and liquid blur animations.",
    platform: "GitHub",
    language: "Next.js / TypeScript",
    tags: ["Next.js", "Tailwind CSS", "Liquid UI", "TypeScript"],
    url: "https://github.com/codedbyakil/codedbyakil.github.io",
    demoUrl: "https://codedbyakil.github.io",
    featured: true,
  },
  {
    id: "holyangels",
    name: "Holy Angels MHSS Rebrand",
    description: "Complete rebrand and recreation of Holy Angels Matriculation Higher Secondary School website in Chentharai, Kanyakumari. Fully responsive and deployed on Cloudflare Pages.",
    platform: "Cloudflare",
    language: "Cloudflare Pages",
    tags: ["Cloudflare Pages", "School Rebrand", "Responsive Design", "Web Architecture"],
    url: "https://holyangels.pages.dev",
    demoUrl: "https://holyangels.pages.dev",
    featured: true,
  },
]
