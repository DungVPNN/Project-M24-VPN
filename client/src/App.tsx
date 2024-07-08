import React from 'react'
import MainIndex from './pages/admin/MainIndex'
import { Route ,Routes } from 'react-router-dom'
import Form from './pages/shop/Form'
export default function App() {
  return (
    <>
      <div className='main'>
      <Routes>
        <Route path='/login' element={<Form></Form>}></Route>
        <Route path='/admin' element={<MainIndex></MainIndex>}></Route>
      </Routes>
      
      
    </div>
    </>
    
  )
}
