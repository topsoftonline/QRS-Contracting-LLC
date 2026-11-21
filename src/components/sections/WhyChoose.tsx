import Link from 'next/link'
import {
  FaHardHat,
  FaClock,
  FaShieldAlt,
  FaDraftingCompass,
  FaHandshake,
  FaFileContract,
} from 'react-icons/fa'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const REASONS = [
  {
    icon: FaHardHat,
    title: 'Infrastructure Specialists',
    text: 'Focused expertise in irrigation, RWN/TSE, potable water, sewerage and drainage networks across the UAE.',
  },
  {
    icon: FaShieldAlt,
    title: 'HSE & Quality First',
    text: 'Strict safety, quality and environmental controls aligned with Dubai Municipality and DEWA standards.',
  },
  {
    icon: FaClock,
    title: '24/7 Emergency Response',
    text: 'Rapid shutdown, repair and reinstatement support when network emergencies cannot wait.',
  },
  {
    icon: FaDraftingCompass,
    title: 'Value Engineering',
    text: 'Cost-effective delivery that protects performance, durability and long-term operational efficiency.',
  },
  {
    icon: FaHandshake,
    title: 'Trusted Delivery Partners',
    text: 'Proven collaboration with government and private clients on critical utility infrastructure.',
  },
  {
    icon: FaFileContract,
    title: 'Prequalification Ready',
    text: 'Company profile, certifications and project evidence structured for consultant and contractor screening.',
  },
]

const STEPS = [
  { step: '01', title: 'Enquiry', text: 'Share project type, location and timeline.' },
  { step: '02', title: 'Site Assessment', text: 'Technical review against standards and constraints.' },
  { step: '03', title: 'Execution', text: 'Safe, supervised delivery with clear progress reporting.' },
  { step: '04', title: 'Handover', text: 'Commissioning, documentation and aftercare support.' },
]

export function WhyChoose() {
  return (
    <section className="section-padding bg-navy text-white relative overflow-hidden">
      <div className="absolute -left-20 top-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-16 bottom-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 md:mb-12">
            <div>
              <p className="text-gold font-heading font-bold tracking-[0.2em] text-xs uppercase mb-2">
                Why QRS
              </p>
              <h2 className="text-h2 text-white uppercase">Why Choose QRS Contracting</h2>
              <div className="gold-accent mt-3" />
            </div>
            <p className="text-white/75 max-w-md text-sm md:text-base leading-relaxed">
              Built like leading UAE contractors present themselves — proof, process and readiness —
              not just brochure claims.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
          {REASONS.map((item, i) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.title} delay={i * 0.05}>
                <div className="h-full border border-white/10 bg-white/5 p-5 md:p-6 hover:border-gold/50 hover:bg-white/[0.07] transition-smooth">
                  <span className="w-11 h-11 rounded-full border border-gold text-gold inline-flex items-center justify-center mb-4">
                    <Icon />
                  </span>
                  <h3 className="font-heading font-bold text-base md:text-lg mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <div className="border border-white/10 bg-navy-dark/60 p-5 sm:p-7 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
              <div>
                <p className="text-gold font-heading font-bold tracking-[0.2em] text-xs uppercase mb-2">
                  Delivery Process
                </p>
                <h3 className="font-heading font-bold text-xl md:text-2xl uppercase">
                  From Enquiry to Handover
                </h3>
              </div>
              <Link href="/contact" className="btn-gold !rounded-sm uppercase tracking-wider text-xs w-fit">
                Start Project Enquiry →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {STEPS.map((s) => (
                <div key={s.step} className="relative">
                  <p className="font-heading font-extrabold text-gold text-2xl mb-2">{s.step}</p>
                  <h4 className="font-heading font-bold uppercase text-sm mb-1.5">{s.title}</h4>
                  <p className="text-white/65 text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
