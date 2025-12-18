import Banner from "../components/Banner";
import Text from "../components/Text";
import Link from "next/link";
import { Grid } from "../components/Grid";
import { WobbleCards } from "../components/WobbleCards";

export const metadata = {
  title: "Turnkey Execution",
  description: "Turnkey execution services — design to delivery.",
};

export default function TurnkeyPage() {
  const content = [
    <p key="1">
      Our turnkey execution service provides complete project delivery from initial design concept through final installation. We handle every aspect of your project with meticulous attention to detail and quality control.
    </p>,
  ];

  const content2 = [
    <p key="2">
      From design and procurement to on-site execution and project supervision, we ensure a seamless journey from vision to reality. Our integrated approach guarantees consistency, efficiency, and excellence at every stage of your project. We coordinate with architects, contractors, and suppliers to deliver projects on time and within budget.
    </p>,
    <p key="3">
      Whether it's a residential renovation, commercial fitout, or landscape transformation, our turnkey services eliminate the complexity of managing multiple vendors. You get a single point of contact who is responsible for the entire project execution, ensuring quality, timeline adherence, and complete satisfaction.
    </p>,
  ];

  return (
    <>
      <Banner heading="Turnkey Execution" image="/images/turnkey.jpg" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Complete Project Execution: Design to Delivery" content={content} />
        <Grid />
        <Text content={content2} />
        <WobbleCards />
      </div>
    </>
  );
}
