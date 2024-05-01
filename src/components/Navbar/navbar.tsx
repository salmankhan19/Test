import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 350;
const navItems = ["Home", "About", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <CloseIcon sx={{ float: 'right', cursor: 'pointer' }} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box>
        <Button
          variant="contained"
          sx={{ borderRadius: "20px", marginRight: "30px" }}
        >
          Register
        </Button>
        <Button variant="outlined" sx={{ borderRadius: "20px" }}>
          Login
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="fixed"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <Hidden mdDown>
            <Grid container>
              <Grid sm={2} md={3} lg={4}></Grid>
              <Grid
                sm={4}
                md={4}
                lg={4}
                sx={{ textAlign: "center", alignSelf: "center" }}
              >
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "black" }}>
                    {item}
                  </Button>
                ))}
              </Grid>
              <Grid sm={6} md={5} lg={4}sx={{ textAlign: "end" }}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "100px",
                    marginRight: "30px",
                    backgroundColor: "#1c39c2",
                    padding: "15px 40px 15px 40px",
                  }}
                >
                  Register
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "100px",
                    padding: "15px 40px 15px 40px",
                    borderColor: "#1c39c2",
                    "&:hover": {
                      backgroundColor: "#1c39c2",
                      color: "#fff"
                    },
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid md={12} sx={{ width: "100%", textAlign: "end" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Hidden>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
