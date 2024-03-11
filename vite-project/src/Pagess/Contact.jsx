import React from 'react'
import Footer from '../Heroimage/Foterlokasion/Footer End/Footer'
import { FaLocationDot } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div>
      
      <div className='relative'>
        <img src="/public/assets/banner/1.jpg" alt="" />
        <div className='absolute top-0 left-0  flex flex-col justify-center items-center w-full h-full text-stone-100'>
          <h1 className='text-4xl'>Explore the Beauty of East Java with Us</h1>
          <p>Home <span>Contact</span></p>
        </div>
      </div>
      <div className='container m-auto'>
        <div className='grid grid-cols-2 items-start mt-12'>
          <div>
            <h1 className='text-3xl mb-4 font-bold'>Contact Us</h1>
            <p className='text-2xl mb-12'>We are open <span className='font-bold'>anytime and every day</span>. You can contact us through the following contacts.</p>
            <ul className='flex flex-col gap-4'>
              <li className='text-xl flex items-center gap-5'> <FaLocationDot />Jl. Graha Pelita Asri No.B-30, Pandanwangi, Kec. Blimbing, Kota Malang</li>
              <li className='text-xl flex items-center gap-5'> <SlEnvolopeLetter />bromosunrise@gmail.com</li>
              <li className='text-xl flex items-center gap-5'> <FaPhone />+628123456789 (Call/WhatsApp)</li>
            </ul>
          </div>
          <div>
            <iframe className='w-[100%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.02684192836713!2d89.08465796668463!3d22.712273223396604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff5f317acbbe67%3A0x4417c9ee4552c98c!2sSunshine%20Mess!5e0!3m2!1sen!2sbd!4v1709261417259!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Contact