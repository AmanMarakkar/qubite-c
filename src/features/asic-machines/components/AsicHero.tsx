import { Badge } from '@/components/Badge'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'

export function AsicHero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <img src="/hero-bg.png" alt="" className="absolute inset-0 size-full object-cover" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 45%, rgba(20,10,5,0.1) 0%, rgba(10,5,3,0.4) 55%, rgba(9,9,9,0.8) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 30%, transparent 55%, var(--color-bg) 100%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[660px] flex-col items-center justify-center gap-6 pt-32 pb-20 text-center">
        <Reveal>
          <Badge tone="blue" className="backdrop-blur-sm">
            Next-Gen Architecture Available
          </Badge>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="max-w-[860px] text-[44px] leading-[1.1] font-black text-white md:text-[58px]">
            Engineered Infrastructure.
            <br />
            <span className="bg-gradient-to-r from-accent-bronze-tint to-accent-copper bg-clip-text text-transparent">
              Built to Perform.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="max-w-[680px] text-base leading-relaxed text-text-dim">
            Browse qubite&apos;s full range of high-performance servers and mining hardware
            in-house engineered, fully hosted, and ready to deploy. Hosting, power, and
            maintenance included on every machine.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
