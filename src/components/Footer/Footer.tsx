import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer bg-[#a6a6a6]  h-[250px] text-white flex items-center'>
            <div className="container m-auto flex gap-32 justify-center items-center">
                <div className="text-4xl flex flex-col gap-12">
                    <div className="tracking-widest font-bold">BATRA</div>
                    <div className="flex gap-10">
                        <a href="https://www.facebook.com/moidienstudio" target="_blank"><FaFacebookSquare /></a>
                        <a href="https://www.instagram.com/moidienstudio/" target="_blank"><FaInstagramSquare /></a>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="text-xl tracking-widest">JOIN OUR EMAIL LIST</h5>
                    <p className="text-[15px] tracking-widest">Be the first to know about our secret sample sales and special events.</p>
                    <div className="pt-5">
                        <input className="h-[40px] w-[250px] bg-[#a6a6a6] placeholder:text-white border-2 border-white outline-none pl-5" type="email" placeholder="Enter your email" />
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h5 className="text-xl tracking-widest">MORE INFO</h5>
                    <p className="text-[15px] tracking-widest">Contact</p>
                    <p className="text-[15px] tracking-widest">FAQs</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;