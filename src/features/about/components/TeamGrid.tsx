import { useTranslation } from 'react-i18next'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'

interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
  email?: string
}

// Photos and emails aren't translated, so they stay keyed by index against
// the localized name/role/bio coming from i18n.
const teamMeta: { photo: string; email?: string }[] = [
  { photo: '/team/tajo-adler.jpg', email: 'tajo.adler@qubite-international.com' },
  { photo: '/team/melina-kiesslich.jpg', email: 'melina.kiesslich@qubite-international.com' },
  { photo: '/team/rolf-maier.jpg', email: 'rolf.maier@qubite-international.com' },
  { photo: '/team/diana-hanibauer.jpg' },
  { photo: '/team/adina-sevelius.jpg', email: 'adina.sevelius@qubite-international.com' },
  { photo: '/team/malte-findeisen.jpg', email: 'malte.findeisen@qubite-international.com' },
  { photo: '/team/mischa-guidon.jpg', email: 'mischa.guidon@qubite-international.com' },
  { photo: '/team/christoph-wolf.jpg', email: 'chris.wolf@qubite-international.com' },
  { photo: '/team/mayur-mukherjee.jpg', email: 'mayur.mukherjee@qubite-international.com' },
  { photo: '/team/alan-szepieniec.jpg', email: 'alan.szepieniec@qubite-international.com' },
  { photo: '/team/thorkil-schmidiger.jpg', email: 'thorkil.schmidiger@qubite-international.com' },
  { photo: '/team/disa-sevelius.jpg', email: 'disa.sevelius@qubite-international.com' },
  { photo: '/team/hashifali-kojanikkanakath.jpg', email: 'hashif@qubite-international.com' },
  { photo: '/team/peter-kreth.jpg', email: 'peter.kreth@qubite-international.com' },
  { photo: '/team/mohammed-swalih.jpg', email: 'mohammed.swalih@qubite-international.com' },
  { photo: '/team/lutz-stratmann.jpg' },
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
  const { t } = useTranslation()
  const team: TeamMember[] = (
    t('about.team.members', { returnObjects: true }) as Omit<TeamMember, 'photo' | 'email'>[]
  ).map((member, i) => ({ ...member, ...teamMeta[i] }))

  return (
    <section className="relative bg-bg py-24">
      <Container className="relative flex flex-col items-center gap-8">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-[28px]">{t('about.team.heading')}</h2>
          <p className="mt-2 text-sm text-text-subtle">{t('about.team.paragraph')}</p>
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
