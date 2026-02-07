import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";
import f_logo from '../../assets/h_logo.png'

const Footer = () => {
  return (
    <div className="container">
      <div className="footer_section">

      
      <div className="instagram_icon ">
        
          <div className="instagram_card" >
            <FaInstagram style={{
              fontSize: '28px'
            }} />
            <p>@bestxstore</p>
          </div>
          <div className="instagram_card" >
            <FaInstagram style={{
              fontSize: '28px'
            }} />
            <p>@bestxstore</p>
          </div>
          <div className="instagram_card" >
            <FaInstagram style={{
              fontSize: '28px'
            }} />
            <p>@bestxstore</p>
          </div>
          <div className="instagram_card" >
            <FaInstagram style={{
              fontSize: '28px'
            }} />
            <p>@bestxstore</p>
          </div>
          <div className="instagram_card" >
            <FaInstagram style={{
              fontSize: '28px'
            }} />
            <p>@bestxstore</p>
          </div>
          
      
      </div>

        
      <footer className="footer_wrapper">
        <div className="footer_left">
          <img className='f_logo' src={f_logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices viverra id egestas
            pharetra fermentum.
          </p>

          <div className="footer_input">
            <input type="email" placeholder="Your email" />
            <button>Submit</button>
          </div>

          <div className="f_icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaTiktok />
          </div>
        </div>

        <div className="footer_nav">
          <h4>Customer Service</h4>
          <p>My Account</p>
          <p>Payments</p>
          <p>Terms of Use</p>
          <p>Refund Policy</p>
        </div>

        <div className="footer_links">
          <h4>About Us</h4>
          <p>Product</p>
          <p>Our Story</p>
          <p>Blog</p>
        </div>

        <div className="footer_links">
          <h4>Contact Us</h4>
          <p>+008 6542 118</p>
          <p>bestxstore@gmail.com</p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Footer;
