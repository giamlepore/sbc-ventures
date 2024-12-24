"use client"

import { Button } from "@/components/ui/button"
import { SolutionsGrid } from "@/components/solutions-grid"
import { useLanguage } from "@/components/LanguageContext"

export default function Home() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Transforming Everyday Problems into Solutions",
      subtitle: "Discover our portfolio of cutting-edge solutions designed to drive growth and innovation.",
      cta: "Explore Solutions"
    },
    pt: {
      title: "Transformando problemas diários em soluções",
      subtitle: "Todas as soluções surgiram antes de tudo, de problemas que tivemos.",
      cta: "Explorar Soluções"
    }
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-background to-background/80">
      <section className="container flex flex-col items-center justify-center space-y-6 py-20 md:py-32 text-center">
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            {content[language].title}
          </h1>
          <p className="mx-auto text-lg text-muted-foreground/80 md:text-xl">
            {content[language].subtitle}
          </p>
          <Button 
            size="lg" 
            className="mt-8 px-8 py-6 text-lg font-medium hover:scale-105 transition-transform"
          >
            {content[language].cta}
          </Button>
        </div>
      </section>
      <SolutionsGrid />
    </div>
  )
}

