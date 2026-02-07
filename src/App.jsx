import { Route, Routes } from 'react-router-dom'
import Arrivals from './components/arrivals/Arrivals'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Info from './components/info/Info'
import Sale from './components/sale/Sale'
import Shop from './components/shopp/Shop'
import Home from './components/pages/home/Home'

const h_ul = ['Product', 'Flash Sale', 'Best Sellers', 'Special Offers', 'Blog', 'About Us', 'Contact Us',]

const App = () => {
  return (
    <div>
      <Header h_nav={h_ul}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>

      

      
    </div>
  )
}

export default App
