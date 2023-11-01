// import { getOrders } from '@/api/Api';
import React from 'react';

const OrderAdmin = async () => {
    // const orders = await getOrders()
    return (
        <div>
            <div className="w-full overflow-auto h-[900px]">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">User Name</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Address</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Phone</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Note</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* {orders.map((item: any) => {
                            return (
                                <tr key={item.id}>
                                    <OrderAdmin item={item} />
                                </tr>
                            )
                        })} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderAdmin;