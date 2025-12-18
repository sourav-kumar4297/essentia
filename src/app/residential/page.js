import React from 'react'
import Banner from '../components/Banner'
import TwoColumnSection from '../components/TwoColumnSection'

export const metadata = {
  title: "Residential Projects",
  description: "Bespoke residential interior design and construction by Essentia Environments",
};

const page = () => {
  const content = [
    "At Essentia Environments, we understand that your home is more than a structure—it's a reflection of who you are and how you live. Our residential design expertise transforms houses into personalized sanctuaries that combine aesthetic beauty, functional comfort, and sustainable living.",
    "From intimate apartments to sprawling villas, from contemporary minimalism to classical elegance, our design philosophy adapts to create homes that are uniquely yours. We manage complete residential projects ensuring every detail aligns with your aesthetic and functional requirements.",
    "Our approach integrates sustainable building practices, premium finishes, and timeless design principles. Whether renovating existing spaces or designing from the foundation up, we create residential environments where you'll create your most meaningful memories."
  ];

  return (
    <>
    <Banner heading="Residential Projects" image="/images/residential.jpg" />
    <TwoColumnSection 
      image="/images/residential.jpg" 
      content={content} 
      imageFirst={true}
    />
    </>
  )
}

export default page;
