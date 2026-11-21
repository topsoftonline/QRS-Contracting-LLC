import Image from 'next/image'
import Link from 'next/link'
import {
  FaAward,
  FaEye,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa'
import { ABOUT_CONTENT, COMPANY_INFO, STATS } from '@/lib/constants'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const PILLARS = [
  { icon: <FaAward />, ...ABOUT_CONTENT.pillars[0] },
  { icon: <FaEye />, ...ABOUT_CONTENT.pillars[1] },
  { icon: <FaLightbulb />, ...ABOUT_CONTENT.pillars[2] },
]

export function HomeAbout() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -right-24 top-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="relative rounded-sm overflow-hidden shadow-soft h-[280px] sm:h-[380px] md:h-[520px]">
                <Image
                  src={COMPANY_INFO.homeAboutImage}
                  alt="About QRS Contracting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-3 right-3 sm:-bottom-6 sm:right-4 md:right-6 bg-navy text-white p-4 sm:p-6 shadow-soft max-w-[160px] sm:max-w-[220px]">
                <p className="font-heading font-extrabold text-3xl sm:text-4xl text-gold leading-none">
                  {ABOUT_CONTENT.years.value}+
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider mt-2 text-white/80">
                  {ABOUT_CONTENT.years.label}
                </p>
              </div>

              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-white/95 backdrop-blur px-3 py-2 sm:px-4 sm:py-3 shadow-soft">
                <p className="font-heading font-bold text-navy text-xs sm:text-sm inline-flex items-center gap-2">
                  <FaUsers className="text-gold" /> Expert Team
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-gold font-heading font-bold tracking-[0.2em] text-xs uppercase mb-2">
                {ABOUT_CONTENT.eyebrow}
              </p>
              <h2 className="text-h2 text-navy uppercase">{ABOUT_CONTENT.headline}</h2>
              <div className="gold-accent mt-3 mb-6" />
              <p className="text-navy/80 leading-relaxed mb-4">{ABOUT_CONTENT.description}</p>
              <p className="text-navy/75 leading-relaxed mb-8">
                Our commitment is to provide innovative infrastructure services that enhance project
                value, optimize construction costs, and ensure long-term performance and reliability.
              </p>
            </ScrollReveal>

            <div className="space-y-4 mb-8">
              {PILLARS.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 0.08}>
                  <div className="flex gap-4 p-4 border border-navy/10 hover:border-gold/60 hover:shadow-soft transition-smooth bg-sand/40">
                    <span className="w-11 h-11 bg-navy text-gold inline-flex items-center justify-center shrink-0">
                      {p.icon}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-navy">{p.title}</h3>
                      <p className="text-navy/70 text-sm mt-1 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2}>
              <Link href="/about" className="btn-navy !rounded-sm uppercase tracking-wider text-xs">
                More About QRS →
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Company stats / profile strip */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.07}>
              <div className="group relative overflow-hidden bg-navy text-white p-6 min-h-[140px] border-l-4 border-gold">
                <FaShieldAlt className="absolute right-4 top-4 text-white/10 text-4xl group-hover:text-gold/20 transition-smooth" />
                <p className="font-heading font-extrabold text-3xl md:text-4xl text-gold">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/80 uppercase tracking-wide">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
