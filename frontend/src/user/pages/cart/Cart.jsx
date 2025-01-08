import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const Cart = () => {
  // Sample cart items
  const cartItems = [
    { id: 1, name: 'Item 1', price: 20 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 30 },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container maxWidth="lg" sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom align="center">
        Your Cart
      </Typography>
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${item.price}
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Remove
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Total Price: ${totalPrice}</Typography>
        <Button variant="contained" color="secondary">
          Checkout
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
