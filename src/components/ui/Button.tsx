import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    'font-heading font-bold rounded transition-smooth inline-flex items-center justify-center gap-2'

  const variantClasses = {
    primary: 'bg-gold text-navy hover:bg-gold-dark',
    secondary: 'bg-navy text-white hover:bg-navy-light',
    outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-navy',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
