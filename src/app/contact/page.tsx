import type { Metadata } from 'next'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { PageHero } from '@/components/PageHero'
import { ContactForm } from '@/components/ContactForm'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact QRS Contracting L.L.C. for infrastructure projects and 24/7 emergency support.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="You will be answered — reach QRS Contracting for project enquiries or emergency support."
        image="/upload/1.jpeg"
        imagePosition="center 55%"
      />

      <section className="section-padding bg-white">
        <div className="container-max grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <h2 className="text-h2 text-navy uppercase">Get in Touch</h2>
            <div className="gold-accent mt-3 mb-6" />
            <p className="text-navy/80 mb-8">
              Tell us about your infrastructure project or emergency requirement and our team will
              respond promptly.
            </p>

            <ul className="space-y-5 mb-8">
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded bg-navy text-gold inline-flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="font-heading font-bold text-navy text-sm">Address</p>
                  <p className="text-navy/70 text-sm mt-1">{COMPANY_INFO.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded bg-navy text-gold inline-flex items-center justify-center shrink-0">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="font-heading font-bold text-navy text-sm">Phone</p>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                    className="text-navy/70 text-sm mt-1 hover:text-gold block"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded bg-navy text-gold inline-flex items-center justify-center shrink-0">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="font-heading font-bold text-navy text-sm">Email</p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-navy/70 text-sm mt-1 hover:text-gold block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded bg-navy text-gold inline-flex items-center justify-center shrink-0">
                  <FaWhatsapp />
                </span>
                <div>
                  <p className="font-heading font-bold text-navy text-sm">WhatsApp</p>
                  <a
                    href={COMPANY_INFO.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-navy/70 text-sm mt-1 hover:text-gold block"
                  >
                    +971 52 629 7501
                  </a>
                </div>
              </li>
            </ul>

            <div className="rounded-lg overflow-hidden border border-navy/10 h-56">
              <iframe
                title="QRS map"
                src={COMPANY_INFO.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-sand rounded-lg p-6 md:p-8 border border-navy/5 shadow-soft">
            <h3 className="font-heading font-bold text-navy text-xl mb-2">Send a Message</h3>
            <p className="text-navy/60 text-sm mb-6">We typically respond within one business day.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
