import Banner from "../../components/Banner";
import Text from "../../components/Text";
import ProjectsGallery from "../../components/ProjectsGallery";
import LatestCreations from "../../components/LatestCreations";

export const metadata = {
  title: "Commercial Projects",
  description: "Commercial interior and architectural projects by Essentia.",
};

export default function CommercialProjects() {
  const intro = [
    <p key="1">
      Essentia's commercial projects deliver efficient, beautiful and brand
      forward workspaces — from corporate offices to retail and hospitality.
    </p>,
  ];

  const sampleProjects = [
    { id: 1, title: "Office Fitout", image: "/images/project2.jpg" },
    { id: 2, title: "Retail Fitout", image: "/images/project3.jpg" },
  ];

  return (
    <>
      <Banner heading="Commercial" image="/images/commercial.webp" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Commercial Portfolio" content={intro} />
        <ProjectsGallery title="Selected Commercial Works" projects={sampleProjects} />
        <LatestCreations />
      </div>
    </>
  );
}
