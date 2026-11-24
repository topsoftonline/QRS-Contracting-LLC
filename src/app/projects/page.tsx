import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'
import { PROJECTS, FEATURED_PROJECTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore QRS Contracting infrastructure projects across irrigation, recycled water, potable water and emergency works in the UAE.',
}

export default function ProjectsPage() {
  const gallery = [
    ...FEATURED_PROJECTS,
    ...PROJECTS.filter((p) => p.id.startsWith('prod-')),
    ...PROJECTS.filter((p) => p.id.startsWith('apr-')).slice(0, 8),
  ]

  return (
    <>
      <PageHero
        title="Our Projects"
        description="Delivering quality infrastructure works across Dubai and the UAE — from network diversions and valve replacements to emergency repairs."
        image="/upload/1739271944_cvwxvdp84o8Sr94QWB6zCLD32.jpg"
        imagePosition="center 55%"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-h2 text-navy uppercase">Project Portfolio</h2>
            <div className="gold-accent mt-3 mb-4" />
            <p className="text-navy/80">
              A selection of recent and ongoing infrastructure assignments demonstrating our capability
              in utility networks, civil works and emergency response.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-lg shadow-soft border border-navy/5 bg-white"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-smooth duration-500"
                  />
                  {'category' in project && project.category && (
                    <span className="absolute top-3 left-3 bg-gold text-navy text-xs font-bold px-2.5 py-1 rounded">
                      {project.category}
                    </span>
                  )}
                </div>
                <div className="bg-navy px-4 py-4 min-h-[80px] flex items-center">
                  <h3 className="text-white font-heading font-semibold text-sm leading-snug">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
