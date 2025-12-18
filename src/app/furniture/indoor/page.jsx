import Banner from "../../components/Banner";
import Text from "../../components/Text";
import { Grid } from "../../components/Grid";
import { WobbleCards } from "../../components/WobbleCards";

export const metadata = {
  title: "Indoor Furniture",
  description: "Custom indoor furniture by Essentia.",
};

export default function IndoorFurniture() {
  const content = [
    <p key="1">
      Our bespoke indoor furniture collection exemplifies the finest in handcrafted design and contemporary aesthetics. Each piece is meticulously created to reflect your personal style while enhancing the functionality of your space. We specialize in custom furniture that seamlessly integrates with your interior design vision.
    </p>,
  ];

  const content2 = [
    <p key="2">
      From elegant dining tables and sophisticated seating to custom cabinetry and built-in solutions, our indoor furniture spans all categories of home and office furnishing. Every piece is crafted with premium materials and executed with precision, ensuring durability and timeless appeal.
    </p>,
    <p key="3">
      Our design philosophy combines indigenous craftsmanship with contemporary design sensibilities. Whether you envision minimalist elegance, maximalist luxury, or classic sophistication, our team collaborates with you to create furniture that tells your story and transforms your living spaces into personal sanctuaries.
    </p>,
  ];

  return (
    <>
      <Banner heading="Indoor Furniture" image="/images/furniture-indoor-1.jpg" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Indoor Furniture: Bespoke Craftsmanship" content={content} />
        <Grid />
        <Text content={content2} />
        <WobbleCards />
      </div>
    </>
  );
}
