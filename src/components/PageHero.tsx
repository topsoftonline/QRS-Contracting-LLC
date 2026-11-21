import Image from 'next/image'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface PageHeroProps {
  title: string
  description?: string
  image: string
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-[100px] sm:pt-[112px] md:pt-[128px]">
      {/* Fixed mobile-friendly banner height — not overly tall */}
      <div className="relative min-h-[240px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[440px]">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover object-center md:object-[center_35%]"
            sizes="100vw"
          />
          {/* Strong mobile overlay for contrast */}
          <div className="absolute inset-0 bg-navy-dark/80 sm:bg-navy-dark/70 md:hidden" />
          {/* Desktop left/top gradients */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-navy-dark/92 via-navy/78 to-navy/45" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-navy-dark/55 via-transparent to-navy-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent md:hidden" />
        </div>

        <div className="relative container-max px-5 sm:px-6 lg:px-8 flex flex-col justify-end md:justify-center min-h-[240px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[440px] pb-8 sm:pb-10 md:pb-16 pt-6">
          <ScrollReveal>
            <p className="text-gold font-heading font-bold tracking-[0.16em] sm:tracking-[0.22em] text-[10px] sm:text-xs uppercase mb-2 sm:mb-3 drop-shadow">
              QRS Contracting L.L.C.
            </p>
            <h1 className="font-heading font-extrabold text-white uppercase tracking-wide max-w-3xl text-[1.85rem] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] drop-shadow-md">
              {title}
            </h1>
            {description && (
              <p className="mt-3 sm:mt-4 max-w-xl md:max-w-2xl text-white/95 text-[13px] sm:text-base md:text-lg leading-relaxed drop-shadow-sm">
                {description}
              </p>
            )}
            <div className="gold-accent mt-4 sm:mt-5" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
