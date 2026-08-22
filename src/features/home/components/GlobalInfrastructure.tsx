import { Reveal } from '@/components/Reveal'

const locations = [
  { title: 'UAE', place: 'Dubai' },
  { title: 'Germany', place: 'Europe' },
  { title: 'Switzerland', place: 'Zurich' },
]

export function GlobalInfrastructure() {
  return (
    <section className="global-infrastructure-section">
      <img
        src="/figma/global/network-bg.png"
        alt=""
        className="global-infrastructure-map"
        aria-hidden="true"
      />
      <div className="global-infrastructure-overlay" aria-hidden="true" />

      <div className="global-infrastructure-content">
        <div className="global-infrastructure-heading">
          <Reveal>
            <span className="global-infrastructure-badge">
              <span />
              Ecosystem Categories
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2>Global Mining Infrastructure</h2>
          </Reveal>

          <Reveal delay={160}>
            <p>
              Strategic deployment across six countries, with continuous monitoring and industry-
              <br className="hidden sm:block" />leading uptime.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220} className="global-infrastructure-filter-wrap">
          <span className="global-infrastructure-filter">All Locations</span>
        </Reveal>

        <div className="global-infrastructure-cards">
          {locations.map((location, index) => (
            <Reveal key={location.title} delay={280 + index * 70}>
              <article className="global-infrastructure-card">
                <div className="global-infrastructure-card-glow" aria-hidden="true" />

                <div className="global-infrastructure-status">
                  <span>Operational</span>
                  <i />
                </div>

                <div className="global-infrastructure-location">
                  <h3>{location.title}</h3>
                  <span>{location.place}</span>
                </div>

                <span className="global-infrastructure-divider" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
