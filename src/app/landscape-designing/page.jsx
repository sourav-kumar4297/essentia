import React from "react";
import Banner from "../components/Banner";
import Text from "../components/Text";

export const metadata = {
  title: "Landscape Designing",
  description:
    "Bespoke landscape design by Essentia Environments – nature-inspired outdoor spaces.",
};

// Key landscape imagery from official page
// https://essentiaenvironments.com/landscape-designing/
const galleryImages = [
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/03/Nizamuddin_Formal-Living-Area-02_3rd-Floor.jpg",
    alt: "Nizamuddin project – landscape and outdoor connection",
  },
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/04/Preeta-Goel_Night-scaled.jpg",
    alt: "Preeta Goel residence landscape at night",
  },
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/03/Shanti-Niketan_Basement_Bar-Area-scaled.jpg",
    alt: "Shanti Niketan basement bar and landscape view",
  },
];

const Page = () => {
  const content = [
    <p key="1">
      Essentia Environments, a renowned landscape design company, stands at the
      forefront of the landscape designing industry, specializing in the
      creation of elegant outdoor areas that significantly enhance your
      lifestyle. With a dedication to excellence and a passion for sustainable
      beauty, we transform luxurious residences, villas, and farmhouses into
      magnificent spaces that harmoniously blend classic beauty with
      contemporary flair.
    </p>,
    <p key="2">
      Our landscape design services are meticulously crafted to elevate the
      aesthetic appeal and functionality of your outdoor spaces. We understand
      that outdoor areas are an extension of your home, serving not only as a
      visual retreat but also as functional environments that epitomize
      luxurious living. Every project we undertake is a reflection of our
      commitment to quality, innovation, and the unique needs of our clients.
    </p>,
    <p key="3">
      Essentia Environments demonstrates expertise in taping elegance to useful
      design concepts. Doctors of architecture at Essentia Environments excel in
      translating customer ideas into beautiful final products. We shape every
      outdoor area to match individual homeowners’ expectations specifically
      through our landscape design services which cater to luxury apartments
      villas and farmhouses. Essentia Environments develops outdoor elements
      inspired by nature so you can experience natural beauty within your living
      environment through welcoming and restful spaces.
    </p>,
    <p key="4">
      Landscape design at our company begins with a detailed knowledge base of
      natural environments. Our belief is that weaving nature throughout designs
      yields dual improvements by creating visually pleasing settings also they
      establish peaceful places to be. We select plant species based on local
      climate needs while integrating beautiful water elements and green
      vegetation into most of our projects. Through meticulous design, your
      outside spaces maintain their colorful appearance in every season which
      creates memorable scenery for regular daily activities along with special
      events.
    </p>,
    <p key="5">
      Our landscape design company stands proud of its creative technological
      developments along with its sustainable approach to practice. Through our
      landscape facilit,y we pursue to manufacture gorgeous settings alongside
      eco-friendly design solutions. The trained architects from our company
      combine sustainable landscape techniques with visual excellence to achieve
      aesthetic beauty in outdoor spaces. The company’s dedication to ecological
      answers enables its designed landscapes to simultaneously remain gorgeous
      and beneficial for the surrounding environment.
    </p>,
    <p key="6">
      The experience of working with Essentia Environments is one characterized
      by collaboration and creativity. From our initial consultation to the
      final installation, we prioritize your vision, incorporating your ideas
      and preferences into the design process. Our goal is to ensure that the
      outdoor space we create not only meets your expectations but exceeds them.
      Our landscape design services encompass everything from concept
      development to maintenance, ensuring that your investment remains
      beautiful over time.
    </p>,
    <p key="7">
      By blending beauty and utility, we create outdoor areas that represent
      your refined taste while providing a peaceful getaway from the hustle and
      bustle of everyday life. Each project we take on is an opportunity to
      showcase our ability to deliver elegance and sophistication, offering
      clients a space that feels both luxurious and welcoming.
    </p>,
    <p key="8">
      In summary, Essentia Environments is your premier partner in landscape
      designing. As a distinguished landscape design company, we are dedicated
      to enhancing your outdoor living experience through our comprehensive
      landscape design services. Our nature-inspired designs, created by
      talented architects, are tailored to elevate your property’s beauty and
      functionality. With us, you can expect a harmonious blend of art and
      nature that transforms your outdoor spaces into exquisite retreats for
      relaxation and enjoyment. Experience the Essentia difference and let us
      craft an outdoor sanctuary that perfectly complements your lifestyle.
    </p>,
  ];

  return (
    <>
      <Banner heading="Landscape Designing" image="/images/landscaping.webp" />
      <div className="container mx-auto px-6 py-12 space-y-12">
        <Text
          heading="Bespoke Landscape Design: Nature-Inspired Outdoor Spaces"
          content={content}
        />

        <section>
          <h2 className="mb-6 text-2xl font-semibold">
            Landscape Design Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
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
