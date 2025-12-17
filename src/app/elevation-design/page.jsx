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
      Our elevation design service focuses on façades, materiality and
      detailing to create beautiful building exteriors. See our projects for
      examples: <Link href="/projects">Projects</Link>.
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
