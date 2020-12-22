import React,{ useState } from 'react'

import {
  Form,
  FormGroup, 
  Label, 
  Input, 
  FormText,
  Modal ,
  ModalHeader, 
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap'

export const ModalMain = ({ modal, toggle }) => {

  
 


  return (
    <>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Delete user?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </>
  );
}




