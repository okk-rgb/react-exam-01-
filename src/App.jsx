import { Route, Routes } from 'react-router-dom'
import Arrivals from './components/arrivals/Arrivals'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Info from './components/info/Info'
import Sale from './components/sale/Sale'

import Home from './components/pages/home/Home'
import Footer from './components/footer/Footer'
import Shop from './components/shop/Shop'

const h_ul = ['Product', 'Flash Sale', 'Best Sellers', 'Special Offers', 'Blog', 'About Us', 'Contact Us',]

const App = () => {
  return (
    <div>
      <Header h_nav={h_ul}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>

      <Footer/>
      

      
    </div>
  )
}

export default App
