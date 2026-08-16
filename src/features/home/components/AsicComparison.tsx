import { useMemo, useState } from 'react'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'

function TickMark() {
  return <span className="inline-block h-[3px] w-8 rounded-full bg-[#ec4899]/70" />
}

function SearchIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13 13 10.3 10.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function ChevronDownIcon({ className = 'size-2.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 8" className={className} fill="none" aria-hidden="true">
      <path d="M1 1.5 6 6.5l5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FilterIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path d="M2 3h12M4.5 8h7M7 13h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function ResetIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M13.5 8A5.5 5.5 0 1 1 11.8 4M13.5 2v3.5H10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StarIcon({ filled, className = 'size-4' }: { filled: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill={filled ? 'currentColor' : 'none'} aria-hidden="true">
      <path
        d="M8 1.5 9.9 5.6l4.5.6-3.3 3.1.8 4.4L8 11.6l-4 2.1.8-4.4-3.3-3.1 4.5-.6L8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SortIcon({ direction, className = 'size-3' }: { direction: 'asc' | 'desc' | null; className?: string }) {
  return (
    <svg viewBox="0 0 10 14" className={className} fill="none" aria-hidden="true">
      <path
        d="M2.5 4.5 5 2l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={direction === 'asc' ? 1 : 0.35}
      />
      <path
        d="M2.5 9.5 5 12l2.5-2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={direction === 'desc' ? 1 : 0.35}
      />
    </svg>
  )
}

function HeadsetIcon({ className = 'size-3.5' }: { className?: string }) {
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

interface Miner {
  model: string
  release: string
  releaseSort: number
  hashrate: string
  hashrateSort: number
  power: string
  powerSort: number
  top: { letter: string; color: string }
  algorithm: string
  price: number
  priceWas: number
  priceUnit: string
  profit: number
}

const miners: Miner[] = [
  {
    model: 'Bitmain Antminer KS7 Pro',
    release: 'Jul 2026',
    releaseSort: new Date('2026-07-01').getTime(),
    hashrate: '1 Mh/s',
    hashrateSort: 1_000_000,
    power: '2472W',
    powerSort: 2472,
    top: { letter: 'M', color: '#f97316' },
    algorithm: 'RandomX',
    price: 4798,
    priceWas: 4999,
    priceUnit: '/Mh',
    profit: 23.02,
  },
  {
    model: 'Bitmain Antminer Z15 Pro',
    release: 'Jun 2023',
    releaseSort: new Date('2023-06-01').getTime(),
    hashrate: '840 kh/s',
    hashrateSort: 840_000,
    power: '2780W',
    powerSort: 2780,
    top: { letter: 'Z', color: '#3b82f6' },
    algorithm: 'Equihash',
    price: 3284,
    priceWas: 4412,
    priceUnit: '/kh',
    profit: 19.86,
  },
  {
    model: 'Bitmain Antminer S21 XP',
    release: 'Jan 2026',
    releaseSort: new Date('2026-01-01').getTime(),
    hashrate: '1.16 Ph/s',
    hashrateSort: 1_160_000_000_000_000,
    power: '11020W',
    powerSort: 11020,
    top: { letter: 'B', color: '#f59e0b' },
    algorithm: 'SHA-256',
    price: 7159,
    priceWas: 6173,
    priceUnit: '/Ph',
    profit: 10.01,
  },
  {
    model: 'Bitmain Antminer Z15',
    release: 'Jun 2020',
    releaseSort: new Date('2020-06-01').getTime(),
    hashrate: '420 kh/s',
    hashrateSort: 420_000,
    power: '1510W',
    powerSort: 1510,
    top: { letter: 'Z', color: '#3b82f6' },
    algorithm: 'Equihash',
    price: 2728,
    priceWas: 3102,
    priceUnit: '/kh',
    profit: 9.64,
  },
  {
    model: 'Bitdeer SealMiner A2',
    release: 'Jun 2026',
    releaseSort: new Date('2026-06-01').getTime(),
    hashrate: '52.5 Gh/s',
    hashrateSort: 52_500_000_000,
    power: '7823W',
    powerSort: 7823,
    top: { letter: 'L', color: '#a855f7' },
    algorithm: 'Scrypt',
    price: 8999,
    priceWas: 9650,
    priceUnit: '',
    profit: 9.23,
  },
]

type SortKey = 'model' | 'releaseSort' | 'hashrateSort' | 'powerSort' | 'price' | 'profit'

// Order matches the visual column order in the table exactly; `key` is
// omitted for the two non-sortable columns (Top, Algorithm).
const columns: { key: SortKey | null; label: string }[] = [
  { key: 'model', label: 'Model' },
  { key: 'releaseSort', label: 'Release' },
  { key: 'hashrateSort', label: 'Hashrate' },
  { key: 'powerSort', label: 'Power' },
  { key: null, label: 'Top' },
  { key: null, label: 'Algorithm' },
  { key: 'price', label: 'Best Price' },
  { key: 'profit', label: 'Profit' },
]

const filterPills = ['Category', 'Cooling', 'Manufacturer', 'Algorithm']

export function AsicComparison() {
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [sort, setSort] = useState<{ key: SortKey; direction: 'asc' | 'desc' } | null>(null)

  const rows = useMemo(() => {
    let list = miners.filter((m) => m.model.toLowerCase().includes(query.toLowerCase()))
    if (sort) {
      list = [...list].sort((a, b) => {
        const av = a[sort.key]
        const bv = b[sort.key]
        const cmp = typeof av === 'string' ? av.localeCompare(bv as string) : (av as number) - (bv as number)
        return sort.direction === 'asc' ? cmp : -cmp
      })
    }
    return list
  }, [query, sort])

  function toggleSort(key: SortKey) {
    setSort((prev) => {
      if (!prev || prev.key !== key) return { key, direction: 'asc' }
      if (prev.direction === 'asc') return { key, direction: 'desc' }
      return null
    })
  }

  function toggleFavorite(model: string) {
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(model)) next.delete(model)
      else next.add(model)
      return next
    })
  }

  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,68,64,0.28), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center gap-3 text-center">
        <Reveal>
          <TickMark />
        </Reveal>
        <Reveal delay={60}>
          <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-[rgba(96,165,250,0.3)] bg-[rgba(59,130,246,0.15)] px-3 py-1 text-[10px] font-bold tracking-[0.08em] text-[#93c5fd] uppercase">
            Our Products
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="max-w-[700px] text-[28px] font-extrabold text-white sm:text-[34px]">
            Compare Our ASIC Miners
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="max-w-[560px] text-sm text-text-dim">
            Enterprise-grade mining hardware. German-engineered, UAE-deployed. Highly optimized for
            thermal stability and peak performance.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <button
            type="button"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-[rgba(232,167,101,0.4)] bg-[#0c0a08] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#151210] active:scale-95"
            style={{ boxShadow: '0 0 30px rgba(232,167,101,0.25)' }}
          >
            <HeadsetIcon className="size-4 text-[#e8a765]" />
            Talk to human
          </button>
        </Reveal>

        <Reveal delay={300} className="mt-10 w-full">
          <div className="rounded-2xl border border-white/8 bg-[rgba(10,14,13,0.7)] p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-2">
              {filterPills.map((label) => (
                <button
                  key={label}
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-text-dim transition-colors hover:border-white/25 hover:text-white"
                >
                  {label}
                  <ChevronDownIcon className="text-text-faint" />
                </button>
              ))}
            </div>

            <div className="mt-3 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <SearchIcon className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-text-subtle" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search model, brand, algorithm..."
                  className="w-full rounded-full border border-white/10 bg-black/40 py-2.5 pr-4 pl-10 text-sm text-white placeholder:text-text-faint focus:border-accent-cyan/40 focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2.5 text-xs font-semibold text-text-dim transition-colors hover:border-white/25 hover:text-white"
              >
                <FilterIcon />
                Advanced filters
              </button>
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setSort(null)
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2.5 text-xs font-semibold text-text-dim transition-colors hover:border-white/25 hover:text-white"
              >
                <ResetIcon />
                Reset
              </button>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/8 text-[10px] tracking-wide text-text-faint uppercase">
                    <th className="px-2 py-2 font-medium">Fav</th>
                    {columns.map((col) =>
                      col.key ? (
                        <th key={col.label} className="px-2 py-2 font-medium">
                          <button
                            type="button"
                            onClick={() => toggleSort(col.key as SortKey)}
                            className="inline-flex items-center gap-1 transition-colors hover:text-white"
                          >
                            {col.label}
                            <SortIcon direction={sort?.key === col.key ? sort.direction : null} />
                          </button>
                        </th>
                      ) : (
                        <th key={col.label} className="px-2 py-2 font-medium">
                          {col.label}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((miner) => (
                    <tr
                      key={miner.model}
                      className="border-b border-white/4 text-sm transition-colors hover:bg-white/3"
                    >
                      <td className="px-2 py-3">
                        <button
                          type="button"
                          onClick={() => toggleFavorite(miner.model)}
                          className={`transition-colors ${favorites.has(miner.model) ? 'text-[#e8a765]' : 'text-text-faint hover:text-white'}`}
                          aria-label="Toggle favorite"
                        >
                          <StarIcon filled={favorites.has(miner.model)} />
                        </button>
                      </td>
                      <td className="max-w-[180px] truncate px-2 py-3 font-semibold text-white">{miner.model}</td>
                      <td className="px-2 py-3 whitespace-nowrap text-[#2dd4bf]">{miner.release}</td>
                      <td className="px-2 py-3 whitespace-nowrap tabular-nums text-white">{miner.hashrate}</td>
                      <td className="px-2 py-3 whitespace-nowrap tabular-nums text-text-dim">{miner.power}</td>
                      <td className="px-2 py-3">
                        <span
                          className="flex size-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
                          style={{ backgroundColor: miner.top.color }}
                        >
                          {miner.top.letter}
                        </span>
                      </td>
                      <td className="px-2 py-3 whitespace-nowrap text-text-dim">{miner.algorithm}</td>
                      <td className="px-2 py-3 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-[11px] text-text-faint line-through">
                            ${miner.priceWas.toLocaleString()}
                            {miner.priceUnit}
                          </span>
                          <span className="font-bold tabular-nums text-[#f5a623]">
                            ${miner.price.toLocaleString()}
                          </span>
                        </div>
                      </td>
                      <td className="px-2 py-3 whitespace-nowrap">
                        <span className="rounded-full bg-accent-green/10 px-2.5 py-1 text-xs font-bold tabular-nums text-accent-green">
                          ${miner.profit.toFixed(2)}/day
                        </span>
                      </td>
                    </tr>
                  ))}
                  {rows.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="px-2 py-8 text-center text-sm text-text-faint">
                        No miners match your search.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
