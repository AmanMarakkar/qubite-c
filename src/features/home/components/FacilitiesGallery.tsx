import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'

const photos = [
  '/facilities/facility-1.png',
  '/facilities/facility-2.png',
  '/facilities/facility-3.png',
  '/facilities/facility-4.png',
  '/facilities/facility-5.png',
  '/facilities/facility-6.png',
  '/facilities/facility-7.png',
]

// 12 tiles for a clean 4x3 grid, cycling through the 7 real facility photos.
const grid = Array.from({ length: 12 }, (_, i) => photos[i % photos.length])

export function FacilitiesGallery() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[380px]"
        style={{
          background:
            'linear-gradient(135deg, rgba(120,66,20,0.5) 0%, rgba(120,66,20,0.18) 30%, transparent 55%), ' +
            'linear-gradient(225deg, rgba(13,90,80,0.5) 0%, rgba(13,90,80,0.18) 30%, transparent 55%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-gradient-to-b from-transparent to-black"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center gap-4 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(45,212,191,0.3)] bg-[rgba(20,60,55,0.4)] px-4 py-1.5 text-[10px] font-bold tracking-[0.08em] text-[#2dd4bf] uppercase">
            <span className="size-1.5 rounded-full bg-[#2dd4bf]" />
            Inside Our Facilities
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-[28px] font-bold text-white sm:text-[34px]">Where your machines live &amp; earn</h2>
        </Reveal>

        <Reveal delay={160} className="mt-8 w-full">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {grid.map((src, i) => (
              <div key={i} className="group aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
