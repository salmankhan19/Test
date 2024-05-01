import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/img-grid1.png";
import img2 from "../../assets/img-grid2.png";
import img3 from "../../assets/img-grid3.png";
import img4 from "../../assets/img-grid4.png";
import img5 from "../../assets/img-grid5.png";

const Grids: React.FC = () => {
  return (
    <Box
      sx={{
        width: "70%",
        textAlign: "center",
        margin: "auto",
        backgroundColor: "#212121",
        color: "white",
        borderRadius: "30px",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: "400", padding: "10px", marginBottom: "0" }}
        gutterBottom
      >
        The world’s best fan rewards
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
        Watch a match alongside legends. Fly with the team on an away trip.
        Score in iconic stadiums. Own game-scored balls and more (much more).
      </Typography>
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={2}>
          {/* First Column */}
          <Grid item md={6}>
            <Box sx={{ backgroundColor: "black", borderRadius: "25px", height: '278px' }}>
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "165px",
                  borderRadius:" 25px 25px 0px 0px",
                }}
                src={img1}
              />
              <Box sx={{textAlign: 'start', padding: '10px'}}>
                <Typography variant="h6">Exclusive</Typography>
                <Typography>
                  Unlock unprecedented fan experiences. Score goals at iconic
                  stadiums, fly with the team and more.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box sx={{ backgroundColor: "black", borderRadius: "25px",  height: '278px' }}>
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "165px",
                  borderRadius:" 25px 25px 0px 0px",
                }}
                src={img2}
              />
              <Box sx={{textAlign: 'start', padding: '10px'}}>
                <Typography variant="h6">Premium</Typography>
                <Typography>
                Access unmatched experiences that go beyond the pitch
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Second Column */}
          <Grid item md={4}>
          <Box sx={{ backgroundColor: "black", borderRadius: "25px",  height: '278px' }}>
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "165px",
                  borderRadius:" 25px 25px 0px 0px",
                }}
                src={img3}
              />
              <Box sx={{textAlign: 'start', padding: '10px'}}>
                <Typography variant="h6">Tickets</Typography>
                <Typography>
                Get unparalleled access to major sporting events.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
          <Box sx={{ backgroundColor: "black", borderRadius: "25px",  height: '278px' }}>
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "165px",
                  borderRadius:" 25px 25px 0px 0px",
                }}
                src={img4}
              />
              <Box sx={{textAlign: 'start', padding: '10px'}}>
                <Typography variant="h6">Merchandise</Typography>
                <Typography>
                Gear up with authentic team merchandise.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
          <Box sx={{ backgroundColor: "black", borderRadius: "25px",  height: '278px' }}>
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "165px",
                  borderRadius:" 25px 25px 0px 0px",
                }}
                src={img5}
              />
              <Box sx={{textAlign: 'start', padding: '10px'}}>
                <Typography variant="h6">Collectibles</Typography>
                <Typography>
                Own Game-Scored Balls, Matchworn Shirts, Digital Collectibles, and More.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Grids;
