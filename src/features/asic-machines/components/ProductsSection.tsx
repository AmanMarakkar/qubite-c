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

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const inStock = product.status === 'In Stock'

  return (
    <Reveal delay={delay}>
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0c0d10] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-copper/40 hover:shadow-[0_0_40px_-14px_var(--color-accent-copper)]">
        <div className="relative flex h-40 items-center justify-center overflow-hidden p-6">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(0,255,251,0.12), transparent 65%)' }}
          />
          <div className="pointer-events-none absolute bottom-6 h-3 w-28 rounded-full bg-accent-cyan/25 blur-md" />
          <img
            src={product.image}
            alt=""
            className="relative h-full w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-110"
          />
          <span
            className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase ${
              inStock ? 'bg-accent-green/15 text-accent-green' : 'bg-red-500/15 text-red-400'
            }`}
          >
            {product.status}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3.5 p-5 pt-4">
          <h3 className="text-[15px] leading-snug font-semibold text-white">{product.title}</h3>

          <div className="flex items-center justify-between">
            <span className="rounded-full bg-accent-blue/15 px-2.5 py-1 text-[10px] font-bold tracking-wide text-accent-blue uppercase">
              {product.tag}
            </span>
            <span className="text-lg font-bold text-accent-amber">{product.price}</span>
          </div>

          <div className="grid grid-cols-3 gap-2 border-t border-white/6 pt-3.5 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="flex items-center gap-1 text-[9px] tracking-wide text-text-subtle uppercase">
                <HashrateIcon className="size-3 text-accent-cyan" />
                Hashrate
              </span>
              <span className="text-xs font-semibold text-white">{product.hashrate}</span>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-white/6">
              <span className="flex items-center gap-1 text-[9px] tracking-wide text-text-subtle uppercase">
                <EfficiencyIcon className="size-3 text-accent-amber" />
                Efficiency
              </span>
              <span className="text-xs font-semibold text-white">{product.efficiency}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="flex items-center gap-1 text-[9px] tracking-wide text-text-subtle uppercase">
                <PowerIcon className="size-3 text-accent-green" />
                Power
              </span>
              <span className="text-xs font-semibold text-white">{product.power}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 rounded-lg border border-accent-green/15 bg-accent-green/8 px-3 py-2.5">
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] font-semibold tracking-wide text-accent-green/70 uppercase">
                Est. Daily Profit
              </span>
              <span className="text-sm font-bold text-accent-green">{product.dailyProfit}</span>
            </div>
            <div className="flex flex-col gap-0.5 border-l border-accent-green/15 pl-2">
              <span className="text-[9px] font-semibold tracking-wide text-accent-green/70 uppercase">Payback</span>
              <span className="text-sm font-bold text-accent-green">{product.payback}</span>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-2 pt-1">
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#22c55e] px-4 py-2.5 text-xs font-bold tracking-wide text-white uppercase transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              <WhatsAppIcon className="size-3.5" />
              WhatsApp
            </button>
            <button
              type="button"
              className="flex-1 rounded-full border border-white/15 px-4 py-2.5 text-xs font-bold tracking-wide text-white uppercase transition-all duration-200 hover:border-white/40 hover:bg-white/5 active:scale-95"
            >
              Buy
            </button>
          </div>
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
                  <select className="w-full min-w-44 cursor-pointer appearance-none rounded-lg border border-white/10 bg-black/40 py-2 pr-8 pl-3 text-sm text-white focus:border-accent-cyan/40 focus:outline-none">
                    <option>Hydro Cooling Miners</option>
                    <option>Air Cooling Miners</option>
                    <option>Immersion Miners</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 size-2.5 -translate-y-1/2 text-text-subtle" />
                </div>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold tracking-wide text-text-faint uppercase">Brand</span>
                <div className="relative">
                  <select className="w-full min-w-44 cursor-pointer appearance-none rounded-lg border border-white/10 bg-black/40 py-2 pr-8 pl-3 text-sm text-white focus:border-accent-cyan/40 focus:outline-none">
                    <option>Hydro Cooling Miners</option>
                    <option>MicroBT</option>
                    <option>Bitmain</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 size-2.5 -translate-y-1/2 text-text-subtle" />
                </div>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold tracking-wide text-text-faint uppercase">Sort</span>
                <div className="relative">
                  <select className="w-full min-w-32 cursor-pointer appearance-none rounded-lg border border-white/10 bg-black/40 py-2 pr-8 pl-3 text-sm text-white focus:border-accent-cyan/40 focus:outline-none">
                    <option>None</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Hashrate</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 size-2.5 -translate-y-1/2 text-text-subtle" />
                </div>
              </label>
            </div>

            <div className="relative w-full md:w-70">
              <SearchIcon className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-text-subtle" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-full border border-white/10 bg-black/40 py-2.5 pr-4 pl-10 text-sm text-white placeholder:text-text-faint focus:border-accent-cyan/40 focus:outline-none"
              />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={`${product.title}-${i}`} product={product} delay={(i % 3) * 90} />
          ))}
        </div>
      </Container>
    </section>
  )
}
