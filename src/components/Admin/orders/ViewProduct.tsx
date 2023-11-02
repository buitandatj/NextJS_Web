'use client'
import React, { useState } from 'react';
import ProductsOrder from './ProductsOrder';
import { IOrder } from '@/type/IOrder';
const ViewProduct = (props: { order: IOrder; }) => {
    const order = props.order
    const [viewProduct, setViewProduct] = useState(false)
    const handleView = () => {
        setViewProduct(!viewProduct)
    }
    return (
        <div onClick={handleView}>
            <button className='bg-black text-white p-2 text-lg tracking-widest'>View</button>
            {viewProduct ? <ProductsOrder order={order} /> : ''}
        </div>
    );
};

export default ViewProduct;