import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { WHATSAPP_LINK } from '@/lib/links'

interface Plan {
  name: string
  tagline: string
  rate: string
  upfront: string
  installation: string
  power: string
  machines: string
  recommended?: boolean
}

const plans: Plan[] = [
  {
    name: 'Turnkey Site',
    tagline: 'Lowest operating cost',
    rate: '4.0¢',
    upfront: '$300k per MW',
    installation: 'Built into the turnkey deployment',
    power: '6MW ready — up to 100MW constructable',
    machines: 'Air, Hydro, Immersion',
  },
  {
    name: 'Low Rate Hosted',
    tagline: 'Lower rate, higher installation fee',
    rate: '5.5¢',
    upfront: '2 months rent deposit',
    installation: '$600 one-time installation fee',
    power: '8MW available',
    machines: 'Hydro',
  },
  {
    name: 'Standard Install',
    tagline: 'Balanced entry plan',
    rate: '6.0¢',
    upfront: '2 months rent deposit',
    installation: '$300 one-time installation fee',
    power: '5MW available',
    machines: 'Air, Hydro',
    recommended: true,
  },
  {
    name: 'Quick Start',
    tagline: 'No installation fee',
    rate: '6.8¢',
    upfront: '2 months rent deposit',
    installation: '$0 one-time installation fee',
    power: '3MW available',
    machines: 'Air, Hydro',
  },
]

export function PricingPlans() {
  return (
    <section id="plans" className="relative overflow-hidden bg-bg py-24">
      <Container className="relative flex flex-col items-center gap-4 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,167,101,0.3)] bg-[rgba(232,167,101,0.08)] px-4 py-1.5 text-[10px] font-bold tracking-[0.08em] text-[#e8a765] uppercase">
            Hosting Plans
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-[28px] font-bold text-white sm:text-[34px]">
            Select a plan by cost, commitment, and speed
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="max-w-[560px] text-sm text-text-dim">
            Every plan below shows the exact electricity rate, upfront cash needed, and available
            power — reviewed by our team before your slot is confirmed.
          </p>
        </Reveal>

        <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={200 + i * 90} className="h-full">
              <div
                className={`relative flex h-full flex-col gap-5 rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.recommended
                    ? 'border-[rgba(232,167,101,0.5)] bg-[rgba(232,167,101,0.06)] shadow-[0_0_40px_-14px_rgba(232,167,101,0.6)]'
                    : 'border-white/8 bg-white/3 hover:border-white/20'
                }`}
              >
                {plan.recommended ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-bronze px-3 py-1 text-[10px] font-bold tracking-wide text-white uppercase">
                    Recommended
                  </span>
                ) : null}

                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-text-dim">{plan.tagline}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-[32px] font-black text-[#e8a765]">{plan.rate}</span>
                  <span className="text-xs text-text-faint">/ kWh</span>
                </div>

                <div className="flex flex-col gap-3 border-t border-white/8 pt-4 text-xs">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] tracking-wide text-text-faint uppercase">Upfront</span>
                    <span className="text-white">{plan.upfront}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] tracking-wide text-text-faint uppercase">Installation</span>
                    <span className="text-white">{plan.installation}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] tracking-wide text-text-faint uppercase">Available Power</span>
                    <span className="text-white">{plan.power}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] tracking-wide text-text-faint uppercase">Machine Types</span>
                    <span className="text-white">{plan.machines}</span>
                  </div>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center rounded-full py-2.5 text-xs font-bold uppercase tracking-wide transition-all duration-200 active:scale-95 ${
                    plan.recommended
                      ? 'bg-accent-bronze text-white hover:brightness-110'
                      : 'border border-white/15 text-white hover:border-white/40 hover:bg-white/5'
                  }`}
                >
                  Get this plan
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
