import './Header.css'
import { Link } from 'react-router-dom'
import h_logo from '../../assets/h_logo.png'
import { IoSearch } from 'react-icons/io5'
import { CiHeart, CiUser } from 'react-icons/ci'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaMapMarked } from 'react-icons/fa'

const Header = ({ h_nav }) => {
  return (
    <header className='container'>
      <div className="top_part">
      <Link className='Logo' to={'/'} ><img src={h_logo} alt="" /></Link>

      <div className="top_input">
        <input className='t_input' type="text"  placeholder='Search...'/>
        
        <select className='top_select' name="All Categories" id="">
          <option value="">All Categories</option>
        </select>

      </div>
      <div className="input_icon">
        <IoSearch/>
      </div>

      <div className="top_icons">
        <CiHeart/>
        <FaArrowRightArrowLeft/>
        <MdOutlineShoppingCart/>
        <CiUser/>
      </div>

      </div>

      <div className="bottom_part">
        <select className='hb_select' name="" id="">
          <option value="">All Categories</option>
        </select>

      <nav  className='h_navbar'>
        <ul>
          {
            h_nav.map((item, index) => {
              return(
                <li key={index}>
                  <Link to={'/shop'}>{item}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>


      <div className="bottom_stores">
        <div className="bs_icon">
        <FaMapMarked/>
        </div>
        <div className="bstores_text">
        <p className='h_p1'>Stores Near You</p>
        <p className='h_p2'>20 Stores Nationwide</p>
        </div>
      </div>

      </div>

    </header>
  )
}

export default Header