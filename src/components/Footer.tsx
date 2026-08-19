import { Link } from 'react-router-dom'
import { Container } from '@/components/Container'

const productLinks = [
  { label: 'Discover Machines', href: '/asic-machines', internal: true },
  { label: 'Hosting', href: '/hosting', internal: true },
]

const companyLinks = [
  { label: 'About', href: '/about', internal: true },
  { label: 'Locations', href: '/about#locations', internal: true },
  { label: 'Contact', href: '/about#contact', internal: true },
  { label: 'Careers', href: '/careers' },
  { label: 'Return Policy', href: '/return-policy' },
  { label: 'Imprint', href: '/imprint' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Community', href: '/community' },
]

function FooterLink({ label, href, internal }: { label: string; href: string; internal?: boolean }) {
  const className =
    'group relative w-fit text-sm font-medium text-text-slate transition-colors hover:text-white'
  const content = (
    <>
      {label}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
    </>
  )

  return internal ? (
    <Link to={href} className={className}>
      {content}
    </Link>
  ) : (
    <a href={href} className={className}>
      {content}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#090909]">
      <Container className="flex flex-col gap-12 py-24">
        <div className="flex flex-col items-start gap-6">
          <img
            src="/figma/footer/logo.png"
            alt="Qubite"
            className="h-[42px] w-auto object-contain transition-transform duration-200 hover:scale-105"
          />
          <p className="max-w-120 text-base leading-relaxed text-text-slate">
            Global infrastructure for hardware, hosting, and energy — built to deploy fast and run
            reliably, anywhere in the world.
          </p>
          <div className="flex items-center gap-2">
            {['IN', 'IG'].map((label) => (
              <a
                key={label}
                href={label === 'IN' ? 'https://linkedin.com' : 'https://instagram.com'}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex items-center justify-center rounded-[20px] border border-border-slate px-4 py-2 text-xs font-semibold text-[#f8fafc] transition-all duration-200 hover:border-white hover:bg-white/5 active:scale-95"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-border-slate" />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold text-text-faint uppercase">Products</span>
            <nav className="flex flex-wrap gap-8">
              {productLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold text-text-faint uppercase">Company</span>
            <nav className="flex flex-wrap gap-8">
              {companyLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-border-slate pt-6">
          <p className="text-xs text-text-faint">
            © 2026 Qubite Technologies Inc. All rights reserved. Crypto mining hardware hosting is
            subject to local energy regulations.
          </p>
        </div>
      </Container>
    </footer>
  )
}
