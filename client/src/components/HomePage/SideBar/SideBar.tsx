import React from 'react'
import Notifications from './Notifications'

import styles from './Sidebar.module.css'

const SideBar = () => {
  return (
    <div className={styles.sidebar} id="side-bar">
      <h2>SIDEBAR</h2>
      <Notifications />
    </div>
  )
}

export default SideBar;
