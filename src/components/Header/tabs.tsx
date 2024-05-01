import React, { useState } from "react";
import { Button, Box, Typography, useMediaQuery, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import img1 from "../../assets/c1.jpg";
import img2 from "../../assets/c2.jpeg";
import img3 from "../../assets/c3.jpeg";
import img4 from "../../assets/c4.jpeg";
import img5 from "../../assets/c5.jpeg";

import Teamicon from "../../assets/Token-VCF.svg";
interface CardData {
  title: string;
  description: string;
  img?: any;
}

const cardData: { [key: string]: CardData[] } = {
  button1: [
    { title: "MAY, 2024", description: "Private Stadium Tour", img: img1 },
    { title: "June, 2024", description: "Private Stadium Tour", img: img2 },
    { title: "July , 2024", description: "Training Center Tour", img: img3 },
    { title: "Aug, , 2024", description: "UFC 294", img: img4 },
  ],
  button2: [
    { title: "Feb, 2024", description: "Training Center Tour", img: img5 },
    { title: "March, 2024", description: "UFC 294", img: img1 },
    { title: "June, 2024", description: "Training Center Tour", img: img3 },
    { title: "July, 2024", description: "Fly with the Team", img: img2 },
  ],
  button3: [
    { title: "MAY, 2024", description: "Private Stadium Tour", img: img1 },
    { title: "June, 2024", description: "Private Stadium Tour", img: img3 },
    { title: "July , 2024", description: "Training Center Tour", img: img5 },
    { title: "Aug, , 2024", description: "UFC 294", img: img4 },
  ],
  button4: [
    { title: "Feb, 2024", description: "Training Center Tour", img: img2 },
    { title: "March, 2024", description: "UFC 294", img: img1 },
    { title: "June, 2024", description: "Training Center Tour", img: img2 },
    { title: "July, 2024", description: "Fly with the Team", img: img3 },
  ],
  button5: [
    { title: "MAY, 2024", description: "Private Stadium Tour", img: img1 },
    { title: "June, 2024", description: "Private Stadium Tour", img: img2 },
    { title: "July , 2024", description: "Training Center Tour", img: img3 },
    { title: "Aug, , 2024", description: "UFC 294", img: img4 },
  ],
};

const RenderCard: React.FC<{ buttonKey?: string }> = ({ buttonKey }) => {
  const [activeButton, setActiveButton] = useState<string | null>("button1");
  const [hoveredButton, setHoveredButton] = useState<any | null>(null);

  const handleBoxHover = (key: string) => {
    setHoveredButton(key);
  };
  const handleClick = (key: string) => {
    setActiveButton(key);
  };
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <Box
        sx={{
          paddingLeft: " 12px",
          display: "flex",
          flexDirection: "row",
          gap: "10px",

          maxWidth: isMobile ? 400 : "none",
          overflowX: isMobile ? "auto" : "",
          justifyContent: "center",
        }}
      >
        <Grid sm={12} sx={{ display: "flex", gap: " 10px" }}>
          <Box
            width={140}
            height={70}
            sx={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
              //   backgroundColor: "#fff", // Custom background color
              backgroundColor:
                  activeButton === "button1"|| hoveredButton === "button1"
                    ? "#e2b254"
                    : "#fff",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderRadius: "10px", // Custom border radius
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Custom box shadow
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={() => handleBoxHover("button1")}
              onMouseLeave={() => handleBoxHover("")}
            
            onClick={() => handleClick("button1")}
          >
            <PhoneIcon sx={{ marginRight: isMobile ? "10px" : "0px" }} />
            <Typography>ART</Typography>
          </Box>
          <Box
            width={140}
            height={70}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
            //   backgroundColor: "#fff", // Custom background color
            backgroundColor:
                  activeButton === "button2"|| hoveredButton === "button2"
                    ? "#6dfcb7"
                    : "#fff",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: "10px", // Custom border radius
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Custom box shadow
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={() => handleBoxHover("button2")}
            onMouseLeave={() => handleBoxHover("")}
            onClick={() => handleClick("button2")}
          >
            <PhoneIcon sx={{ marginRight: isMobile ? "10px" : "0px" }} />
            <Typography>MUSIC</Typography>
          </Box>
          <Box
            width={140}
            height={70}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
            //   backgroundColor: "#fff", // Custom background color

            backgroundColor:
            activeButton === "button3"|| hoveredButton === "button3"
              ? "#e1ee7c"
              : "#fff",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: "10px", // Custom border radius
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Custom box shadow
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={() => handleBoxHover("button3")}
            onMouseLeave={() => handleBoxHover("")}
            onClick={() => handleClick("button3")}
          >
            <PhoneIcon sx={{ marginRight: isMobile ? "10px" : "0px" }} />
            <Typography>COLLECTS</Typography>
          </Box>
          <Box
            width={140}
            height={70}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
            //   backgroundColor: "#fff", // Custom background color
            backgroundColor:
            activeButton === "button4"|| hoveredButton === "button4"
              ? "#fb543b"
              : "#fff",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: "10px", // Custom border radius
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Custom box shadow
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={() => handleBoxHover("button4")}
              onMouseLeave={() => handleBoxHover("")}
            onClick={() => handleClick("button4")}
          >
            <PhoneIcon sx={{ marginRight: isMobile ? "10px" : "0px" }} />
            <Typography>VIDEO</Typography>
          </Box>
          <Box
            width={140}
            height={70}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              //   backgroundColor: "#fff", // Custom background color
              backgroundColor:
                  activeButton === "button5"|| hoveredButton === "button5"
                    ? "#97a4e3"
                    : "#fff",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: "10px", // Custom border radius
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Custom box shadow
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={() => handleBoxHover("button5")}
            onMouseLeave={() => handleBoxHover("")}
            onClick={() => handleClick("button5")}
          >
            <PhoneIcon sx={{ marginRight: isMobile ? "10px" : "0px" }} />
            <Typography>COLLECTIBLES</Typography>
          </Box>
        </Grid>
      </Box>
      <Box
        mt={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "25px",
          overflowX: isMobile ? "auto" : "hidden",
          justifyContent: isMobile ? "center" : "",
        }}
      >
        {activeButton && (
          <>
            <Grid
              sx={{
                display: "flex",
                gap: "25px",
                overflowX: "auto",
                maxWidth: isMobile ? "220px" : "auto",
              }}
            >
              {cardData[activeButton].map((card, index) => (
                <Grid sm={12} md={4} lg={3}>
                  <Box
                    width={220}
                    sx={{
                      paddingTop: "10px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "red" }}>
                      {card.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        padding: "0px 10px",
                      }}
                    >
                      {card.description}
                    </Typography>
                    <Box
                      sx={{
                        borderRadius: "10px",
                        margin: "10px",
                        height: "230px",
                        padding: "10px",
                        backgroundImage: `url(${card.img})`, // Set the background image
                        backgroundSize: "cover", // Make sure the background image covers the entire box
                        backgroundPosition: "center", // Center the background image
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        paddingBottom: "10px",
                      }}
                    >
                      <Box sx={{ marginRight: "5px" }}>
                        <img width={24} height={24} src={Teamicon} />
                      </Box>
                      <Typography>Valencia CF</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>
    </div>
  );
};

export default RenderCard;
