import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../component/navbar/NavBar'

export default function SharedLayout() {
  return (
    <div className="sharedlayou">
        <NavBar/>
        <Outlet />
    </div>
  )
}
