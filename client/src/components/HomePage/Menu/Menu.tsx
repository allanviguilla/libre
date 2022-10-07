import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/currUser';
import { toggleSideBar } from '../../../redux/actions/sideBar';
import Profile from './Profile/Profile';
import styles from './Menu.module.css';
import { Button, List, ListItem, ListIcon, Link } from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';
import { MdGroups } from 'react-icons/md';
import { BsChatDots, BsCalendar3 } from 'react-icons/bs';
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineUserGroup, HiOutlineHome } from 'react-icons/hi';

const Menu = (props) => {
  const { currUser, logout, toggleSideBar } = props;

  function changeSideBar(e, sideBar){
    toggleSideBar(sideBar)
  }

  function handleLogout() {
    //when logout. reset the currUser in redux to null
    logout();
  }

  return (
    <div className={styles.menu} id="menu">
      <Profile currUser={currUser} />
      <br />
      <List spacing={3} >
        <ListItem>
          <ListIcon as={BsCalendar3} />
          <Link>Your Calendar</Link>
        </ListItem>
        <ListItem onClick={(e)=>{changeSideBar(e, 'overview')}}>
          <ListIcon as={HiOutlineHome} />
          <Link>Overview</Link>
        </ListItem>
        <ListItem onClick={(e)=>{changeSideBar(e, 'friends')}}>
          <ListIcon as={FiUsers} />
          <Link>Friends</Link>
        </ListItem>
        <ListItem onClick={(e)=>{changeSideBar(e, 'groups')}}>
          <ListIcon as={HiOutlineUserGroup} />
          <Link>Groups</Link>
        </ListItem>
        <ListItem onClick={(e)=>{changeSideBar(e, 'chats')}}>
          <ListIcon as={BsChatDots} />
          <Link>Chats</Link>
        </ListItem>
        <ListItem onClick={(e)=>{changeSideBar(e, 'notifications')}}>
          <ListIcon  as={IoNotificationsOutline} />
          <Link>Notifications</Link>
        </ListItem>
        <ListItem onClick={(e)=>{changeSideBar(e, 'account')}}>
          <ListIcon  as={IoSettingsOutline} />
          <Link>Account</Link>
        </ListItem>
        <ListItem onClick={handleLogout}>
          <ListIcon as={BiLogOut} />
          <Link>Logout</Link>
        </ListItem>
      </List>
    </div>
  )
}

// wrap ui component with redux

// map state
function mapStatetoProps(state) {
  const { currUser } = state;
  return { currUser };
};

// map methods to update the state
const mapDispatchToProps = { logout, toggleSideBar };

export default connect(mapStatetoProps, mapDispatchToProps)(Menu);