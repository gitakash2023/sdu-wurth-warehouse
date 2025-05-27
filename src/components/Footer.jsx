import React from 'react';
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CheckIcon from '@mui/icons-material/Check';
import logo from '../assets/SDU WURTH WAREHOUSE.webp'; // Replace with SDU-Wurth logo

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#e0f7fa',
        color: '#000',
        px: { xs: 2, sm: 6 },
        py: { xs: 4, sm: 6 },
        mt: 4,
      }}
    >
      <Grid container spacing={4}>
        {/* Company Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img
                src={logo}
                alt="SDU-Wurth-Warehouse Logo"
                style={{ height: '40px', borderRadius: '8px' }}
              />
              <Typography variant="h6" fontWeight="bold" color="#000">
                SDU-Wurth
              </Typography>
            </Box>
            <Typography variant="body2" color="#000">
              A global leader in packaging innovation, SDU-Wurth-Warehouse specializes in delivering customized, sustainable, and high-quality packaging solutions across industries.
            </Typography>
            <Typography variant="body2" color="#0277bd" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CheckIcon sx={{ color: '#0277bd', transition: '0.3s', ':hover': { transform: 'scale(1.2)' } }} /> Sustainable Materials
            </Typography>
            <Typography variant="body2" color="#0277bd" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CheckIcon sx={{ color: '#0277bd', transition: '0.3s', ':hover': { transform: 'scale(1.2)' } }} /> Custom Solutions
            </Typography>
            <Typography variant="body2" color="#0277bd" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CheckIcon sx={{ color: '#0277bd', transition: '0.3s', ':hover': { transform: 'scale(1.2)' } }} /> Trusted Since 1889
            </Typography>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom color="#000">
            Contact Us
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <LocationOnIcon fontSize="small" sx={{ color: '#0277bd' }} />
            <Typography variant="body2" color="#000">3575 Fake Buena Vista Avenue</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <PhoneIcon fontSize="small" sx={{ color: '#0277bd' }} />
            <Typography variant="body2" color="#000">+1 555-555-5556</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon fontSize="small" sx={{ color: '#0277bd' }} />
            <Typography variant="body2" color="#000">info.sduwurthwarehouse.com</Typography>
          </Box>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom color="#000">
            Useful Links
          </Typography>
          {['Home', 'About Us', 'Packaging Solutions', 'Contact', 'Sustainability'].map(
            (link, i) => (
              <Typography
                key={i}
                variant="body2"
                color="#000"
                sx={{
                  cursor: 'pointer',
                  mb: 1,
                  ':hover': {
                    color: '#0277bd',
                    transform: 'translateX(5px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                {link}
              </Typography>
            )
          )}
        </Grid>
      </Grid>

      {/* Bottom Footer Bar */}
      <Box mt={4} textAlign="center">
        <Box mb={1}>
          <Tooltip title="Facebook" arrow>
            <IconButton component="a" href="#" target="_blank" sx={{ color: '#0277bd' }}>
              <FacebookIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" arrow>
            <IconButton component="a" href="#" target="_blank" sx={{ color: '#0277bd' }}>
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram" arrow>
            <IconButton component="a" href="#" target="_blank" sx={{ color: '#0277bd' }}>
              <InstagramIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }} color="#000">
          © {new Date().getFullYear()} SDU-Wurth-Warehouse. All rights reserved.
        </Typography>
        <Typography variant="body2" color="#000">
          Developed by Vireonix Technologies
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
