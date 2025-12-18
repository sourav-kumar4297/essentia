import React from 'react'
import Banner from '../components/Banner'
import TwoColumnSection from '../components/TwoColumnSection'

export const metadata = {
  title: "Elevation Design",
  description: "Premium elevation design services by Essentia Environments",
};

const page = () => {
  const content = [
    "At Essentia Environments, our elevation design services create distinctive architectural exteriors that make a powerful statement. We specialize in transforming buildings into iconic landmarks by blending cutting-edge contemporary design with timeless architectural principles.",
    "Our approach to elevation design combines aesthetic brilliance with practical functionality. We work with premium materials, sustainable building practices, and innovative detailing to create exteriors that age beautifully and perform exceptionally.",
    "Whether you're designing a corporate headquarters, luxury residential tower, or heritage restoration, our team brings expertise in material selection, contextual integration, and modern innovation to deliver elevations that truly transform the urban landscape."
  ];

  return (
    <>
      <Banner heading="Elevation Design" image="/images/elevation-design-1.jpg" />
      <TwoColumnSection 
        image="/images/elevation-design-1.jpg" 
        content={content} 
      />
    </>
  )
}

export default page;
