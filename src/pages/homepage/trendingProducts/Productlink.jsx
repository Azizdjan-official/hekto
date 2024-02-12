import React from 'react'

const Productlink = ({text,link,image}) => {
  return (
    <div  className='flex flex-col w-[50%]'>
        <div>
            <h1 className='text-[#151875] font-[600] text-2xl'>{text}</h1>
            <p className='text-[#FB2E86] underline'>{link}</p>
        </div>
        <div className='flex justify-end'>
            <img src={image} />
        </div>
    </div>
  )
}

export default Productlink
