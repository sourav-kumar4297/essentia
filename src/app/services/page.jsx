import { motion } from "framer-motion";
import MissionVision from "../components/MissionVision";
import TimeLineEssentia from "../components/TimeLineEssentia";
import Presence from "../components/Presence";
import LeadershipSection from "../components/LeadershipSection";
import { WobbleCards } from "../components/WobbleCards";
import Banner from "../components/Banner";

export const metadata = {
  title: "Services",
  description: "Services offered by Essentia Environments — design, build and furnish.",
};

const services = [
  {
    name: "Interior Design",
    description: "Complete interior design solutions for residential and commercial spaces with personalized aesthetics and premium finishes.",
    icon: "🏠"
  },
  {
    name: "Elevation Design",
    description: "Architectural elevation designs that combine functionality with aesthetic excellence for residential and commercial facades.",
    icon: "🏢"
  },
  {
    name: "Bespoke Furniture",
    description: "Custom-designed furniture tailored to your unique preferences and space requirements with handcrafted precision.",
    icon: "🪑"
  },
  {
    name: "Landscape Designing",
    description: "Outdoor space design that creates harmonious and beautiful garden and terrace environments.",
    icon: "🌿"
  },
  {
    name: "Turnkey Execution",
    description: "Complete project execution from design to installation with full supervision and quality control.",
    icon: "⚙️"
  },
  {
    name: "Decor & Styling",
    description: "Thoughtful decor selection and placement to enhance your interior spaces with curated pieces.",
    icon: "✨"
  },
  {
    name: "Outdoor Furniture",
    description: "Premium outdoor furniture solutions for patios, gardens, and terraces with weather-resistant materials.",
    icon: "☀️"
  },
  {
    name: "Event Decoration",
    description: "Professional event and day decoration services for special occasions and celebrations.",
    icon: "🎉"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Banner heading="Services" image="/images/services-hero.png" />

      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Services Grid */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <MissionVision />
        <WobbleCards />
      </div>
    </>
  );
}
