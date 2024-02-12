import React from 'react'
import Featurecardslidermini from './../../icons/Feature-card-slider-mini';

const Featurecards = ({id,image,text,code,price}) => {
  return (
    <div className='flex flex-col shadow-lg	' key={id}>
        <div className='bg-[#F7F7F7] w-[270px] h-[236px] flex items-center justify-center'>
            <img className='w-[130px] h-[150px]' src={image} />
        </div>
        <div className='flex flex-col gap-4 hover:bg-[#2F1AC4] py-4 '>
            <h1 className='text-[#FB2E86] font-[700] text-md text-center '>{text}</h1>
            <span className='flex gap-2 items-center justify-center'>
                <Featurecardslidermini/>
                <Featurecardslidermini/>
                <Featurecardslidermini/>
            </span>
            <h1 className='text-[#151875] text-sm text-center'>{code}</h1>
            <h1 className='text-[#151875] text-sm text-center'>{price}</h1>
        </div>
    </div>
  )
}

export default Featurecards
