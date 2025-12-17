import { Instagram, Mail, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-light tracking-wider text-foreground mb-4">FOTOGRAFIA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Capturando momentos únicos e emocionantes através da lente
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="mailto:contato@fotografia.com"
                className="w-10 h-10 rounded-full bg-card hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fotografia Artística. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
