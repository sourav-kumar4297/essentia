import React from 'react'
import Banner from '../../components/Banner'
import TwoColumnSection from '../../components/TwoColumnSection'

export const metadata = {
  title: "Outdoor Furniture",
  description: "Premium outdoor furniture by Essentia Environments",
};

const page = () => {
  const content = [
    "At Essentia Environments, our outdoor furniture collection seamlessly blends durability with elegant design. We specialize in creating sophisticated outdoor living spaces that withstand the elements while providing uncompromising comfort and style.",
    "From intimate garden lounges to sprawling terrace dining areas, our outdoor furniture transforms how you experience your exterior spaces. We combine sustainable materials with timeless design principles to create pieces that age beautifully.",
    "Whether designing private residential retreats or sophisticated commercial hospitality spaces, our curated collections bring together functionality, aesthetic appeal, and environmental responsibility. Your outdoor space deserves furniture that matches the excellence of your interior design."
  ];

  return (
    <>
    <Banner heading="Outdoor Furniture" image="/images/outdoor-furniture-1.webp" />
    <TwoColumnSection 
      image="/images/outdoor-furniture-1.webp" 
      content={content} 
      imageFirst={true}
    />
    </>
  )
}

export default page;
