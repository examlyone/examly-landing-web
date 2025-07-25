'use client'
export default function CounterSection() {
    return (
        <div className="flex flex-col md:flex-row items-stretch gap-6">
            {/* Left Side: Image with overlay icon */}
            <div className="w-full md:w-[300px] md:flex-1 h-[200px] md:h-auto ">
                <img
                    src="/images/home/hero.svg"
                    alt="hero"
                    className="w-full h-full object-contain rounded-2xl"
                />
            </div>

            {/* Right Side: Stat Card */}
            <div className="bg-[#F9F0DF] px-6 py-6 rounded-2xl border border-gray-300 shadow-md w-full md:flex-1 flex flex-col justify-between">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#143E39]">3M+</h2>
                <p className="mt-2 text-[#143E39] text-sm">
                    CPA candidates who have prepared with Examly.
                </p>
                <div className="mt-4 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#143E39]" style={{ width: '70%' }}></div>
                </div>
            </div>
        </div>
    )
}