import React, { useState } from 'react';
import {
  Box, TextField, Typography, Button,
  InputAdornment, FormControl, InputLabel, OutlinedInput, IconButton, Divider
} from '@mui/material';
import {
  Person as PersonIcon, Email as EmailIcon, Lock as LockIcon,
  Visibility, VisibilityOff
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const SignupLoginForm = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleToggleForm = () => {
    setIsSignup((prev) => !prev);
    setFormData({ name: '', email: '', password: '' });
    setError(null);
    setSuccessMessage(null);
  };

  const validateForm = () => {
    if (!formData.email || !formData.password || (isSignup && !formData.name)) {
      setError('All fields are required!');
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const url = isSignup ? '/api/signup' : '/api/login';
      const payload = isSignup
        ? { ...formData, role: 'company' }
        : { email: formData.email, password: formData.password };

      const response = await axios.post(url, payload);
      const data = response.data;

      if (data.success) {
        setSuccessMessage(data.message);
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        navigate('/dashboard/company');
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const primaryBlue = '#4A90E2';
  const primaryBlueLight = '#A9CFF9';
  const primaryBlueDark = '#2A5CAA';
  const white = '#fff';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: 500 }}
      >
        <Box
          sx={{
            backgroundColor: `rgba(74,144,226,0.9)`,
            borderRadius: 2,
            boxShadow: `0 0 15px 2px ${primaryBlueDark}`,
            p: 4,
            color: white,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }} align="center">
            {isSignup ? 'Create Company Account' : 'Login to Company Account'}
          </Typography>

          <Typography sx={{ mb: 3 }} align="center" color={primaryBlueLight}>
            {isSignup
              ? 'Sign up to post and manage job listings.'
              : 'Login using your company credentials.'}
          </Typography>

          {error && <Typography color="error" align="center">{error}</Typography>}
          {successMessage && <Typography color="success.main" align="center">{successMessage}</Typography>}

          <form onSubmit={handleSubmit}>
            {isSignup && (
              <TextField
                fullWidth
                label="Company Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your company name"
                variant="outlined"
                sx={{
                  mb: 2,
                  input: { color: white },
                  label: { color: primaryBlueLight },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: primaryBlueLight },
                    '&:hover fieldset': { borderColor: white },
                    '&.Mui-focused fieldset': { borderColor: white },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: white }} />
                    </InputAdornment>
                  ),
                }}
              />
            )}

            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              variant="outlined"
              type="email"
              sx={{
                mb: 2,
                input: { color: white },
                label: { color: primaryBlueLight },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: primaryBlueLight },
                  '&:hover fieldset': { borderColor: white },
                  '&.Mui-focused fieldset': { borderColor: white },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: white }} />
                  </InputAdornment>
                ),
              }}
            />

            <FormControl variant="outlined" fullWidth sx={{ mb: 3 }}>
              <InputLabel sx={{ color: primaryBlueLight }}>Password</InputLabel>
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                name="password"
                onChange={handleInputChange}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: white }} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((show) => !show)} edge="end" sx={{ color: white }}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                sx={{
                  color: white,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: primaryBlueLight,
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: white,
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: white,
                  },
                  input: { color: white },
                }}
              />
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                backgroundColor: white,
                color: primaryBlue,
                fontWeight: 'bold',
                '&:hover': { backgroundColor: primaryBlueLight, color: white },
                textTransform: 'none',
              }}
            >
              {loading ? 'Please wait...' : isSignup ? 'Sign Up as Company' : 'Login as Company'}
            </Button>
          </form>

          <Divider sx={{ my: 3, borderColor: primaryBlueLight }} />

          <Typography align="center" sx={{ color: primaryBlueLight }}>
            {isSignup ? 'Already registered as a company?' : "New company?"}{' '}
            <Button
              onClick={handleToggleForm}
              sx={{ textTransform: 'none', color: white, fontWeight: 'bold' }}
            >
              {isSignup ? 'Login here' : 'Sign up here'}
            </Button>
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default SignupLoginForm;
