import { CtaBanner } from '@/features/home/components/CtaBanner'
import { EcosystemCategories } from '@/features/home/components/EcosystemCategories'
import { GlobalInfrastructure } from '@/features/home/components/GlobalInfrastructure'
import { Hero } from '@/features/home/components/Hero'
import { MiningProcess } from '@/features/home/components/MiningProcess'
import { StabilityGrid } from '@/features/home/components/StabilityGrid'
import { StabilityHighlight } from '@/features/home/components/StabilityHighlight'
import { WhyChooseUs } from '@/features/home/components/WhyChooseUs'

export function HomePage() {
  return (
    <>
      <Hero />
      <MiningProcess />
      <WhyChooseUs />
      <EcosystemCategories />
      <StabilityGrid />
      <StabilityHighlight />
      <GlobalInfrastructure />
      <CtaBanner />
    </>
  )
}
