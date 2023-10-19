'use client'
import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto mb-20'>
            <h3 className='font-bold text-3xl tracking-widest pl-10 mb-10'>ABOUT</h3>
            <div className='flex'>
                <div className='w-[50%]'>
                    <Image src="/images/about_img.webp" alt="about" width={700} height={600} />
                </div>
                <div className='w-[50%] flex flex-col text-justify gap-10 text-xl'>
                    <p>
                        BATRA Studio was founded in the heart of Saigon, Vietnam in 2016 by Tom Trandt Minh Đạo - a Parsons graduate.
                    </p>
                    <p>Over the years, the studio has become a home for a group of local designers who love to explore the art of garment making. Designs at BATRAare experimental and environmentally conscious.
                        Due to the lack of resources in the earlier days, our designers have developed a love for left-over or donated fabrics, production waste as well as deadstock materials.</p>
                    <p>BATRA community - #inmoidien - has grown from a small group of friends and family who wanted something fun to wear on a special occasion to a community of more than 150000 enthusiastic fans all over the world who not only encourage us to be bold and playful and challenge ourselves with a high level of craftsmanship, but also inspire us with a responsible and sustainable approach to growth.</p>
                    <p>Tom Trandt Minh Đạo was born and raised in Saigon, Vietnam. He studied fashion design at Parsons The New School for Design in New York City. After graduating in 2016, he went back to his hometown to start BATRA Studio.</p>
                </div>
            </div>
        </div>
    );
};

export default About;