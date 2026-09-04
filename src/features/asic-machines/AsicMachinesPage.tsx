import { AsicHero } from '@/features/asic-machines/components/AsicHero'
import { AsicRevenueCalculator } from '@/features/asic-machines/components/AsicRevenueCalculator'
import { ProductsSection } from '@/features/asic-machines/components/ProductsSection'

export function AsicMachinesPage() {
  return (
    <>
      <AsicHero />
      <ProductsSection />
      <AsicRevenueCalculator />
    </>
  )
}
