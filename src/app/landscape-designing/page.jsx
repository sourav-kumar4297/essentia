import React from 'react'
import Banner from '../components/Banner'
import TwoColumnSection from '../components/TwoColumnSection'

export const metadata = {
  title: "Landscape Designing",
  description: "Premium landscape design services by Essentia Environments",
};

const page = () => {
  const content = [
    "At Essentia Environments, we transform ordinary outdoor spaces into extraordinary landscape experiences. Our landscape designing services combine horticultural expertise with architectural precision to create environments that enhance beauty, functionality, and environmental sustainability.",
    "Our comprehensive approach integrates site analysis, sustainable planting strategies, water feature design, and hardscaping solutions. We specialize in creating landscapes that maximize seasonal beauty, optimize outdoor living, and require minimal maintenance.",
    "From concept to installation, our landscape team ensures every project harmonizes with your architectural vision and creates a seamless connection between built and natural environments. We believe exceptional landscapes transform how people experience their spaces every single day."
  ];

  return (
    <>
    <Banner heading="Landscape Designing" image="/images/landscaping.webp" />
    <TwoColumnSection 
      image="/images/landscaping.webp" 
      content={content} 
      imageFirst={true}
    />
    </>
  )
}

export default page;
