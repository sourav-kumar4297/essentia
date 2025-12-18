import Banner from "../../components/Banner";
import Text from "../../components/Text";
import { Grid } from "../../components/Grid";
import { WobbleCards } from "../../components/WobbleCards";

export const metadata = {
  title: "Outdoor Furniture",
  description: "Custom outdoor furniture by Essentia.",
};

export default function OutdoorFurniture() {
  const content = [
    <p key="1">
      Our outdoor furniture collection combines durability with sophisticated design. We create weather-resistant pieces that bring luxury and functionality to your patios, gardens, and terraces. Every piece is crafted with premium materials and attention to detail.
    </p>,
  ];

  const content2 = [
    <p key="2">
      From lounge seating and dining sets to custom shade structures and outdoor kitchens, our bespoke outdoor furniture solutions transform your exterior spaces into premium living areas. We understand the unique challenges of outdoor environments and design pieces that withstand the elements while maintaining their aesthetic appeal.
    </p>,
    <p key="3">
      Our outdoor furniture reflects the same design philosophy as our indoor pieces—indigenous craftsmanship combined with contemporary aesthetics. Whether you prefer modern minimalism or classic elegance, we create outdoor furniture that complements your architectural vision and lifestyle.
    </p>,
  ];

  return (
    <>
      <Banner heading="Outdoor Furniture" image="/images/outdoor-furniture.webp" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Outdoor Furniture: Luxury for Every Season" content={content} />
        <Grid />
        <Text content={content2} />
        <WobbleCards />
      </div>
    </>
  );
}
