import { Button } from "@/components/common/Button";
import { Text } from "@/components/common/Text";
import { Typography } from "@/components/common/Typography";
import Image from "next/image";

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
          <div className="md:col-span-2">
            <div>
              <Image src="/images/home/hero.svg" alt="hero" width={300} height={300} />
              <div className="flex flex-col justify-between h-full p-6">
                {/* Top section with stat and description */}
                <div className="flex flex-col">
                  <Text variant="h1" className={`text-[#143E39] text-7xl font-bold mb-2`}>
                    3M+
                  </Text>
                  <Text variant="p" className={`text-[#143E39] text-sm`}>
                    CPA candidates
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
          </div>
        </div>
      </div>
    </section>
  );
}
