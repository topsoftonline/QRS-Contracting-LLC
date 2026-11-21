import Image from 'next/image'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface PageHeroProps {
  title: string
  description?: string
  image: string
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-dark pt-[108px] sm:pt-[118px] md:pt-[136px]">
      <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[460px]">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover object-center md:object-[center_30%]"
            sizes="100vw"
          />

          {/* Homepage-style dark → light gradient (left → right) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, #06182a 0%, #0B2A45 22%, rgba(11,42,69,0.88) 38%, rgba(11,42,69,0.55) 55%, rgba(11,42,69,0.22) 72%, transparent 88%)',
            }}
          />
          {/* Soft top/bottom depth — keeps image visible */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-navy-dark/50 via-transparent to-navy-dark/25" />
          {/* Extra left readability on very small screens only */}
          <div
            className="absolute inset-0 pointer-events-none sm:hidden"
            style={{
              background:
                'linear-gradient(90deg, rgba(6,24,42,0.45) 0%, rgba(11,42,69,0.2) 55%, transparent 100%)',
            }}
          />
        </div>

        <div className="relative container-max px-5 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[260px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[460px] py-8 sm:py-10 md:py-14">
          <ScrollReveal>
            <div className="max-w-xl md:max-w-2xl">
              <p className="text-gold font-heading font-bold tracking-[0.16em] sm:tracking-[0.22em] text-[10px] sm:text-xs uppercase mb-2 sm:mb-3">
                QRS Contracting L.L.C.
              </p>
              <h1 className="font-heading font-extrabold text-white uppercase tracking-wide text-[1.9rem] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
                {title}
              </h1>
              {description && (
                <p className="mt-3 sm:mt-4 text-white/95 text-[13px] sm:text-base md:text-lg leading-relaxed">
                  {description}
                </p>
              )}
              <div className="gold-accent mt-4 sm:mt-5" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
