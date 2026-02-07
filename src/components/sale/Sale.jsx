import flash_img from '../../assets/flas2_.png'
import { FaStar } from 'react-icons/fa'
import './Sale.css'
import { Link } from 'react-router-dom'

const Sale = () => {
  return (
    <div className='container'>
      <div className="flash_sales">
        <h3>Flash Sale</h3>
        <div className="flash_cards">
        <div className="flash_first">
          <div className="flash_img">

          <img src="https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_UF894,1000_QL80_.jpg" alt="card_img" />
          
          </div>

          <div className="flash_text">
            <p>MX MASTER 3S Performance Wireless Mouse</p>
            <p>$29.99</p>
            <div className="flash_icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
        <div className="flash_second">
          <div className="flash_img">
          <img src={flash_img} alt="card_img" />
    </div>
          <div className="flash_text">
            <p>MX MASTER 3S Performance Wireless Mouse</p>
            <p>$29.99</p>
            <div className="flash_icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="categories_text">
        <h3></h3>
      </div>
      <div className="categories">
        
        <div className="c_1">
          <img src={'/'} alt="" />
          <div className="c1_text">
          <h3>Smartphones</h3>
          <p>iPhone</p>
          <p>iPhone</p>
          <p>iPhone</p>
          <p>iPhone</p>

          <Link className='link' to={'/'}>Add Smartphone  </Link>
          </div>
        </div>
        <div className="c_2">
          <img src={'/'} alt="" />
          <div className="c1_text">
          <h3>Smartphones</h3>
          <p>iPhone</p>
          <p>iPhone</p>
          <p>iPhone</p>
          <p>iPhone</p>

          <Link className='link' to={'/'}>Add Smartphone  </Link>
          </div>
        </div>
        <div className="c_3">
          <img src={'/'} alt="" />
          <div className="c1_text">
          <h3>Smartphones</h3>
          <p>iPhone</p>
          <p>iPhone</p>
          <p>iPhone</p>
          <p>iPhone</p>

          <Link className='link' to={'/'}>Add Smartphone  </Link>
          </div>
        </div>
        <div className="c_4">
          <img src={'/'} alt="" />
          <div className="c1_text">
          <h3>Smartphones</h3>
          <p>iPhone</p>
          <p>iPhone</p>
          <p>iPhone</p>
          <p>iPhone</p>

          <Link className='link' to={'/'}>Add Smartphone  </Link>
          </div>
        </div>
        <div className="c_5">
          <img src={'/'} alt="" />
          <div className="c1_text">
          <h3>Smartphones</h3>
          <p>iPhone</p>
          <p>iPhone</p>
          <p>iPhone</p>
          <p>iPhone</p>

          <Link className='link' to={'/'}>Add Smartphone  </Link>
          </div>
        </div>
        <div className="c_6">
          <img src={'/'} alt="" />
          <div className="c1_text">
          <h3>Smartphones</h3>
          <p>iPhone</p>
          <p>iPhone</p>
          <p>iPhone</p>
          <p>iPhone</p>

          <Link className='link' to={'/'}>Add Smartphone  </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sale
