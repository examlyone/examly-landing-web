'use client'
import { Typography } from "../common/Typography";
import { Button } from "../common/Button";
export default function MegaBanksPage() {
    return (
        <section className="container mx-auto py-12 items-center justify-center">
            <div className=" text-center gap-6">
                <Typography variant="h1" className="text-2xl md:text-6xl font-bold mb-4">
                    Mega Bank for CMA®
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                    Our CMA Review materials are updated annually and aligned to the Certified Management Accountant (CMA®) Exam Content Specification Outlines to ensure you study exactly what you need to know on exam day.
                </Typography>
                <div className="flex items-center justify-center gap-4">
                    <Button variant="filled" href="/try-it-free" showArrow={false}>
                        Try it for free
                    </Button>
                    <Button variant="text" href="/try-it-free" showArrow={false}>
                        View Comparison
                    </Button>
                </div>
            </div>
        </section>
    )
}