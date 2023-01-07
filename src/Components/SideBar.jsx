import React from 'react'
import sb from '../css/sidebar.module.css'
import { CiViewList } from 'react-icons/ci'
import { FaHome, FaArchive, FaTrash } from "react-icons/fa"

function SideBar() {

  return (
    <aside id="sidebar" className={sb.SideBar}>
      <div className={sb.SideBar__Header}>
        <h1>
          <CiViewList />
          <span className="Title">Todo App</span>
        </h1>
      </div>
      <div className={sb.SideBar__Body}>
        <ul>
          <li>
            <FaHome />
            &nbsp;
            <span>Home</span>
          </li>
          <li>
            <FaArchive />
            &nbsp;
            <span>Archive</span>
          </li>
          <li>
            <FaTrash />&nbsp;
            <span>Trash</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar