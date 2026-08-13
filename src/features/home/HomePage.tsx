import { CtaBanner } from '@/features/home/components/CtaBanner'
import { DeploymentFlow } from '@/features/home/components/DeploymentFlow'
import { EcosystemCategories } from '@/features/home/components/EcosystemCategories'
import { GlobalInfrastructure } from '@/features/home/components/GlobalInfrastructure'
import { Hero } from '@/features/home/components/Hero'
import { StabilityGrid } from '@/features/home/components/StabilityGrid'
import { StabilityHighlight } from '@/features/home/components/StabilityHighlight'
import { StatsBar } from '@/features/home/components/StatsBar'

export function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <DeploymentFlow />
      <EcosystemCategories />
      <StabilityGrid />
      <StabilityHighlight />
      <GlobalInfrastructure />
      <CtaBanner />
    </>
  )
}
