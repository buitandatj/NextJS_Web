/* eslint-disable @next/next/no-img-element */
import { IOrder } from '@/type/IOrder';
import { IProducts } from '@/type/IProducts';
import React from 'react';

const ProductsOrder = (props: { order: IOrder }) => {
    const order = props.order

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-30 " style={{ backgroundColor: 'rgba(224, 212, 212, 0.5)' }}>
            <ul className="product_order bg-white p-4 max-h-[80vh] overflow-y-auto">
                {order.products.items.map((product: IProducts) => (
                    <div key={product.id} className='block_order flex justify-center '>
                        <p className='text-lg tracking-widest'>{product.productName}</p>
                        <img src={product.image} alt={product.productName} width={150} height={150} />
                        <p className='text-lg tracking-widest'>$ {product.price}</p>
                        <hr />
                    </div>
                ))}
                <p className='text-xl font-semibold tracking-widest'>Total: ${order.products.total} </p>
            </ul>
        </div>
    );
};

export default ProductsOrder;