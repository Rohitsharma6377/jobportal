import React from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Product = () => {
  // Sample product details
  const product = {
    name: 'Product Name',
    description: 'This is a detailed description of the product. It can include features, specifications, and benefits.',
    image: 'https://via.placeholder.com/300x200?text=Product',
    price: '$99.99'
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 3 }}>
      {/* Product Section */}
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h3" color="primary" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          {product.description}
        </Typography>
        <Typography variant="h5" color="secondary" gutterBottom>
          Price: {product.price}
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Add to Cart
        </Button>
      </Box>

      {/* Product Image and Details */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={product.name}
              height="200"
              image={product.image}
            />
            <CardContent>
              <Typography variant="h6" color="primary">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {product.description}
              </Typography>
              <Typography variant="h6" color="secondary" sx={{ marginTop: 2 }}>
                Price: {product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
