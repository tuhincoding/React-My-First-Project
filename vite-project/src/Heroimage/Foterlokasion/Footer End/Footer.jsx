import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

function Footer() {
    return (
        <div className='container m-auto '>
            <div className='grid lg:grid-cols-3 mt-20 sm:grid-cols-1 md:grid-cols-3 sm:grid-flow-row sm:gap-10 mb-7'>
                <div>
                    <div className='flex items-center'>
                        <img className='w-12 h-12' src="../../../../public/assets/image/logo/logo.png" alt="" />
                        <h1 className='font-bold text-2xl'>BROMO SMART TOUR</h1>
                    </div>

                    <p className='text-left mt-10'>We provide tour packages around East Java for domestic and international tourists.</p>
                </div>
                <div className='text-left'>
                    <h1 className='font-bold text-lg'>Contacts</h1>
                    <ul className='text-lg'>
                        <li>Phone:+6282143261091</li>
                        <li>Email:bromosunrise@gmail.com</li>
                        <li className=''>Address:Jl. Graha Pelita Asri  </li>
                        <li className='mx-14 my-0'><br /> No.B-30,<br /> Pandanwangi, Kec. <br /> Blimbing, Kota <br /> Malan</li>
                    </ul>
                </div>
                <div class='text-left '>
                    <h1 className='font-bold text-lg'>Social</h1>
                    <div class='flex gap-5 text-lg mb-6 mt-6'>
                        <FaFacebookF />
                        <FaInstagram />
                        <CiTwitter />
                    </div>
                    <p>Follow us for the latest news and updates.</p>
                </div>
            </div>
            <hr />
            <div class="grid grid-cols-2 gap-4 place-content-end  w-[100%] mt-7">
                <h4>© Copyright 2024 Bromo Smart Tour Indonesia. All rights reserved.</h4>
                <div >
                    <ul class="flex gap-4 ml-12">
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Footer