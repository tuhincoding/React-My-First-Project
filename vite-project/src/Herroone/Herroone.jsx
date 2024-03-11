import React from 'react'
import { IoMdSend } from "react-icons/io";

function Herroone() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 container px-5 py-24 mx-auto'>
      <div>
        <h1 className=" text-3xl md:text-6xl mb-4 font-medium text-gray-900">Travel <br /> Around East <br /> Java with <span class="text-emerald-500">Bromo Smart <br /> Tour</span>

        </h1>
        <p className="mb-8 text-lg ">We always give the extraordinary experience for <br /> you. We provide tour packages around East Java <br /> for domestic and international tourists.</p>
        <button className='bg-emerald-500 p-3 rounded-lg text-white'>Get Start</button>

      </div>
      <div>
        <img className="object-cover object-center rounded" alt="hero" src="public/assets/image/hero/hero.png" />


      </div>
    </div>
    // <section class="text-gray-600 body-font">
    //     <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    //     <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    //     <div class="flex justify-center">
    //         <button class="inline-flex bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded text-lg items-center gap-3 text-cyan-500 shadow hover:scale-125 mb-10"> <IoMdSend />Explore the East Java!</button>

    //         </div>
    //         <h1 class="title-font sm:text-4xl text-9xl mb-4 font-medium text-gray-900">Travel Around East Java with <span class="text-emerald-500">Bromo Smart Tour</span> 

    //         </h1>
    //         <p class="mb-8 leading-relaxed">We always give the extraordinary experience for you. We provide tour packages around East Java for domestic and international tourists.</p>
    //         <div class="flex justify-center">
    //         <button class="inline-flex text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>

    //         </div>
    //     </div>
    //     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    //         <img class="object-cover object-center rounded" alt="hero" src="public/assets/image/hero/hero.png"/>
    //     </div>
    //     </div>
    // </section>
  )
}

export default Herroone