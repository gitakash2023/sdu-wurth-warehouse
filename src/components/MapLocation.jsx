import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Map = () => {
  return (
    <Box sx={{ mt: 4, px: { xs: 2, sm: 6 }, textAlign: 'center' }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#0277bd',
          mb: 3,
          fontSize: '1.8rem',
          letterSpacing: '1px',
        }}
      >
        Our Location
      </Typography>

      <Paper
        elevation={4}
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          overflow: 'hidden',
          maxWidth: '100%',
          padding: 2,
          mb: 4,
        }}
      >
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384860.3130317457!2d35.54669727401969!3d31.21735275084542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f6cbb43aa91%3A0x2c36f94f9011fd78!2sJordan!5e0!3m2!1sen!2sin!4v1717428987915!5m2!1sen!2sin"
          width="100%"
          height="450"
          sx={{
            border: 0,
            borderRadius: '12px',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map - Jordan"
        />
      </Paper>

      <Typography
        variant="body1"
        sx={{
          fontSize: '1rem',
          color: '#333',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: 1.7,
          letterSpacing: '0.5px',
        }}
      >
        We are located in <strong>Jordan, Middle East</strong>. Use the map above to explore our region. For any inquiries or support, feel free to <strong>contact us</strong>.
      </Typography>
    </Box>
  );
};

export default Map;
