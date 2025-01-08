import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import Slider from 'react-slick';

// Slider component for the banner
const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    { id: 1, name: 'Featured Product 1', description: 'This is a description of the first featured product.', image: 'https://via.placeholder.com/300x200?text=Product+1' },
    { id: 2, name: 'Featured Product 2', description: 'This is a description of the second featured product.', image: 'https://via.placeholder.com/300x200?text=Product+2' },
    { id: 3, name: 'Featured Product 3', description: 'This is a description of the third featured product.', image: 'https://via.placeholder.com/300x200?text=Product+3' },
    { id: 4, name: 'Featured Product 4', description: 'This is a description of the fourth featured product.', image: 'https://via.placeholder.com/300x200?text=Product+4' },
    { id: 5, name: 'Featured Product 5', description: 'This is a description of the fifth featured product.', image: 'https://via.placeholder.com/300x200?text=Product+5' },
  ];

  return (
    <Container maxWidth="lg" sx={{ padding: 3 }}>
      {/* Banner Slider */}
      <Box sx={{ marginBottom: 4 }}>
        <BannerSlider />
      </Box>

      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Welcome to Our Website!
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Explore the best deals and discover amazing products that suit your needs.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Shop Now
        </Button>
      </Box>

      {/* Featured Products Grid */}
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
              <Typography variant="h5" color="primary" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                {product.description}
              </Typography>
              <Button variant="outlined" color="primary">
                Learn More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
