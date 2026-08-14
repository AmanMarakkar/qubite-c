import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/Container'

const navLinks = [
  { label: 'ASIC Machines', href: '/asic-machines', internal: true },
  { label: 'About', href: '/about', hasDropdown: true },
  { label: 'Hosting', href: '/hosting' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-transparent">
      <Container className="flex h-18 items-center justify-between md:h-21">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center transition-transform duration-200 hover:scale-105"
        >
          <img src="/figma/hero/logo.png" alt="Qubite" className="h-9 w-auto object-contain md:h-[42px]" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const className =
              'group relative flex items-center gap-1.5 py-1 text-sm text-white transition-colors hover:text-accent-bronze-tint'
            const content = (
              <>
                {link.label}
                {link.hasDropdown ? (
                  <svg
                    viewBox="0 0 8 5"
                    className="h-[5px] w-[8px] transition-transform duration-200 group-hover:-translate-y-0.5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L4 4L7 1"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-bronze-tint transition-all duration-300 group-hover:w-full" />
              </>
            )

            return link.internal ? (
              <Link key={link.label} to={link.href} className={className}>
                {content}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className={className}>
                {content}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-4">
          <button
            type="button"
            className="hidden items-center gap-2 text-[13px] text-white transition-colors hover:text-accent-bronze-tint sm:flex"
          >
            <img src="/figma/hero/globe.svg" alt="" className="size-3.5" />
            EN
          </button>

          <button
            type="button"
            className="hidden rounded-full border border-border-strong px-4 py-2 text-sm text-white transition-all duration-200 hover:border-white hover:bg-white/5 active:scale-95 sm:block"
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

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-8 items-center justify-center rounded-full border border-border-strong text-white transition-all duration-200 hover:border-white hover:bg-white/5 active:scale-90 md:hidden"
          >
            <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M3 3L13 13M13 3 3 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2 4h12M2 8h12M2 12h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <nav className="overflow-hidden border-t border-white/8 bg-black/95 backdrop-blur-sm">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) =>
              link.internal ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm text-white transition-colors hover:bg-white/5 hover:text-accent-bronze-tint"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm text-white transition-colors hover:bg-white/5 hover:text-accent-bronze-tint"
                >
                  {link.label}
                </a>
              ),
            )}
            <div className="mt-2 flex items-center gap-3 border-t border-white/8 px-3 pt-4 sm:hidden">
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
            </div>
          </Container>
        </nav>
      </div>
    </header>
  )
}
