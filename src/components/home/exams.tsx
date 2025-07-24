'use client';

import { Typography } from "../common/Typography";

export default function Exams() {
    return (
        <section className="container mx-auto py-12">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-full md:w-1/2">
                    <Typography variant="h1" className="text-xl md:text-4xl mb-4">
                        Ace Your CPA, CMA, ACCA, and EA Exams with Examly
                    </Typography>
                </div>
                <div className="w-full md:w-1/2">
                    At Examly, we redefine how professionals prepare for global certifications like CPA, CMA, ACCA, and EA. With expert-led content, cutting-edge learning tools, and proven success strategies, we ensure you achieve your career goals faster and smarter.
                </div>
            </div>
        </section>
    )
}