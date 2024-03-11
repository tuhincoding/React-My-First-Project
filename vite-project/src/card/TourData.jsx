// import React, { useState } from 'react'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaBus } from "react-icons/fa";
import Footer from '../Heroimage/Foterlokasion/Footer End/Footer';
import CustomIcon from '../components/CustomIcon';


function TourData() {
    const { slug } = useParams()
    const [toursDatas, usetourDatas] = useState([])
    useEffect(() => {
        fetch("/Data.json")
            .then((res) => res.json())
            .then(data => usetourDatas(data))
        {console.log(toursDatas)}

    }, [])
    const slugData = toursDatas.find((tour) => tour.slug === slug)
    console.log(slugData)
    // console.log(slugData?.groupTour.include[0].icon)

    return (
        <div>

            <div className='w-1/2 bg-slate-100 opacity-2 my-5 p-4'>
                <h1 className='text-emerald-400 '>{slug}</h1>
            </div>
            <div>
                <div className='bg-[white] shadow-md w-1/2 p-5'>
                    <h2 className='text-[#6c2bd9] text-xl flex gap-2 mb-5 '> <span><FaBus /></span> Prizes</h2>
                    <div className='text-10  '>
                        <p>Domestic:Rp{slugData?.privateTour
                            .price
                            .domestic
                        [4]} /person</p>
                        <p>International:Rp{slugData?.privateTour
                            .price
                            .domestic
                        [1]} /person</p>
                    </div>
                </div>
                <div className='shadow-md w-1/2 p-5'>
                    <h2 className='text-[#6c2bd9] text-xl flex gap-2 mb-5 '> <span><FaBus /></span> Includ</h2>


                    <div className=''>

                        <CustomIcon array={slugData?.groupTour?.include}></CustomIcon>

                    </div>
                    {/* <div className='grid grid-cols-1 text-base sm:grid-cols-3'>

                        {slugData?.privateTour.include[0].name && <h4 className='flex gap-2 text-center items-center'><FaBus />{slugData?.privateTour.include[0].name}</h4>}

                        {slugData?.privateTour.include[1].name && <h4 className='flex gap-2 text-center items-center'><FaBus />{slugData?.privateTour.include[1].name}</h4>}

                        {slugData?.privateTour.include[2].name && <h4 className='flex gap-2 text-center items-center'><FaBus />{slugData?.privateTour.include[2].name}</h4>}

                        {slugData?.privateTour.include[3].name && <h4 className='flex gap-2 text-center items-center'><FaBus />{slugData?.privateTour.include[3].name}</h4>}

                        {slugData?.privateTour.include[4].name && <h4 className='flex gap-2 text-center items-center'><FaBus />{slugData?.privateTour.include[4].name}</h4>}

                        {slugData?.privateTour?.include[5]?.name && <h4 className='flex gap-2 text-center items-center'><FaBus />{slugData?.privateTour?.include[5]?.name}</h4>}

                        {slugData?.privateTour?.include[6]?.name && <h4 className='flex gap-2 text-center items-center'> <FaBus />{slugData?.privateTour?.include[6]?.name}</h4>}

                    </div> */}


                </div>
                <div className='shadow-md w-1/2 p-5' >
                    <div>
                        <h2 className='text-[#6c2bd9] text-xl flex gap-2 mb-5 '> <span><FaBus /></span> Highlight</h2>

                    </div>
                    <div >
                        {/* <h4 className='flex gap-2 items-center'><FaBus />{slugData?.groupTour.highlight[0].name}</h4>
                        <h4 className='flex gap-2 text-center items-center'><FaBus />{slugData?.groupTour.highlight[1].name}</h4>
                        <h4 className='flex gap-2 text-center items-center'><FaBus />{slugData?.groupTour.highlight[2].name}</h4> */}
                        <CustomIcon array={slugData?.groupTour?.highlight}></CustomIcon>
                    </div>
                </div>
                <div className='shadow-md w-1/2 p-5 sm:w-1/2' >
                    <h1 className='text-purple-700 flex gap-2 items-center text-lg'><FaBus />Meeting Point: <span className='text-black'>{slugData?.groupTour.meetingPoint[0]}</span> </h1>
                </div>

                <div className='shadow-md bg-[#ebf5ff] w-1/2 p-5'>
                    <h2 className='text-[#233876] flex gap-2 items-center text-lg'> <FaBus />Private Tour</h2>

                </div>
                <div className='shadow-md w-1/2 p-5'>
                    <div className='text-[#1a56db] text-lg mb-2'>
                        <h2 className='flex gap-2 items-center '> <FaBus />Price</h2>
                    </div>
                    <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
                        <div className='bg-[#ebf5ff] p-3'>
                            <h2 className='text-lg'>Domestic</h2>
                            <div>
                                <h2 className='bg-[#c3ddfd] p-2 rounded-md mb-2 sm:bg-[#c3ddfd]'> 1 <span className='font-bold'>RB{slugData?.privateTour.price.domestic[0]}</span>/person:person</h2>
                                <h2 className='bg-[#c3ddfd] p-2 rounded-md mb-2'> 2 <span className='font-bold'>RB{slugData?.privateTour.price.domestic[1]}</span>/person</h2>
                                <h2 className='bg-[#c3ddfd] p-2 rounded-md mb-2'> 3 <span className='font-bold'>RB{slugData?.privateTour.price.domestic[2]}</span>/person</h2>
                                <h2 className='bg-[#c3ddfd] p-2 rounded-md mb-2'> 4 <span className='font-bold'>RB{slugData?.privateTour.price.domestic[3]}</span>/person</h2>
                                <h2 className='bg-[#c3ddfd] p-2 rounded-md mb-2'> 5 <span className='font-bold'>RB{slugData?.privateTour.price.domestic[4]}</span>/person</h2>
                                <h2 className='bg-[#c3ddfd] p-2 rounded-md '> 6 <span className='font-bold'>RB{slugData?.privateTour.price.domestic[5]}</span>/person</h2>
                            </div>
                        </div>
                        <div className='bg-[#ebf5ff] p-3'>
                            <h2 className='text-lg'>International</h2>
                            <div>
                                <h2 className='bg-[#cddbfe] p-2 rounded-md mb-2'>1 <span className='font-bold'>RP{slugData?.privateTour.price.foreign[0]}</span>/person:person</h2>
                                <h2 className='bg-[#cddbfe] p-2 rounded-md mb-2'>2 <span className='font-bold'>RP{slugData?.privateTour.price.foreign[1]}</span>/person:person</h2>
                                <h2 className='bg-[#cddbfe] p-2 rounded-md mb-2'>3 <span className='font-bold'>RP{slugData?.privateTour.price.foreign[2]}</span>/person:person</h2>
                                <h2 className='bg-[#cddbfe] p-2 rounded-md mb-2'>4 <span className='font-bold'>RP{slugData?.privateTour.price.foreign[3]}</span>/person:person</h2>
                                <h2 className='bg-[#cddbfe] p-2 rounded-md mb-2'>5 <span className='font-bold'>RP{slugData?.privateTour.price.foreign[4]}</span>/person:person</h2>
                                <h2 className='bg-[#cddbfe] p-2 rounded-md '>6 <span className='font-bold'>RP{slugData?.privateTour.price.foreign[5]}</span>/person:person</h2>

                            </div>
                        </div>


                    </div>

                </div>
            </div>

            <div className='shadow-md w-1/2 p-5'>
                <h1 className='text-[#6c2bd9] text-xl flex gap-2 mb-5 '> <FaBus />Include</h1>
                <div className='grid grid-cols-1 text-lg sm:grid-cols-3 items-end'>
                    <h1 className='flex gap-2 text-center items-center'> <FaBus />{slugData?.privateTour.include[0].name}</h1>
                    <h1 className='flex gap-2 text-center items-center'> <FaBus />{slugData?.privateTour.include[1].name}</h1>
                    <h1 className='flex gap-2 text-center items-center'><FaBus />{slugData?.privateTour.include[2].name}</h1>
                    <h1 className='flex gap-2 text-center items-center'> <FaBus />{slugData?.privateTour.include[3].name}</h1>
                </div>
            </div>
            <div className='shadow-md w-1/2 p-5'>
                <h1 className='text-[#6c2bd9] text-xl flex gap-2 mb-5 '> <FaBus />Highlight</h1>
                <div className='grid grid-cols-1 text-lg sm:grid-cols-2 items-end gap-3'>
                    <h1 className='flex gap-2 text-center items-center'> <FaBus />{slugData?.privateTour.highlight[0].name}</h1>
                    <h1 className='flex gap-2 text-center items-center'> <FaBus />{slugData?.privateTour.highlight[1].name}</h1>
                    <h1 className='flex gap-2 text-center items-center'> <FaBus />{slugData?.privateTour.highlight[2].name}</h1>
                    <h1 className='flex gap-2 text-center items-center'> <FaBus />{slugData?.privateTour.highlight[3].name}</h1>
                </div>
            </div>
            <div className='shadow-md w-1/2 p-5'>
                <h1 className='text-purple-700 flex gap-2 items-center text-lg'> <FaBus />Meeting Point: <span className='text-black'>Banyuwangi City</span> </h1>
            </div>
            <dir className='text-purple-700 flex gap-2 items-center text-lg'>
                <h1 className='text-purple-700 flex gap-2 items-center text-lg'> <FaBus />Itinerary</h1>
            </dir>
            <div className='shadow-md w-1/2 p-5 grid grid-cols-1 gap-2 sm:grid-cols-2'>
                <div className='mb-4 hover:scale-105'>
                    <h1 className='text-purple-700 flex gap-2 items-center text-lg'> <FaBus />{slugData?.itinerary[0].timeRange}</h1>
                    <p>{slugData?.itinerary[0].activity}</p>
                </div>
                <div className='mb-4 hover:scale-105'>
                    <h1 className='text-purple-700 flex gap-2 items-center text-lg'><FaBus />{slugData?.itinerary[1].timeRange}</h1>
                    <p>{slugData?.itinerary[1].activity}</p>
                </div>
                <div className='mb-4 hover:scale-105'>
                    <h1 className='text-purple-700 flex gap-2 items-center text-lg'><FaBus />{slugData?.itinerary[2].timeRange}</h1>
                    <p>{slugData?.itinerary[2].activity}</p>
                </div>
                <div className='mb-4 hover:scale-105'>
                    <h1 className='text-purple-700 flex gap-2 items-center text-lg'><FaBus />{slugData?.itinerary[3].timeRange}</h1>
                    <p>{slugData?.itinerary[3].activity}</p>
                </div >
                <div className='mb-4 hover:scale-105'>
                    <h1 className='text-purple-700 flex gap-2 items-center text-lg'><FaBus />{slugData?.itinerary[4].timeRange}</h1>
                    <p>{slugData?.itinerary[4].activity}</p>
                </div>
                <div className='hover:scale-105'>
                    <h1 className='text-purple-700 flex gap-2 items-center text-lg'><FaBus />{slugData?.itinerary[5]?.timeRange}</h1>
                    <p>{slugData?.itinerary[5]?.activity}</p>
                </div>
                <div className='hover:scale-105'>
                    <h1 className='text-purple-700 flex gap-2 items-center text-lg'><FaBus />{slugData?.itinerary[6]?.timeRange}</h1>
                    <p>{slugData?.itinerary[6]?.activity}</p>
                </div>
            </div>
            <div className=' w-1/2 p-5'>
                <p>*Itinerary can be changed at any time according to the situation and conditions in the field.</p>
            </div>
            <div className='shadow-md w-1/2 p-5'>
                <h1 className='text-[#771d1d] flex gap-2 items-center text-lg'> <FaBus />Additional Information</h1>
            </div>
            <div className='shadow-md w-1/2 p-5'>
                <h2 className='text-[#374151] mb-3'>Keperluan yang Perlu Dibawa:</h2>
                <div>
                    <ul className='list-disc list-inside'>
                        <li className='text-[]#0e121d'>{slugData?.requirements[0]}</li>
                        <li>{slugData?.requirements[1]}</li>
                        <li>{slugData?.requirements[2]}</li>
                        <li>{slugData?.requirements[3]}</li>
                        <li>{slugData?.requirements[4]}</li>
                        <li>{slugData?.requirements[5]}</li>
                        <li>{slugData?.requirements[6]}</li>
                    </ul>
                </div>
            </div>
            <div className='shadow-md w-1/2 p-5'>
                <h1>Kategori Anak-anak:</h1>
                <p>Anak-anak umur dibawah 3 tahun Free</p>
            </div>
            <div className='shadow-md w-1/2 p-5'>
                <h1>Tour Exclude:</h1>
                <div>
                    <ul className='list-disc list-inside'>
                        <li className='text-[]#0e121d'>{slugData?.requirements[0]}</li>
                        <li>{slugData?.exclude[0]}</li>
                        <li>{slugData?.exclude[1]}</li>
                        <li>{slugData?.exclude[2]}</li>
                        <li>{slugData?.exclude[3]}</li>
                        <li>{slugData?.exclude[4]}</li>

                    </ul>


                </div>
            </div>
            <div className='shadow-md w-1/2 p-5'>
                <h1>Metode Pembayaran:</h1>
                <div className='flex items-center gap-5'>
                    <p className='text-purple-700 flex gap-2 items-center text-lg'><FaBus />Kartu Kredit</p>
                    <p className='text-purple-700 flex gap-2 items-center text-lg'><FaBus />Kartu Kredit</p>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default TourData



