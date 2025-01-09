import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from "./pages/customer/home/Home";
import Product from "./pages/customer/product/Product";
import Pricing from "./pages/customer/pricing/Pricing";
import Blog from "./pages/customer/blog/blog";
import Contact from './pages/customer/contact/contact';
import CustomerLayout from "./layouts/CustomerLayout";
import { checkAuth } from './redux/slices/authSlice';
import Cookies from 'js-cookie';
import { loadPermissions } from './redux/slices/permissionsSlice';
import Login from "./pages/customer/Login";
import Register from "./pages/customer/Register"
const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, user } = auth;

  // Kiểm tra trạng thái đăng nhập khi app load
  useEffect(() => {
    const userFromCookies = Cookies.get('user');
    if (userFromCookies) {
      dispatch(checkAuth());
      dispatch(loadPermissions());
    }
  }, [dispatch]);

  return (
    <Routes>
      {/* Routes dành cho khách hàng */}
      <Route path="/customer" element={<CustomerLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to="/customer/home" />} />
    </Routes>
  );
};

export default App;
