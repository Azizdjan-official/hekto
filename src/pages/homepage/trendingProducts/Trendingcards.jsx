import React from 'react'

const Trendingcards = ({image,title,price, priceTag}) => {
  return (
    <div className='p-2 shadow-lg cursor-pointer'>
        <div className='bg-[#F5F6F8] w-[247px] h-[244px] flex items-center justify-center'>
            <img src={image} className='object-scale-down ' />
        </div>
        <div className='text-center flex items-center justify-center flex-col'>
            <h1 className='text-[#151875] font-[700] text-lg'>{title}</h1>
            <span className='flex gap-4  text-[#151875] font-[400] text-lg'>{price} <p className='line-through text-md text-[#aaaaaa]'>{priceTag}</p></span>
        </div>
    </div>
  )
}

export default Trendingcards
