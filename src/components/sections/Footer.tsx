import Image from 'next/image'
import Link from 'next/link'
import {
  FaEnvelope,
  FaHeadset,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFileAlt,
} from 'react-icons/fa'
import { COMPANY_INFO, FOOTER_CONTENT, NAV_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer>
      {/* CTA bar */}
      <div className="bg-navy">
        <div className="container-max px-4 md:px-6 lg:px-8 py-7 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6">
          <div className="flex items-start gap-3 sm:gap-4 text-white">
            <FaHeadset className="text-gold text-2xl sm:text-3xl mt-1 shrink-0" />
            <div>
              <p className="font-heading font-bold text-base sm:text-lg md:text-xl uppercase">
                Need Infrastructure Solutions?
              </p>
              <p className="text-white/80 text-sm md:text-base mt-1">
                Contact QRS Contracting L.L.C. for your next project or emergency support.
              </p>
            </div>
          </div>
          <Link href="/contact" className="btn-gold shrink-0 w-full sm:w-auto text-center">
            Get in Touch →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-navy-dark text-white">
        <div className="container-max px-4 md:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaFileAlt className="text-gold text-2xl" />
              <h3 className="font-heading font-bold text-lg">Company Profile</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              {FOOTER_CONTENT.aboutText.slice(0, 160)}…
            </p>
            <Link href="/company-profile" className="btn-gold !text-xs">
              Download Company Profile
            </Link>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaHeadset className="text-gold text-2xl" />
              <h3 className="font-heading font-bold text-lg">24/7 Emergency</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Rapid response for water, irrigation and utility network emergencies across Dubai & UAE.
            </p>
            <Link href="/contact" className="btn-gold !text-xs">
              Contact Us Now
            </Link>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-gold mt-1 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex gap-3">
                <FaPhoneAlt className="text-gold mt-1 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:text-gold">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <FaEnvelope className="text-gold mt-1 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="font-heading font-semibold text-sm mb-2 text-gold">Quick Links</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-white/70">
                {NAV_LINKS.slice(0, 6).map((l) => (
                  <Link key={l.href} href={l.href} className="hover:text-gold">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Find Us</h3>
            <div className="rounded overflow-hidden border border-white/10 h-48 bg-navy">
              <iframe
                title="QRS Contracting Location"
                src={COMPANY_INFO.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-max px-4 md:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white/60 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <Image
                src={COMPANY_INFO.footerLogo}
                alt={COMPANY_INFO.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <span>{FOOTER_CONTENT.copyright}</span>
            </div>
            <span>{COMPANY_INFO.website}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
