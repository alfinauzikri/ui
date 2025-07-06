import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/global.css'
import { HeroSection } from '@/components/HeroSection'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { UIEntrySection } from '@/components/UIEntrySection'
import { ContributeSection } from '@/components/ContributeSection'
import { ThemeProvider } from '@/providers/ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Navigation />
      <HeroSection />
      <UIEntrySection />
      <ContributeSection />
      <Footer />
    </ThemeProvider>
  </StrictMode>,
)
