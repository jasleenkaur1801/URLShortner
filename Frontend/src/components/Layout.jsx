// src/components/Layout.jsx
import React, { useState } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function Layout({ children }) {
  const theme = useTheme();
  const [mode, setMode] = useState(theme.palette.mode);
  const toggleMode = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: mode === 'light' ? 'grey.100' : 'grey.900',
        minHeight: '100vh',
        minWidth: '100vw',
        overflow: 'hidden',
      }}
    >
      {/* Absolute‐positioned toggle in the top‐right */}
      <IconButton
        onClick={toggleMode}
        color="inherit"
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 10,
        }}
      >
        {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
      </IconButton>

      {/* Single flex container to center */}
      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 16 }}
        sx={{
          display: 'flex',
          alignItems: 'center',      // vertical centering
          justifyContent: 'center',  // horizontal centering
          height: '100vh',           // full viewport height
          width: '100vw',            // full viewport width
          p: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: mode === 'light'
              ? 'background.paper'
              : 'background.default',
            borderRadius: 2,
            boxShadow: 3,
            p: 4,
            width: '100%',
            maxWidth: 600,           // constrain your card
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
