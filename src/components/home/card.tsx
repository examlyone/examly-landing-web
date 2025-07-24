import React from 'react';

interface CardProps {
    width?: string;
    height?: string;
    className?: string;
    children?: React.ReactNode;
    showArrows?: boolean;
}

export function Card({
    width = 'w-full',
    height = 'h-64',
    className = '',
    children,
    showArrows = false,
}: CardProps) {
    return (
        <div
            className={`relative ${width} ${height} rounded-lg overflow-hidden bg-black ${className}`}
        >
            {/* Background image on top with opacity */}
            <div className="absolute inset-0 z-10">
                <img
                    src="/bg.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-100"
                />
            </div>

            {/* Decorative Arrows */}
            {showArrows && (
                <>
                    {/* Left Arrow */}
                    <div
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2"
                        aria-hidden="true"
                    >
                        <img
                            src="/arrow.svg"
                            alt=""
                            className="w-20 h-20 transform "
                        />
                    </div>

                    {/* Right Arrow */}
                    <div
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2"
                        aria-hidden="true"
                    >
                        <img
                            src="/arrow.svg"
                            alt=""
                            className="w-20 h-20"
                        />
                    </div>
                </>
            )}

            {/* Content container */}
            <div className="relative z-30 w-full h-full p-6">
                {children}
            </div>
        </div>
    );
}