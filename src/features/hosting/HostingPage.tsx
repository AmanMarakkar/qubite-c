import { HostingCta } from '@/features/hosting/components/HostingCta'
import { HostingFaq } from '@/features/hosting/components/HostingFaq'
import { HostingHero } from '@/features/hosting/components/HostingHero'
import { PricingPlans } from '@/features/hosting/components/PricingPlans'
import { WhatsIncluded } from '@/features/hosting/components/WhatsIncluded'

export function HostingPage() {
  return (
    <>
      <HostingHero />
      <PricingPlans />
      <WhatsIncluded />
      <HostingFaq />
      <HostingCta />
    </>
  )
}
