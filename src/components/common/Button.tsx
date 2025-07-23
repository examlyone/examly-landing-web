import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ButtonVariant = 'outline' | 'filled' | 'text' | 'arrow-only';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

export function Button({
  children,
  variant = 'outline',
  href,
  onClick,
  className = '',
  showArrow = true,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-plus-jakarta font-medium text-base transition-all duration-300 ease-in-out';
  
  const variantStyles = {
    outline: 'px-6 py-3 rounded-md bg-white border border-black text-black hover:bg-black hover:text-white',
    filled: 'px-6 py-3 rounded-md bg-black text-white border border-black hover:border-black',
    text: 'text-black underline hover:text-gray-700 p-0',
    'arrow-only': 'p-3 rounded-full bg-white border border-gray-200 hover:border-blue-500 hover:shadow-md'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className} relative`;

  const arrowElement = (
    <span className={`${variant === 'filled' || !showArrow ? 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0' : ''} ${variant !== 'arrow-only' ? 'ml-2' : ''} transition-all duration-300 ease-in-out`}>
      <Image 
        src="/arrow-right.svg" 
        alt="Arrow" 
        width={12} 
        height={12} 
        className={`${variant === 'outline' ? 'text-black group-hover:text-white' : 'text-white'}`}
      />
    </span>
  );

  const content = (
    <>
      {variant !== 'arrow-only' && <span>{children}</span>}
      {variant !== 'text' ? arrowElement : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${combinedClassName} group`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${combinedClassName} group`}>
      {content}
    </button>
  );
}