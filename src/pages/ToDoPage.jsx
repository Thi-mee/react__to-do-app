import React from 'react'
import SideBar from '../Components/SideBar'
import {Outlet} from 'react-router-dom'
import td from'../css/todopage.module.css'


function ToDoPage() {
  return (
    <div className={td.tooodo}>
      <SideBar />
      <main className={td.Main}>
        <Outlet />
      </main>
    </div>
  )
}

export default ToDoPage