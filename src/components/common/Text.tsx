import React from 'react';

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';
type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
  color?: string;
  size?: FontSize;
  weight?: FontWeight;
  className?: string;
}

export function Text({
  variant = 'p',
  children,
  color,
  size,
  weight,
  className = '',
}: TextProps) {
  // Default colors based on variant
  const defaultColors = {
    h1: 'text-black', // Removed dark:text-white
    h2: 'text-black', // Removed dark:text-white
    h3: 'text-black', // Removed dark:text-white
    h4: 'text-black', // Removed dark:text-white
    h5: 'text-black', // Removed dark:text-white
    h6: 'text-black', // Removed dark:text-white
    p: 'text-[#878C91]',
  };

  // Default font weights based on variant
  const defaultWeights = {
    h1: 'font-semibold',
    h2: 'font-semibold',
    h3: 'font-semibold',
    h4: 'font-semibold',
    h5: 'font-semibold',
    h6: 'font-semibold',
    p: 'font-normal',
  };

  // Default sizes based on variant
  const defaultSizes = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
    p: 'text-base',
  };

  // Font weight classes
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  // Build the class string
  // Check if color starts with 'text-' to determine if it's a Tailwind class
  const colorClass = color ? (color.startsWith('text-') ? color : `text-[${color}]`) : defaultColors[variant];
  const weightClass = weight ? weightClasses[weight] : defaultWeights[variant];
  const sizeClass = size ? `text-${size}` : defaultSizes[variant];
  
  const baseStyle = 'font-plus-jakarta';
  const combinedClassName = `${baseStyle} ${colorClass} ${weightClass} ${sizeClass} ${className}`;

  // Render the appropriate element based on variant
  switch (variant) {
    case 'h1':
      return <h1 className={combinedClassName}>{children}</h1>;
    case 'h2':
      return <h2 className={combinedClassName}>{children}</h2>;
    case 'h3':
      return <h3 className={combinedClassName}>{children}</h3>;
    case 'h4':
      return <h4 className={combinedClassName}>{children}</h4>;
    case 'h5':
      return <h5 className={combinedClassName}>{children}</h5>;
    case 'h6':
      return <h6 className={combinedClassName}>{children}</h6>;
    case 'p':
      return <p className={combinedClassName}>{children}</p>;
    default:
      return <p className={combinedClassName}>{children}</p>;
  }
}