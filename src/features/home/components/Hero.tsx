import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const avatars = ['/figma/hero/avatar-1.png', '/figma/hero/avatar-2.png', '/figma/hero/avatar-3.png']

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <img
        src="/figma/hero/hero-bg.png"
        alt=""
        className="absolute inset-x-0 top-11 bottom-0 h-[calc(100%-2.75rem)] w-full object-cover object-bottom"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" aria-hidden="true" />

      <Container className="relative flex min-h-[560px] flex-col justify-center gap-5 pt-30 pb-24 md:min-h-[820px]">
        <div className="flex max-w-[872px] flex-col gap-5">
          <h1 className="animate-fade-in-up font-display text-[44px] leading-[1.05] font-black text-white md:text-72">
            Powering the
            <br />
            Future of Mining
          </h1>
          <p
            className="animate-fade-in-up max-w-[620px] text-base leading-relaxed text-white md:text-18"
            style={{ animationDelay: '120ms' }}
          >
            Qubite supplies tax-advantaged mining and GPU servers, installs them in low-cost-power
            facilities, and operates them around the clock, so you earn predictable income without
            lifting a finger.
          </p>
          <div className="animate-fade-in-up flex flex-wrap items-center gap-5 pt-2" style={{ animationDelay: '240ms' }}>
            <Button
              className="transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
              icon={<img src="/figma/hero/shopping-cart.svg" alt="" className="size-[18px]" />}
            >
              Shop ASIC Machines
            </Button>
            <Button
              variant="ghost"
              iconPosition="right"
              className="group"
              icon={
                <img
                  src="/figma/hero/arrow-right.svg"
                  alt=""
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              }
            >
              Learn more
            </Button>
          </div>
        </div>

        <div className="animate-float absolute top-1/3 right-5 hidden w-[340px] flex-col gap-5 rounded-lg border border-border bg-surface-glass p-6 backdrop-blur-[15px] transition-shadow duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.25)] lg:right-20 lg:flex">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-semibold text-text-dim">
              <img src="/figma/hero/cpu.svg" alt="" className="size-4" />
              Hashrate
            </span>
            <span className="rounded-full bg-accent-green/10 px-2 py-1 text-xs font-semibold text-accent-green">
              +26%
            </span>
          </div>
          <span className="text-40 font-extrabold text-white">1,500+ PH</span>
          <span className="text-xs text-text-subtle">Since previous 30 days</span>
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
