// src/components/CustomButton.js
import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ variant, color, endIcon, label, onClick, sx, ...props }) => (
  <Button
    variant={variant || 'contained'}
    color={color || 'primary'}
    endIcon={endIcon}
    onClick={onClick}
    fullWidth
    sx={{
      py: 1.5,
      fontWeight: 'bold',
      backgroundColor: '#001F3F',
      '&:hover': {
        backgroundColor: '#FFD700',
        color: '#001F3F',
        transform: 'scale(1.05)',
      },
      ...sx,
    }}
    {...props}
  >
    {label}
  </Button>
);

export default CustomButton;
