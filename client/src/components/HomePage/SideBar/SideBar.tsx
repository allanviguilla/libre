import React from 'react';
import { connect } from 'react-redux';

import styles from './Sidebar.module.css'

const SideBar = (props) => {
  const {sideBar} = props
  return (
    <div className={styles.sidebar} id="side-bar">
      <h2>{sideBar}</h2>
    </div>
  )
}

interface stateInt {
  sideBar: string
}

export default connect((state:stateInt) => ({ sideBar: state.sideBar }), {})(SideBar);
