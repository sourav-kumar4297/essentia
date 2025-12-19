import React from "react";
import Banner from "../../components/Banner";
import Text from "../../components/Text";

export const metadata = {
  title: "Indoor Furniture",
  description:
    "Indoor bespoke furniture by Essentia Environments – elegant and custom-crafted pieces.",
};

// Key indoor furniture imagery from official pages
// https://essentiaenvironments.com/bespoke-furniture-indoor/
const galleryImages = [
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/06/bespoke-furniture-indoor-min.jpg",
    alt: "Bespoke indoor furniture by Essentia Environments",
  },
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/04/702_Master-Wardrobe_04-scaled.jpg",
    alt: "Master wardrobe bespoke furniture",
  },
  {
    src: "https://essentiaenvironments.com/wp-content/uploads/2024/04/PMP07781-scaled.jpg",
    alt: "Luxury living space with bespoke furniture",
  },
];

const categories = [
  {
    name: "Accent Chairs",
    codes: [
      "AC2037",
      "AC2038",
      "AC2039",
      "AC2040",
      "AC2041",
      "AC2042",
      "AC2043",
      "AC2044",
      "AC2045",
      "AC2046",
      "AC2048",
      "AC2049",
      "AC2050",
      "AC2051",
      "AC2052",
      "AC2053",
    ],
  },
  {
    name: "Consoles",
    codes: [
      "C2021",
      "C2022",
      "C2024",
      "C2025",
      "C2026",
      "C2027",
      "C2028",
      "C2029",
      "C2030",
      "C2031",
      "C2032",
      "C2033",
      "C2035",
      "C2036",
      "C2037",
      "C2038",
      "C2039",
      "C2040",
    ],
  },
  {
    name: "End Tables",
    codes: ["ET2029", "ET2030", "ET2031", "ET2032", "ET2033", "ET2034", "ET2035", "ET2036"],
  },
  {
    name: "Sofas",
    codes: ["CS2027", "CS2028", "CS2029", "CS2030", "CS2031", "CS2032", "CS2033"],
  },
  {
    name: "Sectional Sofas",
    codes: ["SS2016", "SS2017", "SS2018", "SS2019", "SS2020", "SS2021"],
  },
  {
    name: "Coffee Tables",
    codes: ["COT2030", "COT2031", "COT2032", "COT2033", "COT2034", "COT2035"],
  },
  {
    name: "Dining Tables",
    codes: ["DT2030", "DT2031", "DT2032", "DT2033", "DT2034", "DT2035"],
  },
  {
    name: "Dining Chairs",
    codes: ["DC2021", "DC2022", "DC2023", "DC2024", "DC2025", "DC2026"],
  },
  {
    name: "Bar Counters",
    codes: ["BC2009", "BC2010", "BC2011", "BC2012", "BC2013", "BC2014"],
  },
];

const Page = () => {
  const content = [
    <p key="1">
      Essentia Environments creates unique bespoke furniture that captures the
      essence of indoor elegance. Our painstakingly curated selection is the
      result of extensive research and a commitment to excellence, guaranteeing
      that each piece is a marvel of craftsmanship. Our exquisite furniture and
      finishes collection, which includes exotic textiles and wallpapers, takes
      every project to new levels of luxury.
    </p>,
    <p key="2">
      Our bespoke luxury furniture collections, which include Essentia
      Signature, Premium, Exotic, and Luxury, appeal to a wide range of
      preferences and budgets. Each piece is created to blend smoothly with our
      clients’ distinct styles, resulting in harmonious and efficient settings.
    </p>,
    <p key="3">
      Whether it’s a statement piece or a subtle accent, our bespoke interior
      designers create furniture that is designed to improve the beauty and
      utility of any space.
    </p>,
  ];

  return (
    <>
      <Banner
        heading="Indoor Bespoke Furniture: Elegant & Custom-Crafted Pieces"
        image="/images/interior.webp"
      />

      <div className="container mx-auto px-6 py-12 space-y-16">
        <Text
          heading="Indoor Bespoke Furniture: Elegant & Custom-Crafted Pieces"
          content={content}
        />

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Indoor Furniture Gallery</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="overflow-hidden rounded-2xl border border-border bg-card"
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

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">
            Indoor Furniture Collections
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-semibold">{category.name}</h3>
                <p className="mb-3 text-xs text-muted-foreground">
                  Selected codes from the full indoor bespoke furniture range.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {category.codes.map((code) => (
                    <span
                      key={code}
                      className="rounded-full border border-primary/40 bg-background px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {code}
                    </span>
                  ))}
                </div>
                <button className="mt-auto inline-flex items-center justify-center rounded-full border border-primary px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
                  Enquire Now
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
