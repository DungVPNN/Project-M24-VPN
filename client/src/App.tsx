import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import Dashboard from './pages/admin/Dashboard'
import Form from './pages/shop/Form'
import Products from './pages/admin/Products'
import Orders from './pages/admin/Orders'
import Customers from './pages/admin/Customers'
export default function App() {
  return (
    <>
      <div className='main'>
      <Routes>
        <Route path='/login' element={<Form></Form>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/customers' element={<Customers></Customers>}></Route>
      </Routes>
      
      
    </div>
    </>
    
  )
}
