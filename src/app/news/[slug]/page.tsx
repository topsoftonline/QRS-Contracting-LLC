import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa'
import { NEWS } from '@/lib/constants'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = NEWS.find((n) => n.slug === params.slug)
  if (!post) return { title: 'News' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function NewsDetailPage({ params }: Props) {
  const post = NEWS.find((n) => n.slug === params.slug)
  if (!post) notFound()

  return (
    <article>
      <section className="relative h-[280px] md:h-[380px]">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative container-max h-full px-4 md:px-6 lg:px-8 flex flex-col justify-end pb-10">
          <p className="text-gold text-sm inline-flex items-center gap-2 mb-3">
            <FaCalendarAlt />
            {post.date}
          </p>
          <h1 className="text-h2 text-white max-w-4xl">{post.title}</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-heading font-bold text-navy hover:text-gold mb-8"
          >
            <FaArrowLeft /> Back to News
          </Link>
          <div className="prose prose-navy max-w-none">
            <p className="text-navy/85 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {post.description}
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-navy/10">
            <Link href="/contact" className="btn-gold">
              Discuss a Project With Us →
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
