/* eslint-disable @next/next/no-img-element */
'use client'
import Button from '@/components/Button/Button';
import { ICartItem, deleteCart } from '@/redux/cartSlice';
import { styleBtn } from '@/styles/styleComponent';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const Cart = () => {
    const cartItems: ICartItem[] = useSelector((state: any) => state.cart.items);
    const dispatch = useDispatch();
  
    return (
        <div className='container mx-auto mb-10'>
            <h3 className='font-bold text-3xl tracking-widest pl-10 mb-10'>Cart</h3>
            <div>
                <div className='flex  justify-between text-2xl font-medium tracking-widest mb-5'>
                    <div>Hello! everyone, Welcom</div>
                    <h4>QUANTITY</h4>
                    <h4>TOTAL</h4>
                </div>
                <hr />
                {
                    cartItems?.map((item: ICartItem | any) => (
                        <>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-5 items-center'>
                                    <div className='w-[200px] h-[200px] bg-[black]'>
                                        <img src={item.image} alt='' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <h4>{item.productName}</h4>
                                        <div onClick={() => dispatch(deleteCart(item.id))}>
                                            <Button title='Remove' BtnStyles={styleBtn} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <input type="text" value={item.count} min={0} className='w-[40px] h-[40px] pl-3 border border-solid border-gray-300' />
                                </div>
                                <div>
                                    {item.price}
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
            <div>
                <div className='flex justify-end gap-20 text-2xl font-medium tracking-widest'>
                    <div>Subtotal</div>
                    <div>$ ...</div>
                </div>
                <div className='flex justify-end text-lg mt-5'>
                    <ul>
                        <li>
                            Shipping, taxes, and discounts calculated at checkout.
                        </li>
                        <li> Orders will be processed in USD.</li>
                    </ul>
                </div>
                <div className='flex justify-end mt-5'>
                    <Button title='Check out' BtnStyles={styleBtn} />
                </div>
            </div>
        </div>
    );
};

export default Cart;