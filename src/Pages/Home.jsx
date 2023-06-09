import React from 'react'
import NavBar from './common/NavBar'
import Hero from './Hero'
import Beneficiary from './Beneficiary'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <NavBar/>
        <Hero/>
        <Beneficiary/>
    </div>
  )
}

export default Home