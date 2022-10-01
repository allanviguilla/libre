import React from 'react'
import Calendar from './Calendar/Calendar'
import Menu from './Menu/Menu'
import SideBar from './SideBar/SideBar'

const HomePage = () => {
  return (
    <div id="home-page">
      <h2>Libre</h2>
      <Menu />
      <Calendar />
      <SideBar />
    </div>
  )
}

export default HomePage
