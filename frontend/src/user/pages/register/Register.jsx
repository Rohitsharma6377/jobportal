import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate

const Register = () => {
  // State to hold form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // For navigation to login page
  const navigate = useNavigate(); // Updated to useNavigate

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for password and confirm password
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setError('');
    // Logic for registering the user goes here, for now, just logging the data
    console.log('Registered with:', { email, password });
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 3 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Create an Account
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Please fill in the details to register.
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        {/* Confirm Password Field */}
        <TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        {/* Error Message */}
        {error && (
          <Typography variant="body2" color="error" sx={{ marginBottom: 2 }}>
            {error}
          </Typography>
        )}

        {/* Register Button */}
        <Button variant="contained" color="primary" fullWidth type="submit" size="large">
          Register
        </Button>
      </form>

      {/* Link to Login page */}
      <Box sx={{ marginTop: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          Already have an account?{' '}
          <Link
            href="#"
            onClick={() => navigate('/login')} // Updated to use navigate
            underline="hover"
            color="primary"
          >
            Login here
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
