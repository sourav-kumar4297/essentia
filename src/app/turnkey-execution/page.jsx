import Banner from "../components/Banner";
import Text from "../components/Text";
import Link from "next/link";

export const metadata = {
  title: "Turnkey Execution",
  description: "Turnkey execution services — design to delivery.",
};

export default function TurnkeyPage() {
  const content = [
    <p key="1">
      Our turnkey execution service provides complete project delivery from initial design concept through final installation. We handle every aspect of your project with meticulous attention to detail and quality control.
    </p>,
    <p key="2">
      From design and procurement to on-site execution and project supervision, we ensure a seamless journey from vision to reality. Our integrated approach guarantees consistency, efficiency, and excellence at every stage of your project.
    </p>,
    <p key="3">
      Learn about our full range of <Link href="/services">services</Link> or view our recent <Link href="/projects">projects</Link> to see turnkey execution in action.
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
