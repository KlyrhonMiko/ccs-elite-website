import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import EventsSection from "@/components/landing/EventsSection";
import BudgetSection from "@/components/landing/BudgetSection";
import SideNav from "@/components/landing/SideNav";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <SideNav />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <BudgetSection />
    </div>
  );
}
