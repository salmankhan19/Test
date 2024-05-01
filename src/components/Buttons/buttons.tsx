import {Box, Button} from "@mui/material";


const Buttons = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', margin:'40px 0px'}}>
        <Button
          variant="contained"
          sx={{ borderRadius: "100px", marginRight: "30px", padding: '15px 40px 15px 40px' }}
        >
          Mint
        </Button>
        <Button variant="contained" sx={{ borderRadius: "100px", padding: '15px 40px 15px 40px' }}>
          Shop
        </Button>
    </Box>
  )
}

export default Buttons
