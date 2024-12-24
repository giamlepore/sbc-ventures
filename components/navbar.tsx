"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { useLanguage } from "@/components/LanguageContext"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en')
  }

  return (
    <header className="fixed top-0 w-full border-b border-border/40 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/50 z-50">
      <nav className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-gray-200">
            SBC Ventures
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/solutions"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {language === 'en' ? 'Solutions' : 'Soluções'}
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {language === 'en' ? 'About' : 'Sobre'}
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {language === 'en' ? 'Contact' : 'Contato'}
          </Link>
          <Button variant="default">{language === 'en' ? 'Get in Touch' : 'Entre em Contato'}</Button>
          <Button variant="ghost" onClick={toggleLanguage}>
            {language === 'en' ? '🇧🇷' : '🇺🇸'}
          </Button>
        </div>
        <div className="md:hidden flex items-center space-x-2">
          <Button variant="ghost" onClick={toggleLanguage}>
            {language === 'en' ? '🇧🇷' : '🇺🇸'}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <>
          <div 
            className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={toggleMenu}
          />
          <div className="md:hidden fixed right-0 top-16 w-[300px] h-[calc(100vh-4rem)] bg-background border-l border-border/40 shadow-lg transition-all duration-300 ease-in-out z-50 overflow-y-auto">
            <div className="px-4 py-6 space-y-6">
              <Link
                href="/solutions"
                className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-primary hover:bg-accent/50 rounded-md p-2"
                onClick={toggleMenu}
              >
                {language === 'en' ? 'Solutions' : 'Soluções'}
              </Link>
              <Link
                href="/about"
                className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-primary hover:bg-accent/50 rounded-md p-2"
                onClick={toggleMenu}
              >
                {language === 'en' ? 'About' : 'Sobre'}
              </Link>
              <Link
                href="/contact"
                className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-primary hover:bg-accent/50 rounded-md p-2"
                onClick={toggleMenu}
              >
                {language === 'en' ? 'Contact' : 'Contato'}
              </Link>
              <Button variant="default" className="w-full mt-4">
                {language === 'en' ? 'Get in Touch' : 'Entre em Contato'}
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

