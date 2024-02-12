import React from 'react'
import { Link } from 'react-router-dom';
import Penicon from './../../../icons/Penicon';
import Calendar from './../../../icons/Calendar';

const LatestCard = ({image, penIcon,date,trend,trendInfo}) => {
  return (
    <div className='flex flex-col gap-4 border  items-center  shadow-lg rounded-md'>
        <img className='w-full rounded-md' src={image} />
      <div className='flex flex-col gap-4 p-3'>
        <span className='flex gap-4'>
            <span className='flex gap-2 items-center justify-center'><Penicon/><p>{penIcon}</p></span>
            <span className='flex gap-2 items-center justify-center'><Calendar/><p>{date}</p></span>
        </span>
        <h1 className='text-[#151875] text-lg '>{trend}</h1>
        <p className='text-[#72718F] font-[400] text-lg w-[90%]'>{trendInfo}</p>
        <p className='text-[#151875] underline '>Read More</p>
      </div>
    </div>
  )
}

export default LatestCard
