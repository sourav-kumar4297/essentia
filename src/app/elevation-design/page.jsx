import Banner from "../components/Banner";
import Text from "../components/Text";
import Link from "next/link";

export const metadata = {
  title: "Elevation Design",
  description: "Elevation design services by Essentia Environments",
};

export default function ElevationPage() {
  const content = [
    <p key="1">
      Our elevation design service focuses on façades, materiality and detailing to create beautiful and functional building exteriors. We blend architectural precision with aesthetic vision, creating elevations that are not just visually stunning but also structurally superior. Our approach combines contemporary aesthetics with timeless design principles.
    </p>,
    <p key="2">
      From residential villas to commercial complexes, our elevation designs reflect a deep understanding of proportion, material selection, and contextual relevance. We ensure that every façade tells a story and enhances the overall architectural expression of your building. Explore our projects to see elevation design examples: <Link href="/projects">View Our Projects</Link>.
    </p>,
  ];

  return (
    <>
      <Banner heading="Elevation Design" image="/images/elivation.jpg" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Elevation Design" content={content} />
      </div>
    </>
  );
}
