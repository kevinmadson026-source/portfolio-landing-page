"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-light tracking-wider text-foreground hover:text-primary transition-colors"
          >
            FOTOGRAFIA
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
