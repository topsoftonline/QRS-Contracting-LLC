import Link from 'next/link'
import { FaBolt } from 'react-icons/fa'
import { COMPANY_INFO } from '@/lib/constants'

export function EmergencyStrip() {
  return (
    <section className="bg-gold">
      <div className="container-max px-4 md:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
        <div className="flex items-start sm:items-center gap-3 text-navy">
          <FaBolt className="text-xl mt-0.5 sm:mt-0 shrink-0" />
          <div>
            <p className="font-heading font-extrabold uppercase text-sm sm:text-base tracking-wide">
              24/7 Emergency Network Support
            </p>
            <p className="text-navy/80 text-xs sm:text-sm mt-0.5">
              Pipeline shutdowns, valve failures &amp; urgent utility repairs across Dubai &amp; UAE.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center bg-navy text-white font-heading font-bold uppercase text-[11px] tracking-wider px-4 py-2.5 rounded-sm hover:bg-navy-light transition-smooth flex-1 sm:flex-none"
          >
            Call {COMPANY_INFO.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-navy text-navy font-heading font-bold uppercase text-[11px] tracking-wider px-4 py-2 rounded-sm hover:bg-navy hover:text-white transition-smooth flex-1 sm:flex-none"
          >
            Request Support
          </Link>
        </div>
      </div>
    </section>
  )
}
