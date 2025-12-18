import Banner from "../components/Banner";
import Text from "../components/Text";
import Link from "next/link";
import { Grid } from "../components/Grid";
import { WobbleCards } from "../components/WobbleCards";

export const metadata = {
  title: "Elevation Design",
  description: "Elevation design services by Essentia Environments",
};

export default function ElevationPage() {
  const content = [
    <p key="1">
      Our elevation design service focuses on façades, materiality and detailing to create beautiful and functional building exteriors. We blend architectural precision with aesthetic vision, creating elevations that are not just visually stunning but also structurally superior. Our approach combines contemporary aesthetics with timeless design principles.
    </p>,
  ];

  const content2 = [
    <p key="2">
      From residential villas to commercial complexes, our elevation designs reflect a deep understanding of proportion, material selection, and contextual relevance. We ensure that every façade tells a story and enhances the overall architectural expression of your building. Each design is meticulously crafted to harmonize with its surroundings while establishing a distinctive architectural identity.
    </p>,
    <p key="3">
      We specialize in creating elevations that balance aesthetics with functionality, incorporating innovative materials and sustainable design practices. Whether contemporary, classical, or transitional, our elevation designs elevate your architectural vision. <Link href="/projects">Explore our elevation projects</Link> to see our work in action.
    </p>,
  ];

  return (
    <>
      <Banner heading="Elevation Design" image="/images/elevation.jpg" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Elevation Design: Architectural Excellence" content={content} />
        <Grid />
        <Text content={content2} />
        <WobbleCards />
      </div>
    </>
  );
}
