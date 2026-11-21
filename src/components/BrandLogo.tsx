import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BrandLogoProps {
  className?: string
}

/** Official QRS logo — gold mark + white text */
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center shrink-0 max-w-[78%] sm:max-w-none', className)}
      aria-label="QRS Contracting L.L.C."
    >
      <Image
        src="/logo-header.png"
        alt="QRS Contracting L.L.C."
        width={360}
        height={236}
        className="h-[64px] w-auto sm:h-[74px] md:h-[88px] lg:h-[102px] xl:h-[110px] object-contain object-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
        priority
      />
    </Link>
  )
}
