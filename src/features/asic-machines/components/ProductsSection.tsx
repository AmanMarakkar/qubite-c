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
    image: '/figma/cards/glow-blob.png',
  },
]

const products: Product[] = [...baseProducts, ...baseProducts, ...baseProducts]

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const inStock = product.status === 'In Stock'

  return (
    <Reveal delay={delay}>
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0c0f13] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-cyan/25 hover:shadow-[0_0_40px_-12px_var(--color-accent-cyan)]">
        <div className="relative h-45 overflow-hidden bg-black">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(0,255,251,0.15), transparent 70%)' }}
          />
          <img
            src={product.image}
            alt=""
            className="absolute inset-0 size-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          />
          <span
            className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase ${
              inStock ? 'bg-accent-green/15 text-accent-green' : 'bg-red-500/15 text-red-400'
            }`}
          >
            {product.status}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-[15px] leading-snug font-semibold text-white">{product.title}</h3>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-accent-blue/15 px-2.5 py-1 text-[10px] font-bold tracking-wide text-accent-blue uppercase">
                {product.tag}
              </span>
              <span className="text-lg font-bold text-accent-bronze-tint">{product.price}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 border-t border-white/6 pt-4 text-xs text-text-subtle">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <HashrateIcon className="size-3.5 text-accent-cyan" />
                <span className="text-[10px] tracking-wide uppercase">Hashrate</span>
              </span>
              <span className="flex items-center gap-1.5">
                <EfficiencyIcon className="size-3.5 text-accent-amber" />
                <span className="text-[10px] tracking-wide uppercase">Efficiency</span>
              </span>
            </div>
            <div className="flex items-center justify-between font-semibold text-white">
              <span>{product.hashrate}</span>
              <span>{product.efficiency}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="flex items-center gap-1.5">
                <PowerIcon className="size-3.5 text-accent-copper" />
                <span className="text-[10px] tracking-wide uppercase">Power</span>
              </span>
              <span className="font-semibold text-white">{product.power}</span>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-2 pt-2">
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
    <section className="bg-bg">
      <Container className="flex flex-col gap-8 py-16">
        <Reveal>
          <div className="flex flex-col gap-1 text-left">
            <h2 className="text-2xl font-bold text-white">All Products</h2>
            <p className="text-sm text-text-subtle">Browse our full product catalog</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/3 p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <label className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold tracking-wide text-text-faint uppercase">Category</span>
                <div className="relative">
                  <select className="w-full min-w-50 cursor-pointer appearance-none rounded-lg border border-white/10 bg-black/40 py-2 pr-8 pl-3 text-sm text-white focus:border-accent-cyan/40 focus:outline-none">
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
                  <select className="w-full min-w-50 cursor-pointer appearance-none rounded-lg border border-white/10 bg-black/40 py-2 pr-8 pl-3 text-sm text-white focus:border-accent-cyan/40 focus:outline-none">
                    <option>Hydro Cooling Miners</option>
                    <option>MicroBT</option>
                    <option>Bitmain</option>
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
