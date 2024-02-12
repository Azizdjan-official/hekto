import React from 'react'
import Hektologo from './../../icons/Hektologo';
import { FooterLinks } from '../../data/data';
import FooterCard from './FooterCard';

const Footer = () => {
  return (
    <div>
      <div className='w-[80%] mx-auto py-8 flex justify-between'>
          <div className='flex flex-col gap-4 w-[25%]'>
             <Hektologo/>
             <label className='flex' >
                <input className='w-[200px] h-[39px] outline-none' type="text" placeholder='Enter Email Address' />
                <button className='bg-[#FB2E86] w-[105px] h-[39px] text-white '>Sign Up</button>
             </label>
             <p className='text-[#8A8FB9] text-lg font-[400] '>Contact Info</p>
             <p className='text-[#8A8FB9] text-lg font-[400] '>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
          {FooterLinks.map((item) => <FooterCard title={item.title}link1={item.link1}link2={item.link2}link3={item.link3}link4={item.link4}link5={item.link5}/>)}
      </div>
    </div>
  )
}

export default Footer
