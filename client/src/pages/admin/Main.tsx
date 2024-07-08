import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import '../../assets/Main1.scss'

export default function Main() {
  return (
    <div className='admin-space'>
      <div className='main-admin'>
          <h2>Welcome back<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d51c7c141340827.6251ea13113ee.png" alt="" /></h2>
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
    </div>
  )
}
