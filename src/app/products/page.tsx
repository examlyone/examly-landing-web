'use client';

import TestimonialSlider from '@/components/product/TestimonialSlider';
import Slider from '@/components/product/Slider';

export default function Products() {
    return (
        <section className="container mx-auto py-12 mt-16">
            <Slider />
            <TestimonialSlider />
        </section>
    );
}
