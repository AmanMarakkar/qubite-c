import type { ReactNode } from 'react'

type BadgeTone = 'blue' | 'bronze'

interface BadgeProps {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

const toneClasses: Record<BadgeTone, string> = {
  blue: 'border-accent-blue/20 bg-accent-blue/8',
  bronze: 'border-accent-bronze-tint/20 bg-accent-bronze-tint/8',
}

export function Badge({ children, tone = 'blue', className = '' }: BadgeProps) {
  return (
    <span
      className={`group inline-flex items-center gap-2 rounded-pill border px-4 py-2 text-[12px] font-bold tracking-wide text-accent-cyan uppercase transition-colors duration-200 hover:bg-current/10 ${toneClasses[tone]} ${className}`}
    >
      <span className="relative flex size-1.5 shrink-0">
        <span className="absolute inset-0 animate-ping rounded-full bg-current opacity-75" />
        <span className="relative size-1.5 rounded-full bg-current" />
      </span>
      {children}
    </span>
  )
}
