/* eslint-disable @next/next/no-img-element */
'use client'
import { deleteOrder, getOrders } from '@/api/Api';
import { cancelOrderSuccess } from '@/constants/Message';
import { IOrder } from '@/type/IOrder';
import { IProducts } from '@/type/IProducts';
import React, { useState } from 'react';

const Order = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [matchingOrders, setMatchingOrders] = useState([]);
    const [check, setCheck] = useState<boolean>(false)
    const handleCheckOrder = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (!phoneNumber) {
            setCheck(true)
            return
        }
        try {
            const data = await getOrders()
            const filteredOrders = data.filter((order: { phoneNumber: string; }) => order.phoneNumber === phoneNumber);
            setMatchingOrders(filteredOrders);
        } catch (error) {
            console.log("get orders error", error);
        }
        setPhoneNumber('')
    }
    const handleDeleteOrder = async (id: string | number) => {
        try {
            await deleteOrder(id)
            cancelOrderSuccess()
            setMatchingOrders((item) => item.filter((order: IOrder) => order.id !== id));
        } catch (error) {
            console.log("delete orders error", error);
        }
    }
    return (
        <form className='my-10'>
            <div className="form_order_check relative container mx-auto w-[500px]">
                <label htmlFor="text" className="text_check text-gray-600 uppercase text-base font-medium tracking-widest mb-3">Enter your phone number to check</label>
                <div className='input_check flex items-center gap-3'>
                    <input
                        onChange={(e) => {
                            setCheck(false)
                            setPhoneNumber(e.target.value)
                        }}
                        value={phoneNumber}
                        type="text"
                        className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${check ? 'border-red-500' : ''
                            } text-gray-800`}
                        placeholder={check ? 'Please enter phone number' : 'Phone number'}
                    />

                    <div className='btn_check bg-black h-[50px] text-white flex items-center' onClick={handleCheckOrder}>
                        <button className='uppercase tracking-widest px-5'>Check</button>
                    </div>
                </div>
                {matchingOrders.length > 0 ? (
                    <div>
                        {matchingOrders.map((order: IOrder) => (
                            <div key={order.id}>
                                <h4 className='text-xl font-semibold tracking-widest'>Info:</h4>
                                <p className='text-lg tracking-widest'>- contactEmail: {order.contactEmail}</p>
                                <p className='text-lg tracking-widest'>- Name: {order.lastName} {order.firstName}</p>
                                <p className='text-lg tracking-widest'>- Address: {order.address}</p>
                                <p className='text-lg tracking-widest'>- Note: {order.note}</p>
                                <h4 className='text-xl font-semibold tracking-widest'>Products:</h4>
                                <ul>

                                    {order.products.items.map((product: IProducts) => (
                                        <div key={product.id}>
                                            <p className='text-lg tracking-widest'>- Name Product: {product.productName}</p>
                                            <img src={product.image} alt={product.productName} width={100} height={100} />
                                            <p className='text-lg tracking-widest'>$ {product.price}</p>
                                            <hr />
                                        </div>

                                    ))}
                                    <p className='text-xl font-semibold tracking-widest'>Total: ${order.products.total} </p>
                                </ul>
                                <div onClick={() => handleDeleteOrder(order.id)} className='mt-5 flex justify-center p-2 text-white cursor-pointer rounded bg-red-500 hover:bg-red-700'>
                                    <button className='text-lg tracking-widest'>cancel order</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='flex justify-center text-xl font-bold tracking-widest mt-10'>Không có đơn hàng nào!
                    </div>
                )}
            </div>


        </form>
    );
};

export default Order;