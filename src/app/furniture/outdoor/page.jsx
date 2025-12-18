import Banner from "../../components/Banner";

export const metadata = {
  title: "Outdoor Furniture",
  description: "Custom outdoor furniture by Essentia.",
};

const categories = [
  { name: "Lounge Collections", desc: "Comfortable seating for relaxation and entertainment" },
  { name: "Dining Sets", desc: "Elegant outdoor dining solutions for any space" },
  { name: "Shade Structures", desc: "Pergolas, umbrellas, and shelters for sun protection" },
  { name: "Accessories", desc: "Cushions, rugs, and decorative elements" },
];

export default function OutdoorFurniture() {
  return (
    <>
      <Banner heading="Outdoor Furniture" image="/images/outdoor-furniture-1.webp" />
      
      <div className="container mx-auto px-6 py-20">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">Premium Outdoor Living</h2>
          <p className="text-xl text-gray-300">
            Expertly crafted outdoor furniture that withstands the elements while providing uncompromising style and comfort for your exterior spaces.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-600/30 rounded-lg p-6 hover:border-amber-400/60 transition-all hover:shadow-lg hover:shadow-amber-500/20"
            >
              <h3 className="text-lg font-bold text-white mb-2">{cat.name}</h3>
              <p className="text-sm text-gray-300">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Durability Meets Style</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-amber-300 mb-2">Weather-Resistant Materials</h4>
                <p className="text-gray-300">Teak, aluminum, and engineered composites built to last</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-amber-300 mb-2">Professional Finishing</h4>
                <p className="text-gray-300">UV-protected stains and sealers for long-lasting color</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-amber-300 mb-2">Comfort & Ergonomics</h4>
                <p className="text-gray-300">Designed for hours of comfortable outdoor relaxation</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-amber-300 mb-2">Low Maintenance</h4>
                <p className="text-gray-300">Easy to clean and maintain with minimal upkeep</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 rounded-xl h-96 border border-amber-600/30"></div>
        </div>

        {/* Materials */}
        <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-2xl p-12 border border-amber-600/30">
          <h3 className="text-3xl font-bold text-white mb-6">Premium Materials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Teak", benefit: "Natural durability and water resistance" },
              { name: "Aluminum", benefit: "Lightweight, corrosion-resistant, modern" },
              { name: "Composite", benefit: "Contemporary aesthetics with minimal maintenance" },
            ].map((material, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold text-amber-300 mb-2">{material.name}</h4>
                <p className="text-gray-300">{material.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
