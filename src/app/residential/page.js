/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Banner from "../components/Banner";
import Text from "../components/Text";
import ProjectsGallery from "../components/ProjectsGallery";
import { ProjectsHover } from "../components/ProjectsHover";

export const metadata = {
  title: "Residential Projects",
  description:
    "Explore our residential projects that blend aesthetics with functionality, creating dream homes tailored to your lifestyle.",
};

const page = () => {
  const aboutHeading =
    "Luxury Residential Interiors: Designing Homes With Elegance";
  const aboutText = [
   <p key="1">
  {`Essentia Environments stands as a pinnacle of excellence in
  <b>luxury residential interior design</b>, transforming ordinary houses
  into extraordinary homes. We believe that a home should be a sanctuary, a
  reflection of the homeowner&apos;s personality and lifestyle. As one of the
  <b>
    best residential interior designers in Gurgaon and all over India too.
  </b>
  , we possess a unique ability to translate our clients&apos; visions into
  tangible realities, creating <b>interiors</b> that exude elegance and
  sophistication.`}
</p>,

<p key="2">
 {` Our extensive portfolio showcases our mastery in designing luxurious
  apartments and sprawling farmhouses. We understand that each project is
  unique, requiring a tailored approach that considers the client&apos;s
  individual needs and preferences. As a leading name among
  <b>residential interior designers in Gurgaon and Delhi NCR</b>, we take
  pride in our ability to infuse a distinct blend of elegance, refinement,
  and vibrant originality into every space we create.`}
</p>

  ];
  const projects = [
    {
      id: 1,
      title: "Contemporary Villa",
      image: "/images/project1.jpg",
      href: "/projects/1",
    },
    {
      id: 2,
      title: "Urban Apartment",
      image: "/images/project2.jpg",
      href: "/projects/2",
    },
    { id: 3, title: "Luxury Retreat", image: "/images/project3.jpg" },
    { id: 4, title: "Minimalist Haven", image: "/images/project4.webp" },
    { id: 5, title: "Futuristic Workspace", image: "/images/project5.webp" },
    { id: 6, title: "Courtyard House", image: "/images/project6.jpg" },
    // …add more; they’ll fill two rows and scroll horizontally on md+
  ];
  return (
    <>
      <Banner heading="Residential" image="/images/residential.jpg" />
      <Text heading={aboutHeading} content={aboutText} />
      <ProjectsGallery title="Latest Projects" projects={projects} />
      {/* <ProjectsHover  /> */}
    </>
  );
};

export default page;
