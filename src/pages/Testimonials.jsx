import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    businessName: 'FreshPack Pvt Ltd',
    contactPerson: 'Rajesh Kumar',
    serviceUsed: 'Packaging Service',
    feedback: 'We are extremely satisfied with the packaging service provided by SDU-Wurth-Warehouse. Their team understood our needs perfectly and delivered on time.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    businessName: 'GreenGrocers Inc.',
    contactPerson: 'Priya Singh',
    serviceUsed: 'Custom Packaging',
    feedback: 'SDU-Wurth-Warehouse helped us revamp our packaging with custom solutions that boosted our product appeal.',
    image: 'https://randomuser.me/api/portraits/women/35.jpg',
  },
  {
    businessName: 'Sweet Treats Co.',
    contactPerson: 'Anil Joshi',
    serviceUsed: 'Packaging and Logistics',
    feedback: 'Thanks to SDU-Wurth-Warehouse, our products are packaged securely and delivered on time, ensuring customer satisfaction.',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    businessName: 'EcoWrap Solutions',
    contactPerson: 'Kavita Mehra',
    serviceUsed: 'Eco-friendly Packaging',
    feedback: 'Their eco-friendly packaging options aligned perfectly with our values. Highly recommend SDU-Wurth-Warehouse!',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
  {
    businessName: 'Urban Fresh Foods',
    contactPerson: 'Vivek Sharma',
    serviceUsed: 'Food Packaging',
    feedback: 'Our food packaging has improved quality and shelf life thanks to SDU-Wurth-Warehouse’s excellent service.',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    businessName: 'FashionBox Ltd',
    contactPerson: 'Ritu Verma',
    serviceUsed: 'Retail Packaging',
    feedback: 'Their retail packaging solutions gave our brand a fresh and premium look. Great teamwork from SDU-Wurth-Warehouse.',
    image: 'https://randomuser.me/api/portraits/women/54.jpg',
  },
  {
    businessName: 'GadgetGuard',
    contactPerson: 'Suresh Patel',
    serviceUsed: 'Protective Packaging',
    feedback: 'Packaging by SDU-Wurth-Warehouse keeps our gadgets safe during shipment. Very reliable and professional.',
    image: 'https://randomuser.me/api/portraits/men/63.jpg',
  },
  {
    businessName: 'Natural Essence',
    contactPerson: 'Neha Kapoor',
    serviceUsed: 'Organic Product Packaging',
    feedback: 'Their organic packaging solutions enhanced our brand image and helped us attract more customers.',
    image: 'https://randomuser.me/api/portraits/women/62.jpg',
  },
  {
    businessName: 'HomeComforts',
    contactPerson: 'Rajiv Malhotra',
    serviceUsed: 'Home Decor Packaging',
    feedback: 'Packaging from SDU-Wurth-Warehouse is sturdy and attractive, ensuring our products reach customers safely.',
    image: 'https://randomuser.me/api/portraits/men/70.jpg',
  },
  {
    businessName: 'BrightKids Toys',
    contactPerson: 'Anjali Desai',
    serviceUsed: 'Toy Packaging',
    feedback: 'The packaging services by SDU-Wurth-Warehouse are fun, safe, and visually appealing — perfect for our toys.',
    image: 'https://randomuser.me/api/portraits/women/69.jpg',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ px: 2, py: 6, backgroundColor: '#fafafa' }}>
      <Typography variant="h4" align="center" fontWeight="bold" mb={4}>
        Client Testimonials for SDU-Wurth-Warehouse Packaging Service
      </Typography>
      <Typography align="center" mb={5} sx={{ color: '#555' }}>
        Hear what our business clients say about our packaging solutions
      </Typography>
      <Slider {...settings}>
        {testimonials.map((client, index) => (
          <Box key={index} px={2} sx={{ height: '100%' }}>
            <TestimonialCard 
              name={client.businessName} 
              profile={client.contactPerson} 
              selectedCompany={client.serviceUsed} 
              comment={client.feedback} 
              image={client.image} 
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Testimonials;
