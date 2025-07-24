'use client'
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
    { id: 1, testimonial: '“ Examly’s structured approach and expert guidance have transformed my preparation. Their AI-driven study plans and real-time simulations made complex topics easy to master. Thanks to their innovative learning methods, I cleared my exam on the first attempt and feel confident in my career growth.”', name: 'John Doe', avatar: '/images/prep/iPad.svg' },
    { id: 2, testimonial: '“ Examly’s structured approach and expert guidance have transformed my preparation. Their AI-driven study plans and real-time simulations made complex topics easy to master. Thanks to their innovative learning methods, I cleared my exam on the first attempt and feel confident in my career growth.”', name: 'John Doe', avatar: '/images/prep/iPad.svg' },
    { id: 3, testimonial: '“ Examly’s structured approach and expert guidance have transformed my preparation. Their AI-driven study plans and real-time simulations made complex topics easy to master. Thanks to their innovative learning methods, I cleared my exam on the first attempt and feel confident in my career growth.”', name: 'John Doe', avatar: '/images/prep/iPad.svg' }
];
export default function TestimonialSlider() {
    const [activeTestimonial, setactiveTestimonial] = React.useState(0);
    return (
        <div className='bg-[#FAFAFA] mt-4 rounded-xl shadow-lg' >
            <div className='container mx-auto px-4 py-8'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    className="rounded-xl overflow-hidden"
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev'
                    }}
                    onSlideChange={(swiper) => setactiveTestimonial(swiper.realIndex)}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.id}>
                            <div className="flex justify-center items-center p-4">
                                <div className="relative w-full max-w-5xl">
                                    <Typography variant="h3" className="text-3xl">{slide.testimonial}</Typography>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex justify-end gap-6 mt-6">
                <button className="custom-prev bg-white p-1 rounded-sm shadow hover:bg-gray-100 transition border border-[#143E39]">
                    <CaretLeftIcon size={20} />
                </button>
                <button className="custom-next bg-white p-1 rounded-sm shadow hover:bg-gray-100 transition border border-[#143E39]">
                    <CaretRightIcon size={20} />
                </button>
            </div>
        </div>
    )
}