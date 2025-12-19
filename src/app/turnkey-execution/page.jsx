import React from "react";
import Banner from "../components/Banner";
import Text from "../components/Text";

export const metadata = {
  title: "Turnkey Execution",
  description:
    "Turnkey interior solutions by Essentia Environments – seamless execution from concept to reality.",
};

const projects = [
  "Apartment Camellias (Gurgaon)",
  "Whiteland Snowflat (Gurgaon)",
  "Show Flat Jaipur",
  "Office Gurgaon",
  "Office Gwalior",
  "Villa Faridabad",
  "Elan Sales Gallery Gurgaon",
  "Farm House Vasant Kunj",
  "Apartment Magnolias",
  "Villa Maharani Bagh",
];

const Page = () => {
  const content = [
    <p key="1">
      In the realm of high-end interior design, the complexities of managing
      multiple contractors and coordinating various design elements can often
      overshadow the excitement of creating a dream space. Essentia
      Environments understands this challenge, which is why we specialize in
      providing comprehensive end-to-end turnkey interior design solutions. We
      alleviate the stress and streamline the process, positioning ourselves as
      your trusted Turnkey Interior designer.
    </p>,
    <p key="2">
      Our approach is built on a foundation of meticulous planning and
      disciplined execution. We believe that a successful project is not just
      about aesthetics; it’s also about efficiency and reliability. Our
      dedicated team operates with a commitment to on-time, within-budget
      delivery, ensuring that your vision is realized without any unexpected
      delays or cost overruns. This unwavering dedication allows us to provide a
      seamless experience from concept to completion.
    </p>,
    <p key="3">
      We recognize that our clientele often possesses demanding, high-end
      visions. These visions, while inspiring, can present significant
      logistical challenges. Essentia Environments excels at transforming these
      intricate concepts into flawlessly executed luxury realities. Our
      expertise in project management and our network of trusted contractors
      enable us to navigate complexities with ease, ensuring that every detail
      is meticulously addressed.
    </p>,
    <p key="4">
      Our solutions are designed to provide a stress-free experience, allowing
      you to focus on the excitement of seeing your dream space come to life. We
      handle all aspects of the project, from initial design consultations and
      material selection to construction, installation, and final styling. This
      comprehensive approach eliminates the need for you to juggle multiple
      contractors and manage disparate timelines.
    </p>,
    <p key="5">
      Essentia Environments is committed to offering a level of service that
      transcends expectations. We believe in building strong client
      relationships based on trust, transparency, and open communication. We
      keep you informed at every stage of the process, providing regular updates
      and addressing any concerns promptly. Our goal is to create a
      collaborative environment where your voice is heard, and your vision is
      realized.
    </p>,
    <p key="6">
      The true essence of our end-to-end turnkey interior design solutions lies
      in our ability to deliver a seamless and luxurious experience. We
      understand that your time is valuable, and we strive to maximize
      efficiency without compromising quality. By entrusting your project to
      Essentia Environments, you can be confident that your dream space will be
      transformed into a tangible reality with a level of sophistication and
      refinement that reflects your unique style and discerning taste. Our
      commitment to excellence makes us the premier turnkey Interior designer of
      choice.
    </p>,
  ];

  return (
    <>
      <Banner
        heading="Turnkey Interior Solutions: Seamless Execution from Concept to Reality"
        image="/images/turnkey-execution-1.jpg"
      />

      <div className="container mx-auto px-6 py-12 space-y-16">
        <Text
          heading="Turnkey Interior Solutions: Seamless Execution from Concept to Reality"
          content={content}
        />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            Recent Turnkey Interior Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((name) => (
              <div
                key={name}
                className="rounded-2xl border border-border bg-card p-4 text-sm shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
