import React from 'react'
import Banner from '../../components/Banner'
import TwoColumnSection from '../../components/TwoColumnSection'

export const metadata = {
  title: "Indoor Furniture",
  description: "Bespoke indoor furniture by Essentia Environments",
};

const page = () => {
  const content = [
    "At Essentia Environments, our indoor furniture collection represents the pinnacle of handcrafted design and construction. Each piece is meticulously created to reflect your personal style and enhance functionality.",
    "Every piece combines indigenous craftsmanship with contemporary design sensibilities, premium materials with timeless appeal. From living room elegance to bedroom sanctuaries, our custom furniture spans all categories of interior furnishing.",
    "Whether you envision minimalist contemporary lines, classic traditional elegance, or transitional versatility, our master craftspeople collaborate with you to create furniture that transcends trends and becomes a cherished part of your home."
  ];

  return (
    <>
    <Banner heading="Indoor Furniture" image="/images/interior.webp" />
    <TwoColumnSection 
      image="/images/interior.webp" 
      content={content} 
    />
    </>
  )
}

export default page;
