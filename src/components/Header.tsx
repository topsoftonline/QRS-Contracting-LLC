'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import { BrandLogo } from '@/components/BrandLogo'
import { COMPANY_INFO, NAV_LINKS } from '@/lib/constants'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const solid = !isHome || scrolled || isMenuOpen

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${solid ? 'shadow-soft' : ''}`}>
      {/* Top bar — compact on mobile */}
      <div
        className={`text-[10px] sm:text-[11px] md:text-xs transition-smooth ${
          solid ? 'bg-navy text-white' : 'bg-navy-dark/90 text-white backdrop-blur-sm'
        }`}
      >
        <div className="container-max px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between gap-2 py-1 sm:py-1.5">
          <div className="flex items-center gap-x-3 sm:gap-x-4 min-w-0 overflow-hidden">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-1.5 hover:text-gold transition-smooth truncate"
            >
              <FaEnvelope className="text-gold text-[9px] sm:text-[10px] shrink-0" />
              <span className="truncate">{COMPANY_INFO.email}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="hidden xs:inline-flex sm:inline-flex items-center gap-1.5 hover:text-gold transition-smooth shrink-0"
            >
              <FaPhoneAlt className="text-gold text-[9px] sm:text-[10px]" />
              <span className="hidden sm:inline">{COMPANY_INFO.phone}</span>
            </a>
            <span className="hidden lg:inline-flex items-center gap-1.5 shrink-0">
              <FaMapMarkerAlt className="text-gold text-[10px]" />
              <span>{COMPANY_INFO.address}</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            {[
              { href: COMPANY_INFO.social.facebook, label: 'Facebook', icon: <FaFacebookF className="text-[10px]" /> },
              { href: COMPANY_INFO.social.youtube, label: 'YouTube', icon: <FaYoutube className="text-[10px]" /> },
              { href: COMPANY_INFO.social.instagram, label: 'Instagram', icon: <FaInstagram className="text-[10px]" /> },
              { href: COMPANY_INFO.social.linkedin, label: 'LinkedIn', icon: <FaLinkedinIn className="text-[10px]" /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded-full border border-white/30 inline-flex items-center justify-center hover:bg-gold hover:border-gold hover:text-navy transition-smooth"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav — no light border line above page banners */}
      <div
        className={`transition-smooth border-b border-transparent ${
          solid ? 'bg-navy/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container-max px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 h-[78px] sm:h-[84px] md:h-[100px]">
            <BrandLogo />

            <nav className="hidden xl:flex flex-1 items-center justify-center gap-0.5 min-w-0">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative whitespace-nowrap px-2.5 py-2 text-[11px] 2xl:text-[12px] font-heading font-semibold uppercase tracking-[0.04em] transition-smooth ${
                    isActive(link.href) ? 'text-white' : 'text-white/75 hover:text-gold'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute left-2.5 right-2.5 -bottom-0.5 h-0.5 bg-gold" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden xl:block shrink-0">
              <Link
                href="/contact"
                className="btn-gold !rounded-sm !px-4 !py-2 !text-[11px] uppercase tracking-wider"
              >
                Get in Touch
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              className="xl:hidden relative z-[60] w-11 h-11 inline-flex items-center justify-center text-white rounded-sm hover:bg-white/10 transition-smooth"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      <div
        className={`xl:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-navy-dark/70 backdrop-blur-sm"
          aria-label="Close menu overlay"
          onClick={() => setIsMenuOpen(false)}
        />

        <nav
          className={`absolute top-0 right-0 h-full w-[min(100%,320px)] bg-navy shadow-2xl border-l border-white/10 flex flex-col transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-4 h-[78px] sm:h-[84px] border-b border-white/10">
            <p className="font-heading font-bold text-gold text-sm uppercase tracking-wider">Menu</p>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 inline-flex items-center justify-center text-white"
              aria-label="Close menu"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-sm font-heading font-semibold uppercase text-[13px] tracking-wide transition-smooth ${
                  isActive(link.href)
                    ? 'bg-gold text-navy'
                    : 'text-white/90 hover:bg-white/10 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="p-4 border-t border-white/10 space-y-3">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-gold w-full !rounded-sm uppercase tracking-wider text-xs"
            >
              Get in Touch
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 text-white/80 text-sm hover:text-gold"
            >
              <FaPhoneAlt className="text-gold" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
