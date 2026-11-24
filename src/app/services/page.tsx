import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaLeaf,
  FaRecycle,
  FaTint,
  FaTachometerAlt,
  FaAmbulance,
  FaMicrochip,
  FaHardHat,
} from 'react-icons/fa'
import { PageHero } from '@/components/PageHero'
import { SERVICES, ABOUT_CONTENT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Irrigation, recycled water, potable water, sewerage & drainage, emergency repairs, SCADA and civil infrastructure works.',
}

const ICONS: Record<string, React.ReactNode> = {
  leaf: <FaLeaf />,
  recycle: <FaRecycle />,
  faucet: <FaTint />,
  gauge: <FaTachometerAlt />,
  siren: <FaAmbulance />,
  circuit: <FaMicrochip />,
  hardhat: <FaHardHat />,
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description={ABOUT_CONTENT.whatWeDo}
        image="/upload/1739271906_tMS9e7fBt9JUSdRFSugLThxTN.png"
        imagePosition="center 72%"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mb-10">
            <h2 className="text-h2 text-navy uppercase">Infrastructure Expertise</h2>
            <div className="gold-accent mt-3 mb-4" />
            <p className="text-navy/80 leading-relaxed">{ABOUT_CONTENT.whatWeDo}</p>
          </div>

          <div className="space-y-8">
            {SERVICES.map((service, i) => (
              <article
                key={service.id}
                id={service.slug}
                className={`grid lg:grid-cols-2 gap-5 lg:gap-10 items-center scroll-mt-28 sm:scroll-mt-32 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative h-52 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-soft">
                  <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="border border-navy/10 rounded-lg p-5 sm:p-6 md:p-8 h-full flex flex-col justify-center">
                  <span className="text-gold text-2xl sm:text-3xl mb-3">
                    {ICONS[service.icon] || <FaHardHat />}
                  </span>
                  <h3 className="font-heading font-bold text-navy text-xl sm:text-2xl">{service.title}</h3>
                  <div className="gold-accent mt-3 mb-4" />
                  <p className="text-navy/75 leading-relaxed">{service.description}</p>
                  <Link href="/contact" className="btn-navy mt-6 w-fit">
                    Request This Service →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
