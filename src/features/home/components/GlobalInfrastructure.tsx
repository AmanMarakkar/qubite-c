import { useTranslation } from 'react-i18next'
import { Reveal } from '@/components/Reveal'

export function GlobalInfrastructure() {
  const { t } = useTranslation()
  const locations = t('home.globalInfrastructure.locations', { returnObjects: true }) as { title: string; place: string }[]

  return (
    <section className="global-infrastructure-section">
      <video
        src="/figma/global/global-mining-animated.mp4"
        className="global-infrastructure-map"
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="global-infrastructure-blur" aria-hidden="true" />
      <div className="global-infrastructure-overlay" aria-hidden="true" />

      <div className="global-infrastructure-content">
        <div className="global-infrastructure-heading">
          <Reveal>
            <span className="global-infrastructure-badge">
              <span />
              {t('home.globalInfrastructure.badge')}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2>{t('home.globalInfrastructure.heading')}</h2>
          </Reveal>

          <Reveal delay={160}>
            <p>{t('home.globalInfrastructure.paragraph')}</p>
          </Reveal>
        </div>

        <Reveal delay={220} className="global-infrastructure-filter-wrap">
          <span className="global-infrastructure-filter">{t('home.globalInfrastructure.allLocations')}</span>
        </Reveal>

        <div className="global-infrastructure-cards">
          {locations.map((location, index) => (
            <Reveal key={location.title} delay={280 + index * 70}>
              <article className="global-infrastructure-card">
                <div className="global-infrastructure-card-glow" aria-hidden="true" />

                <div className="global-infrastructure-status">
                  <span>{t('home.globalInfrastructure.operational')}</span>
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
