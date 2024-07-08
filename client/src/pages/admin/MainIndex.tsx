import React from 'react'
import Main from './Main'
import Dashboard from './Dashboard'
import '../../assets/MainIndex.scss'
export default function MainIndex() {
  return (
    <div className='main-index'>
        <Dashboard></Dashboard>
        <Main></Main>
    </div>
  )
}
