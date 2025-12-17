export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="/professional-photographer-portrait-camera.jpg"
                alt="Fotógrafo profissional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight text-balance">
              Sobre Mim
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Com mais de 10 anos de experiência em fotografia artística, dedico-me a capturar a essência única de
                cada momento. Meu trabalho é guiado pela paixão por contar histórias através de imagens.
              </p>
              <p>
                Especializado em casamentos e retratos, busco sempre criar um ambiente confortável onde a autenticidade
                das emoções possa florescer naturalmente.
              </p>
              <p className="font-normal text-foreground pt-4">
                <span className="text-primary">Minha filosofia:</span> Cada imagem deve contar uma história e evocar
                emoções que transcendem o tempo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
