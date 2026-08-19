import { AboutHero } from '@/features/about/components/AboutHero'
import { ContactSection } from '@/features/about/components/ContactSection'
import { LocationsSection } from '@/features/about/components/LocationsSection'
import { TeamGrid } from '@/features/about/components/TeamGrid'

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <TeamGrid />
      <LocationsSection />
      <ContactSection />
    </>
  )
}
