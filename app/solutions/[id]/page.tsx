"use client"

import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import { useLanguage } from "@/components/LanguageContext"

const solutions = {
  "digital-transformation": {
    title: { en: "Digital Transformation", pt: "Transformação Digital" },
    description: { 
      en: "Modernize your business with cutting-edge digital solutions",
      pt: "Modernize sua empresa com soluções digitais de ponta"
    },
    content: { 
      en: "Our digital transformation solutions help businesses modernize their operations, streamline processes, and leverage cutting-edge technologies to stay competitive in the digital age. We work closely with our clients to identify areas for improvement and implement tailored solutions that drive efficiency, innovation, and growth.",
      pt: "Nossas soluções de transformação digital ajudam as empresas a modernizar suas operações, otimizar processos e aproveitar tecnologias de ponta para permanecerem competitivas na era digital. Trabalhamos em estreita colaboração com nossos clientes para identificar áreas de melhoria e implementar soluções personalizadas que impulsionam a eficiência, a inovação e o crescimento."
    },
    keyFeatures: {
      en: [
        "Process Automation",
        "Digital Workflow Optimization",
        "Legacy System Modernization",
        "Data-Driven Decision Making",
      ],
      pt: [
        "Automação de Processos",
        "Otimização de Fluxo de Trabalho Digital",
        "Modernização de Sistemas Legados",
        "Tomada de Decisão Baseada em Dados",
      ]
    },
    metrics: {
      impact: { en: "40% efficiency increase", pt: "40% de aumento de eficiência" },
      timeframe: { en: "3-6 months", pt: "3-6 meses" },
      roi: { en: "250% average ROI", pt: "250% de ROI médio" },
    },
    status: { en: "Live", pt: "Ativo" },
    businessModel: "B2B",
    media: {
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      alt: { en: "Solution screenshot", pt: "Captura de tela da solução" }
    },
  },
  "ai-automation": {
    title: { en: "AI & Automation", pt: "IA e Automação" },
    description: { 
      en: "Leverage artificial intelligence to automate and optimize processes",
      pt: "Aproveite a inteligência artificial para automatizar e otimizar processos"
    },
    content: { 
      en: "Our AI & Automation solutions harness the power of artificial intelligence to streamline operations, reduce costs, and enhance decision-making processes. We develop custom AI models and implement automation strategies that transform businesses across industries.",
      pt: "Nossas soluções de IA e Automação aproveitam o poder da inteligência artificial para otimizar operações, reduzir custos e melhorar os processos de tomada de decisão. Desenvolvemos modelos de IA personalizados e implementamos estratégias de automação que transformam empresas em diversos setores."
    },
    keyFeatures: {
      en: [
        "Machine Learning Algorithms",
        "Natural Language Processing",
        "Robotic Process Automation",
        "Predictive Analytics",
      ],
      pt: [
        "Algoritmos de Aprendizado de Máquina",
        "Processamento de Linguagem Natural",
        "Automação de Processos Robóticos",
        "Análise Preditiva",
      ]
    },
    metrics: {
      impact: { en: "60% cost reduction", pt: "60% de redução de custos" },
      timeframe: { en: "2-4 months", pt: "2-4 meses" },
      roi: { en: "300% average ROI", pt: "300% de ROI médio" },
    },
    status: { en: "Building", pt: "Em Desenvolvimento" },
    businessModel: "B2B",
    media: {
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      alt: { en: "Solution screenshot", pt: "Captura de tela da solução" }
    },
  },
  "cloud-solutions": {
    title: { en: "Cloud Solutions", pt: "Soluções em Nuvem" },
    description: { 
      en: "Scale your infrastructure with modern cloud architecture",
      pt: "Escale sua infraestrutura com arquitetura de nuvem moderna"
    },
    content: { 
      en: "Our Cloud Solutions provide businesses with scalable, secure, and cost-effective infrastructure. We help organizations migrate to the cloud, optimize their cloud environments, and develop cloud-native applications that drive innovation and agility.",
      pt: "Nossas Soluções em Nuvem oferecem às empresas uma infraestrutura escalável, segura e econômica. Ajudamos as organizações a migrar para a nuvem, otimizar seus ambientes de nuvem e desenvolver aplicativos nativos da nuvem que impulsionam a inovação e a agilidade."
    },
    keyFeatures: {
      en: [
        "Cloud Migration",
        "Multi-Cloud Management",
        "Serverless Architecture",
        "Cloud Security",
      ],
      pt: [
        "Migração para a Nuvem",
        "Gerenciamento Multi-Nuvem",
        "Arquitetura Serverless",
        "Segurança em Nuvem",
      ]
    },
    metrics: {
      impact: { en: "99.9% uptime", pt: "99,9% de tempo de atividade" },
      timeframe: { en: "1-3 months", pt: "1-3 meses" },
      roi: { en: "200% average ROI", pt: "200% de ROI médio" },
    },
    status: { en: "Live", pt: "Ativo" },
    businessModel: "B2B",
    media: {
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      alt: { en: "Solution screenshot", pt: "Captura de tela da solução" }
    },
  },
  "fintech-platform": {
    title: { en: "FinTech Platform", pt: "Plataforma FinTech" },
    description: { 
      en: "Innovative financial technology solutions for modern banking",
      pt: "Soluções inovadoras de tecnologia financeira para o setor bancário moderno"
    },
    content: { 
      en: "Our FinTech Platform revolutionizes traditional banking by offering cutting-edge digital financial services. We provide secure, user-friendly solutions that enhance customer experiences and streamline financial operations for both consumers and businesses.",
      pt: "Nossa Plataforma FinTech revoluciona o setor bancário tradicional ao oferecer serviços financeiros digitais de ponta. Fornecemos soluções seguras e fáceis de usar que melhoram a experiência do cliente e otimizam as operações financeiras para consumidores e empresas."
    },
    keyFeatures: {
      en: [
        "Digital Wallets",
        "Peer-to-Peer Payments",
        "Robo-Advisors",
        "Blockchain Integration",
      ],
      pt: [
        "Carteiras Digitais",
        "Pagamentos Peer-to-Peer",
        "Robô-Assessores",
        "Integração com Blockchain",
      ]
    },
    metrics: {
      impact: { en: "50% faster transactions", pt: "50% de transações mais rápidas" },
      timeframe: { en: "6-12 months", pt: "6-12 meses" },
      roi: { en: "180% average ROI", pt: "180% de ROI médio" },
    },
    status: { en: "Building", pt: "Em Desenvolvimento" },
    businessModel: "B2C",
    media: {
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      alt: { en: "Solution screenshot", pt: "Captura de tela da solução" }
    },
  },
  "e-commerce-suite": {
    title: { en: "E-commerce Suite", pt: "Suíte de E-commerce" },
    description: { 
      en: "End-to-end e-commerce solutions for businesses of all sizes",
      pt: "Soluções completas de e-commerce para empresas de todos os tamanhos"
    },
    content: { 
      en: "Our E-commerce Suite provides a comprehensive platform for businesses to establish and grow their online presence. From small startups to large enterprises, we offer scalable solutions that cover everything from inventory management to customer engagement.",
      pt: "Nossa Suíte de E-commerce fornece uma plataforma abrangente para empresas estabelecerem e expandirem sua presença online. De pequenas startups a grandes empresas, oferecemos soluções escaláveis que abrangem tudo, desde gerenciamento de estoque até engajamento do cliente."
    },
    keyFeatures: {
      en: [
        "Customizable Storefronts",
        "Inventory Management",
        "Payment Gateway Integration",
        "Analytics and Reporting",
      ],
      pt: [
        "Vitrines Personalizáveis",
        "Gerenciamento de Estoque",
        "Integração com Gateway de Pagamento",
        "Análise e Relatórios",
      ]
    },
    metrics: {
      impact: { en: "30% increase in sales", pt: "30% de aumento nas vendas" },
      timeframe: { en: "2-4 months", pt: "2-4 meses" },
      roi: { en: "220% average ROI", pt: "220% de ROI médio" },
    },
    status: { en: "Live", pt: "Ativo" },
    businessModel: "B2B",
    media: {
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      alt: { en: "Solution screenshot", pt: "Captura de tela da solução" }
    },
  },
  "iot-platform": {
    title: { en: "IoT Platform", pt: "Plataforma IoT" },
    description: { 
      en: "Connect and manage IoT devices at scale",
      pt: "Conecte e gerencie dispositivos IoT em escala"
    },
    content: { 
      en: "Our IoT Platform enables businesses to harness the power of connected devices. We provide a robust infrastructure for device management, data collection, and analysis, allowing organizations to derive actionable insights from their IoT ecosystems.",
      pt: "Nossa Plataforma IoT permite que as empresas aproveitem o poder dos dispositivos conectados. Fornecemos uma infraestrutura robusta para gerenciamento de dispositivos, coleta e análise de dados, permitindo que as organizações obtenham insights acionáveis de seus ecossistemas IoT."
    },
    keyFeatures: {
      en: [
        "Device Management",
        "Real-time Data Processing",
        "Edge Computing",
        "IoT Security",
      ],
      pt: [
        "Gerenciamento de Dispositivos",
        "Processamento de Dados em Tempo Real",
        "Computação de Borda",
        "Segurança IoT",
      ]
    },
    metrics: {
      impact: { en: "70% improved device management", pt: "70% de melhoria no gerenciamento de dispositivos" },
      timeframe: { en: "4-8 months", pt: "4-8 meses" },
      roi: { en: "280% average ROI", pt: "280% de ROI médio" },
    },
    status: { en: "Building", pt: "Em Desenvolvimento" },
    businessModel: "B2B",
    media: {
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      alt: { en: "Solution screenshot", pt: "Captura de tela da solução" }
    },
  },
  "cybersecurity-suite": {
    title: { en: "Cybersecurity Suite", pt: "Suíte de Segurança Cibernética" },
    description: { 
      en: "Comprehensive security solutions for the digital age",
      pt: "Soluções abrangentes de segurança para a era digital"
    },
    content: { 
      en: "Our Cybersecurity Suite offers state-of-the-art protection against evolving digital threats. We provide a multi-layered approach to security, combining advanced technology with expert consulting to safeguard your organization's digital assets and reputation.",
      pt: "Nossa Suíte de Segurança Cibernética oferece proteção de última geração contra ameaças digitais em evolução. Fornecemos uma abordagem multicamadas para segurança, combinando tecnologia avançada com consultoria especializada para proteger os ativos e a reputação digital da sua organização."
    },
    keyFeatures: {
      en: [
        "Threat Intelligence",
        "Network Security",
        "Endpoint Protection",
        "Security Information and Event Management (SIEM)",
      ],
      pt: [
        "Inteligência de Ameaças",
        "Segurança de Rede",
        "Proteção de Endpoint",
        "Gerenciamento de Informações e Eventos de Segurança (SIEM)",
      ]
    },
    metrics: {
      impact: { en: "90% reduction in security incidents", pt: "90% de redução em incidentes de segurança" },
      timeframe: { en: "3-6 months", pt: "3-6 meses" },
      roi: { en: "350% average ROI", pt: "350% de ROI médio" },
    },
    status: { en: "Live", pt: "Ativo" },
    businessModel: "B2B",
    media: {
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      alt: { en: "Solution screenshot", pt: "Captura de tela da solução" }
    },
  },
  "health-tech-platform": {
    title: { en: "HealthTech Platform", pt: "Plataforma HealthTech" },
    description: { 
      en: "Digital solutions for healthcare providers and patients",
      pt: "Soluções digitais para prestadores de serviços de saúde e pacientes"
    },
    content: { 
      en: "Our HealthTech Platform revolutionizes healthcare delivery by leveraging technology to improve patient care and streamline medical operations. We offer solutions that enhance communication between providers and patients, optimize clinical workflows, and improve overall health outcomes.",
      pt: "Nossa Plataforma HealthTech revoluciona a prestação de serviços de saúde por meio da tecnologia para melhorar o atendimento ao paciente e otimizar as operações médicas. Oferecemos soluções que aprimoram a comunicação entre prestadores de serviços e pacientes, otimizam os fluxos de trabalho clínicos e melhoram os resultados gerais de saúde."
    },
    keyFeatures: {
      en: [
        "Telemedicine",
        "Electronic Health Records",
        "Patient Engagement Tools",
        "Healthcare Analytics",
      ],
      pt: [
        "Telemedicina",
        "Registros Eletrônicos de Saúde",
        "Ferramentas de Envolvimento do Paciente",
        "Análise de Dados de Saúde",
      ]
    },
    metrics: {
      impact: { en: "45% improved patient outcomes", pt: "45% de melhoria nos resultados do paciente" },
      timeframe: { en: "6-12 months", pt: "6-12 meses" },
      roi: { en: "200% average ROI", pt: "200% de ROI médio" },
    },
    status: { en: "Building", pt: "Em Desenvolvimento" },
    businessModel: "B2C",
    media: {
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      alt: { en: "Solution screenshot", pt: "Captura de tela da solução" }
    },
  },
  "smart-city-solutions": {
    title: { en: "Smart City Solutions", pt: "Soluções para Cidades Inteligentes" },
    description: { 
      en: "Innovative technologies for urban development and management",
      pt: "Tecnologias inovadoras para desenvolvimento e gestão urbana"
    },
    content: { 
      en: "Our Smart City Solutions empower municipalities to enhance urban living through technology. We provide integrated systems that improve city operations, citizen services, and sustainability, creating more livable and efficient urban environments.",
      pt: "Nossas Soluções para Cidades Inteligentes capacitam os municípios a melhorar a vida urbana por meio da tecnologia. Fornecemos sistemas integrados que melhoram as operações da cidade, os serviços aos cidadãos e a sustentabilidade, criando ambientes urbanos mais habitáveis e eficientes."
    },
    keyFeatures: {
      en: [
        "Intelligent Traffic Management",
        "Smart Waste Management",
        "Energy Efficiency Systems",
        "Citizen Engagement Platforms",
      ],
      pt: [
        "Gerenciamento Inteligente de Trânsito",
        "Gerenciamento Inteligente de Resíduos",
        "Sistemas de Eficiência Energética",
        "Plataformas de Envolvimento Cidadão",
      ]
    },
    metrics: {
      impact: { en: "35% increase in urban efficiency", pt: "35% de aumento na eficiência urbana" },
      timeframe: { en: "12-24 months", pt: "12-24 meses" },
      roi: { en: "150% average ROI", pt: "150% de ROI médio" },
    },
    status: { en: "Building", pt: "Em Desenvolvimento" },
    businessModel: "B2B",
    media: {
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      alt: { en: "Solution screenshot", pt: "Captura de tela da solução" }
    },
  },
}

const statusColors = {
  Building: "bg-blue-500/20 text-blue-300",
  Live: "bg-green-500/20 text-green-300",
  Discontinued: "bg-red-500/20 text-red-300",
  Sold: "bg-yellow-500/20 text-yellow-300",
}

export default function SolutionPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const solution = solutions[params.id as keyof typeof solutions]

  if (!solution) {
    notFound()
  }

  return (
    <div className="container px-4 sm:px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center mb-4 gap-4 sm:gap-0">
          <h1 className="text-4xl font-bold text-gray-200">{solution.title[language]}</h1>
          <div className="flex gap-2">
            <Badge variant="secondary" className={`${statusColors[solution.status.en as keyof typeof statusColors]} font-medium`}>
              {solution.status[language]}
            </Badge>
            <Badge variant="outline">{solution.businessModel}</Badge>
          </div>
        </div>
        <p className="mb-8 text-xl text-muted-foreground">{solution.description[language]}</p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border border-border/40 bg-black/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Key Metrics' : 'Métricas Principais'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="text-sm">
                  <span className="font-medium text-primary">{language === 'en' ? 'Impact: ' : 'Impacto: '}</span>
                  {solution.metrics.impact[language]}
                </div>
                <div className="text-sm">
                  <span className="font-medium text-primary">{language === 'en' ? 'Timeframe: ' : 'Prazo: '}</span>
                  {solution.metrics.timeframe[language]}
                </div>
                <div className="text-sm">
                  <span className="font-medium text-primary">ROI: </span>
                  {solution.metrics.roi[language]}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border/40 bg-black/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Key Features' : 'Recursos Principais'}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                {solution.keyFeatures[language].map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border border-border/40 bg-black/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>{language === 'en' ? 'About this Solution' : 'Sobre esta Solução'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{solution.content[language]}</p>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Button variant="outline">{language === 'en' ? 'Learn More' : 'Saiba Mais'}</Button>
            <Button>{language === 'en' ? 'Invest' : 'Investir'}</Button>
          </CardFooter>
        </Card>
        <Card className="mt-8 border border-border/40 bg-black/50 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle>{language === 'en' ? 'Solution Preview' : 'Prévia da Solução'}</CardTitle>
          </CardHeader>
          <CardContent>
            {solution.media.type === "image" ? (
              <Image
                src={solution.media.src}
                alt={solution.media.alt[language]}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-md"
              />
            ) : (
              <video
                src={solution.media.src}
                controls
                className="w-full h-auto rounded-md"
              >
                {language === 'en' ? 'Your browser does not support the video tag.' : 'Seu navegador não suporta a tag de vídeo.'}
              </video>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

