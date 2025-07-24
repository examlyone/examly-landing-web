interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'button';
    children: React.ReactNode;
    className?: string;
}

export function Typography({ variant = 'body1', children, className = '' }: TypographyProps) {
    const baseStyle = 'font-plus-jakarta';

    const variantStyles = {
        h1: 'text-4xl font-bold mb-6 text-[#143E39]',
        h2: 'text-3xl font-bold mb-5',
        h3: 'text-2xl font-bold mb-4',
        h4: 'text-xl font-semibold mb-3',
        h5: 'text-lg font-semibold mb-2',
        h6: 'text-base font-semibold mb-2',
        body1: 'text-base mb-4',
        body2: 'text-sm mb-3',
        caption: 'text-xs text-gray-600',
        button: 'text-sm font-medium',
    };

    const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`;

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
        case 'body1':
            return <p className={combinedClassName}>{children}</p>;
        case 'body2':
            return <p className={combinedClassName}>{children}</p>;
        case 'caption':
            return <span className={combinedClassName}>{children}</span>;
        case 'button':
            return <span className={combinedClassName}>{children}</span>;
        default:
            return <p className={combinedClassName}>{children}</p>;
    }
}