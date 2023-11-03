/* eslint-disable react/jsx-key */
'use client'
import { addProductAdmin, instance } from '@/api/Api';
import { addProduct } from '@/constants/Message';
import { IProducts } from '@/type/IProducts';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { uuid } from 'uuidv4';

const CreateProduct = () => {
    const router = useRouter()
    const [product, setProduct] = useState<IProducts>({
        id: uuid(),
        productName: '',
        description: '',
        price: '',
        category: '',
        image: '',
    });
    const [category, setCategory] = useState<string[]>([]);
    const [checkName, setCheckName] = useState(true)
    const [checkDes, setCheckDes] = useState(true)
    const [checkPrice, setCheckPrice] = useState(true)
    const [checkImage, setCheckImage] = useState(true)
    const [checkCategory, setCheckCategory] = useState(true)
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));

        if (product.productName) {
            setCheckName(true)
        }
        if (product.description) {
            setCheckDes(true)
        }
        if (product.price) {
            setCheckPrice(true)
        }
        if (product.image) {
            setCheckImage(true)
        }
        if (product.category) {
            setCheckCategory(true)
        }

    };
    useEffect(() => {
        const getCategory = async () => {
            const res = await instance.get('products')
            const data = res.data
            const uniqueCategories = new Set(data.map((item: IProducts) => item.category));
            const categories: string[] = Array.from(uniqueCategories) as string[];
            setCategory(categories)
        }
        getCategory()
    }, [])
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!product.productName) {
            setCheckName(false)
        }
        if (!product.description) {
            setCheckDes(false)
        }
        if (!product.price) {
            setCheckPrice(false)
        }
        if (!product.image) {
            setCheckImage(false)
        }
        if (!product.category) {
            setCheckCategory(false)
            return
        }
        try {
            await addProductAdmin('products', product);
            setProduct({
                id: uuid(),
                productName: '',
                description: '',
                price: '',
                category: '',
                image: '',
            });
        } catch (error) {
            console.error('Error creating product:', error);
        }
        addProduct()
        router.push('/admin/products')
        router.refresh()
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto  space-y-4">
            <h3 className='text-xl font-bold tracking-widest uppercase flex justify-center'>Create</h3>
            <div>
                <label htmlFor="productName" className="block text-gray-600 text-lg font-medium tracking-widest">Product Name</label>
                <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={product.productName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
                {checkName ? '' : <div className='text-lg text-[red] font-semibold'>Enter product name!</div>}
            </div>
            <div>
                <label htmlFor="description" className="block text-gray-600 text-lg font-medium tracking-widest">desciption</label>
                <textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={product.description}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
                {checkDes ? '' : <div className='text-lg text-[red] font-semibold'>Enter product description!</div>}
            </div>
            <div>
                <label htmlFor="price" className="block text-gray-600 text-lg font-medium tracking-widest">price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
                {checkPrice ? '' : <div className='text-lg text-[red] font-semibold'>Enter product price!</div>}
            </div>
            <div>
                <label htmlFor="image" className="block text-gray-600 text-lg font-medium tracking-widest">image link</label>
                <input
                    id="image"
                    value={product.image}
                    name="image"
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
                {checkImage ? '' : <div className='text-lg text-[red] font-semibold'>Enter product image!</div>}
            </div>
            <div>
                <label htmlFor="category" className="block text-gray-600 text-lg font-medium tracking-widest">Category</label>
                <select
                    id="category"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                >
                    <option value="">Select</option>
                    {category.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                    {checkCategory ? '' : <div className='text-lg text-[red] font-semibold'>Select category!</div>}
                </select>

            </div>
            <div>
                <button type="submit" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded tracking-widest">Create product</button>
            </div>
        </form>
    );
};

export default CreateProduct;