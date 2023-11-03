'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const params = usePathname()
    return (
        <nav className="nav__bar p-4 h-full w-full text-black">
            <ul className="menu_nav_bar flex flex-col gap-5 text-start">
                <div className={`text-lg font-medium tracking-widest ${params === '/admin/products' ? 'activeList' : ''}`}>
                    <Link href='/admin/products'>Products</Link>
                </div>
                <div className={`text-lg font-medium tracking-widest ${params === '/admin/users' ? 'activeList' : ''}`}>
                    <Link href='/admin/users'>Users</Link>
                </div>
                <div className={`text-lg font-medium tracking-widest ${params === '/admin/orders' ? 'activeList' : ''}`}>
                    <Link href='/admin/orders'>Orders</Link>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;

