import React from 'react'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types'
import { Loader2 } from 'lucide-react'

const buttonVariants = {
  primary: 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5',
  secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30',
  outline: 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  )
}
