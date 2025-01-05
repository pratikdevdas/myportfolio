import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'link'
  href?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  href,
  onClick
}) => {
  const buttonClasses = clsx(
    'inline-flex h-12 px-6 font-medium text-base rounded-full justify-center items-center gap-2',
    {
      'bg-dark-green-50 text-dark-green-1000 hover:bg-dark-green-100': variant === 'primary',
      'bg-transparent border-dark-green-50 text-dark-green-50 hover:bg-dark-green-50/10': variant === 'secondary',
      'bg-transparent text-dark-green-50 underline hover:text-dark-green-100': variant === 'link'
    },
    className
  )

  if (href) {
    return (
      <Link 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {children}
      </Link>
    )
  }

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button