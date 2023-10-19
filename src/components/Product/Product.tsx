/* eslint-disable @next/next/no-img-element */
import { IProducts } from "@/type/IProducts";
import Link from "next/link";

const Product = (props: { item: IProducts; category: string; }) => {
    const item = props.item
    const category = props.category
    return (
        <div className='products flex flex-col gap-3  items-center justify-between mb-5'>
            <Link href={`/products/${category}/` + item.id}>
                <img src={item.image} alt='product' className='w-[250px]' />
            </Link>
            <Link href={`/products/${category}/` + item.id}>
                <div className="text-xl">{item.productName}</div>
            </Link>
            <div className='text-[1.3rem]'> ${item.price}</div>
        </div>
    );
};

export default Product;