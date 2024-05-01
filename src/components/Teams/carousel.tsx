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
    responsive: [
      {
        breakpoint: 400, // Adjust this breakpoint according to your needs
        settings: {
          slidesToShow: 2 ,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint according to your needs
        settings: {
          slidesToShow: 3 ,
        },
      },
      {
        breakpoint: 950, // Adjust this breakpoint according to your needs
        settings: {
          slidesToShow: 5 ,
        },
      },
      {
        breakpoint: 1250, // Adjust this breakpoint according to your needs
        settings: {
          slidesToShow: 6 ,
        },
      },
    ],
  };

  return (
    <>
      <Box sx={{ width: "90%", alignSelf: "center", marginTop: "25px" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                width={90}
                height={90}
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
