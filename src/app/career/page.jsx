import Banner from "../components/Banner";
import CareerSection from "../components/CareerSection";
import Text from "../components/Text";

export const metadata = {
  title: "Careers",
  description: "Join Essentia — current openings and career opportunities.",
};

export default function CareerPage() {
  return (
    <>
      <Banner heading="Careers" image="/images/team-group.jpg" />
      <div className="container mx-auto px-6 py-12">
        <Text
          heading="Work with Us"
          content={[
            <p key="1">
              We are always looking for talented designers, project managers and
              craftsmen. Send your CV to <strong>info@essentiaenvironments.com</strong>.
            </p>,
          ]}
        />

        <CareerSection />
      </div>
    </>
  );
}
