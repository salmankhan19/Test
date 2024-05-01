import React from "react";
import { Box, Typography } from "@mui/material";
import CarouselCard from "./CarouselCard";
import img1 from "../../assets/Card6.webp";
import img2 from "../../assets/Card1.webp";
import img3 from "../../assets/Card2.webp";
import img4 from "../../assets/Card3.webp";
import img5 from "../../assets/Card5.webp";
import team1 from "../../assets/teams/ACM-1.svg";
import team2 from "../../assets/teams/ASR.svg";
import team3 from "../../assets/teams/FCB.svg";
import flag1 from "../../assets/teams/f1.webp";
import flag2 from "../../assets/teams/f2.webp";
import flag3 from "../../assets/teams/f3.webp";
import flag4 from "../../assets/teams/f2.webp";
import flag5 from "../../assets/teams/f3.webp";

const Story: React.FC = () => {
  // const img1 = 'your-image-src.jpg'; // Replace 'your-image-src.jpg' with the actual image source
  const item = [
    {
      image: img1,
      country: "Paulo, Brazil",
      description:
        "This is the biggest benefit and Im not talking just about the tickets. I saw my team become Brazilian Champion for the first time in 50 years. Theres no price on this opportunity I had thanks to Socios.com",
      team: team1,
      flag: flag1,
      token: "Atletico Fan Token, Holder",
    },
    {
      image: img2,
      country: "Bertie, UK",
      description:
        "This is the biggest benefit and Im not talking just about the tickets. I saw my team become Brazilian Champion for the first time in 50 years. Theres no price on this opportunity I had thanks to Socios.com",
      team: team2,
      flag: flag2,
      token: "Man City Fan Token, Holder",
    },
    {
      image: img3,
      country: "Bertie, UK",

      description:
        "This is the biggest benefit and Im not talking just about the tickets. I saw my team become Brazilian Champion for the first time in 50 years. Theres no price on this opportunity I had thanks to Socios.com",
      team: team3,
      flag: flag3,
      token: "Atletico Fan Token, Holder",
    },
    {
      image: img4,
      country: "Paulo, Brazil",
      description:
        "This is the biggest benefit and Im not talking just about the tickets. I saw my team become Brazilian Champion for the first time in 50 years. Theres no price on this opportunity I had thanks to Socios.com",
      team: team1,
      flag: flag4,
      token: "Man City Fan Token, Holder",
    },
    {
      image: img5,
      country: "Bertie, UK",
      description:
        "This is the biggest benefit and Im not talking just about the tickets. I saw my team become Brazilian Champion for the first time in 50 years. Theres no price on this opportunity I had thanks to Socios.com",
      team: team2,
      flag: flag5,
      token: "Atletico Fan Token, Holder",
    },
    // Add more items as needed
  ];
  return (
    <Box sx={{ textAlign: "center", width: "70%", margin: "auto" }}>
      <Typography
        variant="h2"
        sx={{ fontWeight: "400", padding: "10px", marginBottom: "0" }}
        gutterBottom
      >
        Real Fans. Unreal Stories.
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "500",
          padding: "10px",
          margin: "auto",
          width: "70%",
        }}
        gutterBottom
      >
        This is no fantasy game. Socios.com is real fans making a real impact
        and getting rewarded with unreal experiences.
      </Typography>
      <CarouselCard items={item} />
    </Box>
  );
};

export default Story;
