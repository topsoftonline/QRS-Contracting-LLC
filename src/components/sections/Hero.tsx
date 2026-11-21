'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaPhoneAlt,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHardHat,
  FaProjectDiagram,
  FaShieldAlt,
  FaHandshake,
  FaChevronRight,
} from 'react-icons/fa'
import { COMPANY_INFO } from '@/lib/constants'

const HERO_STATS = [
  { icon: FaHardHat, label: '12 YEARS OF EXPERIENCE' },
  { icon: FaProjectDiagram, label: '+100 SUCCESSFUL PROJECTS' },
  { icon: FaShieldAlt, label: '100% SAFETY COMMITMENT' },
  { icon: FaHandshake, label: 'TRUSTED BY GOVERNMENT & PRIVATE SECTORS' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-screen overflow-hidden bg-navy-dark pt-[108px] sm:pt-[118px] md:pt-[136px]">
      <Image
        src="/images/banners/main-banner.png"
        alt=""
        fill
        priority
        className="object-cover object-[70%_center] sm:object-right"
        sizes="100vw"
      />

      {/* Desktop left gradient */}
      <div
        className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{
          background:
            'linear-gradient(90deg, #06182a 0%, #0B2A45 28%, rgba(11,42,69,0.92) 42%, rgba(11,42,69,0.55) 58%, rgba(11,42,69,0.15) 72%, transparent 85%)',
        }}
      />
      {/* Mobile full overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none sm:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(6,24,42,0.88) 0%, rgba(11,42,69,0.82) 45%, rgba(11,42,69,0.75) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-navy-dark/30 pointer-events-none" />

      <div className="relative z-[2] container-max px-4 sm:px-6 lg:px-8 pb-36 sm:pb-32 md:pb-36 flex items-center min-h-[calc(100svh-96px)] sm:min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-128px)]">
        <div className="w-full max-w-[560px] lg:max-w-[600px] text-left text-white py-4 sm:py-6 md:py-8">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-heading font-bold uppercase text-gold text-[10px] sm:text-[11px] md:text-[13px] tracking-[0.16em] sm:tracking-[0.22em] md:tracking-[0.28em] mb-3 sm:mb-5"
          >
            {COMPANY_INFO.tagline}
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-heading font-extrabold uppercase text-white leading-[0.98] tracking-tight"
          >
            <span className="block text-[1.65rem] xs:text-[1.85rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[3.6rem]">
              QRS CONTRACTING
            </span>
            <span className="block text-[1.65rem] xs:text-[1.85rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[3.6rem] mt-0.5 sm:mt-1">
              L.L.C
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 sm:mt-6 max-w-[520px] text-white/90 font-sans font-normal text-[13px] sm:text-[15px] md:text-base leading-[1.65] sm:leading-[1.7]"
          >
            Specialists in Recycled Water Networks, Irrigation Infrastructure, Pipeline Construction,
            Valve Chambers &amp; Emergency Maintenance across the UAE.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 sm:mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-3.5 sm:gap-y-5 max-w-[520px]"
          >
            {HERO_STATS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-full border-[1.5px] border-gold text-gold inline-flex items-center justify-center shrink-0 bg-transparent">
                    <Icon className="text-[13px] sm:text-[15px]" />
                  </span>
                  <p className="font-heading font-bold uppercase text-white text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.04em] leading-[1.35]">
                    {item.label}
                  </p>
                </div>
              )
            })}
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 sm:mt-10 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-heading font-bold uppercase text-[11px] sm:text-[12px] tracking-[0.08em] px-6 sm:px-7 py-3 sm:py-[13px] rounded-sm hover:bg-gold-dark transition-smooth w-full sm:w-auto"
            >
              Our Services <FaChevronRight className="text-[10px]" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-heading font-bold uppercase text-[11px] sm:text-[12px] tracking-[0.08em] px-6 sm:px-7 py-[11px] rounded-sm hover:bg-white hover:text-navy transition-smooth w-full sm:w-auto"
            >
              View Projects <FaChevronRight className="text-[10px]" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom contact strip */}
      <div className="absolute bottom-0 left-0 right-0 z-[3] bg-navy-dark/95 border-t border-white/10 backdrop-blur-sm">
        <div className="container-max px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3 text-[11px] sm:text-sm text-white/90 overflow-x-auto scrollbar-none -mx-1 px-1">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 hover:text-gold transition-smooth shrink-0 whitespace-nowrap"
            >
              <FaPhoneAlt className="text-gold text-[10px] sm:text-sm" />
              {COMPANY_INFO.phone}
            </a>
            <a
              href={`https://${COMPANY_INFO.website}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-gold transition-smooth shrink-0 whitespace-nowrap"
            >
              <FaGlobe className="text-gold text-[10px] sm:text-sm" />
              {COMPANY_INFO.website}
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-2 hover:text-gold transition-smooth shrink-0 whitespace-nowrap"
            >
              <FaEnvelope className="text-gold text-[10px] sm:text-sm" />
              {COMPANY_INFO.email}
            </a>
            <span className="inline-flex items-center gap-2 shrink-0 whitespace-nowrap">
              <FaMapMarkerAlt className="text-gold text-[10px] sm:text-sm" />
              {COMPANY_INFO.address}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
