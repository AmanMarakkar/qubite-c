import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'

export function CtaBanner() {
  return (
    <section className="bg-black">
      <Container className="py-24">
        <Reveal>
          <div className="group relative flex flex-col gap-10 overflow-hidden rounded-3xl border border-accent-copper px-8 py-10 shadow-[inset_0_0_17px_12px_#482919] transition-shadow duration-500 hover:shadow-[inset_0_0_24px_16px_#482919] md:flex-row md:items-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-[rgba(165,88,0,0.2)] to-[rgba(17,17,18,0.2)] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative flex flex-1 flex-col gap-3 text-left">
              <h2 className="text-[32px] leading-tight font-bold text-[#f0f2f5]">Ready to deploy?</h2>
              <p className="text-base leading-relaxed text-[#c8c8c8]">
                Tell us your target hashrate and timeline — we&apos;ll come back with a site, power,
                and hardware plan.
              </p>
            </div>
            <div className="relative flex w-full flex-col gap-3 md:w-90">
              <Button variant="cta" shape="rounded" className="w-full">
                Request Deployment Plan
              </Button>
              <Button variant="dark" shape="rounded" className="w-full">
                Explore Hardware Catalog
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
