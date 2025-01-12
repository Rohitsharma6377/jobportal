import React from 'react';

const UserOrders = () => {
    // Dummy data - replace with actual API call
    const orders = [
        {
            id: 1,
            date: '2024-01-20',
            status: 'Delivered',
            total: 249.98,
            items: [
                { id: 1, name: 'Product 1', quantity: 2, price: 99.99 },
                { id: 2, name: 'Product 2', quantity: 1, price: 49.99 }
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">My Orders</h1>
            <div className="space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white shadow rounded-lg p-6">
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="font-semibold">Order #{order.id}</p>
                                <p className="text-gray-600">{order.date}</p>
                            </div>
                            <div>
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                                    {order.status}
                                </span>
                            </div>
                        </div>
                        <div className="border-t pt-4">
                            {order.items.map((item) => (
                                <div key={item.id} className="flex justify-between py-2">
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="border-t mt-4 pt-4 font-bold">
                                Total: ${order.total.toFixed(2)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserOrders; 