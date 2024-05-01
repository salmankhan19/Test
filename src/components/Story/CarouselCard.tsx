import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

interface CarouselCardProps {
  items: {
    image: string;
    description: string;
    token: string;
    flag: string;
    team: string;
    country: string;
  }[];
}

const CarouselCard: React.FC<CarouselCardProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint according to your needs
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div style={{ gap: "10px" }} key={index}>
          <Card sx={{ borderRadius: "20px", margin: "0px 25px" }}>
            <Box sx={{ padding: "15px" }}>
              <img
                src={item.image}
                alt={`slide-${index}`}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>

            <CardContent sx={{ textAlign: "start" }}>
              <Typography variant="body1">"{item.description}"</Typography>
            </CardContent>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "15px", padding: "12px" }}>
              <Grid md={4}>
                <img
                  src={item.team}
                  style={{ width: "53px", height: "53px", borderRadius: "50%" }}
                />
              </Grid>
              <Grid md={8} sx={{textAlign: "start"}}>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", gap: "15px" }}
                >
                  {item.country}
                  <img src={item.flag}
                  style={{ width: "30px", height: "20px" }} />
                </Typography>
                <Typography variant="body1" sx={{ width: "90%" }}>
                {item.token}
                </Typography>
              </Grid>
            </Box>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselCard;
