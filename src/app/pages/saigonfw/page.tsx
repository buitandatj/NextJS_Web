import { imgSgfw1, imgSgfw10, imgSgfw11, imgSgfw12, imgSgfw13, imgSgfw14, imgSgfw15, imgSgfw2, imgSgfw3, imgSgfw4, imgSgfw5, imgSgfw6, imgSgfw7, imgSgfw8, imgSgfw9 } from '@/constants/ImageFW';
import Image from 'next/image';
import React from 'react';

const SaigonFw = () => {
    return (
        <div className='container mx-auto'>
            <h3 className='font-bold text-3xl tracking-widest pl-10 mb-10'>Sai gon FW 2023</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                    <Image src={imgSgfw1} alt="img_1" width={500} height={500} />
                    <Image src={imgSgfw2} alt="img_2" width={500} height={500} />
                    <Image src={imgSgfw3} alt="img_3" width={500} height={500} />
                    <Image src={imgSgfw4} alt="img_4" width={500} height={500} />
                    <Image src={imgSgfw5} alt="img_5" width={500} height={500} />
                    <Image src={imgSgfw6} alt="img_6" width={500} height={500} />
                    <Image src={imgSgfw7} alt="img_7" width={500} height={500} />
                    <Image src={imgSgfw8} alt="img_8" width={500} height={500} />
                    <Image src={imgSgfw9} alt="img_9" width={500} height={500} />
                    <Image src={imgSgfw10} alt="img_10" width={500} height={500} />
                    <Image src={imgSgfw11} alt="img_11" width={500} height={500} />
                    <Image src={imgSgfw12} alt="img_12" width={500} height={500} />
                    <Image src={imgSgfw13} alt="img_13" width={500} height={500} />
                    <Image src={imgSgfw14} alt="img_14" width={500} height={500} />
                    <Image src={imgSgfw15} alt="img_15" width={500} height={500} />
            </div>
        </div>
    );
};

export default SaigonFw;