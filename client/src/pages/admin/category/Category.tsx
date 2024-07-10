// import "../../assets/Dashboard1.scss"
// import { MdDashboard } from "react-icons/md";
// import { MdDesktopWindows } from "react-icons/md";
// import { RiBillLine } from "react-icons/ri";
// import { BsPeopleFill } from "react-icons/bs";
// import { IoIosHelpCircle } from "react-icons/io";
// import { FaPhone } from "react-icons/fa6";
// import { MdLogout } from "react-icons/md";
// import { MdAdminPanelSettings } from "react-icons/md";
// import { IoSearch } from "react-icons/io5";
// import { FaRegBell } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import { NavLink } from "react-router-dom";
// import { deleteCategory, getAllCategory } from "../../../store/reducer/categoryReducer";
// import { SetStateAction, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Category } from "../../../interfaces";
// import AddCategory from "./AddCategory";

// export default function Category() {
// const Category = () => {
//     const data = useSelector(state => state);
//     console.log(data, data);
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(getAllCategory());
//     }, []);
//     const [statusCategory, setStatusCategory] = useState(true);
//     const [statusEditCategory, setStatusEditCategory] = useState(true);
//     const [currentCategory, setCurrentCategory] = useState(null);

//     const onclickAddCategory = () => {
//         setStatusCategory(false);
//     };
//     const backCategory = () => {
//         setStatusCategory(true);
//     };

//     // hàm xóa
//     const handleDeleteCategory = (id: any) => {
//         dispatch(deleteCategory(id));
//     };
//     // cập nhập
//     const handleUpdateCategory = (item: any) => {
//         setStatusEditCategory(false);
//         setCurrentCategory(item);
//     };
//     const backEditCategory = () => {
//         setStatusEditCategory(true);
//         setCurrentCategory(null);
//     };

//     // đăng xuất admin

// return (
// <div className="form-all">
//     <div className='main-dash'>
//     <h1 className='Admin'>Admin</h1>
//     <div className='admin-img'>
//         <MdAdminPanelSettings className='img-1' />
//     </div>
//     <div className='dash-header' >
//         <NavLink to='/Dashboard' className='dash-icon'>
//             <MdDashboard />
//             <div>Dashboard</div>
//         </NavLink>

//         <NavLink to='/Products' className='dash-icon'>
//             <MdDesktopWindows />
//             <div>Products</div>
//         </NavLink>
//         <NavLink to='/Orders' className='dash-icon'>
//             <RiBillLine />
//             <div>Orders</div>
//         </NavLink>
//         <NavLink to='/Customers' className='dash-icon'>
//             <BsPeopleFill />
//             <div>Customers</div>
//         </NavLink>
//     </div>
//     <hr />
//     <div className='dash-footer'>
//         <div className='dash-icon'>
//         <IoIosHelpCircle />
//         <div>Help</div>
//         </div>
//         <div className='dash-icon'>
//         <FaPhone />
//         <div>Contact</div>
//         </div>
//         <div className='dash-icon'>
//         <MdLogout />
//         <div>Log out</div>
//         </div>
//     </div>
//     </div>
//     <div className='admin-space'>
//     <div className='main-admin'>
//         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d51c7c141340827.6251ea13113ee.png" alt="" />
//         <div className='main-main'>
//         <div className='main-search'>
//             <IoSearch className='icon-search' />
//             <input type="text" placeholder='Search' />
//         </div>
//         <div className='main-icon'>
//             <FaRegBell className='icon-bell' />
//         </div>
//         <div className='main-account'>
//             <img src="https://png.pngtree.com/element_our/png/20181016/chicken-cartoon-illustration-png_138111.jpg" alt="Account" />
//             <span>DUNGVP9393</span>
//             <IoIosArrowDown />
//         </div>
//         </div>
//     </div>
//     <div className="product-management">
//                 <div className="header">
//                     <h1>Category</h1>
//                 </div>
//                 <div style={{ display: `${statusCategory&&statusEditCategory ? "block" : "none"}`}} className="product-management-render">
//                     <button onClick={onclickAddCategory} className="add-button">+ Add Category</button>
//                     <div className="product-table">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>ID</th>
//                                     <th>Loại</th>
//                                     <th>Trạng thái</th>
//                                     <th>Đặc điểm</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data.categoryReducer.classify.map((item: SetStateAction<null>) => (
//                                     <tr key={item.id}>
//                                         <td>{item.id}</td>
//                                         <td>{item.name}</td>
//                                         <td>{item.status ? "Đang hoạt động" : "Đã dừng"}</td>
//                                         <td>{item.description}</td>
//                                         <td>
//                                             <button onClick={() => handleUpdateCategory(item)} className="action-button edit">Edit</button>
//                                             <button onClick={() => handleDeleteCategory(item.id)} className="action-button delete">Delete</button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <div className="pagination">
//                             <button>1</button>
//                             <button>2</button>
//                             <button>3</button>
//                             <button>4</button>
//                             <button>5</button>
//                             <span>...</span>
//                             <button>20</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{ display: `${statusCategory ? "none" : "block"}` }}>
//                     <AddCategory backCategory={backCategory} />
//                 </div>
//                 <div style={{ display: `${statusEditCategory ? "none" : "block"}` }}>
//                     <EditCategory backEditCategory={backEditCategory} currentCategory={currentCategory} />
//                 </div>
//             </div>
//     </div>
// </div>
// )
// }
// }