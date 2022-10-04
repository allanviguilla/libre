import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/currUser';

import styles from './Menu.module.css';

const Menu = (props) => {

  const { currUser, logout } = props;

  function handleLogout(){
    //when logout. reset the currUser in redux to null
    logout();
  }

  return (

    <div className={styles.menu} id="menu">
      <div>
        <h2>Menu</h2>
      </div>
      <div>
        { `Signed in as ${currUser.displayName}` }
        <br></br>
        {`Email: ${currUser.email}`}
        <br></br>
        <img src={currUser.photoUrl} alt="Profile Photo"></img>
        <br></br>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>

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
const mapDispatchToProps =  { logout };

export default connect(mapStatetoProps, mapDispatchToProps)(Menu);