import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Updated import

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Updated hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., authentication)
    console.log("Login submitted:", { email, password });
  };

  const handleRegisterRedirect = () => {
    // Redirect to the Register page
    navigate('/register');  // Updated navigation method
  };

  return (
    <Container maxWidth="xs" sx={{ padding: 3 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
        <Typography variant="h5" color="primary" gutterBottom>
          Login to Your Account
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      <Box sx={{ marginTop: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          Don't have an account?{' '}
          <Link onClick={handleRegisterRedirect} style={{ cursor: 'pointer' }}>
            Register Here
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
