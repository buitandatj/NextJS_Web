import { instance } from '@/api/Api';
import Filter from '@/components/FilterCategory/Filter';
import Product from '@/components/Product/Product';
import { IProducts } from '@/type/IProducts';
export async function getData(category: string) {

    try {
        const res = await instance.get(`products`, {
            params: {
                category: !category || category === "all" ? undefined : category
            }
        })
        const data = res.data

        return data
    } catch (error) {
        console.log('error products data >>', error);
    }
}
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




