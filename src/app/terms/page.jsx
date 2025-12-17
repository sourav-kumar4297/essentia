import Banner from "../components/Banner";
import Text from "../components/Text";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions — Essentia Environments",
};

export default function TermsPage() {
  const content = [
    <p key="1">
      These Terms & Conditions govern the use of our website and services.
      By using this site you agree to our terms.
    </p>,
  ];

  return (
    <>
      <Banner heading="Terms & Conditions" image="/images/achivements.webp" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Terms & Conditions" content={content} />
      </div>
    </>
  );
}
