import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './utilitycomponents/Navbar'
const View = () => {
  return (
    <div>
      <Navbar/>
      {<Outlet/>}
      <h1>hi im for user View</h1>
    </div>
  )
}

export default View;
