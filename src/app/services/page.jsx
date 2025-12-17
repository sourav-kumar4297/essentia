import MissionVision from "../components/MissionVision";
import TimeLineEssentia from "../components/TimeLineEssentia";
import Presence from "../components/Presence";
import LeadershipSection from "../components/LeadershipSection";
import WobbleCards from "../components/WobbleCards";
import Banner from "../components/Banner";

export const metadata = {
  title: "Services",
  description: "Services offered by Essentia Environments — design, build and furnish.",
};

export default function ServicesPage() {
  return (
    <>
      <Banner heading="Services" image="/images/services-hero.png" />

      <div className="container mx-auto px-6 py-12 space-y-12">
        <MissionVision />
        <TimeLineEssentia />
        <Presence />
        <LeadershipSection />
        <WobbleCards />
      </div>
    </>
  );
}
