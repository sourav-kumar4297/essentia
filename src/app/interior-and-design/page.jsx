import React from 'react'
import Banner from '../components/Banner'
import Text from '../components/Text'
import { Scroll } from '../components/Scroll';
import { Grid } from '../components/Grid';
import { WobbleCards } from '../components/WobbleCards';

const page = () => {
    const aboutHeading = "Exquisite Interior Design: Creating Elegant & Functional Spaces";
     const aboutText = [
  <p key="1">At Essentia Environments, we take great pride in our ability to design exquisite spaces that perfectly capture every detail of your brief. Our mission is not only to ensure functionality in our designs but also to elevate your experience to new heights. We believe that interior design should be a harmonious blend of art and practicality, which is why our approach is nothing short of artful. Each design concept we create is enriched by bold artwork, carefully selected styling components, and distinctive lighting fixtures—elements that have become our signature in the industry. These components are thoughtfully complemented by accent furniture pieces that further enhance the overall aesthetic of your space.</p>,
];
const aboutText2 = [<p key="2">Being one of the <b>best interior design firms in Gurgaon</b>, our design spaces alluring appeal. This is achieved through our meticulous selection of styling products, furniture pieces, artworks, and sculptures. Every item is intentionally chosen to add a dynamic touch to our designs while maintaining a base palette that is elegantly neutral. This sophisticated backdrop not only highlights our creative vision but also allows for versatility, enabling the space to adapt to different moods and occasions. Our designs are crafted to be both visually striking and practical, ensuring that they serve the needs of those who inhabit them. In addition to our focus on interiors, our commitment to enhancing the quality of living extends beyond four walls. At Essentia, we are equally dedicated to crafting unique indoor-outdoor living experiences that transform the way we interact with our environments. This holistic approach to the <b>best design for home</b> is realized through the incorporation of elements such as in-built green pockets, vertical gardens, meticulously landscaped lawns, and an abundance of lush greenery. By seamlessly integrating nature into our designs, we create spaces that not only look beautiful but also promote well-being and a deep connection to the outdoors.</p>]
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