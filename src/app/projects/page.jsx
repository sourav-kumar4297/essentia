import Banner from "../components/Banner";
import Text from "../components/Text";
import ProjectsGallery from "../components/ProjectsGallery";
import ProjectsHover from "../components/ProjectsHover";
import LatestCreations from "../components/LatestCreations";

export const metadata = {
  title: "Projects",
  description: "Explore our portfolio across residential and commercial projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <Banner heading="Projects" image="/images/banner-projects.webp" />

      <div className="container mx-auto px-6 py-12">
        <Text
          heading="Selected Works"
          content={[
            <p key="intro">
              Here are some of our recent projects showcasing design, execution
              and bespoke furniture solutions across a variety of typologies.
            </p>,
          ]}
        />

        <ProjectsGallery title="Latest Projects" />
        <ProjectsHover />
        <LatestCreations />
      </div>
    </>
  );
}
