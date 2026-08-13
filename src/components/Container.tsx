import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 sm:px-10 lg:px-20 ${className}`}>
      {children}
    </div>
  )
}
