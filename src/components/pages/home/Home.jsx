import React from 'react'
import Banner from '../../banner/Banner'
import Info from '../../info/Info'
import Sale from '../../sale/Sale'
import Arrivals from '../../arrivals/Arrivals'
import { FaStar, FaStarAndCrescent } from 'react-icons/fa'
import Mac from '../../mac/Mac'

const a_cards = [
  {
    url: 'https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Air-13-Inch-22502.jpg',
    price: '$25.00',
    description: 'Macbook Air 2020 13 inch Apple M1 -  8GB RAM - 256GB SSD',
    ratings:  (
      <>
      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    )
  },
  {
    url: 'https://powermaccenter.com/cdn/shop/files/Airpods_PDP_Image_Position-8__GBEN.jpg?v=1689770675&width=823',
    price: '$45.00',
    description: 'AirPods (3rd generation) with Lightning Charging Case',
    ratings:  (
      <>
      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    )
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5N3VQoBL3yZ0kGIFqfur2w1srPQ1QWdQzhg&s',
    price: '$825.00',
    description: 'Apple Iphone 14 - 128GB Midnight - Genuine Product',
    ratings:  (
      <>
      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    )
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWMh7gCPrTND5dUrT5_oPPk0UYjHlRgphQA&s',
    price: '$165.00',
    description: 'Canon Eos 450D Lens Kit 18-55Mm F/3.5-5.6 Is',
    ratings:  (
      <>
      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    )
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJeebNofpT3uTTN8QdpKh8wCQ3BeovYfHrQ&s',
    price: '$425.00',
    description: 'Apple iPad Pro 11 inch M1 2021 Wifi 128GB|8GB',
    ratings:  (
      <>
      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    )
  },
  {
    url: 'https://media.zid.store/ae917f0e-051a-4216-9cc8-1c14a9e36b64/b21d22ee-949f-4c7e-aca7-70d9626e6399.png',
    price: '$465.00',
    description: 'Smart Tivi Samsung 4K 75 inch 75AU7000 UHD',
    ratings:  (
      <>
      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    )
  },
  {
    url: 'https://sony.scene7.com/is/image/sonyglobalsolutions/WH-CH520_Product_intro_Pink_05_M?$productIntroPlatemobile$&fmt=png-alpha',
    price: '$105.00',
    description: 'JBL WH-CH520 Wireless Bluetooth Earphones Headset',
    ratings:  (
      <>
      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    )
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS8G7UjHdjmfHeALIW1SsKQdsltmzb_UMlJg&s',
    price: '$205.00',
    description: 'Apple Watch Series 8 GPS - Cellular, Aluminum Case',
    ratings:  (
      <>
      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    )
  }
]

const Home = () => {
  return (
    <div>
      <Banner/>
      <Info/>
      <Sale/>
      <Arrivals a_cards={a_cards}/>
      <Mac/>
    </div>
  )
}

export default Home
