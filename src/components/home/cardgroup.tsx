import React from 'react';
import { Card } from './card';
import { Text } from '../common/Text';

interface CardGroupProps {
    title: string;
    description: string;
    bgColor?: string;
    textColor?: string;
    lineColor?: string;
    barColors?: string[];
    className?: string;
}

export function CardGroup({
    title = "Our Preparation Process",
    description = "We follow a simple, yet effective preparation process that ensures you are well-equipped for your exams.",
    bgColor = 'bg-black',
    textColor = 'text-white',
    lineColor = 'bg-blue-500',
    barColors = ['bg-[#F9F0DF]', 'bg-[#C5A933]', 'bg-[#157669]'],
    className = '',
}: CardGroupProps) {
    return (
        <div className={`${className}md:w-90 lg:w-150 border border-gray-300 rounded-lg shadow-lg`}>
             
            <Card
                className={`${bgColor} p-0 overflow-hidden`}
                height="h-60"

            >
                <div className="flex  h-full ">
                    {/* Left side with text - 50% width */}
                    <div className="w-1/2 flex flex-col justify-center align-items-start">
                        <div className="flex items-center mb-4">
                            <div className={`${lineColor} w-10 h-1 mr-4 `}></div>
                            <Text variant="p" className={`${textColor} text-xs  font-medium tracking-wider `}>
                                {title}
                            </Text>
                        </div>

                        <Text variant="h2" className={`${textColor}`}>
                            {description}
                        </Text>
                    </div>

                    {/* Right side with bars - 50% width */}
                    <div className="w-1/2 flex items-end">
                        <div className="flex items-end justify-end w-full  h-full gap-5">
                            {barColors.map((color, index) => {
                                // Calculate height based on index (increasing heights)
                                const heightClass = index === 0 ? 'h-1/3' : index === 1 ? 'h-2/3' : 'h-full';
                                // Calculate width - divide available space by number of bars
                                const widthPercent = 70 / barColors.length;

                                return (
                                    <div
                                        key={index}
                                        className={`${color} ${heightClass}`}
                                        style={{ width: `${widthPercent}%` }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}