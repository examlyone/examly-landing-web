'use client'

import { Button } from '../common/Button';
import { Typography } from './Typography';

export default function ExamlyPossibility() {
    return (
        <section className="container mx-auto px-4">
        <div className="w-full mx-auto py-8 sm:py-12 lg:py-16 bg-[url('/images/products/frame.svg')] bg-cover sm:bg-contain bg-center bg-no-repeat rounded-md px-14 sm:px-6">
                <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
                    <Typography
                        variant="h1"
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4"
                    >
                        Examly has no limitations – only possibilities.
                    </Typography>
                    <Typography
                        variant="body1"
                        className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto mb-6 sm:mb-8"
                    >
                        Step forward into your future with smart learning, expert guidance, and AI-powered prep. Get started on your success journey with Examly today!
                    </Typography>
                    <Button
                        variant="outline"
                        href="/try-it-free"
                        showArrow={false}
                        className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base"
                    >
                        Try it for free
                    </Button>
                </div>
          
        </div>
          </section>
    )
}