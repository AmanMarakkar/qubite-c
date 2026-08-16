import { Reveal } from '@/components/Reveal'

const GRADIENT = 'linear-gradient(90deg, #e8a765 0%, #b8794a 100%)'

function TickMark({ className = '' }: { className?: string }) {
  return <span className={`inline-block h-[3px] w-8 rounded-full bg-[#ec4899]/70 ${className}`} />
}

function ReceiptIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path d="M4 2h8v12l-2-1.3L8 14l-2-1.3L4 14V2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6 5.5h4M6 8h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function TrendIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path d="M2 12 6 7l3 2.5L14 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 3h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ShieldIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path d="M8 1.5 13.5 3.5V7.5C13.5 11 11 13.3 8 14.5C5 13.3 2.5 11 2.5 7.5V3.5L8 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M5.7 8 7.2 9.5 10.3 6.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WalletIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <rect x="1.5" y="4" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.5 6.5h13" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="11.5" cy="9.5" r="1" fill="currentColor" />
    </svg>
  )
}

function BrainIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 3v10M4 6h8M4 10h8" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    </svg>
  )
}

function PickaxeIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 4c2.5-2 6-2.7 9.5-1.2M14 2c-2 2.5-2.7 6-1.2 9.5M4.5 6.5 11 13a1.2 1.2 0 0 0 1.7-1.7L6.2 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CloudIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M4.5 12h7a2.5 2.5 0 0 0 .3-4.98A4 4 0 0 0 4.2 8.1 2.5 2.5 0 0 0 4.5 12Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
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

const features = [
  {
    icon: ReceiptIcon,
    tone: 'text-[#e8a765] border-[#e8a765]/30 bg-[#e8a765]/10',
    surface: 'bg-[rgba(33,48,44,0.72)]',
    title: 'Predictable Costs',
    description: 'Fixed hosting and energy rates with no hidden fees. Know exactly what you pay, every month.',
  },
  {
    icon: TrendIcon,
    tone: 'text-[#2dd4bf] border-[#2dd4bf]/30 bg-[#2dd4bf]/10',
    surface: 'bg-[rgba(0,58,57,0.62)]',
    title: 'Profitable investment',
    description: 'Bulk purchasing power means industry-low hardware and energy costs — maximizing your mining ROI.',
  },
  {
    icon: ShieldIcon,
    tone: 'text-[#2dd4bf] border-[#2dd4bf]/30 bg-[#2dd4bf]/10',
    surface: 'bg-[rgba(0,68,64,0.72)]',
    title: 'Specialist-Led Operations',
    description: 'Our certified blockchain engineers keep every miner running at peak performance, 24/7.',
  },
  {
    icon: WalletIcon,
    tone: 'text-[#e8a765] border-[#e8a765]/30 bg-[#e8a765]/10',
    surface: 'bg-[rgba(33,48,44,0.72)]',
    title: 'Direct Payouts',
    description: 'Crypto goes straight to your wallet — zero commissions, zero middlemen. Every coin is yours.',
  },
]

const verticals = [
  {
    icon: BrainIcon,
    tone: 'text-[#e8a765] border-[#e8a765]/30',
    title: 'AI & Machine Learning',
    subtitle: 'GPU clusters for training and inference',
  },
  {
    icon: PickaxeIcon,
    tone: 'text-[#2dd4bf] border-[#2dd4bf]/30',
    title: 'Crypto Mining',
    subtitle: 'Professional mining with solar power',
  },
  {
    icon: CloudIcon,
    tone: 'text-[#60a5fa] border-[#60a5fa]/30',
    title: 'Cloud Computing',
    subtitle: 'Enterprise hosting worldwide',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-x-0 top-0 h-[310px] overflow-hidden sm:h-[200px] lg:h-[clamp(300px,22vw,420px)]" aria-hidden="true">
        <img
          src="/figma/stats/earth-horizon.svg"
          alt=""
          className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1460px] max-w-none -translate-x-1/2 opacity-80 lg:h-[clamp(600px,44vw,850px)] lg:w-[155vw]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-[284px] bottom-0 lg:top-[clamp(420px,31vw,590px)]"
        style={{
          background:
            'linear-gradient(180deg, #000 0%, rgba(0,0,0,0) 18%), linear-gradient(105deg, #3a2118 0%, #17110d 28%, #030a09 52%, #003d39 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-[1080px] flex-col items-center gap-3 px-5 pt-[320px] pb-5 text-center sm:w-[81%] sm:px-0 sm:pt-[200px] lg:pt-[clamp(320px,24vw,450px)]">
        <Reveal>
          <div className="flex flex-col items-center gap-2">
            <TickMark />
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(45,212,191,0.3)] bg-[rgba(20,60,55,0.4)] px-3 py-1 text-[10px] font-bold tracking-[0.08em] text-[#2dd4bf] uppercase">
              + Why Choose Us
            </span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-[760px] text-[28px] leading-[1.12] font-extrabold text-white sm:max-w-[clamp(400px,55.6vw,760px)] sm:text-[clamp(21px,2.93vw,40px)]">
            The infrastructure partner for{' '}
            <span style={{ backgroundImage: GRADIENT }} className="bg-clip-text text-transparent">
              modern computing power
            </span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <TickMark />
        </Reveal>
      </div>

      <div className="relative mx-auto grid w-full max-w-[1080px] grid-cols-1 items-center gap-10 px-5 pb-20 sm:w-[81%] sm:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] sm:gap-[clamp(36px,3.5vw,48px)] sm:px-0 sm:pb-[clamp(44px,5.85vw,80px)]">
        <Reveal className="flex justify-center sm:justify-start">
          <img
            src="/figma/resilience/portrait.png"
            alt="Qubite compute infrastructure"
            className="h-auto w-full max-w-[440px] object-contain drop-shadow-[0_0_46px_rgba(0,229,255,0.18)]"
          />
        </Reveal>

        <div className="flex flex-col gap-5 text-left sm:gap-[clamp(14px,1.46vw,20px)]">
          <Reveal>
            <p className="text-sm leading-relaxed text-text-dim sm:text-[clamp(8px,1.03vw,14px)]">
              Qubite enables companies, investors and operators reliable access to high-performance
              compute infrastructure — predictable, legally secure and scalable.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-[clamp(10px,1.17vw,16px)]">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <Reveal key={feature.title} delay={80 + i * 80}>
                  <div className={`flex h-full min-h-[168px] flex-col gap-3 rounded-xl border border-white/6 p-5 sm:min-h-[clamp(99px,12.3vw,168px)] sm:gap-[clamp(7px,0.88vw,12px)] sm:p-[clamp(10px,1.46vw,20px)] ${feature.surface}`}>
                    <span className={`flex size-8 items-center justify-center rounded-lg border sm:size-[clamp(22px,2.34vw,32px)] ${feature.tone}`}>
                      <Icon className="size-4 sm:size-[clamp(11px,1.17vw,16px)]" />
                    </span>
                    <h3 className="text-sm font-bold text-white sm:text-[clamp(10px,1.03vw,14px)]">{feature.title}</h3>
                    <p className="text-xs leading-relaxed text-text-dim sm:text-[clamp(7px,0.88vw,12px)]">{feature.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={420}>
            <div className="grid grid-cols-1 gap-4 pt-1 sm:grid-cols-3 sm:gap-[clamp(8px,0.88vw,12px)] sm:pt-0">
              {verticals.map((vertical) => {
                const Icon = vertical.icon
                return (
                  <div key={vertical.title} className="flex items-center gap-2.5 sm:gap-[clamp(5px,0.73vw,10px)]">
                    <span className={`flex size-7 shrink-0 items-center justify-center rounded-full border sm:size-[clamp(16px,2.05vw,28px)] ${vertical.tone}`}>
                      <Icon className="size-3.5 sm:size-[clamp(8px,1.03vw,14px)]" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[11px] font-semibold text-white sm:text-[clamp(7px,0.8vw,11px)]">{vertical.title}</span>
                      <span className="text-[9px] leading-snug text-text-dim sm:text-[clamp(5px,0.66vw,9px)]">{vertical.subtitle}</span>
                    </span>
                  </div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={500} className="flex justify-center">
            <button
              type="button"
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(232,167,101,0.65)] bg-[#0c0a08] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#151210] active:scale-95 sm:mt-[clamp(7px,0.73vw,10px)] sm:gap-[clamp(4px,0.58vw,8px)] sm:px-[clamp(14px,1.76vw,24px)] sm:py-[clamp(7px,0.88vw,12px)] sm:text-[clamp(8px,1.03vw,14px)]"
              style={{ boxShadow: '0 0 30px rgba(232,167,101,0.25)' }}
            >
              <HeadsetIcon className="size-4 text-[#e8a765]" />
              Talk to human
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
