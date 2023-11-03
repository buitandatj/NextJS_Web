'use client'
import { RootStateUser } from '@/store/store';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';

const Admin = () => {
    const router = useRouter();
    const isLoggedIn = useSelector((state: RootStateUser) => state.user.isLoggedIn);
    const userType = useSelector((state: RootStateUser) => state.user.type);
    if (!isLoggedIn || userType !== 'admin') {
        router.push('/user')
        return null;
    }
    return (
        <div className='flex justify-center text-2xl font-semibold tracking-widest uppercase'>
            Admin
        </div>
    );
};

export default Admin;