import Banner from "../../components/Banner";
import Text from "../../components/Text";

export const metadata = {
  title: "Return Policy",
  description: "Return Policy — Essentia Environments",
};

export default function ReturnsPage() {
  const content = [
    <p key="1">
      Our return policy applies to merchandise where applicable. Please contact
      support for returns and refunds.
    </p>,
  ];

  return (
    <>
      <Banner heading="Return Policy" image="/images/banner1.webp" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Return Policy" content={content} />
      </div>
    </>
  );
}
