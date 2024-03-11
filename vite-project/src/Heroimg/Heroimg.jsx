import React from 'react'

function Heroimg() {
    return (
        <div>
            <div className='container px-5 py-24 mx-auto'>
                <div>
                    <h1 className='font-bold text-2xl'>RECOMMENDED TOURS</h1>
                    <p className=' text-2xl opacity-80'>We provide tour packages around East Java for domestic and international tourists.</p>
                </div>
                <div className='grid grid-cols-1 items-center gap-6 w-full container px-5 py-24 mx-auto sm:grid-cols-3 md:grid-cols-3'>

                    <div className='w-[100%]'>
                        <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                                alt=""
                                src="../../public/assets/image/products/bromo/1.webp"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                                <div class="p-4 sm:p-6">


                                    <a href="#">
                                        <h3 className="mt-0.5 text-lg text-white max-w-xs transition duration-300 ease-in-out hover:scale-110">Bromo Tour</h3>
                                    </a>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                        Staringf Form
                                    </p>
                                    <h3 className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">RP 3500.0000/Person</h3>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className='w-[100%]'>
                        <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                                alt=""
                                src="../../public/assets/image/products/bromo/2.webp"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                                <div class="p-4 sm:p-6">


                                    <a href="#">
                                        <h3 className="mt-0.5 text-lg text-white max-w-xs transition duration-300 ease-in-out hover:scale-110">Tumpaksewu Tour</h3>
                                    </a>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                        Staringf Form
                                    </p>
                                    <h3 className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">RP 3500.0000/Person</h3>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className='w-[100%]'>
                        <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                                alt=""
                                src="../../public/assets/image/products/bromo/3.webp"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                                <div class="p-4 sm:p-6">

                                    <a href="#">
                                        <h3 className="mt-0.5 text-lg text-white max-w-xs transition duration-300 ease-in-out hover:scale-110">Ijen Blue Fire Tour</h3>
                                    </a>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                        Staringf Form
                                    </p>
                                    <h3 className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">RP 3500.0000/Person</h3>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heroimg