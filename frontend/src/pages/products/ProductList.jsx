import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    // Dummy data - replace with actual API call
    const products = [
        { id: 1, name: 'Product 1', price: 99.99, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 149.99, image: 'product2.jpg' },
        // Add more products
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow rounded-lg p-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded"
                        />
                        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                        <Link
                            to={`/products/${product.id}`}
                            className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList; 