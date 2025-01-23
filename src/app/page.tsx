import { Features } from "./components/Features";
import HeroSection from "./components/HeroSection";

import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";

export default function Home() {
  return (
    <main className=" ">
      <div className="">
        {/* Hero Section Area */}
        <section>
          <div className=" ">
            <HeroSection />
          </div>
        </section>
      </div>
      {/* Promotion Section Area */}
      <div className="py-12 my-[150px]">
        <h2 className="text-center font-bold text-3xl md:text-3xl mb-11">
          Platform Features
          <br />
        </h2>
        <div className="container mx-auto px-4 lg:px-8 flex justify-between">
          <Features
            title="Real-Time Interaction"
            description="Engage with peers and mentors instantly to solve doubts efficiently."
          />
          <Features
            title="Personalized Dashboard"
            description="Track your questions, responses, and progress in one place."
          />
          <Features
            title="Expert Mentors"
            description="Connect with subject matter experts to deepen your understanding."
          />
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 justify-around">
          <div>
            <h2 className="text-start font-bold mb-4 text-2xl md:text-3xl">
              Latest Questions
            </h2>
            <LatestQuestions />
          </div>
          <div className="ms-[250px]">
            <h2 className="text-start font-bold mb-4 text-2xl md:text-3xl">
              Top Contributors
            </h2>
            <TopContributers />
          </div>
        </div>
      </section>
    </main>
  );
}
