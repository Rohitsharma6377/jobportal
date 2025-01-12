import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    // Dummy data - replace with actual API call
    const product = {
        id,
        name: 'Product Name',
        price: 99.99,
        description: 'Product description goes here...',
        image: 'product.jpg',
        stock: 10
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                        <p className="text-xl text-blue-600 mb-4">
                            ${product.price}
                        </p>
                        <p className="text-gray-600 mb-6">
                            {product.description}
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <span>Quantity:</span>
                                <select className="border rounded p-2">
                                    {[...Array(product.stock)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
                                Add to Cart
                            </button>
                            <button className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail; 