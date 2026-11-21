import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaLeaf, FaCertificate } from 'react-icons/fa'
import { PageHero } from '@/components/PageHero'
import { ABOUT_CONTENT, SUSTAINABILITY_CARDS, CERTIFICATES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sustainability',
  description:
    'QRS Contracting commitment to HSE, sustainable practices, certifications and responsible infrastructure delivery.',
}

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        title="Sustainability"
        description="Environmentally responsible infrastructure solutions with uncompromising health, safety and quality standards."
        image="/upload/1721543399_FBq71JZbP8eNvdRAw1GW8lUKQ.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-max grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-h2 text-navy uppercase">Our Commitment</h2>
            <div className="gold-accent mt-3 mb-5" />
            <p className="text-navy/80 leading-relaxed mb-4">{ABOUT_CONTENT.quality.description}</p>
            <p className="text-navy/80 leading-relaxed mb-4">{ABOUT_CONTENT.hse}</p>
            <p className="text-navy/80 leading-relaxed">{ABOUT_CONTENT.valueEngineering}</p>
          </div>
          <div className="relative h-80 md:h-[420px] rounded-lg overflow-hidden shadow-soft">
            <Image
              src="/upload/1721543348_4wGbKOiMNnxGiAKRs6XcWxr6l.jpg"
              alt="Sustainable practices"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand">
        <div className="container-max">
          <h2 className="text-h2 text-navy text-center uppercase">Sustainability Hub</h2>
          <div className="gold-accent mx-auto mt-3 mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SUSTAINABILITY_CARDS.map((card) => (
              <article
                key={card.id}
                className="bg-white rounded-lg overflow-hidden shadow-soft border border-navy/5"
              >
                <div className="relative h-44">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-navy">{card.title}</h3>
                  {card.description && (
                    <p className="text-navy/70 text-sm mt-2 line-clamp-3">{card.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-2">
            <FaCertificate className="text-gold text-2xl" />
            <h2 className="text-h2 text-navy uppercase">Certificates</h2>
          </div>
          <div className="gold-accent mb-8" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATES.flatMap((c) =>
              c.images.map((img) => (
                <div
                  key={img}
                  className="bg-sand rounded-lg p-4 border border-navy/10 flex items-center justify-center min-h-[220px]"
                >
                  <Image
                    src={img}
                    alt={c.title}
                    width={360}
                    height={260}
                    className="max-h-52 w-auto object-contain"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container-max px-4 md:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="flex items-start gap-4">
            <FaLeaf className="text-gold text-3xl shrink-0" />
            <div>
              <p className="font-heading font-bold text-xl uppercase">Build Responsibly With QRS</p>
              <p className="text-white/75 text-sm mt-1">
                Partner with a contractor focused on safety, quality and sustainable infrastructure.
              </p>
            </div>
          </div>
          <Link href="/contact" className="btn-gold">
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  )
}
