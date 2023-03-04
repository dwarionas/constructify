import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';

interface ErrorProps {
  code?: string;
  message?: string;
}

const ErrorPage: React.FC<ErrorProps> = ({ code, message }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      padding={4}
    >
      <Typography variant="h1" component="h2" align="center">
        {code || '404'}
      </Typography>
      <Typography variant="h4" component="h3" align="center" gutterBottom>
        {message || 'An error occurred'}
      </Typography>
      <Link component={RouterLink} to="/" underline="none">
        Go to the main page
      </Link>
    </Box>
  );
};

export default ErrorPage;