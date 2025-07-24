'use client';

import TestimonialSlider from '@/components/product/TestimonialSlider';
import Slider from '@/components/product/Slider';
import Effectivepreparation from '@/components/product/effective-preparation';

export default function Products() {
    return (
        <section className="container mx-auto py-12 mt-16">
            <Slider />
            <Effectivepreparation />
            <TestimonialSlider />
        </section>
    );
}
