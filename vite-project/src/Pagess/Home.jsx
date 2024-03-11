import React from 'react'
import Herroone from "../Herroone/Herroone"
import Heroimg from '../Heroimg/Heroimg'
import Herologo from '../Herologo/Herologo'
import Lokasion from '../Heroimage/Foterlokasion/Lokasion'
import Footer  from '../Heroimage/Foterlokasion/Footer End/Footer'

function Home() {
    return (
        <div>
            <Herroone />
            <Heroimg />
            <Herologo />
            {/* <Heroimage /> */}
            <Lokasion />
            <Footer />
        </div>
    )
}

export default Home