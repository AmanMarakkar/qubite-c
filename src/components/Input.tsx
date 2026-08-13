import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({ label, id, className = '', ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-xs">
      {label ? (
        <label htmlFor={id} className="text-sm text-text-muted">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        className={`rounded-md border border-border bg-surface px-md py-sm text-base text-text placeholder:text-text-subtle focus:border-primary focus:outline-none ${className}`}
        {...rest}
      />
    </div>
  )
}
