import Hero from "@/components/sections/Hero";
import Improve from "@/components/sections/Improve";
import HowWeWork from "@/components/sections/HowWeWork";
import CRMIntegration from "@/components/sections/CRMIntegration";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Improve />
      <HowWeWork />
      <CRMIntegration />
      <FinalCta />
    </main>
  );
}
