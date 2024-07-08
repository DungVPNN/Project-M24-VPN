import "../../assets/Dashboard1.scss"
import { MdDashboard } from "react-icons/md";
import { MdDesktopWindows } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosHelpCircle } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";

export default function Dashboard() {
  return (
    <div className='main-dash'>
      <h1 className='Admin'>Admin</h1>
      <div className='admin-img'>
      <MdAdminPanelSettings className='img-1'/>
      </div>
      <div className='dash-header' >
          <div className='dash-icon'>
            <MdDashboard />
            <div>Dashboard</div>
          </div>
          <div className='dash-icon'>
          <MdDesktopWindows />
          <div>Products</div>
          </div>
          <div className='dash-icon'>
          <RiBillLine />
          <div>Orders</div>
          </div>
          <div className='dash-icon'>
          <BsPeopleFill />
          <div>Customers</div>
          </div>
      </div>
      <hr />
      <div className='dash-footer'>
        <div className='dash-icon'>
          <IoIosHelpCircle />
          <div>Help</div>
        </div>
        <div className='dash-icon'>
          <FaPhone />
          <div>Help</div>
        </div>
        <div className='dash-icon'>
          <MdLogout />
          <div>Log out</div>
        </div>
      </div>
    </div>
  )
}
