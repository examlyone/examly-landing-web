import { Button } from "@/components/common/Button";
import { Text } from "@/components/common/Text";
import { Typography } from "@/components/common/Typography";
import Image from "next/image";
import { CardGroup } from "./cardgroup";

export default function Home() {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          <div className="md:col-span-2 flex flex-col justify-between">
            <Typography variant="h1" className="text-2xl md:text-4xl mb-4">
              Stay ahead of the curve with our forward-thinking
            </Typography>
            <Typography variant="body1" className="mb-8 text-justify text-gray-700">
              Examly is built for modern learners who demand flexibility, affordability,
              and smarter study tools. With 3M+ CPA candidates already trusting Examly,
              we&apos;re not just another prep provider - we&apos;re your edge to outperform the competition.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button variant="filled" href="/features">
                Explore Features
              </Button>
              <Button variant="text" href="/comparison">
                View Comparison
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex justify-center items-center">
              <Image
                src="/images/home/hero.svg"
                alt="hero"
                width={300}
                height={300}
                className="w-full h-auto max-w-[300px]"
              />
            </div>
            <div className="flex flex-col justify-between bg-[#F9F0DF] p-4 border border-gray-300 rounded-lg shadow-lg h-[250px] md:mt-10">
              <div className="flex flex-col items-center">
                <Text variant="h1" className="text-[#143E39] text-4xl md:text-5xl font-bold mb-2">
                  3M+
                </Text>
                <Text variant="p" className="text-[#143E39] text-sm text-center px-2">
                  CPA candidates who have prepared with Examly.
                </Text>
              </div>
              <div className="mt-4">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '70%' }} />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <CardGroup
                title="Let’s move forward in life"
                description="Drive your career forward, not your expenses."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
