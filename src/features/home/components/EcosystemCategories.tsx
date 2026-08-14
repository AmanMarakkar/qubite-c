import { Badge } from '@/components/Badge'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'

interface Category {
  title: string
  description: string
  image: string
  imageClassName?: string
}

const categories: Category[] = [
  {
    title: 'Hardware Marketplace',
    description: 'Browse and purchase mining hardware from verified vendors',
    image: '/figma/cards/hardware.png',
  },
  {
    title: 'Energy Solutions',
    description: 'Turnkey power, land, and grid access for large-scale mining',
    image: '/figma/cards/energy.png',
  },
  {
    title: 'Technology',
    description: 'Cutting-edge infrastructure and optimization tools',
    image: '/figma/cards/glow-blob.png',
  },
  {
    title: 'Academy',
    description: 'Learn mining fundamentals and advanced strategies',
    image: '/figma/cards/academy-icon.png',
    imageClassName: '-top-28 h-52',
  },
]

export function EcosystemCategories() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <Container className="relative flex flex-col items-center gap-4 py-24 text-center">
        <Reveal>
          <Badge tone="bronze">Ecosystem Categories</Badge>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-[40px] font-bold tracking-tight text-white">The Complete Mining Infrastructure</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="max-w-[640px] text-base font-bold text-text-subtle">
            Access hardware, cloud power, clean energy, and cutting-edge software under a unified,
            high-performance ecosystem.
          </p>
        </Reveal>

        <img
          src="/figma/cards/section-glow.svg"
          alt=""
          className="pointer-events-none absolute top-[280px] left-1/2 w-[1650px] max-w-none -translate-x-1/2 opacity-60"
          aria-hidden="true"
        />

        <div className="relative grid w-full max-w-[1320px] grid-cols-1 gap-x-5 gap-y-28 pt-20 sm:grid-cols-2 sm:gap-y-24 lg:grid-cols-4 lg:gap-y-5">
          {categories.map((category, i) => (
            <Reveal key={category.title} delay={i * 90} className="h-full">
              <div className="group relative flex h-[330px] flex-col justify-end rounded-[28px] border border-white/4 bg-gradient-to-br from-[#515050] to-transparent px-6 pt-19 pb-6 text-left shadow-[0_0_6px_0_rgba(102,153,255,0.15),0_0_24px_0_rgba(102,153,255,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-white/10 hover:shadow-[0_0_10px_0_rgba(102,153,255,0.25),0_0_40px_0_rgba(102,153,255,0.5)]">
                <img
                  src={category.image}
                  alt=""
                  className={`absolute left-1/2 w-auto -translate-x-1/2 object-contain drop-shadow-[0_12px_30px_rgba(255,255,255,0.25)] transition-transform duration-500 group-hover:scale-110 ${category.imageClassName ?? '-top-16 h-36'}`}
                />
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold tracking-tight text-white">{category.title}</h3>
                  <p className="text-sm leading-5 text-text-subtle">{category.description}</p>
                </div>
                <div className="flex justify-end pt-6">
                  <span className="flex size-10 items-center justify-center rounded-full bg-surface transition-all duration-300 group-hover:bg-accent-bronze-tint/20">
                    <img
                      src="/figma/cards/arrow-up-right.svg"
                      alt=""
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
