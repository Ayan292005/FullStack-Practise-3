import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className='' style={{ backgroundColor: "#1e1e27" }} >
        <p className='text-white py-4 container text-xs'>FREE SHIPPING ON ALL U.S. ORDERS OVER $50</p>
      </div>

      <div className="navbar py-8 shadow-sm">
        <div className="container flex items-center justify-between">
          <p className='text-2xl font-bold'>COLO<span style={{ color: "#fe4c50" }}>SHOP</span></p>
          <div className='flex gap-3'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/add">AddProduct</NavLink>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default Navbar