import { connect } from 'react-redux';
import { login, logout } from '../../redux/actions/currUser'
import React from 'react';

// define the UI component
function Example(props) {
  // get thecurrUser state and methods from redux via props
  const { currUser, login, logout } = props;

  function handleLogin(){
    //when login. pass the user info to reudx
    //now login as a dummy user
    const dummyUser = {name:'Tom', email:'tom@gmail.com'}
    login(dummyUser)
  }

  function handleLogout(){
    //when logout. reset the currUser in redux to null
    logout()
  }

  return (
    <div>
      <h2>
        { currUser ? `Current User Info: ${currUser.name}`:'Please login'}
      </h2>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
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
const mapDispatchToProps =  {login,logout}

export default connect(mapStatetoProps, mapDispatchToProps)(Example)