import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './utilitycomponents/Navbar'
const View = () => {
  return (
    <div>
      <Navbar/>
      {<Outlet/>}
    </div>
  )
}

export default View;
