import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

export default function Loading({ message = "Cargando..." }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress color="primary" />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {message}
      </Typography>
    </Box>
  );
}
