import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import {
  ChevronDownIcon,
  EfficiencyIcon,
  HashrateIcon,
  PowerIcon,
  SearchIcon,
  WhatsAppIcon,
} from './icons'

interface Product {
  title: string
  tag: string
  price: string
  status: 'In Stock' | 'No Stock'
  hashrate: string
  efficiency: string
  power: string
  dailyProfit: string
  payback: string
  image: string
}

const baseProducts: Product[] = [
  {
    title: 'MicroBT WhatsMiner M66S+ (318TH)',
    tag: 'AIR',
    price: 'Dh 3,000',
    status: 'In Stock',
    hashrate: '140 TH/s',
    efficiency: '21.5 J/TH',
    power: '3,010 W',
    dailyProfit: '+$3.92',
    payback: '954d',
    image: '/figma/cards/hardware.png',
  },
  {
    title: 'Bitmain Antminer S21 XP (270TH)',
    tag: 'BITMAIN',
    price: '$6,800',
    status: 'No Stock',
    hashrate: '210 TH/s',
    efficiency: '19.2 J/TH',
    power: '4,032 W',
    dailyProfit: '+$8.10',
    payback: '839d',
    image: '/figma/deploy/cube.png',
  },
  {
    title: 'Bitmain Antminer S21 Pro+ (234TH)',
    tag: 'FAN',
    price: '$8,900',
    status: 'In Stock',
    hashrate: '320 TH/s',
    efficiency: '16.5 J/TH',
    power: '5,280 W',
    dailyProfit: '+$11.20',
    payback: '795d',
    image: '/figma/cards/glow-blob.png',
  },
]

const products: Product[] = [...baseProducts, ...baseProducts, ...baseProducts]

const cardFont = { fontFamily: 'Inter, system-ui, sans-serif' }

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const inStock = product.status === 'In Stock'

  return (
    <Reveal delay={delay}>
      <div
        className="group flex h-full w-full max-w-[380px] flex-col rounded-[22px] border border-[rgba(255,255,255,0.06)] bg-[#17130f] p-4 transition-transform duration-300 hover:-translate-y-1.5"
        style={{
          ...cardFont,
          boxShadow: '0 0 40px rgba(120,80,40,0.15), 0 8px 24px rgba(0,0,0,0.4)',
        }}
      >
        {/* image area */}
        <div
          className="relative h-[220px] overflow-hidden rounded-2xl"
          style={{
            background: 'radial-gradient(ellipse at center, #0d2b2e 0%, #0a1512 60%, #0a0a0a 100%)',
          }}
        >
          {/* faint tech-grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
            aria-hidden="true"
          />

          {/* watermark */}
          <span className="absolute top-3 left-3 text-[9px] font-medium tracking-[0.1em] text-[#22d3ee]/40 uppercase">
            Lumina
          </span>

          {/* stock badge */}
          <span
            className={`absolute top-3 right-3 z-10 rounded-full border px-3 py-1 text-[10px] font-bold tracking-[0.05em] uppercase ${
              inStock
                ? 'border-[rgba(74,222,128,0.3)] bg-[rgba(34,197,94,0.12)] text-[#4ade80]'
                : 'border-[rgba(248,113,113,0.3)] bg-[rgba(239,68,68,0.12)] text-[#f87171]'
            }`}
          >
            {inStock ? 'In Stock' : 'No Stock'}
          </span>

          {/* glowing diamond platform */}
          <div
            className="pointer-events-none absolute bottom-10 left-1/2 size-24 -translate-x-1/2 rotate-45 rounded-md bg-[#22d3ee]/25"
            style={{ filter: 'blur(32px)' }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-11 left-1/2 size-16 -translate-x-1/2 rotate-45 rounded-sm border border-[#22d3ee]/30 bg-[#22d3ee]/10"
            aria-hidden="true"
          />

          <img
            src={product.image}
            alt=""
            className="relative h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
          />

          {/* bottom vignette */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))' }}
            aria-hidden="true"
          />
        </div>

        {/* title */}
        <h3 className="mt-3.5 line-clamp-2 text-[17px] leading-[1.3] font-semibold text-white">
          {product.title}
        </h3>

        {/* tag + price */}
        <div className="mt-2.5 flex items-center justify-between">
          <span className="rounded-full bg-[rgba(165,180,252,0.15)] px-3 py-1 text-[10px] font-bold tracking-[0.04em] text-[#a5b4fc] uppercase">
            {product.tag}
          </span>
          <span className="text-[20px] font-bold tabular-nums text-[#f5a623]">{product.price}</span>
        </div>

        {/* divider */}
        <div className="my-3.5 h-px bg-[rgba(255,255,255,0.08)]" />

        {/* specs row */}
        <div className="grid grid-cols-3">
          <div className="relative flex flex-col items-center gap-1 after:absolute after:top-[15%] after:right-0 after:h-[70%] after:w-px after:bg-[rgba(255,255,255,0.08)] after:content-['']">
            <span className="flex items-center gap-1 text-[10px] font-medium tracking-[0.04em] text-[#6b7280] uppercase">
              <HashrateIcon className="size-3 text-[#22d3ee]" />
              Hashrate
            </span>
            <span className="mt-1 text-[14px] font-semibold tabular-nums text-white">{product.hashrate}</span>
          </div>
          <div className="relative flex flex-col items-center gap-1 after:absolute after:top-[15%] after:right-0 after:h-[70%] after:w-px after:bg-[rgba(255,255,255,0.08)] after:content-['']">
            <span className="flex items-center gap-1 text-[10px] font-medium tracking-[0.04em] text-[#6b7280] uppercase">
              <EfficiencyIcon className="size-3 text-[#facc15]" />
              Efficiency
            </span>
            <span className="mt-1 text-[14px] font-semibold tabular-nums text-white">{product.efficiency}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="flex items-center gap-1 text-[10px] font-medium tracking-[0.04em] text-[#6b7280] uppercase">
              <PowerIcon className="size-3 text-[#4ade80]" />
              Power
            </span>
            <span className="mt-1 text-[14px] font-semibold tabular-nums text-white">{product.power}</span>
          </div>
        </div>

        {/* profit bar */}
        <div
          className="mt-3.5 flex items-center justify-between rounded-[14px] border border-[rgba(34,197,94,0.25)] px-4 py-3"
          style={{
            background: 'linear-gradient(135deg, rgba(34,197,94,0.10), rgba(21,128,61,0.15))',
          }}
        >
          <div className="flex flex-col gap-1">
            <span className="text-[10px] tracking-[0.04em] text-[#6b7280] uppercase">Est. Daily Profit</span>
            <span className="text-[15px] font-bold tabular-nums text-[#4ade80]">{product.dailyProfit}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] tracking-[0.04em] text-[#6b7280] uppercase">Payback</span>
            <span className="text-[15px] font-bold tabular-nums text-[#6ee7a0]">{product.payback}</span>
          </div>
        </div>

        {/* buttons */}
        <div className="mt-3.5 flex items-center gap-2.5">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-b from-[#22c55e] to-[#16a34a] py-3 text-[13px] font-bold tracking-[0.03em] text-white uppercase transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{ boxShadow: '0 4px 14px rgba(34,197,94,0.3)' }}
          >
            <WhatsAppIcon className="size-3.5" />
            WhatsApp
          </button>
          <button
            type="button"
            className="flex-1 rounded-full border border-white/15 py-3 text-[13px] font-bold tracking-[0.03em] text-white uppercase transition-all duration-200 hover:border-white/40 hover:bg-white/5 active:scale-95"
          >
            Buy
          </button>
        </div>
      </div>
    </Reveal>
  )
}

export function ProductsSection() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(74,47,31,0.55) 0%, rgba(40,24,15,0.35) 35%, rgba(9,9,9,0) 100%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-8 py-16">
        <Reveal>
          <div className="flex flex-col gap-1 text-left">
            <h2 className="text-2xl font-bold text-white">All Products</h2>
            <p className="text-sm text-text-subtle">Browse our full product catalog</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/3 p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-4 sm:items-center">
              <label className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold tracking-wide text-text-faint uppercase">Category</span>
                <div className="relative">
                  <select className="w-full min-w-44 cursor-pointer appearance-none rounded-full border border-[rgba(255,255,255,0.1)] bg-[#17130f] py-2.5 pr-9 pl-4 text-sm text-white focus:border-accent-cyan/40 focus:outline-none">
                    <option>Hydro Cooling Miners</option>
                    <option>Air Cooling Miners</option>
                    <option>Immersion Miners</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-4 size-2.5 -translate-y-1/2 text-text-subtle" />
                </div>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold tracking-wide text-text-faint uppercase">Brand</span>
                <div className="relative">
                  <select className="w-full min-w-44 cursor-pointer appearance-none rounded-full border border-[rgba(255,255,255,0.1)] bg-[#17130f] py-2.5 pr-9 pl-4 text-sm text-white focus:border-accent-cyan/40 focus:outline-none">
                    <option>Hydro Cooling Miners</option>
                    <option>MicroBT</option>
                    <option>Bitmain</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-4 size-2.5 -translate-y-1/2 text-text-subtle" />
                </div>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold tracking-wide text-text-faint uppercase">Sort</span>
                <div className="relative">
                  <select className="w-full min-w-32 cursor-pointer appearance-none rounded-full border border-[rgba(255,255,255,0.1)] bg-[#17130f] py-2.5 pr-9 pl-4 text-sm text-white focus:border-accent-cyan/40 focus:outline-none">
                    <option>None</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Hashrate</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-4 size-2.5 -translate-y-1/2 text-text-subtle" />
                </div>
              </label>
            </div>

            <div className="relative w-full md:w-70">
              <SearchIcon className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-text-subtle" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-full border border-[rgba(255,255,255,0.1)] bg-[#17130f] py-2.5 pr-4 pl-10 text-sm text-white placeholder:text-text-faint focus:border-accent-cyan/40 focus:outline-none"
              />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={`${product.title}-${i}`} product={product} delay={(i % 3) * 90} />
          ))}
        </div>
      </Container>
    </section>
  )
}
