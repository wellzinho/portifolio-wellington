"use client"

/**
 * Border Beam (Magic UI) — animação com motion + offset-path.
 * Adaptado de https://magicui.design/docs/components/border-beam
 * (classes Tailwind v4 do registo original substituídas por CSS compatível com Tailwind 3.4)
 */
import type { CSSProperties } from "react"
import { motion, type MotionStyle, type Transition } from "motion/react"

import { cn } from "@/lib/utils"

interface BorderBeamProps {
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
  transition?: Transition
  className?: string
  style?: CSSProperties
  reverse?: boolean
  initialOffset?: number
  borderWidth?: number
  /** Raio dos cantos do traçado (px), alinhado a rounded-card ≈ 24 */
  borderRadius?: number
}

// Máscara “anel da borda” (conteúdo vazado):
// - Layer 1 (content-box): área interna
// - Layer 2 (border-box): área total
// - Composição: XOR/EXCLUDE => fica apenas o contorno
const maskRingStyle: CSSProperties = {
  boxSizing: "border-box",
  WebkitMaskImage: "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
  WebkitMaskClip: "content-box, border-box",
  WebkitMaskComposite: "xor",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  WebkitMaskSize: "100% 100%",
  maskImage: "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
  maskClip: "content-box, border-box",
  maskComposite: "exclude",
  maskRepeat: "no-repeat",
  maskPosition: "center",
  maskSize: "100% 100%",
}

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
  borderRadius = 24,
}: BorderBeamProps) => {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]", className)}
      style={{
        // `padding` cria a diferença entre content-box e border-box,
        // definindo a espessura do anel (igual ao borderWidth).
        padding: borderWidth,
        ...maskRingStyle,
      }}
    >
      <motion.div
        className="absolute aspect-square"
        style={
          {
            width: size,
            background: `linear-gradient(-90deg, ${colorFrom}, ${colorTo}, transparent)`,
            offsetPath: `rect(0 auto auto 0 round ${borderRadius}px)`,
            offsetRotate: "0deg",
            ...style,
          } as MotionStyle
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  )
}
