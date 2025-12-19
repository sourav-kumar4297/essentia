import React from "react";
import Banner from "../../components/Banner";
import Text from "../../components/Text";

export const metadata = {
  title: "Commercial Interior Solutions",
  description:
    "Commercial interior solutions by Essentia Environments – elevating workspaces with style.",
};

const galleryImages = [
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/03/ramprastha-1536x1152-1.webp",
    alt: "Ramprastha office interior",
    label: "Ramprastha Office",
  },
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/04/md_cabin_2.jpg",
    alt: "Elan office cabin",
    label: "Elan Office (Gurgaon)",
  },
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/03/elan-1536x1152-1.webp",
    alt: "Elan – The Presidential",
    label: "Elan – The Presidential (Gurgaon)",
  },
];

const Page = () => {
  const content = [
    <p key="1">
      At Essentia, recognized among leading corporate interior design firms, we
      specialize in transforming commercial spaces into sophisticated,
      functional environments that perfectly reflect your brand’s essence and
      elevate your business. Our design philosophy revolves around creating
      unique, inspiring spaces that leave a lasting impression. Our approach
      includes comprehensive design-build solutions that seamlessly integrate
      aesthetics with functionality, setting us apart in the industry.
    </p>,
    <p key="2">
      With the best minds leading our creative studio and an inspiring creative
      head steering the vision, our designs stand out for their innovation and
      elegance. Each project we undertake is a testament to our commitment to
      excellence and our attention to detail, providing tailored solutions that
      enhance your workspace.
    </p>,
    <p key="3">
      What sets Essentia apart is our signature touch we infuse into every
      design. This unique element ensures that your space not only meets your
      functional needs but also embodies the essence of Essentia’s design
      consciousness. Our approach guarantees that your commercial space becomes
      an extension of our creative vision, elevating workspaces to new levels of
      sophistication.
    </p>,
    <p key="4">
      Experience the transformation of corporate office interior design with
      Essentia as we partner with you to create extraordinary environments that
      elevate your business and redefine the standards of design-build
      solutions. Together, we can make your vision a reality.
    </p>,
  ];

  return (
    <>
      <Banner
        heading="Commercial Interior Solutions: Elevating Workspaces with Style"
        image="/images/commercial-projects-1.jpg"
      />

      <div className="container mx-auto px-6 py-12 space-y-16">
        <Text
          heading="Commercial Interior Solutions: Elevating Workspaces with Style"
          content={content}
        />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            Featured Commercial Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {galleryImages.map((img) => (
              <article
                key={img.src}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold">{img.label}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
