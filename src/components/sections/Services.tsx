import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaLeaf,
  FaRecycle,
  FaTint,
  FaTachometerAlt,
  FaAmbulance,
  FaMicrochip,
  FaHardHat,
  FaArrowRight,
} from 'react-icons/fa'
import { SERVICES } from '@/lib/constants'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const ICONS: Record<string, ReactNode> = {
  leaf: <FaLeaf />,
  recycle: <FaRecycle />,
  faucet: <FaTint />,
  gauge: <FaTachometerAlt />,
  siren: <FaAmbulance />,
  circuit: <FaMicrochip />,
  hardhat: <FaHardHat />,
}

export function Services() {
  const homeServices = SERVICES.slice(0, 6)

  return (
    <section className="section-padding bg-sand" id="services">
      <div className="container-max">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-gold font-heading font-bold tracking-[0.2em] text-xs uppercase mb-2">
                What We Do
              </p>
              <h2 className="text-h2 text-navy uppercase">Our Services</h2>
              <div className="gold-accent mt-3" />
            </div>
            <p className="text-navy/70 max-w-md text-sm md:text-base">
              End-to-end infrastructure solutions for irrigation, water networks, drainage, emergency
              repairs and SCADA systems — delivered to Dubai Municipality and DEWA standards.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServices.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.06}>
              <Link
                href={`/services#${service.slug}`}
                className="group block bg-white overflow-hidden shadow-soft border border-navy/5 hover:border-gold/50 transition-smooth h-full"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 w-11 h-11 bg-gold text-navy inline-flex items-center justify-center text-lg shadow">
                    {ICONS[service.icon] || <FaHardHat />}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-navy text-lg leading-snug group-hover:text-gold transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-navy/65 text-sm mt-2 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-xs font-heading font-bold uppercase tracking-wider text-navy group-hover:text-gold">
                    Learn More <FaArrowRight className="text-[10px]" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-navy !rounded-sm uppercase tracking-wider text-xs">
              View All Services →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
