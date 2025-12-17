import Banner from "../../../components/Banner";
import Text from "../../../components/Text";

export const metadata = {
  title: "Outdoor Furniture",
  description: "Custom outdoor furniture by Essentia.",
};

export default function OutdoorFurniture() {
  const content = [
    <p key="1">Durable and beautiful outdoor furniture solutions.</p>,
  ];

  return (
    <>
      <Banner heading="Outdoor Furniture" image="/images/bespoke.webp" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Outdoor Furniture" content={content} />
      </div>
    </>
  );
}
