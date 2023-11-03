'use client'
import { RootStateUser } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';
import NotFound from '../notFound/page';
import { usePathname } from 'next/navigation';
const Admin = () => {
    const pathName = usePathname()
    const isLoggedIn = useSelector((state: RootStateUser) => state.user.isLoggedIn);
    const userType = useSelector((state: RootStateUser) => state.user.type);
    if (!isLoggedIn || userType !== 'admin') {
        if (pathName === '/admin') {
            return <NotFound />
        }
    }
    return (
        <div className='flex justify-center text-2xl font-semibold tracking-widest uppercase'>
            Admin
        </div>
    );
};

export default Admin;