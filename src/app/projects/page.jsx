import Banner from "../components/Banner";
import Text from "../components/Text";
import ProjectsGallery from "../components/ProjectsGallery";
import LatestCreations from "../components/LatestCreations";
import Link from "next/link";

export const metadata = {
  title: "Projects",
  description:
    "Browse Essentia Environments' residential, commercial and hospitality projects.",
};

const categories = [
  {
    name: "Residential Projects",
    description:
      "Luxury apartments, villas and private residences crafted as personalised havens.",
    href: "/projects/residential",
  },
  {
    name: "Commercial Projects",
    description:
      "Corporate offices, retail environments and institutional spaces designed for performance and impact.",
    href: "/projects/commercial",
  },
  {
    name: "Hospitality & Experience Spaces",
    description:
      "Hotels, clubs and experiential spaces that offer immersive, memorable environments.",
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Banner heading="Projects" image="/images/banner-projects.webp" />

      <div className="container mx-auto px-6 py-12 space-y-16">
        <Text
          heading="Our Project Portfolio"
          content={[
            <p key="intro">
              Essentia Environments&apos; work spans residential, commercial and
              hospitality projects across India. Each space is designed,
              furnished and executed end‑to‑end so that every detail feels
              intentional.
            </p>,
            <p key="copy2">
              Explore a selection of our completed projects to see how interior
              design, bespoke furniture, elevation and landscape come together
              as one unified experience.
            </p>,
          ]}
        />

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition hover:border-amber-400/60 hover:shadow-md"
            >
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-amber-300">
                  {cat.name}
                </h3>
                <p className="text-sm text-neutral-300">{cat.description}</p>
              </div>
              <span className="mt-4 text-sm font-medium text-amber-400 group-hover:translate-x-1 group-hover:underline">
                View projects →
              </span>
            </Link>
          ))}
        </section>

        <ProjectsGallery title="Featured Work" />
        <LatestCreations />
      </div>
    </>
  );
}
