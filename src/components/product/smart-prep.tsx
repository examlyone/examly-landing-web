'use client'
import { Button } from '../common/Button';
import { Typography } from '../common/Typography';
import Image from 'next/image';
import { motion } from 'framer-motion';
export default function SmartPrep() {
    return (
        <section className="container mx-auto py-12">
            <div className="flex flex-col md:flex-row items-center xl:gap-48 gap-8">
                <div className='w-full md:w-[45%]'>
                    <Typography variant="h1" className="text-xl md:text-4xl mb-4">
                        Smartest Prep for CMA®
                    </Typography>
                    <Typography variant="body1" className="mb-8 text-justify">
                        Our CMA Review materials are updated annually and aligned to the Certified Management Accountant (CMA®) Exam Content Specification Outlines to ensure you study exactly what you need to know on exam day.
                    </Typography>
                    <div className="flex items-center gap-4">
                        <Button variant="filled" href="/try-it-free" showArrow={false}>
                            Try it for free
                        </Button>
                        <Button variant="text" href="/try-it-free" showArrow={false}>
                            View Comparison
                        </Button>
                    </div>
                </div>
                <div className='w-full md:w-[55%]'>
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <Image
                            src="/images/products/Macbook.svg"
                            alt="Laptop"
                            width={600}
                            height={400}
                            className="w-full max-w-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}