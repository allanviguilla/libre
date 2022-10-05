import React from 'react'
import FriendsList from './FriendsList/FriendsList';

import styles from './Sidebar.module.css'

const SideBar = () => {
  return (
    <div className={styles.sidebar} id="side-bar">
      {/* <h2>SIDEBAR</h2> */}
      <FriendsList />
    </div>
  )
}

export default SideBar;
