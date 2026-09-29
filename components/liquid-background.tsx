"use client"

export function LiquidBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-[#07080b]">
      {/* Hardware-accelerated GPU-composited CSS fluid ambient orbs (0 scroll lag) */}
      <div 
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tr from-rose-700/25 via-red-600/18 to-transparent blur-[100px] animate-float-slow will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }}
      />

      <div 
        className="absolute top-[30%] -right-[15%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-bl from-rose-600/20 via-pink-700/12 to-transparent blur-[110px] animate-float-reverse will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }}
      />

      <div 
        className="absolute bottom-[5%] left-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-t from-purple-900/12 via-rose-900/10 to-transparent blur-[120px] animate-pulse-glow will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }}
      />

      {/* Cyber Grid Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-15 cyber-grid pointer-events-none"
        style={{ maskImage: "radial-gradient(ellipse at 50% 35%, black 40%, transparent 85%)" }}
      />

      {/* Deep Vignette Edge Shading */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07080b]/30 to-[#050608]/90 pointer-events-none" />
    </div>
  )
}
