import Banner from "../../components/Banner";
import Text from "../../components/Text";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy — Essentia Environments",
};

export default function PrivacyPage() {
  const content = [
    <p key="1">
      This Privacy Policy describes how Essentia Environments collects and
      uses information. We respect your privacy and handle data responsibly.
    </p>,
  ];

  return (
    <>
      <Banner heading="Privacy Policy" image="/images/interior-design.jpg" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Privacy Policy" content={content} />
      </div>
    </>
  );
}
