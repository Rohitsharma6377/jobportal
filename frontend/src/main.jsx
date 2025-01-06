import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Viewer from './user/View.js';
import Home from './user/pages/home/home.jsx';
import Cart from './user/pages/cart/Cart.jsx';
import Login from './user/pages/login/Login.jsx';
import Product from './user/pages/product/Product.jsx';
import Register from './user/pages/register/Register.jsx';
import Dashboard from './admin/pages/dashboard/Dashboard.jsx';
import Admin from './admin/pages/Admin.jsx';
import AdminProducts from './admin/pages/products/AdminProducts.jsx';
import Adminusers from './admin/pages/users/Adminusers.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Admin Routes */}
      <Route path='/admin' element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route path='adminproducts' element={<AdminProducts />} />
        <Route path='adminusers' element={<Adminusers />} />
      </Route>

      {/* Viewer/User Routes */}
      <Route path='/' element={<Viewer />}>
        <Route index element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='product' element={<Product />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
