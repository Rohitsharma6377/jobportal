import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">About Us</h3>
                        <p>Your trusted e-commerce platform for quality products.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <p>Email: support@example.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>&copy; 2024 E-Commerce. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 