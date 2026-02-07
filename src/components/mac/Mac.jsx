import { IoBatteryChargingOutline, IoCardOutline, IoDiamondOutline, IoSettingsOutline } from 'react-icons/io5';
import "./Mac.css";
import { FaBluetoothB, FaMicrochip } from 'react-icons/fa6';

const Mac = () => {
  return (
    <div className="mac_back">
      <div className="container">
        <div className="mac_text">
          <h3>Apple MacBook Air M1 256GB 2023</h3>
          <div className="mac_options">
            <div className="mac_first">
              <IoSettingsOutline />
              <p>24 months warranty</p>
            </div>
            <div className="mac_second">
              <IoCardOutline /> <p>Interest installment payment</p>
            </div>
            <div className="mac_third">
              <IoDiamondOutline /> <p>100% original seal</p>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Mac;
