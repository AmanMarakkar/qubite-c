import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { WHATSAPP_LINK } from '@/lib/links'

function HeadsetIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M3 8.5V7a5 5 0 0 1 10 0v1.5M3 8.5v3a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3Zm10 0v3a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H13Zm-1 4.5v.5a1.5 1.5 0 0 1-1.5 1.5H8.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HostingCta() {
  return (
    <section className="bg-black py-24">
      <Container>
        <Reveal>
          <div
            className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-[rgba(232,167,101,0.4)] px-8 py-14 text-center"
            style={{ boxShadow: 'inset 0 0 40px rgba(232,167,101,0.08)' }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(232,167,101,0.15), transparent 70%)' }}
            />
            <h2 className="relative text-[28px] font-bold text-white sm:text-[34px]">
              Ready to price your hosting slots?
            </h2>
            <p className="relative max-w-[520px] text-sm text-text-dim">
              Tell us your machine count and target power, and our team will confirm rate and
              availability within one business day.
            </p>
            <div className="relative flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-bronze px-6 py-3 text-sm font-bold text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-200 hover:brightness-110 active:scale-95"
              >
                <HeadsetIcon />
                Talk to a human
              </a>
              <a
                href="#plans"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-white/30 hover:bg-black/60 active:scale-95"
              >
                Compare plans again
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
