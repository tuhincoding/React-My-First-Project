import React from 'react';

import { FaFire, FaMountain, FaUmbrellaBeach } from 'react-icons/fa';
import { BsFillCarFrontFill, BsFillFileTextFill } from 'react-icons/bs';
import { PiJeepBold } from 'react-icons/pi';
import { FaBus, FaCompass, FaGasPump, FaUserAlt, FaUtensils } from 'react-icons/fa';
import { TbMountain } from "react-icons/tb";
import { BsSunrise } from "react-icons/bs";
import { TbBeach } from "react-icons/tb";
import { FaBottleWater } from "react-icons/fa6";
import { FaPanorama } from "react-icons/fa6";
import { GiWaterfall } from "react-icons/gi";
import { GiMountainCave } from "react-icons/gi";
import { LiaSnowflake } from "react-icons/lia";
import { GiRiver } from "react-icons/gi";
import { BsScrewdriver } from "react-icons/bs";
import { GiMountainClimbing } from "react-icons/gi";

const CustomIcon = ({ array }) => {
    console.log(array)
    // Array format
    // const jsonArray = [
    //     { name: 'Transport', icon: '<FaBus />' },
    //     { name: 'Transport', icon: '<FaBus />' },
    //     { name: 'Transport', icon: '<FaBus />' },
    //     { name: 'Transport', icon: '<FaBus />' },
    //     { name: 'Transport', icon: '<FaBus />' },
    // ];
    const iconMap = {
        '<PiJeepBold />': <PiJeepBold />,
        '<BsFillFileTextFill />': <BsFillFileTextFill />,
        '<FaMountain />': <FaMountain />,
        '<TbMountain />': <TbMountain />,
        '<BsSunrise />': <BsSunrise />,
        '<TbBeach />': <TbBeach />,
        '<BsFillCarFrontFill />': <BsFillCarFrontFill />,
        '<FaUserAlt />': <FaUserAlt />,
        '<FaBottleWater />': <FaBottleWater />,
        '<FaGasPump />': <FaGasPump />,
        '<FaUmbrellaBeach />': <FaUmbrellaBeach />,
        '<FaBus />': <FaBus />,
        '<FaPanorama />': <FaPanorama />,
        '<FaCompass />': <FaCompass />,
        '<FaUtensils />': <FaUtensils />,
        '<GiWaterfall />': <GiWaterfall />,
        '<GiMountainCave />': <GiMountainCave />,
        '<LiaSnowflake />': <LiaSnowflake />,
        '<GiRiver />': <GiRiver />,
        '<BsScrewdriver />': <BsScrewdriver />,
        '<GiMountainClimbing />': <GiMountainClimbing />,
        '<FaFire />': <FaFire />,
    };

    const convertedArray = array?.map(item => ({
        name: item.name,
        icon: iconMap[item.icon]
    }));
    console.log(name)

    return (
        <div className='flex items-center gap-10 flex-wrap '>
            {
                convertedArray?.map((item, i) => {
                    return <div key={i} className='flex items-center gap-1'>
                        {item.icon}
                        {item.name}
                    </div>
                    
                })
            }
        </div>
    );
};

export default CustomIcon;