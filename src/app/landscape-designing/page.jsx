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
      Transform your outdoor spaces into serene and beautiful landscapes. Our landscape design services create environments that complement your home while enhancing natural beauty. We specialize in creating harmonious outdoor living spaces.
    </p>,
    <p key="2">
      From meticulously landscaped lawns to vertical gardens and lush greenery, we seamlessly integrate nature into your design. Our approach combines horticultural expertise with aesthetic vision, creating outdoor spaces that promote well-being and a deep connection to nature.
    </p>,
    <p key="3">
      Explore related services <Link href="/services">here</Link> and view our project portfolio <Link href="/projects">here</Link>.
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
