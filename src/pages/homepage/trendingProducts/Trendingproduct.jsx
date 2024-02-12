import React from 'react'
import Trendingcards from './Trendingcards'
import { TrendingProducts, TrendingProductsLinks, TrendingProductsLinks2 } from '../../../data/data'
import Productlink from './Productlink'
import Trendinglastproductcard from './Trendinglastproductcard';

const Trendingproduct = () => {
  return (
    <div>
        <h1 className='text-[#1A0B5B] text-5xl text-center my-5'>Trending Products</h1>
      <div className='w-[80%] mx-auto flex justify-between '>
        {TrendingProducts.map((item) => <Trendingcards image={item.image}title={item.title}price={item.price}priceTag={item.priceTag}/>)}
      </div>
      <div className='w-[80%] mx-auto my-10 flex justify-between'>
            <div className='flex gap-2 w-[60%] '>
                {TrendingProductsLinks.map((item)=> <Productlink text={item.title} link={item.link} image={item.image} />)}
            </div>
            <div className='flex flex-col  gap-2 w-[39%] '>
                {TrendingProductsLinks2.map((item) => <Trendinglastproductcard image={item.image}title={item.title}price={item.price}/> )}
                
            </div>
      </div>
    </div>
  )
}

export default Trendingproduct
