import Banner from "../components/Banner";
import Text from "../components/Text";
import Link from "next/link";

export const metadata = {
  title: "Landscape Designing",
  description: "Landscape solutions for residential and commercial projects.",
};

export default function LandscapePage() {
  const content = [
    <p key="1">
      We create functional and aesthetic landscapes. Explore related services
      <Link href="/services"> Services</Link> and our <Link href="/projects">Projects</Link>.
    </p>,
  ];

  return (
    <>
      <Banner heading="Landscape Designing" image="/images/landscaping.webp" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Landscape Designing" content={content} />
      </div>
    </>
  );
}
