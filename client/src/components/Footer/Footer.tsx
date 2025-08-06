import React from 'react'
import playstore from '../../assets/playstore.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='bg-[#D9D9D9]'>
            <div>
                <h1 className="text-4xl font-bold text-center p-4">Order</h1>
                <img src={playstore} alt="" />
                <p className='p-4 text-center'>Company # 490039-445, Registered with House of companies</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className='text-xl font-bold text-center p-4'>Get Exclusive Deals in your Inbox</h1>
                <div className="flex items-center justify-center  bg-[#aba6a6] m-4 rounded-full ">
                    <input type="text" placeholder='youremail@gmail.com' className='p-3' />
                    <button className='bg-[#FC8A06] p-3 text-white rounded-full font-medium '>Subscribe</button>
                </div>

                <p>we want spam, read our <span className='underline'>email policy</span></p>
            </div>

            {/* social icon */}
            <div className='flex items-center justify-center gap-8 my-4'>
                <FaFacebook size={40} />
                <FaInstagram size={30} />
                <FaTwitter size={30} />
                <FaLinkedin size={30} />
            </div>

            {/* important links */}
            <div className=" p-6">
                <h1 className='text-xl font-bold '>Legal Pages</h1>
                <p className='underline py-2'>Privacy Policy</p>
                <p className='underline py-2'>Terms & Conditions</p>
                <p className='underline py-2'>Cookie Policy</p>
            </div>

            {/* company */}
            <div className='p-6'>
                <h1 className='text-xl font-bold '>Important Links</h1>
                <p className='underline py-2'>Get help</p>
                <p className='underline py-2'>Add your restaurant</p>
                <p className='underline py-2'>Sign up to deliver</p>
                <p className='underline py-2'>Create a business account</p>
            </div>

            <div className="bg-[#03081F] h-[60px]">
                <p className='text-center text-white p-2'>Order.Uk © 2025. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
