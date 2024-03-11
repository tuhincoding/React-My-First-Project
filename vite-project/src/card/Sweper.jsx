import React, { useEffect, useState } from 'react'
import TourData from './TourData'
import { useParams } from 'react-router-dom'
import image1 from "../../public/assets/image/gallery/2.webp"
function Sweper() {
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
    
  return (
    <div className='container m-auto'>
        <div className='grid grid-cols-3 gap-5 m-auto'></div>
      <div className="card w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title"><span className='font-bold text-1xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 color-text-green-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          </span> {slugData?.slug}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure><img src={image1} alt="Shoes" /></figure>
      </div>
      <div className='text-1xl'>
        <p>Explore the breathtaking Bromo Tengger Semeru National Park with our Bromo <br /> Tour. We offer both group and private tours to Bromo.</p>
      </div>
      <TourData/>
    </div>
  )
}

export default Sweper