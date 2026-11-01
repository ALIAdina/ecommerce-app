import React, { useContext } from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import { ShopContext } from '../context/ShopContext'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewLittreBox from '../components/NewLittreBox'

const Home = () => {
    const {products}=useContext(ShopContext);
  return (
    <div >
      <Hero />
      <LatestCollection /> 
      <BestSeller/> 
      <OurPolicy />
      <NewLittreBox />
      
    </div>
  )
}

export default Home
