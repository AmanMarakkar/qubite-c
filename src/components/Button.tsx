import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'dark' | 'cta'
type ButtonShape = 'pill' | 'rounded'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  shape?: ButtonShape
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-bronze text-white px-7 py-3.5 text-[15px] font-semibold drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] hover:brightness-110 hover:-translate-y-0.5',
  outline:
    'bg-transparent text-white border border-border-strong px-4 py-2 text-sm font-medium hover:bg-white/5 hover:border-white',
  ghost: 'bg-transparent text-white text-[15px] font-semibold hover:text-accent-bronze-tint',
  dark: 'bg-[#0b0f14] text-text border border-text px-5 h-14 text-[15px] font-bold tracking-wide hover:bg-white/5 hover:-translate-y-0.5',
  cta: 'bg-[#99735a] text-white px-5 h-14 text-[15px] font-bold tracking-wide drop-shadow-[0_10px_12px_rgba(0,0,0,0.4)] hover:brightness-110 hover:-translate-y-0.5',
}

const shapeClasses: Record<ButtonShape, string> = {
  pill: 'rounded-full',
  rounded: 'rounded-sm',
}

export function Button({
  variant = 'primary',
  shape = 'pill',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 ${variantClasses[variant]} ${shapeClasses[shape]} ${className}`}
      {...rest}
    >
      {icon && iconPosition === 'left' ? icon : null}
      {children}
      {icon && iconPosition === 'right' ? icon : null}
    </button>
  )
}
