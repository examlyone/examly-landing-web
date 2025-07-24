'use client'

import { Button } from '../common/Button';
import { Typography } from './Typography';

export default function ExamlyPossibility() {
    return (
        <div className="container mx-auto py-12 max-w-[1400px] bg-[url('/images/products/frame.svg')] bg-contain bg-center bg-no-repeat rounded-md">
            <section className="container mx-auto py-12 ">
                <div className="flex flex-col items-center gap-2">
                    <Typography variant="h1" className="text-xl md:text-4xl mb-4 text-white">Examly has no limitations – only possibilities.</Typography>
                    <Typography variant="body1" className="mb-8 text-center text-white">Step forward into your future with smart learning, expert guidance, and AI-powered prep.Get started on your success journey with Examly today!</Typography>
                   <Button variant="outline" href="/try-it-free" showArrow={false}>
                            Try it for free
                        </Button>
                </div>
            </section>
        </div>
    )
}


