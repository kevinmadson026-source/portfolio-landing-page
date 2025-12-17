"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/elegant-wedding-photography-couple-portrait-cinema.jpg" alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight text-balance">
          Capturando Momentos Inesquecíveis
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 font-light max-w-2xl mx-auto text-pretty">
          Fotografia artística que conta histórias e eterniza emoções
        </p>
        <Button
          size="lg"
          onClick={scrollToPortfolio}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
        >
          Ver Portfólio
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  )
}
