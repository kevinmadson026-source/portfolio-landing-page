"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Heart, Users, Briefcase } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Casamentos",
    description: "Cobertura completa do seu grande dia, desde os preparativos até a festa.",
    features: ["8 horas de cobertura", "Mais de 400 fotos editadas", "Álbum digital premium"],
  },
  {
    icon: Camera,
    title: "Ensaios",
    description: "Sessões fotográficas personalizadas para casais, famílias ou individuais.",
    features: ["2 horas de sessão", "Até 50 fotos editadas", "Consultoria de styling"],
  },
  {
    icon: Users,
    title: "Retratos",
    description: "Retratos artísticos que capturam sua personalidade única.",
    features: ["1 hora de sessão", "Até 30 fotos editadas", "Ambiente escolhido"],
  },
  {
    icon: Briefcase,
    title: "Eventos",
    description: "Cobertura profissional para eventos corporativos e sociais.",
    features: ["Cobertura flexível", "Entrega em 7 dias", "Fotos de alta resolução"],
  },
]

export function ServicesSection() {
  const handleQuoteRequest = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 tracking-tight text-balance">
            Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Pacotes personalizados para atender suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-light">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all bg-transparent"
                    onClick={handleQuoteRequest}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
