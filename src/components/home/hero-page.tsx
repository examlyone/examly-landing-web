import { Button } from "@/components/common/Button";
import { Typography } from "@/components/common/Typography";
import CareerChart from "./career-chart";
import CounterSection from "./counter-section";

export default function Home() {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center gap-4 xl:gap-6">
        <div className="w-full h-full md:w-1/2">
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
        <div className="w-full h-full md:w-1/2 gap-6">
          <div className="flex flex-col justify-between space-y-2">
            <div>
              <CounterSection />
            </div>
            <div>
              <CareerChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
