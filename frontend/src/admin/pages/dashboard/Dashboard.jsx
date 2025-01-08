import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { green, blue, red, orange } from "@mui/material/colors";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Dashboard = () => {
  // Dummy statistics
  const stats = [
    {
      title: "Total Sales",
      value: "$50,000",
      icon: <MonetizationOnIcon fontSize="large" />,
      color: green[500],
    },
    {
      title: "New Customers",
      value: "120",
      icon: <GroupIcon fontSize="large" />,
      color: blue[500],
    },
    {
      title: "Orders",
      value: "350",
      icon: <ShoppingCartIcon fontSize="large" />,
      color: orange[500],
    },
    {
      title: "Revenue Growth",
      value: "12%",
      icon: <TrendingUpIcon fontSize="large" />,
      color: red[500],
    },
  ];

  return (
    <Container>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ marginBottom: "20px" }}
      >
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Avatar
                    sx={{
                      bgcolor: stat.color,
                      width: 56,
                      height: 56,
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                  <Box textAlign="right">
                    <Typography variant="h5">{stat.value}</Typography>
                    <Typography variant="subtitle1">{stat.title}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Analytics Overview
          </Typography>
          <Typography variant="body1">
            This is a summary of the current sales performance and customer
            engagement metrics. Keep track of the stats to monitor business
            growth.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
