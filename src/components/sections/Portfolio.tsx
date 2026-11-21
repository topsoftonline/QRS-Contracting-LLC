import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { FEATURED_PROJECTS, PROJECTS } from '@/lib/constants'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function Portfolio() {
  const cards = [
    ...FEATURED_PROJECTS,
    ...PROJECTS.filter((p) => p.id.startsWith('prod-')).slice(0, 2),
  ].slice(0, 6)

  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container-max">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div>
              <p className="text-gold font-heading font-bold tracking-[0.2em] text-xs uppercase mb-2">
                Portfolio
              </p>
              <h2 className="text-h2 text-navy uppercase">Recent Projects</h2>
              <div className="gold-accent mt-3" />
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-navy font-heading font-bold text-xs uppercase tracking-wider hover:text-gold transition-smooth"
            >
              View All Projects <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.06}>
              <Link
                href="/projects"
                className="group relative block overflow-hidden h-56 sm:h-64 md:h-72 shadow-soft"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-90" />
                {'category' in project && project.category && (
                  <span className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-heading font-bold uppercase tracking-wider px-2.5 py-1">
                    {project.category}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-heading font-bold text-base md:text-lg leading-snug group-hover:text-gold transition-smooth">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 mt-3 text-xs text-white/80 font-heading font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-smooth translate-y-2 group-hover:translate-y-0">
                    View Project <FaArrowRight className="text-[10px]" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
