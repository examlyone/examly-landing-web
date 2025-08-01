'use client';

import TestimonialSlider from '@/components/product/TestimonialSlider';
import Slider from '@/components/product/Slider';
import Faqs from '@/components/common/faqs';
import ExamlyPossibility from '@/components/common/examly-possibility';
import UnmatchedProductivity from '@/components/product/UnmatchedProductivity';
import SmartPrep from '@/components/product/smart-prep';
import Effectivepreparation from '@/components/product/effective-preparation';

export default function Products() {
    return (
        <section className="container mx-auto py-12 mt-16">
            <SmartPrep />   
            <UnmatchedProductivity />
            <Slider />
            <Effectivepreparation />
            <TestimonialSlider />
            <Faqs />
            <ExamlyPossibility />
        </section>
    );
}
