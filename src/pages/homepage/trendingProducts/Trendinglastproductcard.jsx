import React from 'react'

const Trendinglastproductcard = ({image,title,price}) => {
  return (
    <div className='flex items-center p-2 gap-4'>
        <div className='bg-[#F5F6F8] w-[107px] h-[74px] flex items-center justify-center'>
            <img src={image} />
        </div>
        <div>
            <span className='flex flex-col text-[#151875] text-lg'>{title} <p className='line-through text-[#151875] text-sm'>{price}</p></span>
        </div>
    </div>
  )
}

export default Trendinglastproductcard
