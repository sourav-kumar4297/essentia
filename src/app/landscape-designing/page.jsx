import Banner from "../components/Banner";

export const metadata = {
  title: "Landscape Designing",
  description: "Landscape solutions for residential and commercial projects.",
};

const landscapeServices = [
  { name: "Garden Design", icon: "🌳" },
  { name: "Hardscaping", icon: "🪨" },
  { name: "Water Features", icon: "💧" },
  { name: "Lighting Design", icon: "💡" },
  { name: "Green Walls", icon: "🌿" },
  { name: "Sustainable Solutions", icon: "♻️" },
];

export default function LandscapePage() {
  return (
    <>
      <Banner heading="Landscape Designing" image="/images/landscape-design-1.jpg" />
      
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">Nature's Harmony Meets Design</h2>
          <p className="text-xl text-gray-300">
            Create outdoor spaces that blend seamlessly with nature while reflecting your unique style and enhancing your lifestyle.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {landscapeServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-600/30 rounded-lg p-6 text-center hover:border-green-400/60 transition-all hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <p className="text-sm text-gray-200 font-medium">{service.name}</p>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Residential Landscapes</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Transform your personal outdoor spaces into serene sanctuaries. We create gardens that complement your architecture and lifestyle, incorporating native plants, thoughtful water features, and innovative lighting to extend your living space.
              </p>
              <ul className="space-y-2">
                {['Custom garden designs', 'Patio and seating areas', 'Water features', 'Sustainable planting'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-xl h-80 border border-green-600/30"></div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 rounded-xl h-80 border border-green-600/30"></div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Commercial Landscapes</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Professional outdoor spaces that enhance corporate identity and employee well-being. Our commercial landscapes create impressive entrances, relaxing break areas, and sustainable green spaces that reduce environmental impact.
              </p>
              <ul className="space-y-2">
                {['Corporate campuses', 'Retail landscapes', 'Hospitality gardens', 'Maintenance planning'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sustainability */}
        <div className="mt-20 bg-gradient-to-r from-green-900 to-emerald-900 rounded-2xl p-12 border border-green-600/30">
          <h3 className="text-3xl font-bold text-white mb-4">Sustainable Design Philosophy</h3>
          <p className="text-gray-200 leading-relaxed">
            Every landscape we design incorporates sustainable practices. From water-efficient irrigation systems to native plant selections that support local ecosystems, we create outdoor spaces that are beautiful today and responsible for tomorrow. Our approach reduces maintenance needs while maximizing environmental benefits.
          </p>
        </div>
      </div>
    </>
  );
}
