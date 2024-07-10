import "../../assets/Dashboard1.scss"
import "../../assets/Customers.scss"
import { MdDashboard } from "react-icons/md";
import { MdDesktopWindows } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosHelpCircle } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../store/reducer/userReducer";
import { User } from "../../interfaces";

export default function Customers() {
const dispatch = useDispatch();
const data: any = useSelector((state: any) => {
  return state.userReducer
})

useEffect(() => {
  dispatch(getAllUser());
}, [])
  return (
    <div className="form-all">
      <div className='main-dash'>
        <h1 className='Admin'>Admin</h1>
        <div className='admin-img'>
          <MdAdminPanelSettings className='img-1' />
        </div>
        <div className='dash-header' >
          <NavLink to='/Dashboard' className='dash-icon'>
              <MdDashboard />
              <div>Dashboard</div>
          </NavLink>

          <NavLink to='/Products' className='dash-icon'>
              <MdDesktopWindows />
              <div>Products</div>
          </NavLink>
          <NavLink to='/Orders' className='dash-icon'>
              <RiBillLine />
              <div>Orders</div>
          </NavLink>
          <NavLink to='/Customers' className='dash-icon'>
              <BsPeopleFill />
              <div>Customers</div>
          </NavLink>
        </div>
        <hr />
        <div className='dash-footer'>
          <div className='dash-icon'>
            <IoIosHelpCircle />
            <div>Help</div>
          </div>
          <div className='dash-icon'>
            <FaPhone />
            <div>Contact</div>
          </div>
          <div className='dash-icon'>
            <MdLogout />
            <div>Log out</div>
          </div>
        </div>
      </div>
      <div className='admin-space'>
        <div className='main-admin'>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d51c7c141340827.6251ea13113ee.png" alt="" />
          <div className='main-main'>
            <div className='main-search'>
              <IoSearch className='icon-search' />
              <input type="text" placeholder='Search' />
            </div>
            <div className='main-icon'>
              <FaRegBell className='icon-bell' />
            </div>
            <div className='main-account'>
              <img src="https://png.pngtree.com/element_our/png/20181016/chicken-cartoon-illustration-png_138111.jpg" alt="Account" />
              <span>DUNGVP9393</span>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <div className="header">
            <h1>Customers</h1>
      </div>
        <div className="user-table">
          <table className="user-table1">
            <thead className="use-thead">
              <tr className="user-tr">
                <th className="user-th">STT</th>
                <th className="user-th">Name</th>
                <th className="user-th">Email</th>
                <th className="user-th">Date</th>
                <th className="user-th">Action</th>
              </tr>
            </thead>
            <tbody className="user-body">
              {data.users.map((item: User, index: number) => {
                return (
                  <tr className="user-tr1">
                    <td className="user-td">{index + 1}</td>
                    <td className="user-td">{item.name}</td>
                    <td className="user-td">{item.email}</td>
                    <td className="user-td">{item.date}</td>
                    <td className="user-td">{item.status? 'Đang hoạt động' : 'Ngừng hoạt động'}</td>
                  </tr>
                )
              })
                
              }
            </tbody>
          </table>
        </div>
        </div>
    </div>
  )
}
