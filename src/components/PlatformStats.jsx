import React from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import Inventory2Icon from '@mui/icons-material/Inventory2'; // Total Packages
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // Orders Delivered
import RecyclingIcon from '@mui/icons-material/Recycling'; // Eco-friendly
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; // Businesses Served
import PublicIcon from '@mui/icons-material/Public'; // Countries

const stats = [
  {
    label: 'Total Packages Supplied',
    count: 150000,
    icon: <Inventory2Icon sx={{ fontSize: 50, color: '#0288d1' }} />,
    bg: '#e1f5fe',
  },
  {
    label: 'Orders Delivered',
    count: 120000,
    icon: <LocalShippingIcon sx={{ fontSize: 50, color: '#0277bd' }} />,
    bg: '#b3e5fc',
  },
  {
    label: 'Eco-Friendly Shipments',
    count: 45000,
    icon: <RecyclingIcon sx={{ fontSize: 50, color: '#00796b' }} />,
    bg: '#b2dfdb',
  },
  {
    label: 'Businesses Served',
    count: 600,
    icon: <BusinessCenterIcon sx={{ fontSize: 50, color: '#512da8' }} />,
    bg: '#ede7f6',
  },
  {
    label: 'Countries Reached',
    count: 18,
    icon: <PublicIcon sx={{ fontSize: 50, color: '#0288d1' }} />,
    bg: '#e1f5fe',
  },
];

const PlatformStats = () => {
  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: '#f9f9f9' }}>
      <Typography
  variant="h4"
  align="center"
  fontWeight="bold"
  gutterBottom
  sx={{
    fontSize: { xs: '1.8rem', sm: '2.2rem' },
    color: '#0d47a1',
  }}
>
  SDU Wurth Warehouse at a Glance
</Typography>

<Typography
  variant="subtitle1"
  align="center"
  sx={{ color: '#555', mb: 4, fontSize: { xs: '0.95rem', sm: '1.05rem' } }}
>
  Est. 1889 · Based in Jordan · Delivering quality packaging solutions worldwide
</Typography>


      <Grid container spacing={4} justifyContent="center">
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: 'center',
                  backgroundColor: item.bg,
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.03)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box mb={2}>{item.icon}</Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: '#333', fontSize: { xs: '1.5rem', sm: '1.7rem' } }}
                >
                  <CountUp end={item.count} duration={2} separator="," />
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#555', mt: 1, fontSize: { xs: '0.95rem', sm: '1rem' } }}
                >
                  {item.label}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlatformStats;
