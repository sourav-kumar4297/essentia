import Banner from "../components/Banner";
import Text from "../components/Text";

export const metadata = {
  title: "Services",
  description:
    "Essentia Environments offers comprehensive interior design and construction services tailored to diverse client needs.",
};

const services = [
  {
    name: "Interior Design & Architecture",
    description:
      "Complete interior design solutions including space planning, material selection, color consultation, and full architectural documentation.",
  },
  {
    name: "Elevation Design",
    description:
      "Professional elevation and façade design services for buildings, creating visually striking and functional exteriors.",
  },
  {
    name: "Bespoke Furniture Manufacturing",
    description:
      "Custom-designed and manufactured furniture pieces tailored to your space and preferences, combining aesthetics with functionality.",
  },
  {
    name: "Landscape Designing",
    description:
      "Expert landscape design services for outdoor spaces, including gardens, terraces, and outdoor living areas.",
  },
  {
    name: "Turnkey Execution",
    description:
      "Complete project management from design conception to final implementation and handover.",
  },
  {
    name: "Project Consultation",
    description:
      "Expert consultation services for planning and strategizing interior and architectural projects.",
  },
];

export default function ServicesPage() {
  const intro = [
    <p key="1">
      Essentia Environments offers comprehensive interior design and
      construction services tailored to meet diverse client needs. From concept
      to completion, we integrate design, execution and bespoke manufacturing
      under one roof.
    </p>,
  ];

  return (
    <>
      <Banner heading="Our Services" image="/images/services-hero.png" />

      <div className="container mx-auto px-6 py-12 space-y-12">
        <Text heading="What We Offer" content={intro} />

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="rounded-xl border border-border bg-card p-6 text-sm shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold">{service.name}</h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
