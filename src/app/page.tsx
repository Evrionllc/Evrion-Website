import Hero from "@/components/sections/hero/Hero";
import FlowLine from "@/components/ui/FlowLine";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Proof from "@/components/sections/Proof";
import WhyUs from "@/components/sections/WhyUs";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    // relative wrapper hosts the scroll-drawn thread behind every section
    <div className="relative">
      <FlowLine />
      <Hero />
      <Work limit={3} showAllLink />
      <Services />
      <Proof />
      <WhyUs />
      <CtaBanner />
    </div>
  );
}
