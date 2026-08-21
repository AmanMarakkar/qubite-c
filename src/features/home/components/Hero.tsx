import { Link } from 'react-router-dom'
import { Container } from '@/components/Container'
import { WHATSAPP_LINK } from '@/lib/links'

const avatars = ['/figma/hero/avatar-1.png', '/figma/hero/avatar-2.png', '/figma/hero/avatar-3.png']

function HeadsetIcon({ className = 'size-3.5' }: { className?: string }) {
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

function CoinIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path d="M8 1.5 14.5 5.5V10.5L8 14.5L1.5 10.5V5.5L8 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M8 5V11M6.3 6.3H9C9.55 6.3 10 6.75 10 7.3C10 7.85 9.55 8.3 9 8.3H6.3M6.3 8.3H9.2C9.75 8.3 10.2 8.75 10.2 9.3C10.2 9.85 9.75 10.3 9.2 10.3H6.3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[#050301]" aria-hidden="true" />
      <img
        src="/figma/hero/hero-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" aria-hidden="true" />

      <Container className="relative flex min-h-[560px] flex-col justify-center pt-30 pb-24 md:min-h-[820px] 2xl:max-w-[1600px]">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.5fr_1fr] 2xl:gap-20">
          <div className="flex max-w-[820px] flex-col gap-5 2xl:max-w-[900px]">
            <h1 className="animate-fade-in-up font-display text-[44px] leading-[1.05] font-black tracking-tight text-white md:text-[64px]">
              Powering the
              <br />
              Future of Mining
            </h1>
            <p
              className="animate-fade-in-up max-w-[520px] text-base leading-relaxed text-white md:text-18"
              style={{ animationDelay: '120ms' }}
            >
              Qubite supplies tax-advantaged mining and GPU servers, installs them in low-cost-power
              facilities, and operates them around the clock, so you earn predictable income without
              lifting a finger.
            </p>
            <div className="animate-fade-in-up flex flex-wrap items-center gap-3.5 pt-2" style={{ animationDelay: '240ms' }}>
              <Link
                to="/asic-machines"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-white/30 hover:bg-black/60 active:scale-95"
              >
                <img src="/figma/hero/shopping-cart.svg" alt="" className="size-[14px]" />
                Discover Machines
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-white/30 hover:bg-black/60 active:scale-95"
              >
                <HeadsetIcon className="size-[14px]" />
                Talk to human
              </a>
            </div>
          </div>

          <div
            className="relative hidden h-[440px] lg:block"
            style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
          >
            {/* back coin — offset down-left, dimmer, creates the stacked-coin edge peeking out */}
            <img
              src="/bitcoin-coin.png"
              alt=""
              className="absolute bottom-0 left-[238px] z-0 h-[168px] w-[177px] object-contain brightness-75"
              aria-hidden="true"
            />
            {/* front coin */}
            <img
              src="/bitcoin-coin.png"
              alt=""
              className="absolute bottom-4 left-[268px] z-[1] h-[174px] w-[183px] object-contain"
              style={{ filter: 'drop-shadow(0 0 40px rgba(217,154,43,0.45))' }}
              aria-hidden="true"
            />

            <div className="animate-float-tilt-back absolute top-0 right-8 z-10 flex w-[360px] flex-col gap-4 rounded-2xl border border-border bg-surface-glass p-5 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.6)] backdrop-blur-[15px] transition-shadow duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.25)]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-semibold text-text-dim">
                  <CoinIcon className="size-4 text-accent-bronze-tint" />
                  Your investment
                </span>
                <span className="rounded-full bg-accent-green/10 px-2 py-1 text-xs font-semibold text-accent-green">
                  Active Pool
                </span>
              </div>
              <span className="text-40 font-extrabold text-white">$25,000</span>

              <div className="flex items-center gap-3">
                <span className="text-[11px] text-text-subtle">60</span>
                <div className="relative h-[2px] flex-1 rounded-full bg-white/15">
                  <div className="absolute inset-y-0 left-0 w-[68%] rounded-full bg-gradient-to-r from-accent-bronze-tint to-accent-copper" />
                  <div className="absolute top-1/2 left-[68%] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent-bronze-tint bg-white" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] text-text-subtle">30</span>
                <svg viewBox="0 0 240 40" className="h-8 flex-1" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M0 28 Q30 10 55 22 T110 18 T170 30 T240 8"
                    fill="none"
                    stroke="var(--color-accent-green)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="animate-float-tilt-front absolute bottom-0 left-0 z-10 flex w-[320px] flex-col gap-3 rounded-2xl border border-border bg-surface-glass p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-[15px] transition-shadow duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.25)]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-semibold text-text-dim">
                  <CoinIcon className="size-4 text-accent-bronze-tint" />
                  Profitability
                </span>
                <span className="rounded-full bg-accent-green/10 px-2 py-1 text-xs font-semibold text-accent-green">
                  +26%
                </span>
              </div>
              <span className="text-40 font-extrabold text-white">$728.56</span>
              <span className="text-xs text-text-subtle">Since 3 months</span>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 hidden items-center justify-between px-5 py-6 sm:px-10 lg:flex lg:px-20">
        <span className="group flex cursor-default items-center gap-2 text-xs font-semibold tracking-wide text-text-dim uppercase transition-colors hover:text-white">
          Scroll
          <img src="/figma/hero/arrow-down.svg" alt="" className="size-3.5 animate-bounce" />
        </span>
        <span className="flex items-center gap-4 text-[13px] text-text-dim">
          Meet with 10+ infrastructure experts
          <span className="flex items-center">
            <span className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="size-7 rounded-full border-[1.5px] border-border-avatar object-cover transition-transform duration-200 hover:z-10 hover:scale-110"
                  style={{ zIndex: avatars.length - i }}
                />
              ))}
            </span>
            <span className="pl-3 text-[13px] font-semibold text-white">Mining experts</span>
          </span>
        </span>
      </div>
    </section>
  )
}
