import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './store/store';

// Auth Pages
import Login from './pages/Login';
import Register from './pages/Register';

// User Pages
import UserProfile from './pages/profile/UserProfile';
import UserOrders from './pages/orders/UserOrders';
import UserWishlist from './pages/wishlist/UserWishlist';

// Product Pages
import ProductList from './pages/products/ProductList';
import ProductDetail from './pages/products/ProductDetail';

// Cart Pages
import Cart from './cart/pages/Cart';
import Checkout from './cart/pages/Checkout';

// Admin Pages
import AdminDashboard from './admin/pages/dashboard/Dashboard';
import AdminProducts from './admin/pages/product/AdminProducts';
import AdminOrders from './admin/pages/order/Adminorder';
import AdminUsers from './admin/pages/adminusers/Adminuser';

// Components
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import Layout from './components/Layout';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Toaster 
                    position="top-right"
                    toastOptions={{
                        success: {
                            duration: 3000,
                            style: {
                                background: '#4CAF50',
                                color: '#fff',
                            },
                        },
                        error: {
                            duration: 3000,
                            style: {
                                background: '#F44336',
                                color: '#fff',
                            },
                        },
                    }}
                />
                <Routes>
                    {/* Public Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    {/* Main Layout Routes */}
                    <Route path="/" element={<Layout />}>
                        <Route index element={<ProductList />} />
                        <Route path="products" element={<ProductList />} />
                        <Route path="products/:id" element={<ProductDetail />} />
                        <Route path="cart" element={<Cart />} />
                        
                        {/* Protected User Routes */}
                        <Route element={<PrivateRoute />}>
                            <Route path="profile" element={<UserProfile />} />
                            <Route path="orders" element={<UserOrders />} />
                            <Route path="wishlist" element={<UserWishlist />} />
                            <Route path="checkout" element={<Checkout />} />
                        </Route>

                        {/* Protected Admin Routes */}
                        <Route element={<AdminRoute />}>
                            <Route path="admin">
                                <Route index element={<AdminDashboard />} />
                                <Route path="products" element={<AdminProducts />} />
                                <Route path="orders" element={<AdminOrders />} />
                                <Route path="users" element={<AdminUsers />} />
                            </Route>
                        </Route>
                    </Route>

                    {/* 404 Route */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
