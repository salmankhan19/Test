import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button } from "@mui/material";

interface CarouselProps {
  images: any[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set autoplaySpeed to 0 to immediately transition to the next slide
    cssEase: "linear",
  };

  return (
    <>
      <Box sx={{ width: "90%", alignSelf: "center", marginTop: "25px" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                width={100}
                height={100}
                src={image}
                alt={`slide-${index}`}
              />
            </div>
          ))}
        </Slider>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center',  margin: "25px 0px"}}>
      <Button variant="contained" sx={{ borderRadius: "100px", padding: '15px 40px 15px 40px' }}>
          Find Your Team
        </Button>
      </Box>
    </>
  );
};

export default Carousel;
