/* eslint-disable @next/next/no-img-element */
import { getData } from '@/api/Api';
import ProductAdmin from '@/components/Admin/products/ProductAdmin';
import { IProducts } from '@/type/IProducts';
import Link from 'next/link';
import React from 'react';

const AdminProduct = async ({ params: { category } }: { params: { category: string } }) => {
    const data = await getData(category)
    return (
        <div>
            <Link href='/admin/products/create'>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded tracking-widest">
                    Create Product
                </button>
            </Link>
            <div className="w-full overflow-auto h-[900px]">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Image</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Product Name</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Category</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Price</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {data?.map((item: IProducts) => {
                            return (
                                <tr key={item.id}>
                                    <ProductAdmin item={item} />
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AdminProduct