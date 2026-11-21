import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt } from 'react-icons/fa'
import { PageHero } from '@/components/PageHero'
import { NEWS, COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Latest news and updates from QRS Contracting L.L.C.',
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Updates"
        description="Insights and updates from QRS Contracting on infrastructure, technology and industry developments."
        image={COMPANY_INFO.blogImage}
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {NEWS.map((item) => (
              <article
                key={item.id}
                className="group rounded-lg overflow-hidden border border-navy/10 shadow-soft bg-white flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-smooth duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-navy/60 inline-flex items-center gap-2 mb-2">
                    <FaCalendarAlt className="text-gold" />
                    {item.date}
                  </p>
                  <h2 className="font-heading font-bold text-navy text-lg leading-snug group-hover:text-gold transition-smooth">
                    {item.title}
                  </h2>
                  <p className="text-navy/70 text-sm mt-3 line-clamp-3 flex-1">{item.excerpt}</p>
                  <Link
                    href={`/news/${item.slug}`}
                    className="mt-4 inline-flex text-sm font-heading font-bold text-navy hover:text-gold"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
