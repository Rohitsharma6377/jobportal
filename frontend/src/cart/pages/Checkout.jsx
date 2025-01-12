import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle checkout logic here
        navigate('/orders');
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full border rounded p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Address
                            </label>
                            <textarea
                                required
                                className="w-full border rounded p-2"
                                rows="3"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                required
                                className="w-full border rounded p-2"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    {/* Add order summary details here */}
                </div>
            </div>
        </div>
    );
};

export default Checkout; 