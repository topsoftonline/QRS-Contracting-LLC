import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaDownload, FaCheckCircle } from 'react-icons/fa'
import { PageHero } from '@/components/PageHero'
import { ABOUT_CONTENT, COMPANY_INFO, SERVICES, STATS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Company Profile',
  description: 'Download and explore the QRS Contracting L.L.C. company profile and capabilities.',
}

export default function CompanyProfilePage() {
  return (
    <>
      <PageHero
        title="Company Profile"
        description="Learn more about QRS Contracting L.L.C. — our capabilities, values and infrastructure expertise across the UAE."
        image="/upload/4.jpeg"
        imagePosition="center 45%"
      />

      <section className="section-padding bg-white">
        <div className="container-max grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-h2 text-navy uppercase">QRS Contracting L.L.C.</h2>
            <div className="gold-accent mt-3 mb-5" />
            <p className="text-navy/80 leading-relaxed mb-4">{ABOUT_CONTENT.description}</p>
            <p className="text-navy/80 leading-relaxed mb-6">{ABOUT_CONTENT.whatWeDo}</p>

            <a
              href={COMPANY_INFO.logo}
              download
              className="btn-gold inline-flex"
            >
              <FaDownload />
              Download Company Profile
            </a>
            <p className="text-xs text-navy/50 mt-3">
              For the latest PDF brochure, contact us at {COMPANY_INFO.email}
            </p>
          </div>

          <div className="relative h-80 md:h-[440px] rounded-lg overflow-hidden shadow-soft">
            <Image
              src={COMPANY_INFO.homeAboutImage}
              alt="QRS company"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand">
        <div className="container-max">
          <h2 className="text-h2 text-navy text-center uppercase mb-3">At a Glance</h2>
          <div className="gold-accent mx-auto mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white rounded-lg p-6 text-center shadow-soft">
                <p className="font-heading font-extrabold text-3xl text-gold">{s.value}</p>
                <p className="text-navy/70 text-sm mt-2">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-soft">
              <h3 className="font-heading font-bold text-navy text-xl mb-4">Core Services</h3>
              <ul className="space-y-3">
                {SERVICES.map((s) => (
                  <li key={s.id} className="flex gap-3 text-navy/80 text-sm">
                    <FaCheckCircle className="text-gold mt-0.5 shrink-0" />
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-soft">
              <h3 className="font-heading font-bold text-navy text-xl mb-4">Why Partner With Us</h3>
              <ul className="space-y-3">
                {ABOUT_CONTENT.pillars.map((p) => (
                  <li key={p.title}>
                    <p className="font-heading font-bold text-navy">{p.title}</p>
                    <p className="text-navy/70 text-sm mt-1">{p.description}</p>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-navy mt-6 inline-flex">
                Contact Our Team →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
