/* eslint-disable @next/next/no-img-element */
'use client'
import Button from '@/components/Button/Button';
import { CheckMail, checkAddress, checkName, checkPhone, orderSuccess } from '@/constants/Message';
import { clearCart } from '@/redux/cartSlice';
import { RootState } from '@/redux/store';
import { stylesBtnOrder } from '@/styles/styleComponentButton';
import { ICartItem } from '@/type/ICart';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'uuidv4';;
const CheckOut = () => {
    const [contactEmail, setContactEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [note, setNote] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);
    const cartItems: ICartItem[] = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const total: number = cartItems.reduce((total, number) => {
        return total + number.price * number.count
    }, 0)
    const placeOrder = async () => {
        if (!contactEmail) {
            CheckMail()
            return
        }
        if (!firstName) {
            checkName()
            return
        }
        if (!lastName) {
            checkName()
            return
        }
        if (!address) {
            checkAddress()
            return
        }
        if (!phoneNumber) {
            checkPhone()
            return
        }
        const orderData = {
            id: uuid(),
            contactEmail,
            firstName,
            lastName,
            address,
            phoneNumber,
            note,
            products: {
                items: cartItems,
                total: total.toFixed(1),
            }
        };
        const res = await axios.post('http://localhost:3000/orders', orderData)
        try {
            dispatch(clearCart());
            setContactEmail('');
            setFirstName('');
            setLastName('');
            setAddress('');
            setPhoneNumber('');
            setNote('');
            setOrderPlaced(true);
            orderSuccess()
            return res;
        } catch (error) {
            console.error('Lỗi khi đặt hàng', error)
        }
    };
    return (
        <div className='container mx-auto mb-20'>
            <h3 className='font-bold text-3xl tracking-widest pl-10 mb-10'>Check out</h3>
            <div className='checkout_main container mx-auto max-w-[1220px] flex gap-10 justify-center'>
                <div className='checkout_form flex flex-col gap-5 w-[510px]'>
                    <div>
                        <h3 className='text-xl font-medium uppercase'>Contact</h3>
                        <input type="email"
                            placeholder='Your email'
                            className='w-full mt-3 pl-3'
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-xl font-medium uppercase'>Delivery</h3>
                        <div className='flex gap-3'>
                            <input className='w-full pl-3' type="text"
                                placeholder='First name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input className='w-full pl-3' type="text"
                                placeholder='Last name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <input className='pl-3' type="text"
                            placeholder='Address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} />
                        <input className='pl-3' type="text"
                            placeholder='Phone number'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <h3 className='text-xl font-medium uppercase'>Note</h3>
                        <textarea className='h-[150px] pl-3'
                            value={note}
                            onChange={(e) => setNote(e.target.value)} />

                    </div>
                </div>
                <div className='checkout_items w-[510px]'>
                    {!orderPlaced ? '' : <div className='flex justify-center text-xl font-medium tracking-widest'>You have placed your order successfully!</div>}
                    <div className=' max-h-[520px] overflow-auto' >
                        {cartItems.map((item: ICartItem) => (
                            <div key={item.id} >
                                <div className='flex justify-between items-center'>
                                    <div className='w-[100px] h-[150px]'>
                                        <img src={item.image} alt={item.productName} />
                                    </div>
                                    <div className='text-end'>
                                        <p className='text-lg font-medium tracking-widest'>{item.productName} ({item.count})</p>
                                        <p className='text-lg font-bold'>${item.price * item.count}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                    <div className='pt-5 flex gap-10 justify-end items-center'>
                        <p className='text-xl tracking-widest font-lg'>Total:</p>
                        <p className='text-lg font-bold'>${total.toFixed(1)}</p>
                    </div>
                    {
                        orderPlaced ? <div className='flex justify-end mt-5'>
                           <Link href='products/all'><Button title='continue shopping' BtnStyles={stylesBtnOrder} /></Link> 
                        </div> :
                            <div className='flex justify-end mt-5' onClick={placeOrder}>
                                <Button title='complete order' BtnStyles={stylesBtnOrder} />
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CheckOut;