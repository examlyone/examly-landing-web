'use client';
import OurFeatures from '@/components/product/our-features';
import Home from "@/components/home/hero-page";
import TestimonialSlider from '@/components/product/TestimonialSlider';
import Faqs from '@/components/common/faqs';
import ExamlyPossibility from '@/components/common/examly-possibility';
import Exams from '@/components/home/exams';

export default function HomePage() {
    return (
        <section className="container mx-auto py-12 mt-16">
          
          <Home />
          <Exams/>
          <OurFeatures /> 
          <TestimonialSlider/>
          <Faqs/>
          <ExamlyPossibility/>  

        </section>
    );
}