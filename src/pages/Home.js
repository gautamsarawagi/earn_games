import React, { useState } from "react";

import { Link } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";

import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// importing the data
import { sidebar_Data } from "../data/sidebar";
// importing logo
import logo from "../assets/img/logo.png";

import Gamesquare from "../components/Gamesquare"

const drawerWidth = 240;
const navItems = ['BSC', 'EN', 'Connect Wallet'];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Home(props) {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // for the sidebar

  const [activeName, setActiveName] = useState("");

  const setSidebarContnetActive = (text) => {
    if (text) {
      setActiveName(text);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
        <AppBar component="nav" position="fixed" open={open}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: {md:5,xs:2},
              ...open,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: {sm: 'flex' },minWidth:'128px' }}
          >
            Earn Games
          </Typography>
          <Box>
            {navItems.map((item,index) => (
              <Button key={index} sx={{ color: '#fff' }} style={{padding:'0',margin:'0'}}>
                {item}
              </Button>
            ))}
          </Box>
                    
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" noWrap component="div">
            Earn Games
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sidebar_Data.map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <Link to={`/${text.path}`} style={{textDecoration:'none'}}>
              <ListItemButton
                sx={{
                  minHeight: 50,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => setSidebarContnetActive(text.name)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  sx={{
                    opacity: open ? 1 : 0,
                    minHeight: 50,
                    display: "flex",
                    alignItems: "center",
                    color: activeName == text.name ? "red" : "black",
                  }}
                />
              </ListItemButton>
              </Link>
              
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  );
}

export default Home;