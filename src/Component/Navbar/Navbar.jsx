import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SideNavbar from "./SideNavbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Drawer } from "@mui/material";

export default function MenuAppBar() {
  const [auth, setAuth] = useState(true);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // mobile responsive dower
  const [mobileOpen, setMobileOpen] = useState(false);

  // mobile res handle
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1, backgroundColor: "primary.main" }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img
                src="https://crumble.honeyside.it/static/media/honeyside-logo.541af29591f68acf94c4.png"
                alt="logo"
                width={30}
                height={30}
              />
            </Typography>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <NotificationsIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
            <IconButton
              onClick={handleDrawerToggle}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { md: "none", sm: "block" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>

          {/* dower section */}
          <Box>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { md: "block", lg: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: 270,
                },
              }}
            >
              <SideNavbar />
            </Drawer>
          </Box>
        </AppBar>
      </Box>

      {/*  outlet and left side bar section */}
      <Box display="flex" mt={{ md: 8, xs: 6 }}>
        <Box
          width="20%"
          sx={{
            display: { md: "block", xs: "none", position: "sticky", top: "0" },
          }}
        >
          <SideNavbar />
        </Box>

        <Box width="80%">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
