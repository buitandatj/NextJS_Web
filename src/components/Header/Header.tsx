'use client'
import { BsCart3 } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Header = () => {
    const currentPath = usePathname();
    const isPageActive = (path: string) => {
        return currentPath === path ? ' underline active' : '';
    };
    const isHeader = (path: string) => {
        return path !== '/' ? 'bg-header' : '';
    };
    const headerClass = isHeader(currentPath);
    return (
        <header className={`header ${headerClass} mb-10 relative text-black bg-opacity-50 bg-blur `}>
            <div className='container mx-auto flex justify-between items-center pt-10'>
                <div className='invisible'>
                    Menu
                </div>
                <div className='text-[3rem]  font-bold tracking-widest'>
                    BATRA
                </div>
                <div className='text-3xl'>
                    <Link href='/cart'><BsCart3 /></Link>
                </div>
            </div>
            <div className='menu-header container mx-auto mt-5'>
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

