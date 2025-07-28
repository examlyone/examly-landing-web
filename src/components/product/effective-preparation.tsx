'use client';
import React, { useState } from 'react';
import { Typography } from '../common/Typography';
import { data } from '../../data/effectivepreparationData';

const Effectivepreparation = () => {
    return (
        <div className="container mx-auto px-4 py-12" >
            <div className="text-center mb-12" data-aos="fade-right" data-aos-anchor="#example-anchor"  data-aos-offset="500"  data-aos-duration="800">
                <Typography variant="h1" className="text-xl md:text-4xl font-semibold">
                    We follow a simple, yet effective preparation process
                </Typography>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 items-start"data-aos="fade-left" data-aos-offset="500"   data-aos-easing="ease-in-sine" data-aos-duration="800"> 
                {data.map((item, index) => (
                    <div
                        key={item.number}
                        className="flex flex-col items-center text-center relative"
                    >
                        {index < data.length - 1 && (
                            <div className="hidden md:block absolute top-6 right-[-50%] w-[100%] border-t border-dashed border-gray-400 z-0 "></div>
                        )}
                        <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center text-lg font-semibold bg-white z-10 hover:bg-[#143e39] hover:text-white transition-colors duration-300">
                            {item.number}
                        </div>

                        <Typography variant="h2" className="text-lg font-semibold mt-4 mb-2">
                            {item.title}
                        </Typography>
                        <Typography variant="body1" className="text-gray-600 text-sm max-w-xs">
                            {item.description}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Effectivepreparation;
