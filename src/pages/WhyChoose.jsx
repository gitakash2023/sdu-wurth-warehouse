import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

const whyPoints = [
  'Innovative and Sustainable Packaging Designs',
  'High-Quality Materials at Competitive Prices',
  'Tailored Solutions for Every Industry',
  'Fast Turnaround and On-Time Delivery',
  'Experienced Team Since 1889',
  'Trusted by Businesses in Jordan and Beyond',
];

const WhyChoose = () => (
  <Box sx={{ py: 6, px: 2, backgroundColor: '#e3f2fd' }}>
    <Grid
      container
      spacing={4}
      direction={{ xs: 'column', md: 'row' }}
      alignItems="center"
    >
      {/* Left Side Image (Your original image) */}
      <Grid item xs={12} md={6}>
        <motion.img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
          alt="Why Choose SDU-Wurth-Warehouse"
          style={{
            width: '100%',
            borderRadius: '12px',
            maxHeight: '450px',
            objectFit: 'cover',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </Grid>

      {/* Right Side Content */}
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
            Why Choose SDU-Wurth-Warehouse
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#333' }}>
            We provide innovative packaging solutions tailored to your business needs. Here's why companies across Jordan and the world trust us:
          </Typography>
          <List>
            {whyPoints.map((point, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: '#1976d2' }} />
                </ListItemIcon>
                <ListItemText primary={point} />
              </ListItem>
            ))}
          </List>
        </motion.div>
      </Grid>
    </Grid>
  </Box>
);

export default WhyChoose;
