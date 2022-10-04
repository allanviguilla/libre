import React from 'react';
import { connect } from 'react-redux';
import { signin, logout } from '../../redux/actions/currUser';


// define the UI component
function Example(props) {
  // get thecurrUser state and methods from redux via props
  const { currUser, signin, logout } = props;

  function handleSignin(){
    //when login. pass the user info to reudx
    //now login as a dummy user
    const dummyUser = {displayName:'Tom', email:'tom@gmail.com'};
    signin(dummyUser);
  }

  function handleLogout(){
    //when logout. reset the currUser in redux to null
    logout();
  }

  return (
    <div>
      <h2>
        { currUser ? `Current User Info: ${currUser.displayName}`:'Please login'}
      </h2>
      <button onClick={handleSignin}>signin</button><br></br>
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
const mapDispatchToProps =  {signin, logout}

export default connect(mapStatetoProps, mapDispatchToProps)(Example)