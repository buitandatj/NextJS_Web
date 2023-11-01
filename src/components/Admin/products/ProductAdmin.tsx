/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai'
import DeleteProduct from './DeleteProduct';
import { IProducts } from '@/type/IProducts';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { updateSuccess } from '@/constants/Message';


const ProductAdmin = (props: { item: IProducts; }) => {
    const router = useRouter();
    const [editingProductId, setEditingProductId] = useState(null);
    const [productName, setProductName] = useState<string>('');
    const [productPrice, setProductPrice] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const item = props.item
    const handleEditClick = (productId: number | string | any, initialName: string, initialPrice: string, initalCategory: string) => {
        setEditingProductId(productId);
        setProductName(initialName);
        setProductPrice(initialPrice);
        setCategory(initalCategory)
    };
    const handleCancelClick = () => {
        setEditingProductId(null);
    };
    const handleSaveClick = async (productId: number | string | any) => {
        try {
            const updatedData = {
                productName: productName,
                price: parseFloat(productPrice),
                category: category,
            }
            await axios.patch(`http://localhost:3001/products/${productId}`, updatedData)
            router.refresh()
            setEditingProductId(null);
            updateSuccess()
        } catch (error) {
            console.log('update product fail >>', error);
        }

    }

    return (
        <>
            <td className="px-6 py-4 text-lg leading-5 text-gray-900"><img src={item.image} alt='image' className='w-[150px]' /></td>
            <td className="px-6 py-4 text-lg leading-5 text-gray-900">
                {editingProductId === item.id ? (
                    <input
                        className='w-full'
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                ) : (
                    item.productName
                )}
            </td>
            <td className="px-6 py-4 text-lg leading-5 text-gray-900">
                {editingProductId === item.id ? (
                    <input
                        className='w-[60px]'
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                ) : (
                    item.category
                )}
            </td>
            <td className="px-6 py-4 text-lg leading-5 text-gray-900">
                {editingProductId === item.id ? (
                    <input
                        className='w-[40px]'
                        type="text"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                ) : (
                    `$${item.price}`
                )}
            </td>
            <td className="px-6 py-4 text-lg leading-5 text-gray-900">
                <div className='flex gap-5 text-xl'>
                    {editingProductId === item.id ? (
                        <div className='flex flex-col gap-3 text-sm'>
                            <button onClick={() => handleSaveClick(item.id)}>Save</button>
                            <button onClick={handleCancelClick}>Cancel</button>
                        </div>
                    ) : (
                        <button onClick={() => handleEditClick(item.id, item.productName, item.price, item.category)}><AiFillEdit /></button>
                    )}
                    <DeleteProduct productId={item.id} />
                </div>
            </td>
        </>

    );
};

export default ProductAdmin;