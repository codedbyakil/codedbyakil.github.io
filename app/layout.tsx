import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://codedbyakil.github.io"),
  title: {
    default: "Akil | Android Developer, Streaming Systems & Liquid UI Crafter",
    template: "%s | Akil",
  },
  description:
    "Grade 12 self-taught developer from Tamil Nadu, India. Engineering high-performance Android apps with Kotlin, IPTV streaming platforms with ExoPlayer, and killer liquid neomorphic web experiences.",
  keywords: [
    "Android Developer",
    "Kotlin Developer",
    "Web Designer",
    "IPTV Developer",
    "Streaming Systems",
    "ExoPlayer",
    "Tamil Nadu Developer",
    "Self-taught Developer",
    "Portfolio",
    "Akil",
    "codedbyakil",
    "Jetpack Compose",
    "Neomorphism",
    "Liquid Blur",
  ],
  authors: [{ name: "Akil", url: "https://codedbyakil.github.io" }],
  creator: "Akil",
  publisher: "Akil",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codedbyakil.github.io",
    siteName: "Akil Portfolio",
    title: "Akil | Android Developer & Streaming Systems Builder",
    description:
      "Grade 12 self-taught developer from Tamil Nadu, India. Building native Android apps in Kotlin, IPTV platforms with ExoPlayer, and killer liquid-modern interfaces.",
    images: [
      {
        url: "/pic.png",
        width: 1200,
        height: 1600,
        alt: "Akil - Android Developer & Web Designer",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akil Portfolio Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akil | Android Developer & Streaming Systems Builder",
    description:
      "Self-taught Grade 12 developer building Android apps, IPTV platforms, and modern web experiences.",
    images: ["/pic.png"],
    creator: "@codedbyakil",
  },
  alternates: {
    canonical: "https://codedbyakil.github.io",
  },
  category: "technology",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#07080b" },
    { media: "(prefers-color-scheme: dark)", color: "#07080b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href="https://codedbyakil.github.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akil",
              url: "https://codedbyakil.github.io",
              image: "https://codedbyakil.github.io/pic.png",
              jobTitle: "Android Developer & Web Designer",
              description:
                "Grade 12 self-taught developer from Tamil Nadu, India building Android apps, IPTV platforms, and modern web experiences.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kanyakumari",
                addressRegion: "Tamil Nadu",
                addressCountry: "India",
              },
              email: "akilaskan@gmail.com",
              sameAs: [
                "https://github.com/codedbyakil",
                "https://www.instagram.com/justdeploy/",
              ],
              knowsAbout: [
                "Android Development",
                "Kotlin",
                "IPTV Systems",
                "Streaming Technology",
                "Web Design",
                "ExoPlayer",
                "HLS/DASH Protocols",
                "Next.js",
                "Neomorphism",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#07080b] text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
