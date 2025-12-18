import React from 'react'
import Banner from '../../components/Banner'
import Text from '../../components/Text'
import { Scroll } from '../../components/Scroll';
import { Grid } from '../../components/Grid';
import { WobbleCards } from '../../components/WobbleCards';

export const metadata = {
  title: "Indoor Furniture",
  description: "Bespoke indoor furniture by Essentia Environments - Premium handcrafted pieces",
};

const page = () => {
    const aboutHeading = "Indoor Furniture: Bespoke Craftsmanship for Every Space";
     const aboutText = [
  <p key="1">At Essentia Environments, our indoor furniture collection represents the pinnacle of handcrafted design and construction. Each piece is meticulously created to reflect your personal style and enhance functionality. We believe furniture should tell your story while serving your daily needs beautifully. From living room elegance to bedroom sanctuaries, our custom furniture spans all categories of interior furnishing.</p>,
];
const aboutText2 = [<p key="2">Every piece combines indigenous craftsmanship with contemporary design sensibilities, premium materials with timeless appeal. Whether you envision minimalist contemporary lines, classic traditional elegance, or transitional versatility, our master craftspeople collaborate with you to create furniture that transcends trends and becomes a cherished part of your home for generations.</p>]
  return (
    <>
    <Banner heading="Indoor Furniture" image="/images/interior.webp" />
    <Text heading={aboutHeading} content={aboutText}/>
     <Grid />
    <Text content={aboutText2}/>
    <Scroll />
    <WobbleCards />
    </>
  )
}

export default page


