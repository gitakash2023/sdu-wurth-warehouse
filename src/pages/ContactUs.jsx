import React from 'react';
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Send as SendIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Language as LanguageIcon,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  WhatsApp,
  Telegram,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import CustomButton from '../components/CustomButton';
import MapLocation from '../components/MapLocation';

// Colors from header/footer
const headerFooterBg = '#0D47A1'; // strong dark blue
const primaryAccent = '#64B5F6'; // sky blue accent
const textWhite = '#FFFFFF';

const ContactUs = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url("https://img.freepik.com/free-photo/blur-hospital_1203-7972.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'stretch',
          p: { xs: 2, sm: 6 },
          gap: 4,
        }}
      >
        {/* Left - Contact Info */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ flex: 1 }}
        >
          <Box
            sx={{
              backgroundColor: headerFooterBg,
              color: textWhite,
              borderRadius: 2,
              overflow: 'hidden',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
              alt="Contact Banner"
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
              }}
            />

            <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Contact Information
                </Typography>
                <Divider sx={{ mb: 2, borderColor: primaryAccent }} />
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2, color: primaryAccent }} />
                  <Typography>Jordan International Transport
                  64B Benburb Road, Moy, Co Tyrone,
                  BT71 7EZ</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: primaryAccent }} />
                  <Typography>028 8778 9431</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 2, color: primaryAccent }} />
                  <Typography>info.sduwurthwarehouse.com</Typography>
                </Box>
                
              </Box>

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                {[Facebook, Twitter, Instagram, LinkedIn, YouTube, WhatsApp, Telegram].map((Icon, idx) => (
                  <IconButton
                    key={idx}
                    sx={{
                      color: primaryAccent,
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      '&:hover': {
                        backgroundColor: primaryAccent,
                        color: textWhite,
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ flex: 1 }}
        >
          <Box
            sx={{
              backgroundColor: '#e3f2fd', // light blue from MUI palette (like sky blue)
              borderRadius: 2,
              p: 4,
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                mb: 4,
                fontWeight: 'bold',
                color: headerFooterBg,
              }}
            >
              Contact Us
            </Typography>

            <form style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* Name */}
              <TextField
                fullWidth
                required
                label="Name"
                placeholder="Enter your name"
                variant="outlined"
                sx={{ mb: 2 }}
                name="name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: headerFooterBg }} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Phone Number with +91 prefix */}
              <TextField
                fullWidth
                required
                label="Phone Number"
                placeholder="Enter your phone number"
                variant="outlined"
                type="tel"
                sx={{ mb: 2 }}
                name="phone"
                InputProps={{
                  startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon sx={{ color: headerFooterBg }} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Email */}
              <TextField
                fullWidth
                required
                label="Email"
                placeholder="Enter your email"
                variant="outlined"
                type="email"
                sx={{ mb: 2 }}
                name="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: headerFooterBg }} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Company */}
              <TextField
                fullWidth
                label="Company"
                placeholder="Enter your company name"
                variant="outlined"
                sx={{ mb: 2 }}
                name="company"
              />

              {/* Subject */}
              <TextField
                fullWidth
                required
                label="Subject"
                placeholder="Enter subject"
                variant="outlined"
                sx={{ mb: 2 }}
                name="subject"
              />

              {/* Question - multiline */}
              <TextField
                fullWidth
                required
                label="Question"
                placeholder="Type your question here"
                variant="outlined"
                multiline
                rows={4}
                sx={{ mb: 2 }}
                name="question"
              />

              <CustomButton label="Send Message" endIcon={<SendIcon sx={{ color: headerFooterBg }} />} />
            </form>
          </Box>
        </motion.div>
      </Box>
      <MapLocation />
    </>
  );
};

export default ContactUs;
