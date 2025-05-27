import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, useTheme, useMediaQuery, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
   title: 'Integrated Solutions for PACKAGING',
    subtitle: 'Delivering excellence in packaging innovation since 1889 – Jordanisme.',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    title: 'Reliable CONSTRUCTION Expertise',
    subtitle: 'Building sustainable infrastructure with experience and integrity – Est. 1889.',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    title: 'Jordanisme: Legacy of Trust',
    subtitle: 'We combine heritage and innovation to power industrial growth globally.',
  },
];

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: '100vh',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)',
                zIndex: 1,
              }}
            />

            {/* Text Content */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
                px: 3,
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              <Typography
                variant={isMobile ? 'h5' : 'h2'}
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  textShadow: '2px 2px 10px rgba(0,0,0,0.9)',
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant={isMobile ? 'body1' : 'h6'}
                sx={{
                  lineHeight: 1.8,
                  textShadow: '1px 1px 5px rgba(0,0,0,0.8)',
                }}
              >
                {slide.subtitle}
              </Typography>

              {/* Buttons */}
              <Stack direction={isMobile ? 'column' : 'row'} spacing={2} mt={4}>
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#42a5f5', // Light Blue
      px: 4,
      py: 1.5,
      fontWeight: 'bold',
      borderRadius: '30px',
      textTransform: 'none',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#1e88e5',
        transform: 'scale(1.05)',
      },
    }}
    onClick={() => navigate('/services')}
  >
    Our Services
  </Button>
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#ef5350', // Light Red
      px: 4,
      py: 1.5,
      fontWeight: 'bold',
      borderRadius: '30px',
      textTransform: 'none',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#e53935',
        transform: 'scale(1.05)',
      },
    }}
    onClick={() => navigate('/contact-us')}
  >
    Contact Us
  </Button>
</Stack>

            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
