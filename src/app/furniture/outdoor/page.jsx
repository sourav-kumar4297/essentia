import React from "react";
import Banner from "../../components/Banner";

export const metadata = {
  title: "Outdoor Furniture",
  description:
    "Outdoor living: luxury furniture and landscape solutions by Essentia Environments.",
};

const products = [
  {
    code: "AC2037",
    name: "Indoor / Outdoor Furniture – AC2037",
    image:
      "https://essentiaenvironments.com/wp-content/uploads/2024/04/jadodia_res._terrace_8-scaled.jpg",
  },
  {
    code: "AC2038",
    name: "Bespoke Outdoor Furniture – AC2038",
    image:
      "https://essentiaenvironments.com/wp-content/uploads/2024/06/bespoke-furniture-outdoor-min.jpg",
  },
  {
    code: "AC2039",
    name: "Bespoke Outdoor Furniture – AC2039",
    image:
      "https://essentiaenvironments.com/wp-content/uploads/2024/03/Nizamuddin_Formal-Living-Area-02_3rd-Floor.jpg",
  },
  {
    code: "AC2040",
    name: "Bespoke Outdoor Furniture – AC2040",
    image:
      "https://essentiaenvironments.com/wp-content/uploads/2024/03/Shanti-Niketan_Basement_Bar-Area-scaled.jpg",
  },
];

const Page = () => {
  const content = [
    <p key="1">
      Essentia Environments stands as a pinnacle of excellence in luxury
      residential interior design, transforming ordinary houses into
      extraordinary homes. We believe that a home should be a sanctuary, a
      reflection of the homeowner’s personality and lifestyle. As one of the
      best residential interior designers in Gurgaon, we possess a unique
      ability to translate our clients’ visions into tangible realities,
      creating interiors that exude elegance and sophistication.
    </p>,
    <p key="2">
      Our extensive portfolio showcases our mastery in designing luxurious
      apartments and sprawling farmhouses. We understand that each project is
      unique, requiring a tailored approach that considers the client’s
      individual needs and preferences. As a leading name among residential
      interior designers in Gurgaon, we take pride in our ability to infuse a
      distinct blend of elegance, refinement, and vibrant originality into every
      space we create.
    </p>,
    <p key="3">
      Our approach to residential interior design is rooted in collaboration and
      communication. We work closely with our clients to understand their
      aspirations, ensuring that every design element reflects their personal
      style. From the initial concept development to the final installation, we
      maintain a transparent and collaborative process, keeping our clients
      informed and involved at every stage.
    </p>,
    <p key="4">
      We believe that true luxury lies in the details. That’s why we
      meticulously select only the finest materials, finishes, and furnishings,
      ensuring that every element contributes to the overall aesthetic of the
      space. Our team of skilled artisans and craftsmen bring our designs to
      life, creating bespoke pieces that are both beautiful and functional.
    </p>,
    <p key="5">
      As a prominent residential interior designer in Gurgaon, we understand the
      importance of creating spaces that are not only visually stunning but also
      conducive to comfortable living. We consider the flow of traffic, the
      interplay of light and shadow, and the functionality of each space,
      ensuring that our interiors are both practical and aesthetically
      pleasing.
    </p>,
    <p key="6">
      Our reputation as a top interior design firm is built on our commitment to
      excellence and our unwavering dedication to client satisfaction. We strive
      to exceed expectations, transforming homes into stunning living
      reflections of elegance, flair, and luxury. We are dedicated to
      consistently delivering the best interior solutions.
    </p>,
    <p key="7">
      We recognize that a home is more than just a place to live; it’s a
      reflection of one’s identity. Our expertise as residential interior
      designers in Gurgaon allows us to create spaces that resonate with our
      clients on a personal level, spaces that evoke a sense of belonging and
      comfort. Our aim is to create homes that are not only beautiful but also
      functional and inviting, spaces that enhance the quality of life for our
      clients. We strive to be the best in the field.
    </p>,
  ];

  return (
    <>
      <Banner
        heading="Outdoor Living: Luxury Furniture & Landscape Solutions"
        image="/images/outdoor-furniture-1.webp"
      />

      <section className="w-full bg-background py-16 px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">
          <div className="basis-3/5 space-y-6 text-lg leading-relaxed">
            {content.map((para, idx) => (
              <div key={idx}>{para}</div>
            ))}
          </div>
          <div className="basis-2/5 space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Crafted Outdoor Comfort, Inside-Out
            </h2>
            <p className="text-sm text-muted-foreground">
              Our outdoor furniture collections extend the same level of luxury
              and detailing found in our interiors to terraces, balconies and
              gardens.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-muted py-16 px-6">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="text-center text-2xl font-semibold">
            Outdoor Furniture Collection – AC2037 to AC2040
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((item) => (
              <article
                key={item.code}
                className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {item.code}
                  </span>
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <button className="mt-2 inline-flex items-center justify-center rounded-full border border-primary px-3 py-1 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
                    Enquire Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
