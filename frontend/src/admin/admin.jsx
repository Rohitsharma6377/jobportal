import React from 'react'
import { Outlet } from 'react-router-dom';

const admin = () => {
  return (
    <div>
        <h1>hi im admin</h1>
      {<Outlet/>}
    </div>
  )
}

export default admin;
