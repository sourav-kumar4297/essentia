import React from "react";
import Banner from "../../components/Banner";
import Text from "../../components/Text";

const posts = {
  "essentia-environments-designing-unique-interiors-of-timeless-beauty": {
    title: "Essentia Environments: Designing Unique Interiors of Timeless Beauty",
    heading: "Designing Unique Interiors of Timeless Beauty",
    heroImage: "/images/blog1.webp",
    paragraphs: [
      "In the field of interior design, the meaning of bespoke interiors goes beyond universal aesthetics to embrace nuance, personality and timelessness.",
      "Essentia Environments crafts spaces that are tailored to the way people live and work, combining materiality, proportion and light to create interiors that endure beyond trends.",
    ],
  },
  "how-to-choose-the-best-office-interior-designers-in-gurgaon-for-your-workspace": {
    title:
      "How to Choose the Best Office Interior Designers in Gurgaon for Your Workspace",
    heading: "Choosing the Right Office Interior Designers in Gurgaon",
    heroImage: "/images/blog2.webp",
    paragraphs: [
      "Beautiful office spaces are the result of thoughtful planning, brand understanding and meticulous execution.",
      "When selecting an office interior designer in Gurgaon, it is essential to look for a partner who understands culture, workflow and the evolving nature of modern workplaces.",
    ],
  },
};

export function generateMetadata({ params }) {
  const post = posts[params.slug];
  if (!post) {
    return {
      title: "Blog",
    };
  }
  return {
    title: post.title,
    description: post.heading,
  };
}

const Page = ({ params }) => {
  const post = posts[params.slug];

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-2xl font-semibold">Article not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The blog post you are looking for is not available.
        </p>
      </div>
    );
  }

  const content = post.paragraphs.map((p, i) => <p key={i}>{p}</p>);

  return (
    <>
      <Banner heading={post.heading} image={post.heroImage} />
      <div className="container mx-auto px-6 py-12">
        <Text heading={post.title} content={content} />
      </div>
    </>
  );
};

export default Page;

