import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from '@mui/material';

// You can replace these with your own images URLs or local imports
const services = [
  {
    title: 'Custom Packaging Solutions',
    description:
      'Innovative packaging tailored to your business needs. Eco-friendly materials, custom designs, and bulk orders with fast turnaround and exceptional service.',
    image: 'https://images.unsplash.com/photo-1581093588401-4449f9f0c4a6?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Construction Work',
    description:
      'High-quality construction solutions including welding, cutting, and building material handling by skilled professionals.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Smart Packaging',
    description:
      'Advanced packaging technology integrating safety, usability, and sustainability to protect and enhance your products.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Agriculture Work',
    description:
      'Durable packaging and materials specifically designed for agricultural products to ensure freshness and safety.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Welder & Handmade Work',
    description:
      'Precision welding and handmade packaging work to meet custom industrial and artisanal requirements.',
    image: 'https://images.unsplash.com/photo-1518118573785-718d464e9af6?auto=format&fit=crop&w=600&q=80',
  },
];

const Services = () => (
  <Container sx={{ py: 6, maxWidth: 'lg' }}>
    <Typography variant="h3" component="h1" textAlign="center" gutterBottom fontWeight="bold">
      Our Services
    </Typography>
    <Typography
      variant="body1"
      textAlign="center"
      color="text.secondary"
      maxWidth="700px"
      mx="auto"
      mb={5}
    >
      We offer integrated solutions for the packaging and construction sectors. Explore our range of expert services designed to meet your business needs with quality, innovation, and sustainability.
    </Typography>

    <Grid container spacing={4}>
      {services.map(({ title, description, image }, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="180"
              image={image}
              alt={title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Services;
