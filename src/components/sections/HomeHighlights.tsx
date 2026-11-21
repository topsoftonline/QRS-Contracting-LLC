import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaLeaf, FaArrowRight } from 'react-icons/fa'
import { NEWS } from '@/lib/constants'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const CLIENT_LOGOS = [
  '/upload/1738687539_zKnh7CVTjTo9uhTqowNRRmDB2.jpg',
  '/upload/1738687550_cZcMWp6vRrr5EPqIEfwZTBtNd.png',
  '/upload/1738689212_3DmR44NQ1LpvpnsPwk6mN0VTU.png',
  '/upload/1738689220_FHaBZnNA9nnpo0mg53WIMjMwH.jpg',
  '/upload/1738689226_juFTRKuBgToxtHwUR6T2mNRss.jpg',
  '/upload/1738689233_xOYQsZv8o735WADzA7f60juRs.jpg',
  '/upload/1738689250_HYXdS6CpObkShEvSrm4MP8WiP.png',
  '/upload/1738689256_dQr2c7GjcXRZCPeeEkbfVYmoM.jpg',
  '/upload/1738689264_BaPxEvY176d37eJTYkAoEUnFL.png',
  '/upload/1738700490_FbyUrNbENStH7J6VnUD5fU6wk.png',
  '/upload/1738701373_i8AlCcdz2tJIk42tGADUBjhPM.png',
  '/upload/1738701393_i35GtdYYO614XHt8a7K1beXqx.png',
  '/upload/1738701409_glJRS5NH4zSvKAzKEJPBRyiou.png',
  '/upload/1780051138_kB32BEcKzeEWbCaYBg3RB98yH.png',
  '/upload/1780051185_hRUHEdc2F6vJ5iwY58xgJCag9.png',
  '/upload/1780051261_nsgrQ2Uvigr0WqtuiQMwUdV2L.png',
]

export function HomeHighlights() {
  const news = NEWS.slice(0, 3)

  return (
    <>
      <section className="section-padding bg-sand">
        <div className="container-max grid lg:grid-cols-2 gap-10 lg:gap-14">
          <ScrollReveal>
            <div className="h-full bg-white shadow-soft overflow-hidden border border-navy/5">
              <div className="relative h-56 md:h-64">
                <Image
                  src="/upload/1721543399_FBq71JZbP8eNvdRAw1GW8lUKQ.jpg"
                  alt="Sustainability"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/35" />
                <span className="absolute top-4 left-4 w-12 h-12 bg-gold text-navy inline-flex items-center justify-center text-xl">
                  <FaLeaf />
                </span>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gold font-heading font-bold tracking-[0.2em] text-xs uppercase mb-2">
                  Responsibility
                </p>
                <h2 className="text-h3 text-navy uppercase">Sustainability</h2>
                <div className="gold-accent mt-3 mb-4" />
                <p className="text-navy/75 leading-relaxed text-sm md:text-base">
                  We are committed to sustainable practices by delivering environmentally responsible
                  infrastructure solutions — reducing waste, optimizing resources, and supporting
                  long-term performance for clients and communities across the UAE.
                </p>
                <Link
                  href="/sustainability"
                  className="inline-flex items-center gap-2 mt-5 text-navy font-heading font-bold text-xs uppercase tracking-wider hover:text-gold transition-smooth"
                >
                  Learn More <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="h-full">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-gold font-heading font-bold tracking-[0.2em] text-xs uppercase mb-2">
                    Latest
                  </p>
                  <h2 className="text-h3 text-navy uppercase">News & Updates</h2>
                  <div className="gold-accent mt-3" />
                </div>
                <Link
                  href="/news"
                  className="hidden sm:inline-flex items-center gap-2 text-navy font-heading font-bold text-xs uppercase tracking-wider hover:text-gold"
                >
                  View All <FaArrowRight className="text-[10px]" />
                </Link>
              </div>

              <div className="space-y-4">
                {news.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="flex gap-3 sm:gap-4 group bg-white p-2.5 sm:p-3 shadow-soft border border-navy/5 hover:border-gold/40 transition-smooth"
                  >
                    <div className="relative w-20 h-20 sm:w-28 sm:h-24 shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-smooth"
                        sizes="112px"
                      />
                    </div>
                    <div className="py-0.5 sm:py-1 pr-1 sm:pr-2 min-w-0">
                      <h3 className="font-heading font-bold text-navy text-[13px] sm:text-sm md:text-base leading-snug group-hover:text-gold transition-smooth line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-navy/60 inline-flex items-center gap-2">
                        <FaCalendarAlt className="text-gold" />
                        {item.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <p className="text-center font-heading font-bold text-navy uppercase tracking-[0.15em] mb-2">
              Our Clients
            </p>
            <div className="gold-accent mx-auto mb-8" />
          </ScrollReveal>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
            {CLIENT_LOGOS.map((src, i) => (
              <ScrollReveal key={src} delay={i * 0.03}>
                <div className="bg-sand border border-navy/10 h-16 md:h-20 flex items-center justify-center p-2 hover:border-gold/40 transition-smooth">
                  <Image
                    src={src}
                    alt="Client logo"
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain opacity-80"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
