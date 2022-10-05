import React from 'react';
import { connect } from 'react-redux';
import FriendsList from './FriendsList/FriendsList';
import styles from './Sidebar.module.css'

const SideBar = (props) => {
  const { sideBar } = props

  return (
    <div className={styles.sidebar} id="side-bar">
      {sideBar === 'friends' ?
        <FriendsList /> :
        sideBar === 'groups' ?
          <h2>groups</h2> :
          sideBar === 'chats' ?
            <h2>chats</h2> :
            sideBar === 'notifications' ?
              <h2>notifications</h2> :
              sideBar === 'account' ?
                <h2>account</h2> : null
      }

    </div>
  )
}

interface stateInt {
  sideBar: string
}

export default connect((state: stateInt) => ({ sideBar: state.sideBar }), {})(SideBar);
