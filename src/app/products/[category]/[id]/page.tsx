/* eslint-disable @next/next/no-img-element */
import { getProduct } from "@/api/Api";
import AddToCartBtn from "@/components/Cart/AddToCartBtn";

const ProductDetail = async ({ params: { id } }: { params: { id: string } }) => {
    const data = await getProduct(id)
    return (
        <div className="product_detail container mx-auto flex gap-10 mt-20 justify-center sm:gap-0">
            <img src={data?.image} alt="product" width={400} height={400} />
            <div className="detail__content flex flex-col justify-start mt-14 gap-5 w-[500px]">
                <h3 className="text-[1.7rem] font-bold max-w-[400px] tracking-widest">{data?.productName}</h3>
                <p className="text-[1.1rem]">{data?.desciption}</p>
                <div className="text-[1.8rem] font-bold">${data?.price} </div>
                <div className="btn_add_cart">
                    <AddToCartBtn data={data} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;