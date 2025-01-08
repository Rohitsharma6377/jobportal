import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Drawer, AppBar, Toolbar, IconButton, Typography, Box, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Admin = () => {
  // State to handle drawer open/close
  const [open, setOpen] = useState(false);

  // Toggle Drawer
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better performance on mobile.
        }}
      >
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginTop: '64px' }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Admin;
