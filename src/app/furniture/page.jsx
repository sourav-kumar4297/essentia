import Banner from "../../components/Banner";
import Text from "../../components/Text";
import Link from "next/link";

export const metadata = {
  title: "Bespoke Furniture",
  description: "Custom furniture solutions — indoor and outdoor.",
};

export default function FurnitureIndex() {
  const content = [
    <p key="1">
      Explore our bespoke furniture collections. Choose <Link href="/furniture/indoor">Indoor</Link> or <Link href="/furniture/outdoor">Outdoor</Link> solutions.
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
