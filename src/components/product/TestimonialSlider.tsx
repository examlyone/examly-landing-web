'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import React from 'react';
import { Typography } from '../common/Typography';
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import { slides } from '../../data/testimonialData';

export default function TestimonialSlider() {
    const [activeTestimonial, setactiveTestimonial] = React.useState(0);
    return (
        <div className='bg-[#FAFAFA] mt-4 rounded-xl shadow-lg' >
            <div className='container mx-auto px-4 py-8'data-aos="zoom-in-right" data-aos-duration="800">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
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
                            <div className="flex justify-center items-center px-4">
                                <div className="relative w-full max-w-5xl">
                                    <Typography variant="h1" className="text-xl md:text-2xl text-justify">{slide.testimonial}</Typography>
                                </div>
                            </div>
                            <div className="flex justify-between items-center md:px-24">
                                <div className="flex items-center gap-2">
                                    <Image src={slide.avatar} alt={slide.name} width={50} height={50} />
                                    <div>
                                        <Typography variant="h2" className="text-xl">{slide.name}</Typography>
                                        <Typography variant="h5" className="text-sm">{slide.desc}</Typography>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button className="custom-prev bg-white p-1 rounded-sm shadow hover:bg-gray-100 transition border border-[#143E39]">
                                        <CaretLeftIcon size={20} />
                                    </button>
                                    {activeTestimonial + 1}/{slides.length}
                                    <button className="custom-next bg-white p-1 rounded-sm shadow hover:bg-gray-100 transition border border-[#143E39]">
                                        <CaretRightIcon size={20} />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}