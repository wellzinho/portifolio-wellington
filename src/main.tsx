import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CaseStudyAprovacaoTransacao from './pages/CaseStudyAprovacaoTransacao.tsx'
import CaseStudySubhomeSeguros from './pages/CaseStudySubhomeSeguros.tsx'
import CaseStudyAcionamentoSeguro from './pages/CaseStudyAcionamentoSeguro.tsx'
import CaseStudyLadingPageMedicaIaFirst from './pages/CaseStudyLadingPageMedicaIaFirst.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'

if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/case/aprovacao-transacao" element={<CaseStudyAprovacaoTransacao />} />
        <Route path="/case/subhome-seguros" element={<CaseStudySubhomeSeguros />} />
        <Route path="/case/acionamento-seguro" element={<CaseStudyAcionamentoSeguro />} />
        <Route path="/case/lading-page-medica-ia-first" element={<CaseStudyLadingPageMedicaIaFirst />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
