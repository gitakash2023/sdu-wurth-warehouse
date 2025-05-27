import React from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InsightsIcon from '@mui/icons-material/Insights';
import VisibilityIcon from '@mui/icons-material/Visibility';

const keyPoints = [
  {
    icon: <CheckCircleIcon sx={{ color: '#4caf50' }} />,
    title: 'Sustainable Materials',
    description:
      'We prioritize eco-friendly packaging by using sustainable, recyclable, and biodegradable materials to reduce environmental impact across industries.',
  },
  {
    icon: <InsightsIcon sx={{ color: '#1976d2' }} />,
    title: 'Custom Solutions',
    description:
      'Our packaging solutions are tailored to meet unique client needs, ensuring product safety, brand enhancement, and operational efficiency.',
  },
  {
    icon: <VisibilityIcon sx={{ color: '#ff9800' }} />,
    title: 'Trusted Since 1889',
    description:
      'With over a century of experience, SDU-Wurth-Warehouse has built a reputation for quality, innovation, and customer satisfaction worldwide.',
  },
];

const Highlight = ({ text }) => (
  <Box component="span" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
    {text}
  </Box>
);

const AboutUs = () => (
  <Container sx={{ py: 6, maxWidth: 'md' }}>
    <Box sx={{ textAlign: 'center', mb: 5 }}>
      <Typography variant="h3" component="h1" color="text.primary" gutterBottom>
        About SDU-Wurth
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ fontWeight: 400, lineHeight: 1.6 }}
      >
        <Highlight text="SDU-Wurth-Warehouse" /> is a global leader in packaging innovation, 
        specializing in delivering customized, sustainable, and high-quality packaging solutions 
        that empower businesses across diverse industries.
        <br />
        <br />
        Our commitment to <Highlight text="sustainable materials" /> and <Highlight text="custom solutions" /> 
        reflects our dedication to protecting the environment while meeting exact client specifications. 
        Trusted since <Highlight text="1889" />, we combine legacy with innovation to shape the future of packaging.
      </Typography>
    </Box>

    <Card elevation={4} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5" color="primary" gutterBottom fontWeight="bold" textAlign="center">
          What Sets Us Apart
        </Typography>
        <List>
          {keyPoints.map((item, index) => (
            <ListItem key={index} disableGutters alignItems="flex-start" sx={{ mb: 3 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight="600" color="text.primary">
                    {item.title}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {item.description}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  </Container>
);

export default AboutUs;
