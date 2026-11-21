'use client'

import { useEffect, useState } from 'react'
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa'
import { COMPANY_INFO } from '@/lib/constants'

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-11 h-11 rounded-full bg-navy text-white shadow-soft inline-flex items-center justify-center hover:bg-navy-light transition-smooth"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-sm" />
        </button>
      )}

      <a
        href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
        className="w-11 h-11 rounded-full bg-navy text-gold shadow-soft inline-flex items-center justify-center hover:bg-navy-light transition-smooth sm:hidden"
        aria-label="Call QRS"
      >
        <FaPhoneAlt className="text-sm" />
      </a>

      <a
        href={COMPANY_INFO.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3.5 pr-4 py-3 shadow-soft hover:brightness-110 transition-smooth"
        aria-label="WhatsApp QRS Contracting"
      >
        <FaWhatsapp className="text-xl" />
        <span className="font-heading font-bold text-xs uppercase tracking-wide hidden sm:inline">
          WhatsApp
        </span>
      </a>
    </div>
  )
}
