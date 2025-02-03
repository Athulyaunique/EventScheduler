import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'


function Schedulerapp({events,fetchData}) {
  
  return (
    <div>
    
        <Navbar></Navbar>
        <div className="container">
          <div className="row" style={{}}>
            <div className="col-md-4" style={{}}>
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-8" style={{}}>
             <Outlet></Outlet>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Schedulerapp