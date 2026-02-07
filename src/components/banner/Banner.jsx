import { FaApple, FaBluetoothB, FaMicrochip } from 'react-icons/fa6'
import './Banner.css'
import { IoBatteryChargingOutline } from 'react-icons/io5'
import { CiPlay1 } from 'react-icons/ci'

const Banner = () => {
  return (
  <div className="banner_wrapper">
    <div className='container'>
      <div className="banner_text"> 
        <FaApple className='banner_icon'/>
        <p className='banner_p1'>Bluetooth headphone</p>
        <h2>AirPods Pro 2023</h2>
        <p className='banner_p2'>Delivers vivid sound quality with outstanding 3-D sound reproduction</p>
        <div className="banner_border">
          <div className="first"><IoBatteryChargingOutline/> <p>Battery capacity 6 hours - charging box 30 hours</p></div>
          <div className="second"><FaBluetoothB/> <p>Bluetooth 5.3</p></div>
          <div className="third"><FaMicrochip/> <p>Chip H2</p></div>
        </div>
        <button className='banner_btn1'>Shop Now</button>
        <button className='banner_btn2'><CiPlay1 /> Video</button>
      </div>
      </div>
    </div>
  )
}

export default Banner
