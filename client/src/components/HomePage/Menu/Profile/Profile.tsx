import React from 'react';
import { Container } from '@chakra-ui/react';
import { Avatar} from '@chakra-ui/react'


const Profile = (props) => {
  const { currUser } = props;

  return (
    <Container centerContent={true}>
      <Avatar name={currUser.displayName} src={currUser.photoUrl} size='2xl'/>
      <br></br>
      <h2>{currUser.displayName}</h2>
    </Container>
  )
}

export default Profile;