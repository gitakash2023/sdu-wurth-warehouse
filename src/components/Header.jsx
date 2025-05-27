import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';
import logo from '../assets/SDU WURTH WAREHOUSE.webp';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Why Choose Us', path: '/why-choose-us' },
   { label: 'Jobs', path: '/jobs' },

 
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Our Partners', path: '/partners' },
  { label: 'Contact Us', path: '/contact-us' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#e0f7fa',
          color: 'black',
        }}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box display="flex" alignItems="center">
            <img
              src={logo}
              alt="Easy Job Logo"
              style={{
                height: '45px',
                marginRight: '10px',
                borderRadius: '50%',
              }}
            />
            
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box display="flex" alignItems="center" gap={2}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'black',
                    fontWeight: 500,
                    textTransform: 'none',
                  }}
                >
                  {item.label}
                </Button>
              ))}

              {/* Email with Icon */}
              <Box display="flex" alignItems="center" gap={1}>
                <MailOutlineIcon fontSize="small" />
                <Typography sx={{ fontSize: '0.9rem', color: 'black' }}>
                  info.sduwurthwarehouse.com
                </Typography>
              </Box>

              {/* Login Button with Icon */}
              <Button
                component={Link}
                to="/signup-login"
                startIcon={<LockOpenIcon />}
                sx={{
                  ml: 1,
                  color: 'black',
                  fontWeight: 600,
                  textTransform: 'none',
                  border: '1px solid black',
                  px: 2,
                  py: 0.5,
                  '&:hover': {
                    backgroundColor: 'black',
                    color: 'white',
                  },
                }}
              >
                Login
              </Button>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.path}
              component={Link}
              to={item.path}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 'bold' }} />
            </ListItem>
          ))}

          {/* Email with Icon */}
          <ListItem>
            <ListItemIcon>
              <MailOutlineIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="info.sduwurthwarehouse.com"
              primaryTypographyProps={{ fontSize: '0.9rem' }}
            />
          </ListItem>

          {/* Login with Icon */}
          <ListItem
            button
            component={Link}
            to="/signup-login"
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <LockOpenIcon />
            </ListItemIcon>
            <ListItemText primary="Login" primaryTypographyProps={{ fontWeight: 'bold' }} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
