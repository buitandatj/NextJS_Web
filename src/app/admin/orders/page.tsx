/* eslint-disable @next/next/no-img-element */
import { getOrders } from '@/api/Api';
import ProductsOrder from '@/components/Admin/orders/ProductsOrder';
import ViewProduct from '@/components/Admin/orders/ViewProduct';
import { IOrder } from '@/type/IOrder';
import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb'
import { TiTick } from 'react-icons/ti'
const OrderAdmin = async () => {
    const orders = await getOrders()
    return (
        <div>
            <div className="w-full overflow-auto h-[900px]">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Address</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Phone</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase " >Note</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Products</th>
                        </tr>
                    </thead>
                    <tbody >
                        {orders.map((order: IOrder) => {
                            return (
                                <tr key={order.id} >
                                    <td className="px-6 py-4 text-lg leading-5 text-gray-900">
                                        {order.contactEmail}
                                    </td>
                                    <td className="px-6 py-4 text-lg leading-5 text-gray-900">
                                        {order.lastName} {order.firstName}
                                    </td>
                                    <td className="px-6 py-4 text-lg leading-5 text-gray-900 break-words">
                                        {order.address}
                                    </td>
                                    <td className="px-6 py-4 text-lg leading-5 text-gray-900">
                                        {order.phoneNumber}
                                    </td>
                                    <td className="px-6 py-4 text-lg leading-5 text-gray-900 break-words">
                                        {order.note}
                                    </td>
                                    <td className='px-6 py-4 leading-5 text-gray-900 text-2xl flex gap-3'>
                                        {/* <ProductsOrder order={order} /> */}
                                        <ViewProduct order={order} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderAdmin;