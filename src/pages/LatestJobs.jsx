// components/LatestJobs.js
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Chip,
  Snackbar,
} from '@mui/material';
import CustomButton from '../components/CustomButton'; // Update this path as needed
import { ArrowBackIos, ArrowForwardIos, Send } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LatestJobs = () => {
  const [expanded, setExpanded] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const jobs = [
    {
      title: 'Packaging Engineer',
      company: 'Global Pack Solutions',
      location: 'Amman, Jordan',
      salary: 'JOD 8,000 - JOD 12,000',
      description:
        'Design and develop packaging solutions to ensure product safety and sustainability for the Jordanian market.',
      skills: [
        'Packaging Design',
        'CAD Software',
        'Material Science',
        'Quality Control',
        'Supply Chain',
      ],
    },
    {
      title: 'Packaging Supervisor',
      company: 'EcoPack Industries',
      location: 'Irbid, Jordan',
      salary: 'JOD 6,000 - JOD 9,000',
      description:
        'Supervise packaging operations, ensure quality standards and manage packaging staff in production lines.',
      skills: [
        'Team Management',
        'Production Planning',
        'Quality Assurance',
        'Lean Manufacturing',
        'Safety Standards',
      ],
    },
    {
      title: 'Packaging Technician',
      company: 'SmartPack Solutions',
      location: 'Zarqa, Jordan',
      salary: 'JOD 4,500 - JOD 7,000',
      description:
        'Operate and maintain packaging machinery, troubleshoot issues, and optimize packaging processes.',
      skills: [
        'Machine Operation',
        'Troubleshooting',
        'Maintenance',
        'Safety Compliance',
        'Inventory Management',
      ],
    },
    {
      title: 'Packaging Designer',
      company: 'Creative Packaging Co.',
      location: 'Amman, Jordan',
      salary: 'JOD 7,000 - JOD 10,000',
      description:
        'Develop innovative packaging designs to enhance product appeal using graphic design and 3D modeling tools.',
      skills: [
        'Adobe Illustrator',
        'Photoshop',
        '3D Modeling',
        'Branding',
        'Packaging Materials',
      ],
    },
  ];

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : description;
  };

  const handleApplyClick = () => {
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ py: 4, px: 2, backgroundColor: '#f4f4f4', position: 'relative' }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4,
          color: '#001F3F',
        }}
      >
        Latest Jobs
      </Typography>

      {/* Arrow buttons for horizontal scroll */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <CustomButton
          label="←"
          onClick={() => {
            const container = document.getElementById('job-scroll-container');
            container.scrollBy({ left: -300, behavior: 'smooth' });
          }}
          endIcon={<ArrowBackIos />}
          sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        />
        <CustomButton
          label="→"
          onClick={() => {
            const container = document.getElementById('job-scroll-container');
            container.scrollBy({ left: 300, behavior: 'smooth' });
          }}
          endIcon={<ArrowForwardIos />}
          sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        />
      </Box>

      {/* Horizontal scroll container */}
      <Box
        id="job-scroll-container"
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: 3,
          pb: 2,
        }}
      >
        {jobs.map((job, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 300,
              maxWidth: 300,
              borderRadius: '10px',
              boxShadow: 3,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #001F3F',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#001F3F' }}
              >
                {job.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#555', fontWeight: 'bold' }}>
                {job.company}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                <strong>Location:</strong> {job.location}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                <strong>Salary:</strong> {job.salary}
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  <strong>Description:</strong>
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
                  {expanded === index
                    ? job.description
                    : truncateDescription(job.description, 20)}
                </Typography>

                <CustomButton
                  variant="text"
                  label={expanded === index ? 'Show Less' : 'Show More'}
                  sx={{
                    mt: 1,
                    color: '#1976d2',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      color: '#1565c0',
                      backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    },
                  }}
                  onClick={() => handleExpandClick(index)}
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 'bold', color: '#001F3F' }}
                >
                  Required Skills:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {job.skills.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: '#001F3F',
                        color: '#fff',
                        fontWeight: 'bold',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#004080',
                          color: '#cce6ff',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </CardContent>

            <CardActions sx={{ justifyContent: 'center', mt: 'auto' }}>
              <CustomButton
                label="Apply Now"
                onClick={handleApplyClick}
                endIcon={<Send />}
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#1565c0',
                  },
                }}
              />
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* Snackbar for registration/login */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="To apply, please download our app."
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        ContentProps={{
          sx: {
            backgroundColor: '#1976d2',
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
          },
        }}
        action={
          <CustomButton
            variant="outlined"
            size="small"
            label="Download App"
            sx={{ color: '#fff', borderColor: '#fff' }}
            onClick={() => {
              setSnackbarOpen(false);
              window.open(
                'https://play.google.com/store/apps/details?id=com.yourapp.package',
                '_blank'
              );
            }}
          />
        }
      />
    </Box>
  );
};

export default LatestJobs;
