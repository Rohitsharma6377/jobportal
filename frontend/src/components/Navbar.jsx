import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/slices/authSlice';
import toast from 'react-hot-toast';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser());
            toast.success('Logged out successfully');
            navigate('/login');
        } catch (error) {
            toast.error('Logout failed');
        }
    };

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-xl font-bold">
                        E-Commerce
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link to="/products" className="hover:text-gray-300">
                            Products
                        </Link>
                        <Link to="/cart" className="hover:text-gray-300">
                            Cart
                        </Link>

                        {isAuthenticated ? (
                            <>
                                {user?.role === 'admin' && (
                                    <Link to="/admin" className="hover:text-gray-300">
                                        Admin
                                    </Link>
                                )}
                                <Link to="/profile" className="hover:text-gray-300">
                                    Profile
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="hover:text-gray-300"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="hover:text-gray-300">
                                    Login
                                </Link>
                                <Link to="/register" className="hover:text-gray-300">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 