import React from 'react'
import Banner from '../components/Banner'
import Text from '../components/Text'
import { Scroll } from '../components/Scroll';
import { Grid } from '../components/Grid';
import { WobbleCards } from '../components/WobbleCards';

export const metadata = {
  title: "Landscape Designing",
  description: "Premium landscape design services by Essentia Environments - Creating beautiful outdoor spaces",
};

const page = () => {
    const aboutHeading = "Landscape Designing: Creating Outdoor Sanctuaries";
     const aboutText = [
  <p key="1">At Essentia Environments, we transform ordinary outdoor spaces into extraordinary landscape experiences. Our landscape designing services combine horticultural expertise with architectural precision to create environments that enhance beauty, functionality, and environmental sustainability. Whether designing intimate residential gardens or expansive commercial landscapes, we craft outdoor spaces that reflect your vision.</p>,
];
const aboutText2 = [<p key="2">Our comprehensive approach integrates site analysis, sustainable planting strategies, water feature design, and hardscaping solutions. We specialize in creating landscapes that maximize seasonal beauty, optimize outdoor living, and require minimal maintenance. From concept to installation, our landscape team ensures every project harmonizes with your architectural vision and creates a seamless connection between built and natural environments.</p>]
  return (
    <>
    <Banner heading="Landscape Designing" image="/images/landscaping.webp" />
    <Text heading={aboutHeading} content={aboutText}/>
     <Grid />
    <Text content={aboutText2}/>
    <Scroll />
    <WobbleCards />
    </>
  )
}

export default page


