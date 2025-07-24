'use client'

import { Typography } from "../common/Typography";

export default function UnmatchedProductivity() {
    return (
        <section className="container mx-auto py-12">
            <Typography variant="h1" className="text-4xl md:text-6xl mb-4">
                Unmatched Productivity
            </Typography>
            <Typography variant="body1" className="mb-8 text-justify">
                We are the leading platform for CPA, CMA, ACCA, and EA exam preparation. We offer a complete range of learning tools to help students master concepts, practice effectively, and achieve top exam scores.
            </Typography>

            <div className="flex md:flex-row flex-col items-center gap-4">
                <div className="w-full md:w-[50%] h-[500px] bg-[url('/images/products/real-exam.svg')] bg-cover bg-center bg-no-repeat rounded-xl p-6 shadow-lg">
                    <Typography variant="h1" className="text-xl md:text-3xl mb-4 ">
                        Real Exam Simulations <br /> & Mock Tests
                    </Typography>
                    <Typography variant="body1" className="mb-8 ">
                        Mock tests that replicate the real exam experience for confidence.
                    </Typography>
                </div>
                <div className="w-full md:w-[50%]">
                    <div className="flex items-center gap-4">
                        <div className="w-1/2 flex flex-col gap-4">
                            <div className="w-full h-[240px] bg-[url('/images/products/live-expert.svg')] bg-cover bg-center bg-no-repeat rounded-xl p-6 text-white shadow-lg">
                                <Typography variant="h1" className="text-xl md:text-2xl mt-28 text-center text-white">
                                    Live Expert-Led Classes
                                </Typography>
                            </div>
                            <div className="w-full h-[240px] bg-[url('/images/products/offline-access.svg')] bg-cover bg-center bg-no-repeat rounded-xl p-6 text-white shadow-lg">
                                <Typography variant="h1" className="text-xl md:text-2xl mt-8 text-center text-white">
                                    Offline Access Anywhere
                                </Typography>
                            </div>
                        </div>
                        <div className="w-1/2 h-[500px] bg-[url('/images/products/personalised.svg')] bg-cover bg-center bg-no-repeat rounded-xl p-6 text-white shadow-lg">
                            <Typography variant="h1" className="text-xl md:text-2xl mt-100 text-black">
                                Personalised Learning
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
