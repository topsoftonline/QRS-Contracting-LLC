import { Hero } from '@/components/sections/Hero'
import { EmergencyStrip } from '@/components/sections/EmergencyStrip'
import { HomeAbout } from '@/components/sections/HomeAbout'
import { Services } from '@/components/sections/Services'
import { WhyChoose } from '@/components/sections/WhyChoose'
import { Portfolio } from '@/components/sections/Portfolio'
import { TrustBar } from '@/components/sections/TrustBar'
import { HomeHighlights } from '@/components/sections/HomeHighlights'

export default function Home() {
  return (
    <>
      <Hero />
      <EmergencyStrip />
      <HomeAbout />
      <Services />
      <WhyChoose />
      <Portfolio />
      <TrustBar />
      <HomeHighlights />
    </>
  )
}
