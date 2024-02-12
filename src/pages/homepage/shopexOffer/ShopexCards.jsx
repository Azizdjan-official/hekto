import React from 'react'

const ShopexCards = ({image,text,lorem}) => {
  return (
    <div className='flex flex-col border w-[25%] shadow-lg p-5'>
      <img src={image} className='object-scale-down h-48 w-96				' /> 
      <h1 className='text-[#151875] text-2xl text-center font-[700]'>{text}</h1>
      <h1 className='text-[#b0b0b0] text-lg text-center '>{lorem}</h1>
    </div>
  )
}

export default ShopexCards
