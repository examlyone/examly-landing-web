'use client';

import { Button } from "../common/Button";
import { Typography } from "../common/Typography";
import { features } from "../../data/featureData";

export default function OurFeatures() {
    return (
        <section className="container mx-auto py-12">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className='w-full md:w-1/2'>
                    <Typography variant="h1" className="text-xl md:text-4xl mb-4">
                        Our Features that Drive Success
                    </Typography>
                </div>
                <div className='w-full md:w-1/2'>
                    <Typography variant="body1" className="mb-8 text-justify">
                        We are the leading platform for CPA, CMA, ACCA, and EA exam preparation. We offer a complete range of learning tools to help students master concepts, practice effectively, and achieve top exam scores.                    </Typography>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" href="/try-it-free" showArrow={false}>
                            See More
                        </Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start mt-16">
                {features.map((item, idx) => (
                    <div key={idx} className={`flex flex-col items-start gap-4 shadow-lg p-4 rounded-xl hover:shadow-2xl transition-all duration-300`}>
                        <div className={`w-4 h-4 rounded-full ${item.dotColor}`} />
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <div className="flex items-center gap-2 py-2">
                            <p className="text-sm text-gray-600 w-[80%]">{item.desc}</p>
                            <Button variant="outline" showArrow={false}>
                                View
                            </Button>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}