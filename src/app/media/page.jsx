import React from "react";
import Banner from "../components/Banner";
import Text from "../components/Text";

export const metadata = {
  title: "Media",
  description:
    "Essentia Environments in the media – press, features and editorials.",
};

const articles = [
  {
    title:
      "Designing for Uniqueness: Understanding the Role of Custom Furniture in Interior Spaces",
    excerpt:
      "Interior furniture: uniqueness in design and craftsmanship. In a world of mass production, bespoke pieces bring individuality and character to every project.",
    url: "https://essentiaenvironments.com/designing-for-uniqueness-understanding-the-role-of-custom-furniture-in-interior-spaces/",
  },
  {
    title: "Essentia Environments: Designing Unique Interiors of Timeless Beauty",
    excerpt:
      "Bespoke interiors that go beyond trends, focusing on timeless elegance and thoughtful detailing across homes and commercial spaces.",
    url: "https://essentiaenvironments.com/essentia-environments-designing-unique-interiors-of-timeless-beauty/",
  },
  {
    title:
      "How to Choose the Best Office Interior Designers in Gurgaon for Your Workspace",
    excerpt:
      "A guide to evaluating experience, design language and execution capability when selecting office interior designers in Gurgaon.",
    url: "https://essentiaenvironments.com/how-to-choose-the-best-office-interior-designers-in-gurgaon-for-your-workspace/",
  },
  {
    title: "Top Trends in Bespoke Outdoor Furniture for 2025",
    excerpt:
      "From weather-resistant materials to modular layouts, explore what is defining luxury outdoor furniture for the coming year.",
    url: "https://essentiaenvironments.com/top-trends-in-bespoke-outdoor-furniture-for-2025/",
  },
  {
    title:
      "Modern vs. Traditional: Choosing the Right Home Interior Design in India",
    excerpt:
      "How to balance contemporary minimalism with classic Indian motifs to create a home that feels both current and rooted.",
    url: "https://essentiaenvironments.com/modern-vs-traditional-choosing-the-right-home-interior-design-in-india/",
  },
  {
    title:
      "10 Things to Look for When Choosing the Best Interior Design Company",
    excerpt:
      "Key parameters including portfolio depth, material knowledge, execution capability and client communication.",
    url: "https://essentiaenvironments.com/10-things-to-look-for-when-choosing-the-best-interior-design-company/",
  },
];

const Page = () => {
  const intro = [
    <p key="1">
      At Essentia Environments, we see every project as a story waiting to be
      told. Our work in the media reflects spaces that weave service,
      craftsmanship and emotion into interiors that are both contemporary and
      timeless.
    </p>,
    <p key="2">
      Here is a selection of articles, features and press coverage that explore
      our design philosophy, bespoke furniture, and the evolution of luxury
      interiors in India.
    </p>,
  ];

  return (
    <>
      <Banner
        heading="Essentia Environments in the Media: Press & Features"
        image="/images/blog1.webp"
      />
      <div className="container mx-auto px-6 py-12 space-y-12">
        <Text
          heading="Press & Editorial Features"
          content={intro}
        />

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div>
                <h2 className="mb-2 text-lg font-semibold">{article.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Learn more
              </a>
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

export default Page;

