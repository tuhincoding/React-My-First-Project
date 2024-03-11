import React from 'react'
import { IoAirplane } from "react-icons/io5";
import { ImManWoman } from "react-icons/im";
import { ImAddressBook } from "react-icons/im";
import { ImBubble } from "react-icons/im";
import Heroimg from '../Heroimg/Heroimg';
import Heroimage from '../Heroimage/Heroimage';

function Herologo() {
  return (
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-left w-full mb-20">
                <h1 class="sm:text-2xl text-3xl font-medium title-font mb-4 text-gray-900 ">OUR SERVICES</h1>
                <h2 class="lg:w-2/3  leading-relaxed text-left text-base">We give you the best service for your trip, so you can enjoy your trip without any worries.</h2>
            </div>
            <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <div class=" text-center bg-green-500 inline-block color-green-500 p-7 rounded-lg">
                    <IoAirplane size={40} />
                    </div>
                
                <h2 class="title-font  text-1xl font-bold">SERVICE YOUR TRIP</h2>
                <p class="leading-relaxed">We provide personalized trip services in Malang, Banyuwangi, and Jogja.</p>
                </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div class=" text-center bg-green-500 inline-block color-green-500 p-7 rounded-lg">
                <ImManWoman size={40}/>
                </div>
                <h2 class="title-font font-medium text-2xl text-gray-900">GROUP AND PRIVATE TOURS</h2>
                <p class="leading-relaxed">Choose from our group tours or opt for a private tour tailored to your preferences.</p>
                </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                
                <div class=" text-center bg-green-500 inline-block color-green-500 p-7 rounded-lg">
                <ImAddressBook size={40}/>
                </div>
                <h2 class="title-font font-medium text-2xl text-gray-900">CAMP AND TREKKING</h2>
                <p class="leading-relaxed">Experience camping and trekking adventures to breathtaking locations, including Ijen, Semeru, and more.</p>
                </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div class=" text-center bg-green-500 inline-block color-green-500 p-7 rounded-lg">
                <ImBubble size={40}/>
                </div>
                <h2 class="title-font font-medium text-2xl text-gray-900">TOUR PACKAGES</h2>
                <p class="leading-relaxed">We provide tour packages around East Java for domestic and international tourists.</p>
                </div>
            </div>
            </div>
        </div>
        <Heroimage/>
    </section>
  )
}

export default Herologo