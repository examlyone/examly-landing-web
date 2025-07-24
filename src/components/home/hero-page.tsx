import { Button } from "@/components/common/Button";
import { Text } from "@/components/common/Text";
import { Typography } from "@/components/common/Typography";
import Image from "next/image";
import { CardGroup } from "./cardgroup";

export default function Home() {
  return (
    <section className="container mx-auto py-12 mt-16">
      {/* Hero Section with 60/40 grid layout */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Left column - 60% width (3/5 columns) */}
          <div className="md:col-span-2 flex flex-col justify-space-between">
            <Typography variant="h1" className="text-4xl md:text-6xl mb-4">
              Stay ahead of the curve with our forward-thinking
            </Typography>
            <Typography variant="body1" className="mb-8 text-justify">
              Examly is built for modern learners who demand flexibility, affordability,
              and smarter study tools. With 3M+ CPA candidates already trusting Examly, were not just another prep provider - were your edge to outperform the competition.
            </Typography>
            <div className="flex items-center space-x-4">
              <Button variant="filled" href="/features">
                Explore Features
              </Button>
              <Button variant="text" href="/comparison">
                View Comparison
              </Button>
            </div>
          </div>

          {/* Right column - 40% width (2/5 columns) */}
          <div className=" grid grid-cols-2 md:col-span-2 gap-6 items-center">
            <div className="flex justify-center items-center">
              <Image src="/images/home/hero.svg" alt="hero" width={300} height={300} />
            </div>
            <div className="grid grid-cols-1 gap-6 bg-[#F9F0DF] mt-9">
              <div className="grid grid-col justify-between md:h-64 md:py-10 sm:p-8 border border-gray-300 rounded-lg shadow-lg sm:h-25 lg-full h-full ">
                {/* Top section with stat and description */}
                <div className="flex flex-col sm:flex-col items-center justify-between">
                  <Text variant="h1" className={`text-[#F143E39] sm:text-4xl md:text-5xl  font-bold mb-2 `}>
                    3M+
                  </Text>
                  <Text variant="p" className={`text-[#143E39] text-sm text-justify p-5 font-normal`}>
                    CPA candidates who have prepared with Examly.
                  </Text>
                </div>

                {/* Bottom section with progress bar */}
                <div className="mt-auto">
                  <div className={`w-full h-1 bg-gray-200 rounded-full overflow-hidden`}>
                    <div
                      className={`h-full bg-blue-600 rounded-full`}
                      style={{ width: '70%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <HeroStatsGroup className="w-full" /> */}
            {/* <div className="md:col-span-2 flex flex-col justify-space-between">
              <div className="grid grid-cols-2 bg-red-100 p-10 rounded-lg shadow-lg sm:w-full gap-10 ">
                <div className="flex  items-center sm:grid-cols-1 bg-blue-500 h-20">
                  <Text variant="h5" className="">
                    Drive your career
                    forward,not your expenses.
                  </Text>
                  </div>
                <div className="flex justify-start items-center -20 flex gap-5">
                  <div className="bg-blue-500 p-5">1</div>
                  <div className="bg-blue-500 p-5">2</div>
                  <div className="bg-blue-500 p-5">3</div>
                </div>
              </div>
            </div> */}
            <CardGroup title={"Let’s move forward in life"} description={"Drive your career forward, not your expenses."}/>
          </div>
        </div>
      </div>
    </section>
  );
}
