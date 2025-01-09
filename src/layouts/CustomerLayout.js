// Ví dụ: src/layouts/CustomerLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../pages/customer/nav/NavBar";
import Footer from '../pages/customer/footer/Footer';

const CustomerLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default CustomerLayout; // Đảm bảo xuất khẩu mặc định