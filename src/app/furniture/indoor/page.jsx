import Banner from "../../../components/Banner";
import Text from "../../../components/Text";

export const metadata = {
  title: "Indoor Furniture",
  description: "Custom indoor furniture by Essentia.",
};

export default function IndoorFurniture() {
  const content = [
    <p key="1">Our indoor furniture is crafted for comfort and style.</p>,
  ];

  return (
    <>
      <Banner heading="Indoor Furniture" image="/images/furniture.png" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Indoor Furniture" content={content} />
      </div>
    </>
  );
}
