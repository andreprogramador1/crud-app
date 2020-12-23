import React from 'react'

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


export const Formu = ({ modal2, toggle2 }) => {
  return (
    <>
        <Modal isOpen={modal2} toggle={toggle2}>
          <ModalHeader toggle={toggle2}>Form</ModalHeader>
          <ModalBody>

            <Form>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="text" name="Name" id="exampleEmail" placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">LastName</Label>
                <Input type="text" name="LastName" id="examplePassword" placeholder="LastName" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Occupation</Label>
                <Input type="text" name="Occupation" id="exampleEmail" placeholder="Occupation" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Phone</Label>
                <Input type="password" name="Phone" id="examplePassword" placeholder="Phone" />
              </FormGroup>
            </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" >Submit</Button>{' '}
            <Button color="secondary" onClick={toggle2}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </>
  );
}