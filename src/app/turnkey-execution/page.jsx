import Banner from "../../components/Banner";
import Text from "../../components/Text";
import Link from "next/link";

export const metadata = {
  title: "Turnkey Execution",
  description: "Turnkey execution services — design to delivery.",
};

export default function TurnkeyPage() {
  const content = [
    <p key="1">
      Essentia offers full turnkey execution — design, procurement and
      delivery. Learn about our <Link href="/services">services</Link> or view
      recent <Link href="/projects">projects</Link>.
    </p>,
  ];

  return (
    <>
      <Banner heading="Turnkey Execution" image="/images/turnkey.jpg" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Turnkey Execution" content={content} />
      </div>
    </>
  );
}
