import React, { useEffect, useState } from 'react'
import CardItt from '../card/CardItt'
import Footer from '../Heroimage/Foterlokasion/Footer End/Footer'
import { Link } from 'react-router-dom'

function Tours() {
  const [toursData, usetourData] = useState([])
  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then(data => usetourData(data))

  }, [])
  console.log(toursData)
  return (
    <div>
      <div className='relative'>
        <img src="/public/assets/banner/1.jpg" alt="" />
        

        <div className='absolute top-0 left-0  flex flex-col justify-center items-center w-full h-full text-stone-100'>
          <h1 className='text-4xl'>Explore the Beauty of East Java with Us</h1>
          <p>Home <span>Tours</span></p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-5 m-auto'>
        {toursData.map((e) =>
 
          <div className="card bg-base-100 shadow-xl mx-3 my-4 ">
            <figure><img src={e?.image} alt="Shoes" /></figure>

            <div className="card-body">
              <h2 className="card-title">{e.title}</h2>
              <p>{e.description}</p>
              <div>
                <h1>{e.groupTour?.include?.icon}</h1>

              </div>
              <Link to={e.slug}>
                <div className="card-actions">
                  <button className="btn btn-primary w-full">Details</button>
                </div>
              </Link>

            </div>
    
          </div>


        )}

        



      </div>


      <Footer/>
    </div >
  )
}

export default Tours
// {toursData.map((e) => <CardItt datt={e}  />

// )}
