/* eslint-disable @next/next/no-img-element */
'use client'
import Button from '@/components/Button/Button';
import { deleteCart, ItemsCount } from '@/store/cartSlice';
import { RootState } from '@/store/store';
import { styleBtn, stylesBtnDelete } from '@/styles/styleComponentButton';
import { ICartItem } from '@/type/ICart';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Link from 'next/link';
const Cart = () => {
    const cartItems: ICartItem[] = useSelector((state: RootState) => state.cart.items);
    const total: number = cartItems.reduce((total, number) => {
        return total + number.price * number.count
    }, 0)
    const dispatch = useDispatch();

    return (
        <div className='container mx-auto mb-10'>
            <h3 className='font-bold text-3xl tracking-widest pl-10 mb-10'>Cart</h3>
            <div>
                <div className='nav_bar_cart flex justify-between text-2xl font-medium tracking-widest mb-5'>
                    <div>Hello! everyone, Welcom</div>
                    <h4 className='pl-52'>QUANTITY</h4>
                    <h4>TOTAL</h4>
                </div>
                <hr />
                {cartItems.length === 0 ? <div className='text-xl tracking-widest pt-10'>Your cart is currently empty.</div> :
                    cartItems?.map((item: ICartItem) => (
                        <>
                            <div className='item_cart_table flex justify-between items-center'>
                                <div className='item_cart_right flex gap-5 items-center'>
                                    <div className='w-[200px] h-[200px]'>
                                        <img src={item.image} alt={item.productName} />
                                    </div>
                                    <div className='item_cart_title flex flex-col gap-4 w-[400px]'>
                                        <h4 className='font-medium tracking-widest text-xl w-[400px]'>{item.productName}</h4>
                                        <div onClick={() => dispatch(deleteCart(item.id))}>
                                            <Button title='Remove' BtnStyles={stylesBtnDelete} />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[100px] flex items-center'>
                                    <input type="text" value={item.count} min={0} className='w-[40px] h-[40px] pl-4 border border-solid border-gray-300' />
                                    <div className='pl-2 flex flex-col gap-1'>
                                        <div onClick={() => dispatch(ItemsCount({ itemId: item.id, increment: true }))} className='bg-black text-white p-1 cursor-pointer'>
                                            <AiOutlinePlus />
                                        </div>

                                        <div onClick={() => dispatch(ItemsCount({ itemId: item.id, increment: false }))} className='bg-black text-white p-1 cursor-pointer'>
                                            <AiOutlineMinus />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[70px] text-xl font-medium'>
                                    $ {(item.price * item.count).toFixed(1)}
                                </div>
                            </div>
                            <hr />
                        </>
                    ))
                }
            </div>
            <div>
                <div className='flex justify-end gap-20 text-2xl font-medium tracking-widest'>
                    <div>Subtotal</div>
                    <div>$ {total}</div>
                </div>
                <div className='flex justify-end text-lg mt-5'>
                    <ul>
                        <li>
                            Shipping, taxes, and discounts calculated at checkout.
                        </li>
                        <li> Orders will be processed in USD.</li>
                    </ul>
                </div>
                {
                    cartItems.length > 0 ? <Link href='/checkout' className='flex justify-end mt-5'>
                        <Button title='Check out' BtnStyles={styleBtn} />
                    </Link>
                        :
                        ''
                }

            </div>
        </div>
    );
};

export default Cart;