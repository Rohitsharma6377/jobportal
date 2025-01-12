import React from 'react';
import { Link } from 'react-router-dom';

const UserWishlist = () => {
    // Dummy data - replace with actual API call
    const wishlistItems = [
        { id: 1, name: 'Product 1', price: 99.99, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 149.99, image: 'product2.jpg' }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {wishlistItems.map((item) => (
                    <div key={item.id} className="bg-white shadow rounded-lg p-4">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded"
                        />
                        <h3 className="font-semibold mt-2">{item.name}</h3>
                        <p className="text-gray-600">${item.price}</p>
                        <div className="mt-4 space-x-2">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                Add to Cart
                            </button>
                            <button className="text-red-600">
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserWishlist; 