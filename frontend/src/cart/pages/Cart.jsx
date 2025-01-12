import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    // Dummy data - replace with actual cart state
    const cartItems = [
        { id: 1, name: 'Product 1', price: 99.99, quantity: 2 },
        { id: 2, name: 'Product 2', price: 149.99, quantity: 1 },
    ];

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
            {cartItems.length > 0 ? (
                <>
                    <div className="bg-white shadow rounded-lg p-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between py-4 border-b">
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">${item.price}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                                        <span>{item.quantity}</span>
                                        <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                                    </div>
                                    <button className="text-red-600">Remove</button>
                                </div>
                            </div>
                        ))}
                        <div className="mt-6">
                            <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
                            <Link
                                to="/checkout"
                                className="mt-4 block w-full text-center bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center py-8">
                    <p className="text-gray-600">Your cart is empty</p>
                    <Link to="/products" className="text-blue-600 hover:underline">
                        Continue Shopping
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart; 