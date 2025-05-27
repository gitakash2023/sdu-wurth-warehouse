import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Import your already created components
import About from './About'; // Example: import AboutUs component


import Testimonials from './Testimonials';
import Partners from './Partners';
import ContactUs from './ContactUs'
import WhyChoose from './Services';
import Services from './WhyChoose';
import PlatformStats from '../components/PlatformStats';
import HeroSection from '../components/HeroSection';
import LatestJobs from './LatestJobs';



const Home = () => (
  <Box sx={{ py: 5, px: 2 }}>
    {/* Hero Section */}
    

    <HeroSection/>

    {/* About Us Section */}
    <About />
    <Services/>
    <LatestJobs/>
    

   

    {/* Latest Jobs Section */}
   
    <Testimonials/>
    <Partners/>
    <PlatformStats/>
    <WhyChoose/>
    <ContactUs/>

  </Box>
);

export default Home;
