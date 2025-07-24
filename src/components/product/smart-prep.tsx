'use client'
import { Button } from '../common/Button';
import { Typography } from '../common/Typography';
export default function SmartPrep() {
    return (
        <section className="container mx-auto py-12">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className='w-full md:w-[45%]'>
                    <Typography variant="h1" className="text-4xl md:text-6xl mb-4">
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

                </div>
            </div>

        </section>
    );
}