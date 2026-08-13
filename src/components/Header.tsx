import { Container } from '@/components/Container'

const navLinks = [
  { label: 'ASIC Machines', href: '/asic-machines' },
  { label: 'About', href: '/about', hasDropdown: true },
  { label: 'Hosting', href: '/hosting' },
]

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-transparent">
      <Container className="flex h-21 items-center justify-between">
        <a href="/" className="flex items-center transition-transform duration-200 hover:scale-105">
          <img src="/figma/hero/logo.png" alt="Qubite" className="h-[42px] w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative flex items-center gap-1.5 py-1 text-sm text-white transition-colors hover:text-accent-bronze-tint"
            >
              {link.label}
              {link.hasDropdown ? (
                <svg
                  viewBox="0 0 8 5"
                  className="h-[5px] w-[8px] transition-transform duration-200 group-hover:-translate-y-0.5"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-bronze-tint transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex items-center gap-2 text-[13px] text-white transition-colors hover:text-accent-bronze-tint"
          >
            <img src="/figma/hero/globe.svg" alt="" className="size-3.5" />
            EN
          </button>

          <button
            type="button"
            className="rounded-full border border-border-strong px-4 py-2 text-sm text-white transition-all duration-200 hover:border-white hover:bg-white/5 active:scale-95"
          >
            Sign in
          </button>

          <button
            type="button"
            aria-label="Cart"
            className="flex size-8 items-center justify-center rounded-full border border-border-strong text-white transition-all duration-200 hover:border-white hover:bg-white/5 active:scale-90"
          >
            <img src="/figma/hero/shopping-cart.svg" alt="" className="size-[18px]" />
          </button>
        </div>
      </Container>
    </header>
  )
}
