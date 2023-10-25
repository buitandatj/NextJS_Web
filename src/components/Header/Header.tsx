'use client'
import { BsCart3 } from 'react-icons/bs';
import { AiFillCaretDown, AiFillCaretRight, AiFillCloseSquare } from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ICartItem } from '@/type/ICart';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { TfiMenu } from 'react-icons/tfi'
import { useState } from 'react';
const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const cartItems: ICartItem[] = useSelector((state: RootState) => state.cart.items);
    const currentPath = usePathname();
    const isPageActive = (path: string) => {
        return currentPath === path ? ' underline active' : '';
    };
    const isHeader = (path: string) => {
        return path !== '/' ? 'bg-header' : '';
    };
    const headerClass = isHeader(currentPath);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    let menuMobile;
    if (showMenu) {
        menuMobile = <div className='menu_header_mobile container mx-auto mt-5 p-10'>
            <div className='flex justify-end text-[3rem] text-black' onClick={toggleMenu}>
                <AiFillCloseSquare />
            </div>
            <ul className='flex flex-col gap-16 justify-center pl-5 text-[1.3rem] text-black font-semibold'>
                <li onClick={toggleMenu} className={isPageActive('/')}><Link href="/">HOME</Link></li>
                <li onClick={toggleMenu} className={isPageActive('/products/all')}><Link href="/products/all">SHOP</Link></li>
                <li onClick={toggleMenu} className={isPageActive('/about')}><Link href="/about">ABOUT</Link></li>
                <li onClick={toggleMenu} className={`relative flex items-center group ${isPageActive('/collection')}`}>
                    <Link href="">COLLECTION </Link><div className="ml-2"><AiFillCaretRight /></div>
                    <div className='bg-[#e6dfdf] text-black hidden  leading-10 text-[18px] p-3 absolute right-0 mt-8 group-hover:block' >
                        <div onClick={toggleMenu} className={isPageActive('/pages/saigonfw')}><Link href="/pages/saigonfw">Saigon FW 2023</Link></div>
                        <div onClick={toggleMenu} className={isPageActive('/pages/saigonss')}><Link href="/pages/saigonss">Saigon SS 2023</Link></div>
                    </div>
                </li>
                <li className={isPageActive('/careers')}><Link href="/careers">CAREERS</Link></li>
            </ul>
        </div>
    }
    return (
        <header className={`header ${headerClass} mb-10 relative text-black bg-opacity-50 bg-blur `}>
            <div className='top_nav_header container mx-auto flex justify-between items-center pt-10 w-full'>
                <div className='menu_nav text-[30px]' onClick={toggleMenu}>
                    <TfiMenu />
                </div>
                <div className='title_shop text-[3rem] font-bold tracking-widest sm:text-[2rem]'>
                    BATRA
                </div>
                <div className='flex gap-1 text-3xl'>
                    <Link href='/cart'><BsCart3 /></Link>
                    <div>
                        <p className='text-lg font-medium text-center'>({cartItems.length})</p>
                    </div>
                </div>
            </div>
            {menuMobile}
            <div className='menu_header container mx-auto mt-5'>
                <ul className='flex gap-10 justify-center text-[1.4rem] font-semibold'>
                    <li className={isPageActive('/')}><Link href="/">HOME</Link></li>
                    <li className={isPageActive('/products/all')}><Link href="/products/all">SHOP</Link></li>
                    <li className={isPageActive('/about')}><Link href="/about">ABOUT</Link></li>
                    <li className={`relative flex items-center group ${isPageActive('/collection')}`}>
                        <Link href="">COLLECTION </Link><div className="ml-2"><AiFillCaretDown /></div>
                        <div className='bg-[#e6dfdf] text-black hidden  leading-10 text-[18px] p-3 absolute top-0 mt-8 group-hover:block' >
                            <div className={isPageActive('/pages/saigonfw')}><Link href="/pages/saigonfw">Saigon FW 2023</Link></div>
                            <div className={isPageActive('/pages/saigonss')}><Link href="/pages/saigonss">Saigon SS 2023</Link></div>
                        </div>
                    </li>
                    <li className={isPageActive('/careers')}><Link href="/careers">CAREERS</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;

