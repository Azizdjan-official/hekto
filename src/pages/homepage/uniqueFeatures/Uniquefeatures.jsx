import React from 'react'
import sofaImg from "../../../images/UniqueSofa.png"
import Redbutton from './../../../icons/Redbutton';
import Bluebutton from './../../../icons/Bluebutton';
import Violetbutton from './../../../icons/Violetbutton';

const Uniquefeatures = () => {
  return (
    <div className='bg-[#F1F0FF] my-10'>
        <div className='w-[80%] mx-auto flex items-center '>
            <div className='w-[50%]'>
                <img src={sofaImg}  />
            </div>
            <div className='flex flex-col gap-4 w-[50%]  '>
                <h1>Unique Features Of leatest &  Trending Poducts</h1>
                <span className='flex gap-2 items-center'>
                    <Redbutton/>
                    <p>All frames constructed with hardwood solids and laminates</p>
                </span>
                <span className='flex gap-2 items-center'>
                    <Bluebutton/>
                    <p>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
                </span>
                <span className='flex gap-2 items-center'>
                    <Violetbutton/>
                    <p>Arms, backs and seats are structurally reinforced</p>
                </span>
                <div className='flex gap-3'>
                    <button className='bg-[#FB2E86] text-white capitalize w-[157px] h-[45px] '>Add To Cart</button>
                    <span className='text-[#151875] text-sm flex flex-col justify-between'> <strong>  B&B Italian Sofa</strong>$32.00</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Uniquefeatures
