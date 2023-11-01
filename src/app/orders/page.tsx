'use client'
import React from 'react';

const Order = () => {
    return (
        <form className='my-10'>
            <div className="form_order_check relative container mx-auto w-[500px]">
                <label htmlFor="text" className="text_check text-gray-600 uppercase text-base font-medium tracking-widest mb-3">Enter your phone number to check</label>
                <div className='input_check flex items-center gap-3'>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-gray-800"
                        placeholder="phone number"
                    />
                    <div className='btn_check bg-black h-[50px] text-white flex items-center'>
                        <button className='uppercase tracking-widest px-5'>Check</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Order;