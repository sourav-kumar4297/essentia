import React from 'react'
import Banner from '../../components/Banner'
import Text from '../../components/Text'
import { Scroll } from '../../components/Scroll';
import { Grid } from '../../components/Grid';
import { WobbleCards } from '../../components/WobbleCards';

export const metadata = {
  title: "Outdoor Furniture",
  description: "Premium outdoor furniture by Essentia Environments - Weather-resistant design",
};

const page = () => {
    const aboutHeading = "Outdoor Furniture: Premium Living Spaces Redefined";
     const aboutText = [
  <p key="1">At Essentia Environments, our outdoor furniture collection seamlessly blends durability with elegant design. We specialize in creating sophisticated outdoor living spaces that withstand the elements while providing uncompromising comfort and style. Each piece is expertly crafted using premium weather-resistant materials and professional finishing techniques.</p>,
];
const aboutText2 = [<p key="2">From intimate garden lounges to sprawling terrace dining areas, our outdoor furniture transforms how you experience your exterior spaces. We combine sustainable materials with timeless design principles to create pieces that age beautifully. Whether designing private residential retreats or sophisticated commercial hospitality spaces, our curated collections bring together functionality, aesthetic appeal, and environmental responsibility.</p>]
  return (
    <>
    <Banner heading="Outdoor Furniture" image="/images/outdoor-furniture-1.webp" />
    <Text heading={aboutHeading} content={aboutText}/>
     <Grid />
    <Text content={aboutText2}/>
    <Scroll />
    <WobbleCards />
    </>
  )
}

export default page


