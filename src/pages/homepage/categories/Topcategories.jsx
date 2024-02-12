import React from 'react'
import { CategoryProducts } from '../../../data/data';
import Categoryslider from './../../../icons/Category-slider';
import CategorysliderCard from './Categoryslider';


const Topcategories = () => {
  return (
    <div>
        <h1 className='text-[#1A0B5B] text-5xl text-center my-5'>Top Categories</h1>
        <div className='w-[80%] mx-auto'>
            <div className="carousel w-full">
        <div id="ccard1" className="carousel-item w-full gap-3 flex justify-between">
            {CategoryProducts.map((item) => 
            <CategorysliderCard id={item.id} image={item.image} text={item.title}  price={item.price}/>
            )}
        </div> 
        <div id="ccard2" className="carousel-item w-full gap-3 flex justify-between">
        {CategoryProducts.map((item) => 
            <CategorysliderCard id={item.id} image={item.image} text={item.title}  price={item.price}/>
            )}
        </div> 
        <div id="ccard3" className="carousel-item w-full gap-3 flex justify-between">
        {CategoryProducts.map((item) => 
            <CategorysliderCard id={item.id} image={item.image} text={item.title}  price={item.price}/>
            )}
        </div> 
        
        </div> 
        <div className="flex justify-center w-full py-10 gap-2">
        <a href="#ccard1" ><Categoryslider/></a> 
        <a href="#ccard2" ><Categoryslider/></a> 
        <a href="#ccard3" ><Categoryslider/></a> 
        </div>
        </div>
    </div>
  )
}

export default Topcategories
