import Banner from "../../components/Banner";

export const metadata = {
  title: "Indoor Furniture",
  description: "Custom indoor furniture by Essentia.",
};

const furnitureTypes = [
  { name: "Living Room", count: "Sofas, Coffee Tables, Accent Pieces" },
  { name: "Dining", count: "Tables, Chairs, Sideboards" },
  { name: "Bedroom", count: "Beds, Wardrobes, Nightstands" },
  { name: "Office", count: "Desks, Storage, Workstations" },
  { name: "Storage", count: "Cabinets, Shelving, Display Units" },
  { name: "Modular", count: "Flexible, Space-Efficient Solutions" },
];

export default function IndoorFurniture() {
  return (
    <>
      <Banner heading="Indoor Furniture" image="/images/furniture-indoor-1.jpg" />
      
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">Bespoke Craftsmanship for Every Space</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our handcrafted indoor furniture collection represents the pinnacle of design and construction. Each piece is meticulously created to reflect your personal style, enhance functionality, and transform your living spaces into expressions of your identity.
          </p>
        </div>

        {/* Furniture Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {furnitureTypes.map((type, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-600/30 rounded-lg p-8 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {type.name}
              </h3>
              <p className="text-sm text-gray-400">{type.count}</p>
            </div>
          ))}
        </div>

        {/* Design Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Design Philosophy</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-purple-300 mb-2">Indigenous Craftsmanship</h4>
                <p className="text-gray-300">Rooted in traditional techniques with contemporary sensibilities</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-300 mb-2">Functional Beauty</h4>
                <p className="text-gray-300">Every piece balances aesthetic appeal with practical utility</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-300 mb-2">Personalized Expression</h4>
                <p className="text-gray-300">Designs tailored to reflect your individual style and personality</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-300 mb-2">Premium Materials</h4>
                <p className="text-gray-300">Carefully selected woods, fabrics, and finishes for longevity</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl h-96 border border-purple-600/30"></div>
        </div>

        {/* Collection Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { title: "Contemporary", desc: "Clean lines, minimalist aesthetics, modern materials" },
            { title: "Classic", desc: "Timeless elegance, traditional craftsmanship, enduring appeal" },
            { title: "Transitional", desc: "Blend of traditional and modern, versatile, sophisticated" },
          ].map((style, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-purple-500/40 transition-all"
            >
              <h4 className="text-2xl font-bold text-white mb-3">{style.title}</h4>
              <p className="text-gray-300">{style.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-12 border border-purple-600/30">
          <h3 className="text-3xl font-bold text-white mb-4">Transform Your Space</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let our team of expert craftspeople and designers create bespoke furniture solutions that perfectly complement your interior design vision and enhance your daily living experience.
          </p>
        </div>
      </div>
    </>
  );
}
