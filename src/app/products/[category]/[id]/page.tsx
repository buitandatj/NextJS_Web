/* eslint-disable @next/next/no-img-element */
import { instance } from "@/api/Api";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import Button from "@/components/Button/Button";
export async function getData(id: string) {
    try {
        const res = await instance.get(`products/${id}`)
        const data = res.data
        return data
    } catch (error) {
        console.log('error product detail >>', error);
    }
}
const ProductDetail = async ({ params: { id } }: { params: { id: string } }) => {
    const data = await getData(id)
    // const dispatch = useDispatch();
    return (
            <div className="container mx-auto flex gap-10 mt-20 justify-center">
                <img src={data?.image} alt="product" width={400} height={400} />
                <div className="flex flex-col justify-start mt-14 gap-5 w-[500px]">
                    <h3 className="text-[1.7rem] font-bold max-w-[400px] tracking-widest">{data?.productName}</h3>
                    <p className="text-[1.1rem]">{data?.desciption}</p>
                    <div className="text-[1.8rem] font-bold">${data?.price} </div>
                    <div className='bg-black h-12 mt-10 flex items-center justify-center  text-[#ffffff] cursor-pointer'>
                        <button className="uppercase tracking-widest">Add To Cart</button>
                    </div>

                </div>
            </div>
    );
};

export default ProductDetail;