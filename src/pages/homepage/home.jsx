import React from 'react'
import Hero from './Hero'
import Featureproduct from './Featureproduct';
import Latesttab from './latestProducts/Latesttab';
import Shopexoffer from './shopexOffer/Shopexoffer';
import Uniquefeatures from './uniqueFeatures/Uniquefeatures';
import Trendingproduct from './trendingProducts/Trendingproduct';
import Topcategories from './categories/Topcategories';
import Subscribe from './GetSubscribe/Subscribe';
import Logosection from './LogoSection/Logosection';
import Latest from './LeatestBlog/Latest';

const Home = () => {
  return (
    <div>
        <Hero/>
        <Featureproduct/>
        <Latesttab/>
        <Shopexoffer/>
        <Uniquefeatures/>
        <Trendingproduct/>
        <Topcategories/>
        <Subscribe/>
        <Logosection/>
        <Latest/>

    </div>
  )
}

export default Home
