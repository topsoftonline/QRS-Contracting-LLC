import Image from 'next/image'
import { FaCertificate, FaLeaf, FaShieldAlt } from 'react-icons/fa'
import { CERTIFICATES } from '@/lib/constants'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const ISO = [
  {
    icon: FaCertificate,
    code: 'ISO 9001:2015',
    label: 'Quality Management',
  },
  {
    icon: FaLeaf,
    code: 'ISO 14001',
    label: 'Environmental Management',
  },
  {
    icon: FaShieldAlt,
    code: 'ISO 45001',
    label: 'Occupational Health & Safety',
  },
]

export function TrustBar() {
  const docs = CERTIFICATES.flatMap((c) => c.images || []).slice(0, 6)

  return (
    <section className="section-padding bg-sand border-y border-navy/5">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <p className="text-gold font-heading font-bold tracking-[0.2em] text-xs uppercase mb-2">
              Credentials
            </p>
            <h2 className="text-h2 text-navy uppercase">Certifications & Approvals</h2>
            <div className="gold-accent mx-auto mt-3 mb-4" />
            <p className="text-navy/70 text-sm md:text-base">
              Prequalification-ready proof — quality, environment and safety credentials consultants
              and main contractors expect to see.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          {ISO.map((item, i) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.code} delay={i * 0.06}>
                <div className="bg-white border border-navy/10 shadow-soft p-5 md:p-6 text-center h-full hover:border-gold/50 transition-smooth">
                  <span className="w-12 h-12 rounded-full border border-gold text-gold inline-flex items-center justify-center mb-3">
                    <Icon />
                  </span>
                  <p className="font-heading font-extrabold text-navy text-base md:text-lg">
                    {item.code}
                  </p>
                  <p className="text-navy/65 text-sm mt-1">{item.label}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {docs.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {docs.map((src, i) => (
              <ScrollReveal key={src} delay={i * 0.04}>
                <div className="relative bg-white border border-navy/10 h-28 sm:h-36 overflow-hidden shadow-soft">
                  <Image
                    src={src}
                    alt={`QRS certificate ${i + 1}`}
                    fill
                    className="object-contain p-2"
                    sizes="180px"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
