import React from 'react';
import Image from 'next/image';
import { imgSgss1, imgSgss2, imgSgss3, imgSgss4, imgSgss5, imgSgss6, imgSgss7, imgSgss8, imgSgss9, imgSgss10, imgSgss11, imgSgss12 } from '@/constants/ImageSS';

const SaigonSs = () => {
    return (
        <div className='container mx-auto'>
            <h3 className='font-bold text-3xl tracking-widest pl-10 mb-10'>Sai gon SS 2023</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7'>

                <Image src={imgSgss1} alt="img_1" width={500} height={500} />
                <Image src={imgSgss2} alt="img_2" width={500} height={500} />
                <Image src={imgSgss3} alt="img_3" width={500} height={500} />

                <Image src={imgSgss4} alt="img_4" width={500} height={500} />
                <Image src={imgSgss5} alt="img_5" width={500} height={500} />
                <Image src={imgSgss6} alt="img_6" width={500} height={500} />

                <Image src={imgSgss7} alt="img_7" width={500} height={500} />
                <Image src={imgSgss8} alt="img_8" width={500} height={500} />
                <Image src={imgSgss9} alt="img_9" width={500} height={500} />

                <Image src={imgSgss10} alt="img_10" width={500} height={500} />
                <Image src={imgSgss11} alt="img_11" width={500} height={500} />
                <Image src={imgSgss12} alt="img_12" width={500} height={500} />

            </div>

        </div>
    );
};

export default SaigonSs;