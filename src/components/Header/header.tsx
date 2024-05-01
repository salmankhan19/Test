import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from  "./styles.module.css";
import Tabs from "./tabs"
const Header: React.FC = () => {
  return (
    <>
      <Box className={styles.header} sx={{marginTop: '90px !important', width: '70%',  margin: "auto",}}>
        <Typography className={styles.line} sx={{color: 'red'}}>THE BIGGEST TEAMS. THE BEST FAN REWARDS.</Typography>
        <Typography className={styles.line} sx={{fontSize: '41px'}} variant="h3" gutterBottom>
          WELCOME TO CARLTONCOIN <span style={{ color: 'red' }}>.</span>
        </Typography>
        <Tabs />
      </Box>
      
    </>
  );
};

export default Header;

