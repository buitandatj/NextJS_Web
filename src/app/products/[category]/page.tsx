import { getData } from '@/api/Api';
import Filter from '@/components/FilterCategory/Filter';
import Product from '@/components/Product/Product';
import { IProducts } from '@/type/IProducts';
export default async function Products({ params: { category } }: { params: { category: string } }) {
    const data = await getData(category)
    return (
        <div className='container mx-auto'>
            <h3 className='font-bold text-3xl tracking-widest pl-10'>Products</h3>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10'>
                <Filter category={category} />
                {data?.map((item: IProducts) => (
                    <Product key={item.id} item={item} category={category} />
                ))}

            </div>
        </div>

    );
}




