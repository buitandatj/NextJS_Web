import React from 'react';

const OrdersAdmin = (props: { item: any; }) => {
    const item = props.item
    return (
        <>
            <td className="px-6 py-4 text-lg leading-5 text-gray-900">
                {item?.id}
            </td>
            <td className="px-6 py-4 text-lg leading-5 text-gray-900">
                {item?.name}
            </td>
            <td className="px-6 py-4 text-lg leading-5 text-gray-900">
                {item?.email}
            </td>
            <td className="px-6 py-4 text-lg leading-5 text-gray-900">
                <div className='flex gap-5 text-xl'>

                    {item?.type}

                </div>
            </td>
            <td className="px-6 py-4 text-lg leading-5 text-gray-900">
                <div className='text-xl'>
                    {/* <DeleteUser userId={item?.id} /> */}
                </div>
            </td>
        </>
    );
};

export default OrdersAdmin;