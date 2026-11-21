import Image from 'next/image'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface PageHeroProps {
  title: string
  description?: string
  image: string
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[320px] sm:min-h-[380px] md:min-h-[480px] overflow-hidden pt-[96px] sm:pt-[110px] md:pt-[128px]">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/92 via-navy/80 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/55 via-transparent to-navy-dark/30" />
      </div>
      <div className="relative container-max px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-10 sm:py-14 md:py-20">
        <ScrollReveal>
          <p className="text-gold font-heading font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[10px] sm:text-xs uppercase mb-2 sm:mb-3">
            QRS Contracting L.L.C.
          </p>
          <h1 className="font-heading font-extrabold text-white uppercase tracking-wide max-w-3xl text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-3 sm:mt-4 max-w-2xl text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
              {description}
            </p>
          )}
          <div className="gold-accent mt-4 sm:mt-5" />
        </ScrollReveal>
      </div>
    </section>
  )
}
