import React from 'react'
import Footer from '../Heroimage/Foterlokasion/Footer End/Footer'

function AboutUs() {
  return (

    <div >
      <div className='relative'>
        <img src="/public/assets/banner/1.jpg" alt="" />


        <div className='absolute top-0 left-0  flex flex-col justify-center items-center w-full h-full text-stone-100'>
          <h1 className='text-4xl'>Explore the Beauty of East Java with Us</h1>
          <p>Home <span>About</span></p>
        </div>
      </div>
      <div className='container m-auto'>

        <div className='grid grid-cols-2 items-center content-center gap-4 mt-3'>
          <div>
            <div>
              <h4 className='text-[#6c2bd9] text-bold'>Get to Know</h4>
              <h1 className='text-[#030712] text-3xl'>About Us</h1>
            </div>
            <div>
              <p className='text-lg'>
                Bromo Smart Tour is a travel agency that provides tour packages to various tourist destinations on the island of Java, especially in East Java. We are committed to providing the best service to our customers.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1 className='text-[#6c2bd9] text-bold'>What We Do</h1>
              <p className='text-[#030712] text-3xl'>Our Mission</p>
            </div>
            <div>
              <p className='text-lg'>
                Our mission is to provide the best service to our customers and provide the best experience for our customers while on vacation.
                <ul className='mt-2'>
                  <li>Provide the best service to our customers</li>
                  <li>Provide the best experience for our customers</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      
    </div>
  )
}

export default AboutUs