import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/admin', // Root path for the dashboard
  },
  {
    segment: 'users',
    title: 'Users',
    icon: <DashboardIcon />,
    path: '/admin/users',
  },
  {
    segment: 'products',
    title: 'Products',
    icon: <DashboardIcon />,
    path: '/admin/products',
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <DashboardIcon />,
    path: '/admin/orders',
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent() {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Outlet />
    </Box>
  );
}

function DashboardLayoutAccount({ window }) {
  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => ({
    signIn: () => {
      setSession({
        user: {
          name: 'Bharat Kashyap',
          email: 'bharatkashyap@outlook.com',
          image: 'https://avatars.githubusercontent.com/u/19550456',
        },
      });
    },
    signOut: () => {
      setSession(null);
    },
  }), []);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <Routes>
          <Route path="/admin" element={<DemoPageContent />}>
            <Route index element={<Typography>Welcome to the Dashboard!</Typography>} />
            <Route path="users" element={<Typography>User Management Page</Typography>} />
            <Route path="products" element={<Typography>Product Management Page</Typography>} />
            <Route path="orders" element={<Typography>Order Management Page</Typography>} />
          </Route>
          {/* Redirect to /admin for any unmatched paths */}
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutAccount.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutAccount;
