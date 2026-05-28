import HeroSection from "@/components/home/HeroSection";
import GlobalMarketsSection from "@/components/home/GlobalMarketsSection";
import PlatformSection from "@/components/home/PlatformSection";
import WhyArkaSection from "@/components/home/WhyArkaSection";
import AccountComparisonSection from "@/components/home/AccountComparisonSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GlobalMarketsSection />
      <PlatformSection />
      <WhyArkaSection />
      <AccountComparisonSection />
      <FinalCTA />
    </>
  );
}
