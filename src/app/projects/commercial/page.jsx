import Banner from "../../components/Banner";
import Text from "../../components/Text";
import ProjectsGallery from "../../components/ProjectsGallery";
import LatestCreations from "../../components/LatestCreations";
import { Grid } from "../../components/Grid";
import { WobbleCards } from "../../components/WobbleCards";

export const metadata = {
  title: "Commercial Projects",
  description: "Commercial interior and architectural projects by Essentia.",
};

export default function CommercialProjects() {
  const intro = [
    <p key="1">
      Essentia's commercial projects deliver efficient, beautiful and brand-forward workspaces. From corporate offices and retail spaces to hospitality and hospitality environments, we create commercial interiors that enhance productivity, elevate brand identity, and provide exceptional experiences for clients and employees.
    </p>,
  ];

  const intro2 = [
    <p key="2">
      Our commercial expertise spans office fitouts, retail design, hotel interiors, restaurant and bar design, and corporate headquarters. We understand the unique requirements of commercial spaces—balancing aesthetics with functionality, brand identity with user comfort, and design vision with budget considerations.
    </p>,
  ];

  const sampleProjects = [
    { id: 1, title: "Office Fitout", image: "/images/project2.jpg" },
    { id: 2, title: "Retail Fitout", image: "/images/project3.jpg" },
  ];

  return (
    <>
      <Banner heading="Commercial Projects" image="/images/commercial-projects-1.jpg" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Commercial Portfolio: Designing Work Spaces" content={intro} />
        <Grid />
        <Text content={intro2} />
        <ProjectsGallery title="Selected Commercial Works" projects={sampleProjects} />
        <WobbleCards />
        <LatestCreations />
      </div>
    </>
  );
}
