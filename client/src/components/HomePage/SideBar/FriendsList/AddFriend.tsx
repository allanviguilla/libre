import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddFriend:React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add Friend</DrawerHeader>

          <DrawerBody>
            <form id='new-friend-form'>
              Search by email : <input type="email"></input>
            </form>
          </DrawerBody>

          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default AddFriend