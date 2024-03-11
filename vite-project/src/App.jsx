import { useState } from 'react'
import Nevbar from './Nevbar/Nevbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pagess/Home'
import Tours from './Pagess/Tours'
import AboutUs from './Pagess/AboutUs'
import Contact from './Pagess/Contact'
import CardItt from './card/CardItt'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nevbar />
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tours' element={<Tours />}></Route>
        <Route path='/tours/:slug' element={<CardItt />}></Route>
        <Route path='/aboutUs' element={<AboutUs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  )
}

export default App
