import Image from 'next/image';
import React from 'react';

const Careers = () => {
    return (
        <div className='container mx-auto mb-20'>
            <h3 className='font-bold text-3xl tracking-widest pl-10 mb-10'>CAREERS</h3>
            <div className='w-full'>
                <Image src='/images/Careers_img.webp' alt='careers' width={1600} height={400} />
            </div>
            <div className='mt-10 flex flex-col gap-10 text-center text-xl'>
                <p>BATRA Studio được xây dựng từ những ham muốn được thủ nghiệm của những người trẻ. Trải qua 6 năm phát triển, Môi Điên được hình thành từ hàng trăm câu chuyện của những bạn trẻ đã từng tham gia xây dựng giấc mơ về một studio giàu tính trải nghiệm.
                    Mỗi câu chuyện đều riêng biệt và giàu tính cá nhân, nhưng chúng tôi đều chia sẻ một niềm tin chung:</p>
                <p>Niềm tin vào những sản phẩm chất lượng được thiết kế và sản xuất tại Việt Nam.</p>
                <p>Đề tìm hiểu thêm về các vị trí tại BATRA Studio, bạn có thể truy cập <strong> <a href="/">BATRA Blog.</a></strong></p>
            </div>
        </div>
    );
};

export default Careers;