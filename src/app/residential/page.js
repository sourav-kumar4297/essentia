import React from 'react'
import Banner from '../components/Banner'
import Text from '../components/Text'
import { Scroll } from '../components/Scroll';
import { Grid } from '../components/Grid';
import { WobbleCards } from '../components/WobbleCards';

export const metadata = {
  title: "Residential Projects",
  description: "Bespoke residential interior design and construction by Essentia Environments",
};

const page = () => {
    const aboutHeading = "Residential Projects: Homes Designed for Living";
     const aboutText = [
  <p key="1">At Essentia Environments, we understand that your home is more than a structure—it's a reflection of who you are and how you live. Our residential design expertise transforms houses into personalized sanctuaries that combine aesthetic beauty, functional comfort, and sustainable living. Every project begins with understanding your vision and evolves into a carefully crafted space tailored to your lifestyle.</p>,
];
const aboutText2 = [<p key="2">From intimate apartments to sprawling villas, from contemporary minimalism to classical elegance, our design philosophy adapts to create homes that are uniquely yours. We manage complete residential projects ensuring every detail aligns with your aesthetic and functional requirements. Our approach integrates sustainable building practices, premium finishes, and timeless design principles.</p>]
  return (
    <>
    <Banner heading="Residential Projects" image="/images/residential.jpg" />
    <Text heading={aboutHeading} content={aboutText}/>
     <Grid />
    <Text content={aboutText2}/>
    <Scroll />
    <WobbleCards />
    </>
  )
}

export default page;
