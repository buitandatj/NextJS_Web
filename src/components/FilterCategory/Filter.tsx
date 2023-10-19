import Link from 'next/link';
import React from 'react';

const Filter = (props: { category: string; }) => {
    const category= props.category
    return (
        <div className='flex flex-col gap-5 pt-5 pl-10'>
            <Link href='/products/all'><div className={`text-2xl font-medium cursor-pointer ${category === 'all' ? 'activeList' : ''}`}>View all</div></Link>
            <Link href='/products/jacket'><div className={`text-2xl font-medium cursor-pointer ${category === 'jacket' ? 'activeList' : ''}`}>Jacket</div></Link>
            <Link href='/products/pants'><div className={`text-2xl font-medium cursor-pointer ${category === 'pants' ? 'activeList' : ''}`}>Pants</div></Link>
        </div>
    );
};

export default Filter;