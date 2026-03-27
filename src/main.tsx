import { StrictMode, useLayoutEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CaseStudyAprovacaoTransacao from './pages/CaseStudyAprovacaoTransacao.tsx'
import CaseStudySubhomeSeguros from './pages/CaseStudySubhomeSeguros.tsx'
import CaseStudyAcionamentoSeguro from './pages/CaseStudyAcionamentoSeguro.tsx'
import { scrollWindowToTop } from './utils/scroll'

if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    scrollWindowToTop()
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(scrollWindowToTop)
    })
    return () => cancelAnimationFrame(id)
  }, [pathname])
  return null
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
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
