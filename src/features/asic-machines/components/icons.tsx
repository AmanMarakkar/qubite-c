export function HashrateIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 12V9M6 12V5M10 12V7M14 12V3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function EfficiencyIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M9 1.5 3 9h4l-1 5.5 6-7.5H8l1-5.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PowerIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 2v4M11 2v4M3 6h10v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V6ZM8 13v2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SearchIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13 13 10.3 10.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function ChevronDownIcon({ className = 'size-3' }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 8" className={className} fill="none" aria-hidden="true">
      <path d="M1 1.5 6 6.5l5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8 1.5a6.5 6.5 0 0 0-5.6 9.8L1.5 14.5l3.3-.87A6.5 6.5 0 1 0 8 1.5Zm3.8 9.2c-.16.45-.94.86-1.3.9-.33.05-.75.07-1.21-.08a11 11 0 0 1-1.09-.4C6.4 10.4 5 9 4.5 7.9c-.36-.8-.24-1.23-.13-1.4.1-.17.24-.27.4-.4.14-.13.2-.2.3-.34.1-.13.05-.25 0-.35-.06-.1-.5-1.22-.7-1.66-.18-.43-.37-.37-.5-.38h-.44c-.15 0-.4.06-.6.3-.2.24-.8.77-.8 1.9s.82 2.2.94 2.36c.11.15 1.6 2.5 3.9 3.4.55.24.97.38 1.3.48.55.17 1.05.15 1.44.09.44-.07 1.35-.55 1.54-1.09.19-.54.19-1 .13-1.09-.06-.1-.2-.15-.42-.26Z" />
    </svg>
  )
}
