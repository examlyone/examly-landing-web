'use client';

import Image from "next/image";
import { Typography } from "../common/Typography";

export default function Exams() {
    return (
        <section className="container mx-auto px-4 py-12 bg-[#f6f6f6] rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/2">
                    <Typography variant="h1" className="text-2xl md:text-4xl font-bold mb-4">
                        Ace Your CPA, CMA, ACCA, and EA Exams with Examly
                    </Typography>
                </div>
                <div className="w-full md:w-1/2 text-gray-700">
                    <p>
                        At Examly, we redefine how professionals prepare for global certifications like CPA, CMA, ACCA, and EA.
                        With expert-led content, cutting-edge learning tools, and proven success strategies, we ensure you achieve
                        your career goals faster and smarter.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-16">
                <div className="bg-[url('/images/home/candidate.svg')] bg-cover bg-center bg-no-repeat text-white rounded-xl p-6 w-full md:w-[40%] h-[300px] flex flex-col justify-between">
                    <div>
                        <Typography variant="h1" className="text-4xl font-bold mb-2 text-white">
                            3M+
                        </Typography>
                        <Typography variant="body1">
                            CPA candidates who have prepared with Examly.
                        </Typography>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        {["/images/products/profile.png", "/images/products/profile.png", "/images/products/profile.png", "/images/products/profile.png"].map((src, i) => (
                            <Image
                                key={i}
                                src={src}
                                alt={`user${i}`}
                                width={40}
                                height={40}
                                className="rounded-full border-2 border-white"
                            />
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-[#1e3a4c] text-xl font-semibold cursor-pointer">
                            +
                        </div>
                    </div>
                </div>

                {/* Right Card */}
                <div className="relative w-full md:w-[60%] h-[300px] rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/home/choose-examly.svg')] bg-cover bg-center bg-no-repeat bg-opacity-40 flex items-center justify-center">
                        <Typography variant="h1" className="text-white text-2xl md:text-4xl font-semibold">
                            WHY CHOOSE EXAMLY
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
    );
}
