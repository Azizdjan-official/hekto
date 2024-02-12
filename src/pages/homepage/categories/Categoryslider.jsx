import React from 'react'

const CategorysliderCard = ({id,image,text,price}) => {
  return (
    <div className='flex flex-col  justify-between ' key={id}>
        <div className='bg-[#F6F7FB] rounded-full  w-[269px] h-[269px] flex items-center justify-center'>
            <img className=' object-scale-down rounded-full' src={image} />
        </div>
        <div className='flex flex-col gap-4 py-4 '>
            <h1 className='text-[#FB2E86] font-[700] text-md text-center '>{text}</h1>
            <h1 className='text-[#151875] text-sm text-center'>{price}</h1>
        </div>
    </div>
  )
}

export default CategorysliderCard
