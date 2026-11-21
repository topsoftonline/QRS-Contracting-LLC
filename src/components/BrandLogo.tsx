import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BrandLogoProps {
  className?: string
}

/** Official QRS logo — gold mark + white text (mobile size increased) */
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center shrink-0 max-w-[72%] sm:max-w-none', className)}
      aria-label="QRS Contracting L.L.C."
    >
      <Image
        src="/logo-header.png"
        alt="QRS Contracting L.L.C."
        width={320}
        height={210}
        className="h-[58px] w-auto xs:h-[62px] sm:h-[68px] md:h-[82px] lg:h-[96px] xl:h-[104px] object-contain object-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
        priority
      />
    </Link>
  )
}
