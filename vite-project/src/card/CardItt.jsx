
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Sweper from './Sweper'

function CardItt() {
  const { slug } = useParams()
  const [toursData, usetourData] = useState([])
  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then(data => usetourData(data))

  }, [])

  console.log(slug)
  console.log(toursData)
  const slugData = toursData.find((tour) => tour.slug === slug)
  console.log(slugData)
  return (

    <div className=" ">
      <div className='relative'>
        <img src="/public/assets/banner/1.jpg" alt="" />

        <div className='absolute top-0 left-0  flex flex-col justify-center items-center w-full h-full text-stone-100'>
          <h1 className='text-4xl'>Best of {slug}</h1>
          <p>Home <span>Tours {slug}</span></p>
        </div>
      </div>

      <Sweper />


    </div>
  )
}

export default CardItt