import React from 'react'

const FooterCard = ({title,link1,link2,link3,link4,link5,}) => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-[#000000] text-2xl'><strong>{title}</strong></h1>

      <div className='flex flex-col gap-3'>
        <p className='text-[#8A8FB9] text-lg font-[400] '>{link1}</p>
        <p className='text-[#8A8FB9] text-lg font-[400] '>{link2}</p>
        <p className='text-[#8A8FB9] text-lg font-[400] '>{link3}</p>
        <p className='text-[#8A8FB9] text-lg font-[400] '>{link4}</p>
        <p className='text-[#8A8FB9] text-lg font-[400] '>{link5}</p>
      </div>
    </div>
  )
}

export default FooterCard
