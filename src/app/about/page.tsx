import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaHardHat,
  FaLeaf,
  FaAward,
  FaDownload,
  FaCheckCircle,
  FaCogs,
} from 'react-icons/fa'
import { PageHero } from '@/components/PageHero'
import { OrgChart } from '@/components/OrgChart'
import { ABOUT_CONTENT, COMPANY_INFO, STATS } from '@/lib/constants'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export const metadata: Metadata = {
  title: 'About Us',
  description: ABOUT_CONTENT.description.slice(0, 160),
}

const FEATURES = [
  {
    icon: <FaUsers />,
    title: 'Experienced Team',
    text: 'Multidisciplinary professionals with deep infrastructure expertise.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Quality & Safety',
    text: 'Highest HSE standards on every site and every assignment.',
  },
  {
    icon: <FaClock />,
    title: 'On-Time Delivery',
    text: 'Reliable scheduling with efficient project execution.',
  },
  {
    icon: <FaHandshake />,
    title: 'Client Satisfaction',
    text: 'Long-term partnerships built on trust and performance.',
  },
]

const DOWNLOAD_CARDS = [
  {
    title: 'Company Profile',
    icon: <FaAward />,
    text: 'Overview of QRS capabilities, experience and project delivery approach.',
    href: '/company-profile',
    image: '/upload/1738686050_3udIjAnK071M5QtnuwHNX6ajU.jpg',
    cta: 'Download PDF',
  },
  {
    title: 'HSE Commitment',
    icon: <FaHardHat />,
    text: ABOUT_CONTENT.hse.slice(0, 110) + '…',
    href: '/sustainability',
    image: '/upload/1739271906_tMS9e7fBt9JUSdRFSugLThxTN.png',
    cta: 'Learn More',
  },
  {
    title: 'Sustainability',
    icon: <FaLeaf />,
    text: 'Environmentally responsible construction practices and long-term value creation.',
    href: '/sustainability',
    image: '/upload/1738694556_NnjG8LB2vWUPA4GKoyM9XmJ8o.jpg',
    cta: 'Learn More',
  },
  {
    title: 'Quality & Environment',
    icon: <FaShieldAlt />,
    text: ABOUT_CONTENT.quality.description.slice(0, 110) + '…',
    href: '/company-profile',
    image: '/upload/1780040785_bUaqrwwIZTBr0iWVP3hYm23gC.jpeg',
    cta: 'View Profile',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="QRS Contracting L.L.C. is a leading infrastructure solutions provider in the UAE specializing in irrigation, water, sewerage, and drainage networks."
        image="/upload/1780040785_bUaqrwwIZTBr0iWVP3hYm23gC.jpeg"
      />

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-max grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <p className="text-gold font-heading font-bold tracking-[0.2em] text-xs uppercase mb-2">
              {ABOUT_CONTENT.eyebrow}
            </p>
            <h2 className="text-h2 text-navy">{ABOUT_CONTENT.headline}</h2>
            <div className="gold-accent mt-3 mb-6" />
            <p className="text-navy/80 leading-relaxed mb-4">{ABOUT_CONTENT.description}</p>
            <p className="text-navy/80 leading-relaxed mb-8">
              Our commitment is to provide innovative infrastructure services that enhance project
              value, optimize construction costs, and ensure long-term performance and reliability.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-3 p-4 bg-sand/60 border border-navy/5 hover:border-gold/40 transition-smooth"
                >
                  <span className="text-gold text-xl mt-0.5">{f.icon}</span>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-sm">{f.title}</h3>
                    <p className="text-navy/70 text-sm mt-1 leading-relaxed">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="relative">
              <div className="relative rounded-sm overflow-hidden shadow-soft min-h-[420px] md:min-h-[520px]">
                <Image
                  src={COMPANY_INFO.aboutImage}
                  alt="QRS Contracting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 md:left-auto md:right-6 md:w-56 bg-navy text-white p-5 shadow-soft border-l-4 border-gold">
                <p className="font-heading font-extrabold text-4xl text-gold">
                  {ABOUT_CONTENT.years.value}+
                </p>
                <p className="text-xs uppercase tracking-wide mt-1 text-white/80">
                  {ABOUT_CONTENT.years.label}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Company profile / stats cards */}
      <section className="section-padding bg-sand">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-gold font-heading font-bold tracking-[0.2em] text-xs uppercase mb-2">
                Company Profile
              </p>
              <h2 className="text-h2 text-navy uppercase">Performance at a Glance</h2>
              <div className="gold-accent mx-auto mt-3 mb-4" />
              <p className="text-navy/70">
                Measurable commitment to delivery, safety and long-term infrastructure performance
                across Dubai and the UAE.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.07}>
                <div className="bg-white p-7 shadow-soft border-t-4 border-gold text-center h-full hover:-translate-y-1 transition-smooth">
                  <p className="font-heading font-extrabold text-4xl text-navy">{stat.value}</p>
                  <p className="mt-3 text-sm text-navy/70 uppercase tracking-wide">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[ABOUT_CONTENT.vision, ABOUT_CONTENT.mission, ABOUT_CONTENT.quality].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-white p-7 shadow-soft h-full border border-navy/5 hover:border-gold/50 transition-smooth">
                  <div className="w-12 h-12 bg-navy text-gold inline-flex items-center justify-center mb-4">
                    {i === 0 ? <FaAward /> : i === 1 ? <FaCogs /> : <FaLeaf />}
                  </div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-3">{item.title}</h3>
                  <p className="text-navy/75 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we do + Value engineering */}
      <section className="section-padding bg-white">
        <div className="container-max grid lg:grid-cols-2 gap-10">
          <ScrollReveal>
            <div className="bg-navy text-white p-8 md:p-10 h-full">
              <h2 className="font-heading font-bold text-2xl uppercase text-gold mb-4">What We Do</h2>
              <p className="text-white/85 leading-relaxed mb-6">{ABOUT_CONTENT.whatWeDo}</p>
              <ul className="space-y-3">
                {[
                  'Irrigation & Recycled Water Networks (RWN/TSE)',
                  'Potable Water Networks & Valve Chambers',
                  'Sewerage & Drainage Networks',
                  'Emergency Repairs & Shutdown Works',
                  'SCADA, RTU & Flow Meter Systems',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/90">
                    <FaCheckCircle className="text-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-sand p-8 md:p-10 h-full border border-navy/5">
              <h2 className="font-heading font-bold text-2xl uppercase text-navy mb-4">
                Value Engineering
              </h2>
              <div className="gold-accent mb-5" />
              <p className="text-navy/80 leading-relaxed mb-6">{ABOUT_CONTENT.valueEngineering}</p>
              <h3 className="font-heading font-bold text-navy mb-3">HSE Commitment</h3>
              <p className="text-navy/75 leading-relaxed text-sm mb-6">{ABOUT_CONTENT.hse}</p>
              <Link href="/sustainability" className="btn-navy !rounded-sm !text-xs uppercase tracking-wider">
                View Sustainability →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
              <p className="text-gold font-heading font-bold tracking-[0.2em] text-xs uppercase mb-2">
                Our Structure
              </p>
              <h2 className="text-h2 text-navy uppercase">Organization Chart</h2>
              <div className="gold-accent mx-auto mt-3 mb-4" />
              <p className="text-navy/70 text-sm md:text-base">
                A clear leadership and site delivery structure — from management through projects,
                procurement, CAD and field operations.
              </p>
            </div>
          </ScrollReveal>

          <OrgChart />
        </div>
      </section>

      {/* Core values */}
      <section className="section-padding bg-sand">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-h2 text-navy uppercase">Core Values</h2>
              <div className="gold-accent mx-auto mt-3 mb-4" />
              <p className="text-navy/70 max-w-2xl mx-auto">{ABOUT_CONTENT.team.description.slice(0, 180)}…</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ABOUT_CONTENT.values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.05}>
                <div className="bg-white p-6 shadow-soft border-l-4 border-gold h-full hover:-translate-y-1 transition-smooth">
                  <h3 className="font-heading font-bold text-navy text-lg">{v.title}</h3>
                  <p className="text-navy/70 text-sm mt-2 leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Download / profile cards — reference style */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="text-gold font-heading font-bold tracking-[0.2em] text-xs uppercase mb-2">
                  Resources
                </p>
                <h2 className="text-h2 text-navy uppercase">Company Documents</h2>
                <div className="gold-accent mt-3" />
              </div>
              <Link
                href="/company-profile"
                className="inline-flex items-center gap-2 text-navy font-heading font-bold text-xs uppercase tracking-wider hover:text-gold"
              >
                <FaDownload /> Full Company Profile
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DOWNLOAD_CARDS.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.07}>
                <div className="relative overflow-hidden min-h-[300px] group shadow-soft">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-navy/75 group-hover:bg-navy/85 transition-smooth" />
                  <div className="relative p-6 h-full min-h-[300px] flex flex-col justify-end text-white">
                    <span className="text-gold text-2xl mb-3">{card.icon}</span>
                    <h3 className="font-heading font-bold text-xl">{card.title}</h3>
                    <p className="text-white/80 text-sm mt-2 mb-5 leading-relaxed">{card.text}</p>
                    <Link href={card.href} className="btn-gold !text-xs !rounded-sm w-fit uppercase tracking-wider">
                      {card.cta}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="container-max px-4 md:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="flex items-start gap-4">
            <FaHardHat className="text-gold text-3xl shrink-0 mt-1" />
            <div>
              <p className="font-heading font-bold text-xl md:text-2xl uppercase">
                Need Infrastructure Solutions?
              </p>
              <p className="text-white/75 text-sm mt-1 max-w-xl">
                Contact QRS Contracting L.L.C. for your next project or emergency support across the UAE.
              </p>
            </div>
          </div>
          <Link href="/contact" className="btn-gold !rounded-sm uppercase tracking-wider text-xs shrink-0">
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  )
}
