import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "./carousel";
import img from "../../assets/playpitch.png";
import Teamicon from "../../assets/Token-VCF.svg"

const Teams: React.FC = () => {
    const images = [
        img,
        Teamicon,
        img,
        Teamicon,
        img,
        Teamicon,
        img,
        Teamicon,
        img,
        Teamicon,
        img,
        Teamicon,
        img,
        Teamicon,
        img,
        // Add more image URLs as needed
    ];
  return (
    <>
      <Box sx={{width: '70%',  margin: "auto", display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', gap: '10px'}}>
        <Typography variant="h3">70+ teams. 1 app.</Typography>
        <Typography variant="body1">
          The home of fan engagement and rewards for the world’s biggest teams.
        </Typography>
        <Carousel images={images} />
      </Box>
      <Box>
      
      </Box>
    </>
  );
};

export default Teams;
