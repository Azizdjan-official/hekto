import React from 'react'
import LatestCard from './Latest-card'
import { LatestCardInfo } from '../../../data/data'

const Latest = () => {
  return (
    <div>
        <h1 className='text-[#1A0B5B] text-5xl text-center my-5'>Leatest Blog</h1>
        <div className='w-[80%] mx-auto flex gap-4'>
        {LatestCardInfo.map((item) => <LatestCard image={item.image} penIcon={item.penIcon}date={item.date}trend={item.trend}trendInfo={item.trendInfo}/> )}
        </div>
    </div>
  )
}

export default Latest
