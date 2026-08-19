import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'

interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
  email?: string
}

const team: TeamMember[] = [
  {
    name: 'Tajo Adler',
    role: 'Co-Founder & Authorized Representative',
    bio: 'As an entrepreneur, Tajo combines strategic leadership with sustainable investments in future technologies.',
    photo: '/team/tajo-adler.jpg',
    email: 'tajo.adler@qubite-international.com',
  },
  {
    name: 'Melina Kießlich',
    role: 'Co-Founder & CEO',
    bio: "As co-founder and CEO, Melina is responsible for qubite's strategic direction and operational leadership.",
    photo: '/team/melina-kiesslich.jpg',
    email: 'melina.kiesslich@qubite-international.com',
  },
  {
    name: 'Rolf Maier',
    role: 'Partner',
    bio: "An official partner of qubite International since 2026, supporting the company's strategic growth and business development.",
    photo: '/team/rolf-maier.jpg',
    email: 'rolf.maier@qubite-international.com',
  },
  {
    name: 'Diana Hanibauer',
    role: 'Chief Operating Officer',
    bio: "As COO, Diana oversees qubite's day-to-day operations and ensures smooth processes across every department.",
    photo: '/team/diana-hanibauer.jpg',
  },
  {
    name: 'Adina Sevelius',
    role: 'Senior Legal Advisor',
    bio: 'Adina advises qubite on all legal matters and ensures compliance with international regulations.',
    photo: '/team/adina-sevelius.jpg',
    email: 'adina.sevelius@qubite-international.com',
  },
  {
    name: 'Malte Findeisen',
    role: 'Strategic Partner',
    bio: 'Malte supports qubite in building international partnerships and leads the B2B business unit.',
    photo: '/team/malte-findeisen.jpg',
    email: 'malte.findeisen@qubite-international.com',
  },
  {
    name: 'Mischa Guidon',
    role: 'External Controller',
    bio: "As external financial strategist, Mischa oversees qubite's financial planning, capital structure, and liquidity, and advises leadership on core financial strategy.",
    photo: '/team/mischa-guidon.jpg',
    email: 'mischa.guidon@qubite-international.com',
  },
  {
    name: 'Christoph Wolf',
    role: 'Head of KYC/AML & Client Relations — Switzerland',
    bio: "Christoph leads client relations in Switzerland and oversees qubite International's internal KYC/AML compliance framework.",
    photo: '/team/christoph-wolf.jpg',
    email: 'chris.wolf@qubite-international.com',
  },
  {
    name: 'Mayur Mukherjee',
    role: 'Head of Blockchain / Web3',
    bio: "Mayur leads qubite International's entire crypto and technology division, bringing 23 years of experience.",
    photo: '/team/mayur-mukherjee.jpg',
    email: 'mayur.mukherjee@qubite-international.com',
  },
  {
    name: 'Alan Szepieniec',
    role: 'Core Developer — Neptune Cash',
    bio: 'The architect of Neptune, Alan is a renowned cryptographer specializing in zero-knowledge proofs and post-quantum cryptography.',
    photo: '/team/alan-szepieniec.jpg',
    email: 'alan.szepieniec@qubite-international.com',
  },
  {
    name: 'Thorkil Schmidiger',
    role: 'Core Developer — Neptune Cash',
    bio: 'Thorkil is the lead software engineer behind the Neptune blockchain implementation, advancing the protocol alongside Alan.',
    photo: '/team/thorkil-schmidiger.jpg',
    email: 'thorkil.schmidiger@qubite-international.com',
  },
  {
    name: 'Disa Sevelius',
    role: 'Head of Sales & Marketing — Middle East',
    bio: "Disa leads qubite International's sales and marketing across the Middle East, driving regional growth, partnerships, and brand positioning.",
    photo: '/team/disa-sevelius.jpg',
    email: 'disa.sevelius@qubite-international.com',
  },
  {
    name: 'Hashifali Kojanikkanakath',
    role: 'Account Manager / Sales — Middle East',
    bio: 'Hashifali brings 6 years of sales experience and manages client support across the Middle East.',
    photo: '/team/hashifali-kojanikkanakath.jpg',
    email: 'hashif@qubite-international.com',
  },
  {
    name: 'Peter Kreth',
    role: 'Head of Client Relations — Italy',
    bio: 'Peter leads client relations across Italy and has supported the Neptune ecosystem and its community since the project began.',
    photo: '/team/peter-kreth.jpg',
    email: 'peter.kreth@qubite-international.com',
  },
  {
    name: 'Mohammed Swalih',
    role: 'Operations Manager',
    bio: "Mohammed leads mining operations across all of qubite's sites, managing the development, construction, and expansion of new infrastructure.",
    photo: '/team/mohammed-swalih.jpg',
    email: 'mohammed.swalih@qubite-international.com',
  },
  {
    name: 'Lutz Stratmann',
    role: 'External Advisor — Data Protection & Compliance',
    bio: 'Former Minister of Science and Culture, Lutz advises qubite externally on sustainability, data protection, and compliance.',
    photo: '/team/lutz-stratmann.jpg',
  },
]

function MailIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="m2 4 6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function TeamGrid() {
  return (
    <section className="relative bg-bg py-24">
      <Container className="relative flex flex-col items-center gap-8">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-[28px]">Our Team</h2>
          <p className="mt-2 text-sm text-text-subtle">
            Experienced operators across hardware, hosting, energy, and compliance
          </p>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={(i % 4) * 80} className="h-full">
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-white/8 bg-white/3 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="size-20 rounded-full border border-white/10 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold text-white">{member.name}</h3>
                  <p className="text-[11px] font-semibold tracking-wide text-accent-bronze-tint uppercase">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-text-dim">{member.bio}</p>
                {member.email ? (
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="mt-auto flex size-8 items-center justify-center rounded-full border border-white/10 text-text-subtle transition-all duration-200 hover:border-white/30 hover:text-white"
                  >
                    <MailIcon />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
