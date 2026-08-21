import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Badge } from '@/components/Badge'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { getProductBySlug } from '@/features/asic-machines/products'
import { WHATSAPP_LINK } from '@/lib/links'
import { EfficiencyIcon, HashrateIcon, PowerIcon, WhatsAppIcon } from './components/icons'

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

function ChevronRightIcon({ className = 'size-3' }: { className?: string }) {
  return (
    <svg viewBox="0 0 8 12" className={className} fill="none" aria-hidden="true">
      <path d="M1.5 1 6.5 6l-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const BASE_BTC_PRICE = 80_000
const MIN_BTC_PRICE = 20_000
const MAX_BTC_PRICE = 300_000
const btcPricePresets = [80_000, 100_000, 150_000, 200_000]

const hostingTiers = [
  { name: 'Low Rate Hosted', rate: 0.065, tagline: 'Lower rate, higher installation fee' },
  { name: 'Standard Install', rate: 0.075, tagline: 'Balanced entry plan', recommended: true },
  { name: 'Quick Start', rate: 0.08, tagline: 'No installation fee' },
]

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
const currencyPrecise = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined
  const [btcPrice, setBtcPrice] = useState(BASE_BTC_PRICE)
  const [hostingRateIndex, setHostingRateIndex] = useState(
    hostingTiers.findIndex((tier) => tier.recommended) === -1 ? 0 : hostingTiers.findIndex((tier) => tier.recommended),
  )

  const revenue = useMemo(() => {
    if (!product) return null
    const btcMinedPerMonth = (product.dailyProfitUsd / BASE_BTC_PRICE) * 30
    const monthly = btcMinedPerMonth * btcPrice
    const hostingRate = hostingTiers[hostingRateIndex].rate
    const monthlyHostingCost = (product.powerValue * 24 * 30 * hostingRate) / 1000
    return {
      btcMinedPerMonth,
      monthly,
      annual: monthly * 12,
      monthlyHostingCost,
      netMonthly: monthly - monthlyHostingCost,
    }
  }, [product, btcPrice, hostingRateIndex])

  const forecast = useMemo(() => {
    if (!revenue) return []
    const annual = revenue.annual
    let cumulative = 0
    return Array.from({ length: 5 }, (_, i) => {
      cumulative += annual
      return { year: i + 1, annual, cumulative }
    })
  }, [revenue])

  if (!product) {
    return (
      <section className="bg-bg py-32">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-2xl font-bold text-white">Product not found</h1>
          <p className="text-sm text-text-subtle">This machine isn&apos;t in our current catalog.</p>
          <Link
            to="/asic-machines"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent-bronze px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
          >
            Back to Discover Machines
          </Link>
        </Container>
      </section>
    )
  }

  const inStock = product.status === 'In Stock'
  const maxCumulative = forecast[forecast.length - 1]?.cumulative ?? 1

  return (
    <div className="bg-bg pt-24">
      <Container className="pt-8">
        <nav className="flex items-center gap-2 text-xs text-text-faint">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRightIcon className="size-2.5" />
          <Link to="/asic-machines" className="transition-colors hover:text-white">
            Machines
          </Link>
          <ChevronRightIcon className="size-2.5" />
          <span className="text-text-dim">{product.title}</span>
        </nav>
      </Container>

      {/* header */}
      <section className="py-8">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div
              className="relative aspect-square overflow-hidden rounded-[28px] border border-white/8"
              style={{ background: 'radial-gradient(ellipse at center, #0d2b2e 0%, #0a1512 60%, #0a0a0a 100%)' }}
            >
              {product.media.type === 'image' ? (
                <img src={product.media.src} alt={product.title} className="absolute inset-0 size-full object-cover" />
              ) : (
                <video
                  src={product.media.src}
                  className="absolute inset-0 size-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </div>
          </Reveal>

          <Reveal delay={80} className="flex flex-col gap-5">
            <Badge tone="bronze">Hosting starts from {hostingTiers[0].rate}¢/kWh</Badge>
            <h1 className="text-[28px] leading-tight font-black text-white sm:text-[36px]">{product.title}</h1>

            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[34px] font-black tabular-nums text-[#e8a765]">{product.price}</span>
              <span
                className={`rounded-full border px-3 py-1 text-[11px] font-bold tracking-wide uppercase ${
                  inStock
                    ? 'border-[rgba(74,222,128,0.3)] bg-[rgba(34,197,94,0.12)] text-[#4ade80]'
                    : 'border-[rgba(248,113,113,0.3)] bg-[rgba(239,68,68,0.12)] text-[#f87171]'
                }`}
              >
                {product.status}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-dim">
              <span className="flex items-center gap-1.5">
                <HashrateIcon className="size-4 text-[#22d3ee]" />
                Hashrate: <span className="font-semibold text-white">{product.hashrate}</span>
              </span>
              <span className="text-text-faint">·</span>
              <span className="flex items-center gap-1.5">
                <PowerIcon className="size-4 text-[#4ade80]" />
                Power: <span className="font-semibold text-white">{product.power}</span>
              </span>
              <span className="text-text-faint">·</span>
              <span className="flex items-center gap-1.5">
                <EfficiencyIcon className="size-4 text-[#facc15]" />
                Efficiency: <span className="font-semibold text-white">{product.efficiency}</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#22c55e] to-[#16a34a] px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{ boxShadow: '0 4px 14px rgba(34,197,94,0.3)' }}
              >
                <WhatsAppIcon className="size-4" />
                Buy Now
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5 active:scale-95"
              >
                <HeadsetIcon />
                Talk to a human
              </a>
            </div>
            <p className="text-xs text-text-faint">avg. wait time 3 minutes</p>
          </Reveal>
        </Container>
      </section>

      {/* revenue calculator */}
      <section className="py-12">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-white/8 bg-white/3 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white">Revenue Calculator</h2>
              <p className="mt-1 text-sm text-text-subtle">
                BTC mined per month:{' '}
                <span className="font-semibold text-white">{revenue ? revenue.btcMinedPerMonth.toFixed(5) : '0'} BTC</span>
                {' · '}
                Hosting: <span className="font-semibold text-white">{hostingTiers[hostingRateIndex].rate}¢/kWh</span>
              </p>

              <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/8 bg-black/20 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wide text-text-faint uppercase">BTC Price</span>
                  <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-3 py-1.5">
                    <span className="text-sm text-text-faint">$</span>
                    <input
                      type="number"
                      min={MIN_BTC_PRICE}
                      max={MAX_BTC_PRICE}
                      step={1000}
                      value={btcPrice}
                      onChange={(e) => {
                        const value = Number(e.target.value)
                        if (!Number.isNaN(value)) setBtcPrice(Math.min(MAX_BTC_PRICE, Math.max(MIN_BTC_PRICE, value)))
                      }}
                      className="w-24 bg-transparent text-right text-sm font-bold tabular-nums text-white focus:outline-none"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={MIN_BTC_PRICE}
                  max={MAX_BTC_PRICE}
                  step={1000}
                  value={btcPrice}
                  onChange={(e) => setBtcPrice(Number(e.target.value))}
                  className="w-full accent-[#e8a765]"
                />
                <div className="flex flex-wrap gap-2">
                  {btcPricePresets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setBtcPrice(preset)}
                      className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                        btcPrice === preset
                          ? 'border-[rgba(232,167,101,0.5)] bg-[rgba(232,167,101,0.12)] text-[#e8a765]'
                          : 'border-white/10 text-text-dim hover:border-white/25 hover:text-white'
                      }`}
                    >
                      ${(preset / 1000).toFixed(0)}k
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col gap-1 rounded-2xl border border-white/8 bg-black/20 p-5">
                  <span className="text-[11px] font-bold tracking-wide text-text-faint uppercase">Monthly Revenue</span>
                  <span className="text-2xl font-black text-[#4ade80]">{revenue ? currency.format(revenue.monthly) : '$0'}</span>
                </div>
                <div className="flex flex-col gap-1 rounded-2xl border border-white/8 bg-black/20 p-5">
                  <span className="text-[11px] font-bold tracking-wide text-text-faint uppercase">Est. Hosting Cost</span>
                  <span className="text-2xl font-black text-[#f87171]">
                    {revenue ? `-${currency.format(revenue.monthlyHostingCost)}` : '$0'}
                  </span>
                </div>
                <div className="flex flex-col gap-1 rounded-2xl border border-[rgba(232,167,101,0.5)] bg-[rgba(232,167,101,0.08)] p-5">
                  <span className="text-[11px] font-bold tracking-wide text-text-faint uppercase">Net Monthly Profit</span>
                  <span className="text-2xl font-black text-[#e8a765]">
                    {revenue ? currency.format(revenue.netMonthly) : '$0'}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-[11px] text-text-faint">
                *Revenue estimates are illustrative, assuming constant network difficulty and 100% uptime.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="mt-6">
            <div className="rounded-3xl border border-white/8 bg-white/3 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white">5-Year Cumulative Revenue Forecast</h2>
              <p className="mt-1 text-sm text-text-subtle">Based on the BTC price set above.</p>

              <div className="mt-6 flex flex-col gap-3">
                {forecast.map((row) => (
                  <div key={row.year} className="flex items-center gap-4">
                    <span className="w-14 shrink-0 text-xs font-semibold text-text-dim">Year {row.year}</span>
                    <div className="relative h-7 flex-1 overflow-hidden rounded-full bg-black/30">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-bronze-tint to-accent-copper transition-all duration-500"
                        style={{ width: `${(row.cumulative / maxCumulative) * 100}%` }}
                      />
                    </div>
                    <span className="w-28 shrink-0 text-right text-xs font-bold tabular-nums text-white">
                      {currency.format(row.cumulative)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* hosting plans */}
      <section className="py-12">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold text-white">Hosting Plans for This Machine</h2>
              <p className="text-sm text-text-subtle">
                Pick a plan to see its cost reflected in the calculator above — based on {product.power} continuous draw.
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {hostingTiers.map((tier, i) => {
              const monthlyCost = (product.powerValue * 24 * 30 * tier.rate) / 1000
              const selected = hostingRateIndex === i
              return (
                <Reveal key={tier.name} delay={i * 80} className="h-full">
                  <button
                    type="button"
                    onClick={() => setHostingRateIndex(i)}
                    className={`relative flex h-full w-full flex-col gap-4 rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                      selected
                        ? 'border-[rgba(232,167,101,0.5)] bg-[rgba(232,167,101,0.06)]'
                        : 'border-white/8 bg-white/3 hover:border-white/20'
                    }`}
                  >
                    {tier.recommended ? (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-bronze px-3 py-1 text-[10px] font-bold tracking-wide text-white uppercase">
                        Recommended
                      </span>
                    ) : null}
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold text-white">{tier.name}</h3>
                      <p className="text-xs text-text-dim">{tier.tagline}</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-[#e8a765]">{tier.rate}¢</span>
                      <span className="text-xs text-text-faint">/ kWh</span>
                    </div>
                    <div className="flex flex-col gap-0.5 border-t border-white/8 pt-3">
                      <span className="text-[10px] tracking-wide text-text-faint uppercase">Est. Monthly Cost</span>
                      <span className="text-lg font-bold text-white">{currencyPrecise.format(monthlyCost)}</span>
                    </div>
                    {selected ? (
                      <span className="text-[10px] font-bold tracking-wide text-[#e8a765] uppercase">✓ Selected</span>
                    ) : null}
                  </button>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={240}>
            <Link
              to="/hosting"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-bronze-tint transition-colors hover:text-white"
            >
              View all hosting plans
              <ChevronRightIcon className="size-3" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* description + specs */}
      <section className="py-12 pb-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-white">Description</h2>
              <p className="text-sm leading-relaxed text-text-dim">{product.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {product.mineableCoins.map((coin) => (
                  <span
                    key={coin.ticker}
                    className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs font-semibold text-white"
                  >
                    {coin.name} ({coin.ticker})
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-white">Technical Specifications</h2>
              <div className="overflow-hidden rounded-2xl border border-white/8">
                {[
                  ['Manufacturer', product.specs.manufacturer],
                  ['Model', product.specs.model],
                  ['Algorithm', product.algorithm],
                  ['Release', product.specs.release],
                  ['Noise Level', product.specs.noiseLevel],
                  ['Fan(s)', product.specs.fans],
                  ['Interface', product.specs.interface],
                  ['Temperature', product.specs.temperature],
                  ['Humidity', product.specs.humidity],
                ].map(([label, value], i) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-white/3' : 'bg-transparent'}`}
                  >
                    <span className="text-text-faint">{label}</span>
                    <span className="font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
