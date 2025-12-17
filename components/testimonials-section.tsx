"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Juliana & Pedro",
    role: "Casamento 2024",
    content:
      "Superou todas as nossas expectativas! As fotos ficaram lindas e capturaram perfeitamente a emoção do nosso dia especial. Profissionalismo e sensibilidade artística impecáveis.",
    rating: 5,
  },
  {
    name: "Mariana Silva",
    role: "Ensaio de Família",
    content:
      "Experiência incrível! Conseguiu capturar momentos naturais e espontâneos da nossa família. As crianças se sentiram super à vontade e o resultado foi maravilhoso.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Retrato Corporativo",
    content:
      "Trabalho excepcional! As fotos profissionais ficaram perfeitas para nosso site e redes sociais. Muito atencioso aos detalhes e com ótimas sugestões durante a sessão.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight text-balance">
            O Que Dizem Nossos Clientes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-lg p-8 md:p-12 shadow-sm">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-center mb-8">
              <p className="text-lg md:text-xl text-foreground font-light leading-relaxed text-balance">
                "{testimonials[currentIndex].content}"
              </p>
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <p className="font-medium text-foreground">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
