import Banner from "../components/Banner";
import Text from "../components/Text";
import Link from "next/link";

export const metadata = {
  title: "Bespoke Furniture",
  description: "Custom furniture solutions — indoor and outdoor.",
};

export default function FurnitureIndex() {
  const content = [
    <p key="1">
      Our bespoke furniture is a testament to indigenous design sensibilities combined with contemporary aesthetics. Each piece is meticulously handcrafted to meet your exact specifications and complement your space perfectly.
    </p>,
    <p key="2">
      Whether you're looking for custom indoor furniture for your home or office, or premium outdoor pieces for your garden and terrace, we provide tailored solutions. Our philosophy centers on creating furniture that is not only visually striking but also functionally superior.
    </p>,
    <p key="3">
      Choose <Link href="/furniture/indoor">Indoor Furniture</Link> or <Link href="/furniture/outdoor">Outdoor Solutions</Link> to explore our collections.
    </p>,
  ];

  return (
    <>
      <Banner heading="Bespoke Furniture" image="/images/furniture.png" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Bespoke Furniture" content={content} />
      </div>
    </>
  );
}
