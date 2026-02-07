import React from 'react'
import Banner from '../../banner/Banner'
import Info from '../../info/Info'
import Sale from '../../sale/Sale'
import Arrivals from '../../arrivals/Arrivals'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Info/>
      <Sale/>
      <Arrivals/>
    </div>
  )
}

export default Home
