'use client'
import { deleteProduct } from '@/api/Api';
import axios from 'axios';
import { useRouter } from "next/navigation";
import React from 'react';
import { AiFillDelete } from 'react-icons/ai'

const DeleteProduct = (props: { productId: string | number }) => {
    const router = useRouter();
    const productId = props.productId
    const handleDelete = async (productId: string | number | any) => {
        const userConfirmed = confirm(
            "Are you sure you want to delete this product?"
        );
        if (userConfirmed) {
            try {
                await deleteProduct(productId)
                router.refresh()
            } catch (error) {
                console.log("delete error", error);
            }
        }
    }
    return (
        <button onClick={() => handleDelete(productId)}>
            <AiFillDelete />
        </button>
    );
};

export default DeleteProduct;

