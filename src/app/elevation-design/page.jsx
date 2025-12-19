import React from "react";
import Banner from "../components/Banner";
import Text from "../components/Text";

export const metadata = {
  title: "Elevation Design",
  description:
    "Stunning elevation designs by Essentia Environments – enhancing architectural beauty.",
};

// Same images that load on the official elevation page
// https://essentiaenvironments.com/elevation-design/
const galleryImages = [
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/03/Nizamuddin_Formal-Living-Area-02_3rd-Floor.jpg",
    alt: "Nizamuddin Formal Living Area elevation view",
  },
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/04/Amit-Goel-Residence_Elevation-View-8-scaled.jpg",
    alt: "Amit Goel Residence elevation view",
  },
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/03/main-1.jpg",
    alt: "Essentia elevation main view 1",
  },
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/03/main-2.jpg",
    alt: "Essentia elevation main view 2",
  },
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/03/main-3.jpg",
    alt: "Essentia elevation main view 3",
  },
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/03/main-4.jpg",
    alt: "Essentia elevation main view 4",
  },
];

const Page = () => {
  const content = [
    <p key="1">
      Essentia Environments, an acclaimed residential interior designer in
      Gurgaon, specializes in creating stunning rooms that not only enhance the
      beauty of your space but also reflect your unique personality. Our
      dedicated team of talented designers and craftsmen work tirelessly to
      merge innovative designs with precise architectural blueprints, resulting
      in iconic elevations that truly express your individuality. We believe
      that every space should be a canvas, showcasing your tastes and lifestyle
      through thoughtful detailing and exceptional craftsmanship.
    </p>,
    <p key="2">
      From the moment we engage with you, our focus is on understanding your
      vision and aspirations. At Essentia Environments, we take the time to
      immerse ourselves in your ideas, ensuring that we grasp your style
      preferences, functional needs, and overall aesthetic. This comprehensive
      approach allows us to deliver customized design solutions that resonate
      deeply with our clients, solidifying our reputation as one of the best
      interior designers in Gurgaon.
    </p>,
    <p key="3">
      Utilizing only state-of-the-art materials and selections, we transform
      your vision into a tangible masterpiece. Every detail is meticulously
      considered, from the color palette to the choice of furnishings, creating
      a harmonious blend that is both visually stunning and pragmatically
      excellent. We recognize that the finest designs must also serve a
      purpose; hence, functionality is at the forefront of our design process.
      Our team integrates smart storage solutions and user-friendly layouts that
      enhance your living experience.
    </p>,
    <p key="4">
      Keeping abreast of the latest design trends, we continue to evolve in our
      approach, introducing innovative ideas that challenge traditional notions
      of interior design. Our commitment to excellence and client satisfaction
      has positioned Essentia Environments as a leader in the industry. We
      understand the beauty of enhancing spaces sustainably, which is why we
      work to incorporate eco-friendly materials and practices into our designs.
    </p>,
    <p key="5">
      In every sense, our mission revolves around craftsmanship and enhancing
      your surroundings through refinement and opulence. At Essentia
      Environments, we transform interiors into living expressions of
      sophisticated taste and personality. Our dedication to providing an
      exceptional design experience ensures that we are not merely creating
      spaces; we are crafting environments that feel truly yours.
    </p>,
  ];

  return (
    <>
      <Banner heading="Elevation Design" image="/images/elevation-design-1.jpg" />
      <div className="container mx-auto px-6 py-12 space-y-12">
        <Text
          heading="Stunning Elevation Designs: Enhancing Architectural Beauty"
          content={content}
        />

        <section>
          <h2 className="mb-6 text-2xl font-semibold">
            Elevation Design Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
