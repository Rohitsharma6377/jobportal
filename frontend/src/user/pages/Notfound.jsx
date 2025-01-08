import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Updated import

const NotFound = () => {
  const navigate = useNavigate();  // Updated hook

  // Handle go back to home page
  const handleGoHome = () => {
    navigate('/');  // Navigate to the home page
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 3, textAlign: 'center' }}>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h2" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Oops! The page you are looking for does not exist.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          It seems that the link you clicked or the page you entered does not exist.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoHome} size="large">
          Go to Home Page
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
