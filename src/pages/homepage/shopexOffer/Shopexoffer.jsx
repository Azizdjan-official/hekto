import React from 'react'
import ShopexCards from './ShopexCards';
import { ShopexOffer } from '../../../data/data';

const Shopexoffer = () => {
  return (
    <div>
      <h1 className='text-[#1A0B5B] text-5xl text-center my-5'>What Shopex Offer!</h1>
      <div className='flex gap-3 justify-between w-[80%] mx-auto'>
        {ShopexOffer.map((item) => <ShopexCards image={item.image} text={item.support} lorem={item.lorem}/>)}
      </div>
    </div>
  )
}

export default Shopexoffer
