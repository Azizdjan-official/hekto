import React from 'react'
import Featurecards from './Featurecards'
import Featuredslidericon from './../../icons/Featured-slider-icon';
import hero1 from "../../images/heroPage.png"
import { FeaturedProducts } from './../../data/data';

const Featureproduct = () => {
  return (
    <div>
        <h1 className='text-[#1A0B5B] text-5xl text-center my-5'>Featured Products</h1>
        <div className='w-[80%] mx-auto'>
            <div className="carousel w-full">
        <div id="fcard1" className="carousel-item w-full gap-3 flex justify-between">
            {FeaturedProducts.map((item) => 
            <Featurecards id={item.id} image={item.image} text={item.title} code={item.code} price={item.price}/>
            )}
        </div> 
        <div id="fcard2" className="carousel-item w-full gap-3 flex justify-between">
        {FeaturedProducts.map((item) => 
            <Featurecards id={item.id} image={item.image} text={item.title} code={item.code} price={item.price}/>
            )}
        </div> 
        <div id="fcard3" className="carousel-item w-full gap-3 flex justify-between">
        {FeaturedProducts.map((item) => 
            <Featurecards id={item.id} image={item.image} text={item.title} code={item.code} price={item.price}/>
            )}
        </div> 
        <div id="fcard4" className="carousel-item w-full gap-3 flex justify-between">
        {FeaturedProducts.map((item) => 
            <Featurecards id={item.id} image={item.image} text={item.title} code={item.code} price={item.price}/>
            )}
        </div>
        </div> 
        <div className="flex justify-center w-full py-10 gap-2">
        <a href="#fcard1" ><Featuredslidericon/></a> 
        <a href="#fcard2" ><Featuredslidericon/></a> 
        <a href="#fcard3" ><Featuredslidericon/></a> 
        <a href="#fcard4" ><Featuredslidericon/></a>
        </div>
        </div>
    </div>
  )
}

export default Featureproduct
