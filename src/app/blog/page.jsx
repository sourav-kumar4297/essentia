import React from "react";
import Banner from "../components/Banner";
import Text from "../components/Text";

export const metadata = {
  title: "Blog",
  description:
    "Essentia Environments blog – insights, trends and inspiration in interior design and bespoke furniture.",
};

const posts = [
  {
    slug: "essentia-environments-designing-unique-interiors-of-timeless-beauty",
    title: "Essentia Environments: Designing Unique Interiors of Timeless Beauty",
    category: "Bespoke Interiors",
    excerpt:
      "In the field of interior design, the meaning of bespoke interiors goes beyond universal aesthetics to embrace nuance, personality and timelessness.",
    date: "2025",
  },
  {
    slug: "how-to-choose-the-best-office-interior-designers-in-gurgaon-for-your-workspace",
    title:
      "How to Choose the Best Office Interior Designers in Gurgaon for Your Workspace",
    category: "Office Interiors",
    excerpt:
      "Beautiful office spaces require designers who understand brand, culture and the evolving nature of modern workplaces.",
    date: "2025",
  },
  {
    slug: "top-trends-in-bespoke-outdoor-furniture-for-2025",
    title: "Top Trends in Bespoke Outdoor Furniture for 2025",
    category: "Outdoor Furniture",
    excerpt:
      "People now use their outdoor areas more than ever before; discover the materials, forms and layouts redefining high-end terraces and gardens.",
    date: "2025",
  },
  {
    slug: "modern-vs-traditional-choosing-the-right-home-interior-design-in-india",
    title:
      "Modern vs. Traditional: Choosing the Right Home Interior Design in India",
    category: "Home Interiors",
    excerpt:
      "When it comes to home interior design in India, the choice between modern minimalism and traditional richness shapes how a space feels and functions.",
    date: "2025",
  },
  {
    slug: "10-things-to-look-for-when-choosing-the-best-interior-design-company",
    title:
      "10 Things to Look for When Choosing the Best Interior Design Company",
    category: "Guides",
    excerpt:
      "From portfolio depth to execution capability, here are the essential checks before you appoint your interior design partner.",
    date: "2025",
  },
  {
    slug: "how-designer-interiors-combine-furniture-and-decor-to-elevate-your-home",
    title:
      "How Designer Interiors Combine Furniture and Décor to Elevate Your Home",
    category: "Home Interiors",
    excerpt:
      "Home interior design remains incomplete without the seamless integration of furniture and decor; see how the two come together.",
    date: "2025",
  },
];

const Page = () => {
  const intro = [
    <p key="1">
      The Essentia Environments blog brings together ideas, trends and stories
      from our projects and design practice. From bespoke furniture to
      large-scale interiors, each article is crafted to inspire and inform.
    </p>,
  ];

  return (
    <>
      <Banner
        heading="Essentia Environments Blog: Insights, Trends & Inspiration"
        image="/images/blog2.webp"
      />
      <div className="container mx-auto px-6 py-12 space-y-12">
        <Text heading="Latest from the Blog" content={intro} />

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-primary mb-1">
                  {post.category}
                </p>
                <h2 className="mb-2 text-lg font-semibold">{post.title}</h2>
                <p className="text-xs text-muted-foreground mb-3">
                  {post.date}
                </p>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
              <a
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Read More
              </a>
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

export default Page;

