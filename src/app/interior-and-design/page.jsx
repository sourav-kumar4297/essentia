import React from 'react'
import Banner from '../components/Banner'
import Text from '../components/Text'
import { Scroll } from '../components/Scroll';
import { Grid } from '../components/Grid';
import { WobbleCards } from '../components/WobbleCards';

const page = () => {
    const aboutHeading = "Interior Design: Creating Elegant & Functional Spaces";
     const aboutText = [
  <p key="1">We are a multi-disciplinary team with a vast suite of capabilities in interior design. Our mission is to design exquisite spaces that perfectly capture every detail of your vision. Interior design should be a harmonious blend of art and practicality. Each design concept we create is enriched by bold artwork, carefully selected styling components, and distinctive lighting fixtures.</p>,
];
const aboutText2 = [<p key="2">Our approach combines sophistication with functionality. We meticulously select styling products, furniture pieces, artworks, and sculptures to add a dynamic touch to our designs while maintaining an elegantly neutral base palette. This sophisticated backdrop highlights our creative vision and allows spaces to adapt to different moods and occasions. Whether you want a modern minimalist style or a classic, sumptuous design, our team ensures that every space is both visually striking and practical.</p>]
  return (
    <>
    <Banner heading="Interior Design" image="/images/interior-design.jpg" />
    <Text heading={aboutHeading} content={aboutText}/>
     <Grid />
    <Text content={aboutText2}/>
    <WobbleCards />
    </>
  )
}

export default page