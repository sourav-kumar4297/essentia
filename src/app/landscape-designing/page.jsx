import Banner from "../components/Banner";
import Text from "../components/Text";
import Link from "next/link";
import { Grid } from "../components/Grid";
import { WobbleCards } from "../components/WobbleCards";

export const metadata = {
  title: "Landscape Designing",
  description: "Landscape solutions for residential and commercial projects.",
};

export default function LandscapePage() {
  const content = [
    <p key="1">
      Transform your outdoor spaces into serene and beautiful landscapes. Our landscape design services create environments that complement your home while enhancing natural beauty. We specialize in creating harmonious outdoor living spaces that become extensions of your indoor aesthetic.
    </p>,
  ];

  const content2 = [
    <p key="2">
      From meticulously landscaped lawns to vertical gardens and lush greenery, we seamlessly integrate nature into your design. Our approach combines horticultural expertise with aesthetic vision, creating outdoor spaces that promote well-being and a deep connection to nature. We incorporate sustainable practices, indigenous plants, and water features to create dynamic landscapes.
    </p>,
    <p key="3">
      Whether designing intimate garden spaces, sprawling estates, or commercial landscapes, our team brings creativity and technical expertise to every project. We ensure that every element—from plant selection to hardscaping—works harmoniously to create your ideal outdoor sanctuary.
    </p>,
  ];

  return (
    <>
      <Banner heading="Landscape Designing" image="/images/landscape-design-1.jpg" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Landscape Designing: Nature's Harmony" content={content} />
        <Grid />
        <Text content={content2} />
        <WobbleCards />
      </div>
    </>
  );
}
