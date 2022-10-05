import React from 'react';
import { connect } from 'react-redux';
import FriendsList from './FriendsList/FriendsList';


import styles from './Sidebar.module.css'

const SideBar = (props) => {
  const {sideBar} = props
  return (
    <div className={styles.sidebar} id="side-bar">
      <h2>{sideBar}</h2>
      {/* <h2>SIDEBAR</h2> */}
      <FriendsList />
    </div>
  )
}

interface stateInt {
  sideBar: string
}

export default connect((state:stateInt) => ({ sideBar: state.sideBar }), {})(SideBar);
