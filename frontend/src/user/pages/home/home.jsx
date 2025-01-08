import React from 'react';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import Slider from 'react-slick';

// Slider component for the banner
const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/1200x400?text=Banner+1" alt="Banner 1" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div>
        <img src="https://via.placeholder.com/1200x400?text=Banner+2" alt="Banner 2" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div>
        <img src="https://via.placeholder.com/1200x400?text=Banner+3" alt="Banner 3" style={{ width: '100%', height: 'auto' }} />
      </div>
    </Slider>
  );
};

const Home = () => {
  // Sample featured products
  const products = [
    { id: 1, name: 'Featured Product 1', price: 199, description: 'This is a description of the first featured product.', image: 'https://via.placeholder.com/300x200?text=Product+1' },
    { id: 2, name: 'Featured Product 2', price: 299, description: 'This is a description of the second featured product.', image: 'https://via.placeholder.com/300x200?text=Product+2' },
    { id: 3, name: 'Featured Product 3', price: 399, description: 'This is a description of the third featured product.', image: 'https://via.placeholder.com/300x200?text=Product+3' },
    { id: 4, name: 'Featured Product 4', price: 499, description: 'This is a description of the fourth featured product.', image: 'https://via.placeholder.com/300x200?text=Product+4' },
    { id: 5, name: 'Featured Product 5', price: 599, description: 'This is a description of the fifth featured product.', image: 'https://via.placeholder.com/300x200?text=Product+5' },
  ];

  return (
    <Container maxWidth="lg" sx={{ padding: 3 }}>
      {/* Banner Slider */}
      <Box sx={{ marginBottom: 4 }}>
        <BannerSlider />
      </Box>

      {/* Hero Section */}
      <Box sx={{
        textAlign: 'center',
        background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.8), rgba(255, 87, 34, 0.8))',
        borderRadius: 3,
        padding: 4,
        color: 'white',
        marginBottom: 4
      }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Website!
        </Typography>
        <Typography variant="h6" paragraph>
          Explore the best deals and discover amazing products that suit your needs.
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ borderRadius: 3 }}>
          Shop Now
        </Button>
      </Box>

      {/* Featured Products Grid */}
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Paper sx={{
              textAlign: 'center',
              boxShadow: 3,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              }
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  marginBottom: 10,
                  borderRadius: 5,
                }}
              />
              <Typography variant="h5" color="primary" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                {product.description}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                ${product.price}
              </Typography>
              <Button variant="outlined" color="primary" sx={{ borderRadius: 2 }}>
                Learn More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
