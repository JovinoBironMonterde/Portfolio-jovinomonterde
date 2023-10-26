import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CircularIndeterminate({ loading }) {
  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  } else {
    return null; // Don't render anything if loading is false
  }
}

export default CircularIndeterminate;
