"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = ["Todos", "Casamento", "Retrato", "Ensaio", "Eventos"]

const portfolioItems = [
  {
    id: 1,
    category: "Casamento",
    image: "/elegant-wedding-ceremony-couple.jpg",
    title: "Casamento Juliana & Pedro",
  },
  {
    id: 2,
    category: "Retrato",
    image: "/artistic-portrait-natural-light.jpg",
    title: "Ensaio de Retrato",
  },
  {
    id: 3,
    category: "Ensaio",
    image: "/couple-engagement-session-outdoor.jpg",
    title: "Ensaio Pré-Wedding",
  },
  {
    id: 4,
    category: "Casamento",
    image: "/wedding-reception-decoration-romantic.jpg",
    title: "Detalhes da Cerimônia",
  },
  {
    id: 5,
    category: "Retrato",
    image: "/fashion-portrait-woman-elegant.jpg",
    title: "Retrato Feminino",
  },
  {
    id: 6,
    category: "Eventos",
    image: "/corporate-event-networking.png",
    title: "Evento Corporativo",
  },
  {
    id: 7,
    category: "Ensaio",
    image: "/family-lifestyle-photography-outdoors.jpg",
    title: "Ensaio em Família",
  },
  {
    id: 8,
    category: "Casamento",
    image: "/bride-and-groom-sunset-romantic.jpg",
    title: "Casamento Ana & Carlos",
  },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredItems =
    activeCategory === "Todos" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 tracking-tight text-balance">
            Portfólio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Uma seleção dos nossos trabalhos mais recentes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 text-sm font-light rounded-full transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
