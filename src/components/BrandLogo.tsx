import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BrandLogoProps {
  className?: string
}

/** Official QRS logo from upload (black bg removed) — no white box */
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center shrink-0 max-w-[58%] sm:max-w-none', className)}
      aria-label="QRS Contracting L.L.C."
    >
      <Image
        src="/logo-header.png"
        alt="QRS Contracting L.L.C."
        width={280}
        height={184}
        className="h-[48px] w-auto sm:h-[60px] md:h-[78px] lg:h-[96px] xl:h-[104px] object-contain object-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
        priority
      />
    </Link>
  )
}
