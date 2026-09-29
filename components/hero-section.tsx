"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Ambient Crimson Studio Bloom matching pic.png's lighting */}
      <div className="absolute top-1/4 right-0 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[radial-gradient(circle,_rgba(110,6,18,0.32)_0%,_transparent_70%)] blur-[90px] sm:blur-[110px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl w-full z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Bold, Premium, Clean Editorial Typography */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Monumental Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-heading font-black tracking-tight text-white uppercase leading-[0.88] select-none">
                AKIL<span className="text-rose-500 drop-shadow-[0_0_40px_rgba(225,29,72,0.9)]">.</span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 pt-1">
                <span className="text-base sm:text-xl lg:text-2xl font-heading font-bold bg-gradient-to-r from-rose-400 via-rose-200 to-white bg-clip-text text-transparent">
                  Android Systems
                </span>
                <span className="text-rose-500/60 font-bold">•</span>
                <span className="text-base sm:text-xl lg:text-2xl font-heading font-semibold text-zinc-200">
                  IPTV Streaming
                </span>
                <span className="text-rose-500/60 font-bold">•</span>
                <span className="text-base sm:text-xl lg:text-2xl font-heading font-semibold text-zinc-400">
                  Modern Web
                </span>
              </div>
            </div>

            {/* Clean, Confident Bio */}
            <p className="text-base sm:text-xl text-zinc-300/85 leading-relaxed max-w-xl font-normal font-sans pt-1">
              Engineering high-performance native Android applications in Kotlin, 
              real-time IPTV media architectures with ExoPlayer, and ultra-fluid, 
              responsive digital experiences.
            </p>

          </div>

          {/* Right Column: Seamlessly Blended Borderless Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] lg:max-w-[440px] select-none">
              
              {/* Atmospheric Crimson Glow matched with pic.png's lighting & background */}
              <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
                <div className="w-[140%] h-[140%] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(125,10,25,0.7)_0%,_rgba(72,3,10,0.45)_35%,_rgba(30,1,5,0.25)_65%,_transparent_80%)] blur-[45px] sm:blur-[55px]" />
              </div>

              {/* Completely Borderless Image with Soft 360-Degree Radial Dissolve into Background */}
              <div 
                className="relative aspect-[3/4] w-full overflow-hidden"
                style={{
                  maskImage: "radial-gradient(ellipse 47% 43% at 50% 45%, black 40%, rgba(0, 0, 0, 0.85) 58%, rgba(0, 0, 0, 0.3) 78%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 47% 43% at 50% 45%, black 40%, rgba(0, 0, 0, 0.85) 58%, rgba(0, 0, 0, 0.3) 78%, transparent 100%)",
                }}
              >
                <Image
                  src="/pic.png"
                  alt="Akil - Developer Portrait"
                  width={840}
                  height={1120}
                  priority
                  className="w-full h-full object-cover object-top filter contrast-[1.04] saturate-[1.04]"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
