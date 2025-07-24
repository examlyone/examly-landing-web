'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { Typography } from '../common/Typography';
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';

const slides = [
    { id: 1, img: '/images/prep/iPad.svg', bg: 'bg-[#CFFFF7]' },
    { id: 2, img: '/images/prep/iPad.svg', bg: 'bg-[#FFE3E3]' },
    { id: 3, img: '/images/prep/iPad.svg', bg: 'bg-[#F6EFFF]' }
];

export default function Slider() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <div>
            <Typography variant="h1" className="text-4xl">Take a closer look</Typography>
            <div
                className={clsx(
                    'transition-colors duration-500 ease-in-out py-10 rounded-xl',
                    slides[activeIndex].bg
                )}
            >
                <div className="max-w-5xl mx-auto px-4">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="rounded-xl overflow-hidden"
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={{
                            nextEl: '.custom-next-btn',
                            prevEl: '.custom-prev-btn'
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={slide.id}>
                                <div className="flex justify-center items-center p-4">
                                    <div className="relative w-full max-w-5xl">
                                        <Image
                                            src={slide.img}
                                            alt={`Slide ${slide.id}`}
                                            width={1600}
                                            height={1200}
                                            className="rounded-xl shadow-lg"
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="flex justify-end gap-6 mt-6">
                <button className="custom-prev-btn bg-white p-1 rounded-sm shadow hover:bg-gray-100 transition border border-[#143E39]">
                    <CaretLeftIcon size={20} />
                </button>
                <button className="custom-next-btn bg-white p-1 rounded-sm shadow hover:bg-gray-100 transition border border-[#143E39]">
                    <CaretRightIcon size={20} />
                </button>
            </div>
        </div>
    );
}
