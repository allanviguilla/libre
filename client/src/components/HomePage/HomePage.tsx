import React from 'react'
import Calendar from './Calendar/Calendar'
import Menu from './Menu/Menu'
import SideBar from './SideBar/SideBar'

import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homepage} id="home-page">
      <Menu />
      <Calendar />
      <SideBar />
    </div>
  )
}

export default HomePage
