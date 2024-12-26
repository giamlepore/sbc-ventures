"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/LanguageContext"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface Metrics {
  competitive_advantage: { en: string; pt: string };
  launch_date: { en: string; pt: string };
  avg_monthly_revenue: { en: string; pt: string };
  last_month_revenue: { en: string; pt: string };
}

interface Solution {
  id: string;
  logo?: string;
  title: { en: string; pt: string };
  description: { en: string; pt: string };
  problem: { en: string; pt: string };
  targetAudience: { en: string; pt: string };
  growthStrategy: { en: string; pt: string };
  businessModelDetails: { en: string; pt: string };
  metrics: Metrics;
  status: string;
  businessModel: string;
}

const solutions = [
  {
    id: "content-creator-platform",
    logo: "/curio-white.png",
    title: { en: "Curiô - Content Creator Platform", pt: "Curiô - Plataforma para Criadores de Conteúdo" },
    description: {
      en: "Sell online courses and get way better analytics from your users, with a fraction of big players price",
      pt: "Venda cursos online e tenha acesso a melhores dados dos seus usuários, custando uma fração das grandes plataformas",
    },
    problem: {
      en: "Course creators struggle with high platform fees and limited analytics",
      pt: "Criadores de conteúdo sofrem com altas taxas e analytics limitados",
    },
    targetAudience: {
      en: "Independent course creators and small education businesses",
      pt: "Criadores de cursos independentes e pequenas empresas de educação",
    },
    growthStrategy: {
      en: "Content marketing and partnership with influencers",
      pt: "Marketing de conteúdo e parcerias com influenciadores",
    },
    businessModelDetails: {
      en: "Monthly subscription + revenue share",
      pt: "Assinatura mensal + participação na receita",
    },
    metrics: {
      competitive_advantage: { en: "Lower prices and better analytics", pt: "Baixo custo e melhores analytics dos alunos" },
      launch_date: { en: "Jan 2025", pt: "Jan 2025" },
      avg_monthly_revenue: { en: "$0", pt: "R$0" },
      last_month_revenue: { en: "$0", pt: "R$0" },
    },
    status: "Building",
    businessModel: "B2B",
  },
  {
    id: "tech-business-course",
    logo: "logo-sbc.png",
    title: { en: "SBC School - Tech for Business People Course", pt: "SBC School - Curso de Tecnologia para Pessoas de Negócios" },
    description: {
      en: "Create autonomy and confidence in Product Managers for better technical conversations",
      pt: "Criar autonomia e confiança nos Product Managers para melhores conversas técnicas",
    },
    problem: {
      en: "Product managers struggle with technical conversations and decision-making",
      pt: "Product managers têm dificuldade com conversas técnicas e tomada de decisão",
    },
    targetAudience: {
      en: "Product Managers and Business professionals",
      pt: "Product Managers e profissionais de negócios",
    },
    growthStrategy: {
      en: "LinkedIn content and corporate partnerships",
      pt: "Conteúdo no LinkedIn e parcerias corporativas",
    },
    businessModelDetails: {
      en: "One-time payment + corporate packages",
      pt: "Pagamento único + pacotes corporativos",
    },
    metrics: {
      competitive_advantage: { en: "40% lower prices", pt: "Preços 40% menores" },
      launch_date: { en: "May 2024", pt: "Maio 2024" },
      avg_monthly_revenue: { en: "$1,100", pt: "R$6.500" },
      last_month_revenue: { en: "$500", pt: "R$3.250" },
    },
    status: "Live",
    businessModel: "B2C/B2B",
  },
  {
    id: "web-shopping-list",
    logo: "/market.png",
    title: { en: "Lembre.me - Web Shopping List", pt: "Lembre.me - Lista de Compras de Mercado na Web" },
    description: {
      en: "Create a shopping list in seconds, without an app, and share it with your family",
      pt: "Permite criar rapidamente uma lista de compras, sem precisar de app, e compartilhar com os familiares",
    },
    problem: {
      en: "People need a quick way to create and share shopping lists without installing apps",
      pt: "Pessoas precisam de uma forma rápida de criar e compartilhar listas sem instalar apps",
    },
    targetAudience: {
      en: "Families and individuals who regularly shop for groceries",
      pt: "Famílias e indivíduos que fazem compras regularmente",
    },
    growthStrategy: {
      en: "SEO and word of mouth",
      pt: "SEO e marketing boca a boca",
    },
    businessModelDetails: {
      en: "Freemium + Premium features",
      pt: "Freemium + Recursos Premium",
    },
    metrics: {
      competitive_advantage: { en: "Low friction access", pt: "Baixa fricção de Acesso" },
      launch_date: { en: "Jan 2025", pt: "Jan 2025" },
      avg_monthly_revenue: { en: "$0", pt: "R$0" },
      last_month_revenue: { en: "$0", pt: "R$0" },
    },
    status: "Building",
    businessModel: "B2C",
  },
  {
    id: "getrefer-io",
    logo: "/refer.png",
    title: { en: "getrefer.io", pt: "getrefer.io" },
    description: {
      en: "Create viral referral campaigns for SaaS and ecommerce businesses with powerful analytics",
      pt: "Crie campanhas virais de indicação para SaaS e e-commerce com analytics poderosos",
    },
    problem: {
      en: "Companies struggle to create effective referral programs and track their performance",
      pt: "Empresas têm dificuldade para criar programas de indicação efetivos e acompanhar performance",
    },
    targetAudience: {
      en: "SaaS companies and ecommerce businesses",
      pt: "Empresas SaaS e e-commerce",
    },
    growthStrategy: {
      en: "Content marketing and integration partnerships",
      pt: "Marketing de conteúdo e parcerias de integração",
    },
    businessModelDetails: {
      en: "Monthly subscription based on users",
      pt: "Assinatura mensal baseada em usuários",
    },
    metrics: {
      competitive_advantage: { en: "Better UI/UX and analytics", pt: "Melhor UI/UX e analytics" },
      launch_date: { en: "On hold", pt: "Em espera" },
      avg_monthly_revenue: { en: "$0", pt: "R$0" },
      last_month_revenue: { en: "$0", pt: "R$0" },
    },
    status: "Building",
    businessModel: "B2B",
  },
  {
    id: "v3-insights",
    logo: "/v3.png",
    title: { en: "V3 Insights", pt: "V3 Insights" },
    description: {
      en: "Advanced video hosting and analytics platform for businesses",
      pt: "Plataforma avançada de hospedagem de vídeos e analytics para empresas",
    },
    problem: {
      en: "Businesses need better insights about their video content performance",
      pt: "Empresas precisam de melhores insights sobre a performance dos seus vídeos",
    },
    targetAudience: {
      en: "Marketing teams and content creators",
      pt: "Times de marketing e criadores de conteúdo",
    },
    growthStrategy: {
      en: "Product-led growth and enterprise sales",
      pt: "Crescimento focado no produto e vendas enterprise",
    },
    businessModelDetails: {
      en: "Tiered pricing based on bandwidth and features",
      pt: "Preços em camadas baseados em banda e recursos",
    },
    metrics: {
      competitive_advantage: { en: "Better analytics and lower prices", pt: "Melhores analytics e preços menores" },
      launch_date: { en: "On hold", pt: "Em espera" },
      avg_monthly_revenue: { en: "$0", pt: "R$0" },
      last_month_revenue: { en: "$0", pt: "R$0" },
    },
    status: "Building",
    businessModel: "B2B",
  },
]

const statusColors = {
  Building: "bg-blue-500/20 text-blue-300",
  Live: "bg-green-500/20 text-green-300",
  Discontinued: "bg-red-500/20 text-red-300",
  Sold: "bg-yellow-500/20 text-yellow-300",
}

const statusTranslations = {
  Building: { en: "Building", pt: "Em Desenvolvimento" },
  Live: { en: "Live", pt: "Ativo" },
  Discontinued: { en: "Discontinued", pt: "Descontinuado" },
  Sold: { en: "Sold", pt: "Vendido" },
}

export function SolutionsGrid() {
  const { language } = useLanguage()
  const [statusFilter, setStatusFilter] = useState("All")
  const [businessModelFilter, setBusinessModelFilter] = useState("All")
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({})
  const [showRevenueModal, setShowRevenueModal] = useState(false)
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null)

  const filteredSolutions = solutions.filter(solution => 
    (statusFilter === "All" || solution.status === statusFilter) &&
    (businessModelFilter === "All" || solution.businessModel === businessModelFilter)
  )

  const toggleCard = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const getMonthlyData = (solution: Solution) => {
    // This is example data - you should replace with real data
    return [
      { month: 'Jan', revenue: 0 },
      { month: 'Feb', revenue: 0 },
      { month: 'Mar', revenue: 0 },
      { month: 'Apr', revenue: 500 },
      { month: 'May', revenue: 1100 },
      { month: 'Jun', revenue: 800 },
    ]
  }

  return (
    <section className="container px-4 sm:px-4 py-2 sm:py-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-8 space-y-2 sm:space-y-0">
        <Select onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder={language === 'en' ? 'Filter by Status' : 'Filtrar por Status'} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">{language === 'en' ? 'All Statuses' : 'Todos os Status'}</SelectItem>
            <SelectItem value="Live">{language === 'en' ? 'Live' : 'Ativo'}</SelectItem>
            <SelectItem value="Building">{language === 'en' ? 'Building' : 'Em Desenvolvimento'}</SelectItem>
            <SelectItem value="Discontinued">{language === 'en' ? 'Discontinued' : 'Descontinuado'}</SelectItem>
            <SelectItem value="Sold">{language === 'en' ? 'Sold' : 'Vendido'}</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setBusinessModelFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder={language === 'en' ? 'Filter by Model' : 'Filtrar por Modelo'} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">{language === 'en' ? 'All Models' : 'Todos os Modelos'}</SelectItem>
            <SelectItem value="B2B">B2B</SelectItem>
            <SelectItem value="B2C">B2C</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-2 sm:mx-0">
        {filteredSolutions.map((solution) => (
          <Card 
            key={solution.id} 
            className="flex flex-col h-full overflow-hidden border border-border/40 bg-black/50 backdrop-blur-sm hover:border-border/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <CardHeader className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                {solution.logo && (
                  <div className="w-10 h-10 mb-2">
                    <img 
                      src={solution.logo} 
                      alt={`${solution.title[language]} logo`}
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                )}
                <div className="flex gap-2 ml-auto">
                  <Badge variant="secondary" className={`${statusColors[solution.status as keyof typeof statusColors]} font-medium`}>
                    {statusTranslations[solution.status as keyof typeof statusTranslations][language]}
                  </Badge>
                  <Badge variant="outline">{solution.businessModel}</Badge>
                </div>
              </div>
              <CardTitle className="text-xl">{solution.title[language]}</CardTitle>
              <CardDescription>{solution.description[language]}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button
                  variant="ghost"
                  className="bg-gray-900/50 w-full flex items-center justify-between p-2 min-h-[40px]"
                  onClick={(e) => toggleCard(solution.id, e)}
                >
                  <span className="flex-1 text-left">
                    {language === 'en' ? 'Look at the Strategic Dimensions' : 'Veja as Dimensões Estratégicas'}
                  </span>
                  {expandedCards[solution.id] ? (
                    <ChevronUp className="h-4 w-4 ml-2 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-2 flex-shrink-0" />
                  )}
                </Button>

                <div className={`space-y-4 transition-all duration-300 overflow-hidden ${
                  expandedCards[solution.id] 
                    ? 'max-h-[1000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-primary/80 uppercase tracking-wide">
                      {language === 'en' ? 'Problem' : 'Problema'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {solution.problem[language]}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-primary/80 uppercase tracking-wide">
                      {language === 'en' ? 'Target Audience' : 'Público Alvo'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {solution.targetAudience[language]}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-primary/80 uppercase tracking-wide">
                      {language === 'en' ? 'Growth Strategy' : 'Estratégia de Crescimento'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {solution.growthStrategy[language]}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-primary/80 uppercase tracking-wide">
                      {language === 'en' ? 'Business Model' : 'Modelo de Negócios'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {solution.businessModelDetails[language]}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-primary/80 uppercase tracking-wide">
                      {language === 'en' ? 'Competitive Advantage' : 'Diferencial Competitivo'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {solution.metrics.competitive_advantage[language]}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors flex flex-col justify-between min-h-[80px]">
                    <h3 className="text-sm font-medium text-primary/80">
                      {language === 'en' ? 'Launch Date' : 'Data de Lançamento'}
                    </h3>
                    <p className="text-lg font-semibold">
                      {solution.metrics.launch_date[language]}
                    </p>
                  </div>

                  <div 
                    className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 hover:border-green-500/30 transition-colors flex flex-col justify-between min-h-[80px] cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedSolution(solution)
                      setShowRevenueModal(true)
                    }}
                  >
                    <h3 className="text-sm font-medium text-green-500/80">
                      {language === 'en' ? 'Monthly Revenue' : 'Receita Mensal'}
                    </h3>
                    <p className="text-lg font-semibold text-green-500">
                      {solution.metrics.avg_monthly_revenue[language]}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex justify-between w-full">
                <Link href={`/solutions/${solution.id}`}>
                  <Button variant="outline">
                    {language === 'en' ? 'Learn More' : 'Saiba Mais'}
                  </Button>
                </Link>
                <Button onClick={(e) => {
                  e.preventDefault();
                  // Add invest logic here
                }}>
                  {language === 'en' ? 'Invest' : 'Investir'}
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Dialog open={showRevenueModal} onOpenChange={setShowRevenueModal}>
        <DialogContent className="max-w-[90%] sm:max-w-[600px] bg-black/80 backdrop-blur-md border border-primary/20">
          <button
            onClick={() => setShowRevenueModal(false)}
            className="absolute -top-8 right-0 rounded-full w-8 h-8 inline-flex items-center justify-center border border-primary/20 bg-black/80 backdrop-blur-md text-primary hover:text-primary/80 transition-colors"
          >
            ✕
          </button>
          <DialogHeader>
            <DialogTitle className="text-primary/90">
              {selectedSolution?.title[language]} - {language === 'en' ? 'Monthly Revenue' : 'Receita Mensal'}
            </DialogTitle>
          </DialogHeader>
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={selectedSolution ? getMonthlyData(selectedSolution) : []}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#22c55e" 
                  strokeWidth={2}
                  dot={{ stroke: '#22c55e', strokeWidth: 2, r: 4 }}
                  activeDot={{ stroke: '#22c55e', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

