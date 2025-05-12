import React from 'react';
import { Box } from '@mui/material';
import Styles from './hero.module.css';
import Container from '@mui/material/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Hero1 from '../../assets/hero1.jpg';
import Hero2 from '../../assets/hero2.jpg';
import Hero3 from '../../assets/hero3.jpg';
import Hero4 from '../../assets/hero4.jpg';


export default function hero() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (

    <Box className={Styles.herosection}>
      <Container fixed>
        <Carousel responsive={responsive}>
          <Box><img src={Hero1} alt="hero" /></Box>
          <Box><img src={Hero2} alt="hero" /></Box>
          <Box><img src={Hero3} alt="hero" /></Box>
          <Box><img src={Hero4} alt="hero" /></Box>
        </Carousel>;
      </Container>
    </Box >

  )
}
