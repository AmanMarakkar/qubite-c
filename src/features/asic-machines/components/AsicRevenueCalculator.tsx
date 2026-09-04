import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/Badge'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { baseProducts } from '@/features/asic-machines/products'
import { calcBreakevenPrice, calcBtcMinedPerMonth, calcMonthlyHostingCost } from '@/features/asic-machines/revenueMath'

const MAX_BTC_PRICE = 300_000
const btcPricePresets = [80_000, 100_000, 150_000, 200_000]

const hostingTierRates = [0.065, 0.075, 0.08]
const hostingTierRecommended = [false, true, false]

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
const currencyPrecise = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })

export function AsicRevenueCalculator() {
  const { t } = useTranslation()

  const hostingTiers = (
    t('hosting.pricingPlans.plans', { returnObjects: true }) as { name: string; tagline: string }[]
  )
    .slice(1)
    .map((plan, i) => ({ ...plan, rate: hostingTierRates[i], recommended: hostingTierRecommended[i] }))

  const [productIndex, setProductIndex] = useState(0)
  const [hostingRateIndex, setHostingRateIndex] = useState(
    hostingTiers.findIndex((tier) => tier.recommended) === -1 ? 0 : hostingTiers.findIndex((tier) => tier.recommended),
  )
  const product = baseProducts[productIndex]

  // The slider's floor is pinned above this machine+tier's actual breakeven
  // BTC price (with a 15% safety margin), so no combination the user can
  // reach on the slider ever produces a loss — the range itself guarantees
  // profitability rather than clamping/faking the displayed numbers.
  const minBtcPrice = useMemo(() => {
    const breakeven = calcBreakevenPrice(product, hostingTiers, hostingTiers[hostingRateIndex].rate)
    return Math.max(20_000, Math.ceil((breakeven * 1.15) / 1000) * 1000)
  }, [product, hostingRateIndex, hostingTiers])

  const [btcPrice, setBtcPrice] = useState(() => Math.max(80_000, minBtcPrice))

  useEffect(() => {
    setBtcPrice((prev) => Math.min(MAX_BTC_PRICE, Math.max(minBtcPrice, prev)))
  }, [minBtcPrice])

  const revenue = useMemo(() => {
    const btcMinedPerMonth = calcBtcMinedPerMonth(product, hostingTiers)
    const monthly = btcMinedPerMonth * btcPrice
    const monthlyHostingCost = calcMonthlyHostingCost(product, hostingTiers[hostingRateIndex].rate)
    return { btcMinedPerMonth, monthly, monthlyHostingCost, netMonthly: monthly - monthlyHostingCost }
  }, [product, btcPrice, hostingRateIndex, hostingTiers])

  const availablePresets = btcPricePresets.filter((preset) => preset >= minBtcPrice)

  return (
    <section className="relative bg-black py-24">
      <Container className="relative flex flex-col items-center gap-4 text-center">
        <Reveal>
          <Badge tone="bronze">{t('asicMachines.calculator.badge')}</Badge>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-[28px] font-bold text-white sm:text-[34px]">{t('asicMachines.calculator.heading')}</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="max-w-[560px] text-sm text-text-dim">{t('asicMachines.calculator.subtitle')}</p>
        </Reveal>

        <Reveal delay={200} className="mt-8 w-full">
          <div className="flex flex-col gap-2 text-left">
            <span className="text-[10px] font-bold tracking-wide text-text-faint uppercase">
              {t('asicMachines.calculator.selectMachine')}
            </span>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {baseProducts.map((p, i) => (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => setProductIndex(i)}
                  className={`flex flex-col gap-1 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    productIndex === i
                      ? 'border-[rgba(232,167,101,0.5)] bg-[rgba(232,167,101,0.06)]'
                      : 'border-white/8 bg-white/3 hover:border-white/20'
                  }`}
                >
                  <span className="text-sm font-bold text-white">{p.title}</span>
                  <span className="text-xs text-text-dim">
                    {p.hashrate} · {p.efficiency}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={260} className="mt-6 w-full">
          <div className="rounded-3xl border border-white/8 bg-white/3 p-6 sm:p-8">
            <p className="text-left text-sm text-text-subtle">
              {t('asicMachines.calculator.hosting')}:{' '}
              <span className="font-semibold text-white">{hostingTiers[hostingRateIndex].rate}¢/kWh</span>
            </p>

            <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/8 bg-black/20 p-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-wide text-text-faint uppercase">
                  {t('productDetail.revenueCalculator.btcPrice')}
                </span>
                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-3 py-1.5">
                  <span className="text-sm text-text-faint">$</span>
                  <input
                    type="number"
                    min={minBtcPrice}
                    max={MAX_BTC_PRICE}
                    step={1000}
                    value={btcPrice}
                    onChange={(e) => {
                      const value = Number(e.target.value)
                      if (!Number.isNaN(value)) setBtcPrice(Math.min(MAX_BTC_PRICE, Math.max(minBtcPrice, value)))
                    }}
                    className="w-24 bg-transparent text-right text-sm font-bold tabular-nums text-white focus:outline-none"
                  />
                </div>
              </div>
              <input
                type="range"
                min={minBtcPrice}
                max={MAX_BTC_PRICE}
                step={1000}
                value={btcPrice}
                onChange={(e) => setBtcPrice(Number(e.target.value))}
                className="w-full accent-[#e8a765]"
              />
              <div className="flex flex-wrap gap-2">
                {availablePresets.map((preset) => (
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

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {hostingTiers.map((tier, i) => (
                <button
                  key={tier.name}
                  type="button"
                  onClick={() => setHostingRateIndex(i)}
                  className={`rounded-2xl border p-3 text-left transition-all duration-200 ${
                    hostingRateIndex === i
                      ? 'border-[rgba(232,167,101,0.5)] bg-[rgba(232,167,101,0.06)]'
                      : 'border-white/8 bg-black/20 hover:border-white/20'
                  }`}
                >
                  <span className="block text-xs font-bold text-white">{tier.name}</span>
                  <span className="text-[11px] text-text-faint">{tier.rate}¢/kWh</span>
                </button>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-1 rounded-2xl border border-white/8 bg-black/20 p-5">
                <span className="text-[11px] font-bold tracking-wide text-text-faint uppercase">
                  {t('productDetail.revenueCalculator.monthlyRevenue')}
                </span>
                <span className="text-2xl font-black text-[#4ade80]">{currency.format(revenue.monthly)}</span>
              </div>
              <div className="flex flex-col gap-1 rounded-2xl border border-white/8 bg-black/20 p-5">
                <span className="text-[11px] font-bold tracking-wide text-text-faint uppercase">
                  {t('productDetail.revenueCalculator.estHostingCost')}
                </span>
                <span className="text-2xl font-black text-white">
                  -{currencyPrecise.format(revenue.monthlyHostingCost)}
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-2xl border border-[rgba(232,167,101,0.5)] bg-[rgba(232,167,101,0.08)] p-5">
                <span className="text-[11px] font-bold tracking-wide text-text-faint uppercase">
                  {t('productDetail.revenueCalculator.netMonthlyProfit')}
                </span>
                <span className="text-2xl font-black text-[#e8a765]">{currency.format(revenue.netMonthly)}</span>
              </div>
            </div>
            <p className="mt-4 text-left text-[11px] text-text-faint">
              {t('productDetail.revenueCalculator.disclaimer')}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
