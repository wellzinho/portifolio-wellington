import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollWindowToTop } from '@/utils/scroll'

export default function ScrollToTop() {
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
