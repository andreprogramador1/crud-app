import React,{ useState } from 'react'
import api from '../services/api' 

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

export const ModalMain = ({ modal, toggle, id, ondelete }) => {


  const handleDelete = async (id) => {
    console.log(id)
    const removed = await api.delete(`/users/${id}`)
    if(removed.status === 200) {
      ondelete(id)
    }
  }
  


  return (
    <>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Delete user</ModalHeader>
          <ModalBody>
            Delete user?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {toggle();  handleDelete(id)} }>Delete</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </>
  );
}




