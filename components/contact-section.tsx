"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 tracking-tight text-balance">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Vamos conversar sobre como posso capturar seus momentos especiais
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Seu telefone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Conte-me sobre o que você precisa"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light text-foreground mb-6">Contato Direto</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/fotografia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Instagram className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Instagram</p>
                      <p className="text-sm text-muted-foreground">@fotografia</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contato@fotografia.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">E-mail</p>
                      <p className="text-sm text-muted-foreground">contato@fotografia.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Respondo todas as mensagens em até 24 horas. Fique à vontade para entrar em contato através do canal
                  que preferir!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
