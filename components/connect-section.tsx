"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Send, Github, Instagram, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ConnectSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("akilaskan@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "5fef9c36-86e4-4f05-a63f-0d80aec10b70",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: "akilaskan@gmail.com",
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="connect" className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-heading">
            Let&apos;s Connect
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind, want to collaborate on Android/streaming tech, or looking to connect? Send a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Contacts & Channels */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Quick Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl neo-card border border-white/5 space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">EMAIL</p>
                  <Link
                    href="mailto:akilaskan@gmail.com"
                    className="text-sm sm:text-base font-bold text-white hover:text-rose-300 transition-colors break-all"
                  >
                    akilaskan@gmail.com
                  </Link>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-medium text-zinc-300 bg-[#0a0c12] border border-white/10 hover:border-rose-500/30 hover:text-white transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] active:scale-[0.98]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-zinc-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl neo-card border border-white/5 flex items-center gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">LOCATION</p>
                <p className="text-xs sm:text-sm font-bold text-white">Kanyakumari, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Social Matrix */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl neo-card border border-white/5 space-y-3">
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">SOCIALS</p>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <Link
                  href="https://github.com/codedbyakil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl neo-inset border border-white/5 hover:border-rose-500/30 text-zinc-300 hover:text-white transition-all group"
                >
                  <Github className="h-4 w-4 text-rose-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs font-mono font-medium truncate">GitHub</span>
                </Link>

                <Link
                  href="https://www.instagram.com/justdeploy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl neo-inset border border-white/5 hover:border-rose-500/30 text-zinc-300 hover:text-white transition-all group"
                  aria-label="Instagram @justdeploy"
                >
                  <Instagram className="h-4 w-4 text-rose-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs font-mono font-medium truncate">@justdeploy</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl neo-card border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="name" className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-11 sm:h-12 rounded-xl neo-inset border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-rose-500 focus-visible:border-rose-500 text-sm"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email" className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11 sm:h-12 rounded-xl neo-inset border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-rose-500 focus-visible:border-rose-500 text-sm"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl neo-inset border-white/10 text-white placeholder:text-zinc-500 resize-none focus-visible:ring-rose-500 focus-visible:border-rose-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold text-white neo-btn-primary disabled:opacity-50 active:scale-[0.98] transition-transform"
                >
                  {status === "loading" ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="p-3.5 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-emerald-300 text-xs font-mono animate-in fade-in">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Message sent successfully!</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3.5 rounded-xl sm:rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-rose-300 text-xs font-mono animate-in fade-in">
                    <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
                    <span>Failed to send. Please reach out via akilaskan@gmail.com</span>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
