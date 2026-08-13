import { useState } from 'react'
import { Badge } from '@/components/Badge'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'

const tabs = ['All Locations', 'Operations', 'Sales Offices'] as const

const locations = [
  { city: 'Singapore', country: 'SG', status: 'Operational' as const },
  { city: 'London', country: 'UK', status: 'Operational' as const },
  { city: 'Miami', country: 'USA', status: 'Operational' as const },
  { city: 'Zurich', country: 'Switzerland', status: 'Operational' as const },
  { city: 'Oslo', country: 'Norway', status: 'Operational' as const },
  { city: 'Dubai', country: 'UAE', status: 'Maintenance' as const },
]

export function GlobalInfrastructure() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(tabs[0])

  const visible =
    activeTab === 'Operations' ? locations.filter((l) => l.status === 'Operational') : locations

  return (
    <section className="relative overflow-hidden bg-[#090909]">
      <img
        src="/figma/global/network-bg.png"
        alt=""
        className="pointer-events-none absolute -left-30 top-30 w-[1680px] max-w-none opacity-50"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center gap-9 py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <Reveal>
            <Badge tone="bronze">Ecosystem Categories</Badge>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-[40px] font-bold tracking-tight text-white">Global Mining Infrastructure</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-[700px] text-base font-bold text-text-subtle">
              Strategic deployment across six countries, with continuous monitoring and
              industry-leading uptime.
            </p>
          </Reveal>
        </div>

        <div className="flex items-center gap-3">
          {tabs.map((tab) => {
            const active = activeTab === tab
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full border px-[18px] py-2.5 text-[13px] font-bold tracking-wide uppercase transition-all duration-200 active:scale-95 ${
                  active
                    ? 'border-accent-amber bg-white/3 text-accent-amber drop-shadow-[0_0_6px_rgba(255,160,0,0.2)]'
                    : 'border-white/8 bg-white/1 text-[#a0a0aa] hover:border-white/20 hover:text-white'
                }`}
              >
                {tab}
              </button>
            )
          })}
        </div>

        <div key={activeTab} className="grid w-full max-w-155 grid-cols-1 gap-4 pt-6 sm:grid-cols-2">
          {visible.map((location, i) => (
            <div
              key={location.city}
              className="animate-fade-in-up group flex flex-col gap-3.5 rounded-[14px] border border-white/8 bg-white/3 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#a0a0aa]">{location.status}</span>
                <span className="relative flex size-1.5">
                  {location.status === 'Operational' ? (
                    <span className="absolute inset-0 animate-ping rounded-full bg-accent-green opacity-75" />
                  ) : null}
                  <span
                    className={`relative size-1.5 rounded-full ${
                      location.status === 'Operational' ? 'bg-accent-green' : 'bg-accent-amber'
                    }`}
                  />
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-base font-bold text-white">{location.city}</span>
                <span className="text-[11px] text-[#a0a0aa]">{location.country}</span>
              </div>
              <div className="h-px w-full bg-white/8 transition-colors duration-300 group-hover:bg-white/20" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
