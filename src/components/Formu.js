import React,{useState, useEffect} from 'react'
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

const initialValue = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  occupation: '',
  phone: '',
}



export const Formu = ({ modal2, toggle2, id }) => {

  const [values, setValues] = useState(id ? null: initialValue)
  console.log(id)

  useEffect(() => {
      if(id) {
        api.get(`/users/${id}`)
        .then((response) => {
          setValues(response.data)
        })
      }
  },[id]);


  function onChange(e) {
    const { name, value } = e.target
    //console.log({name, value})
    setValues({...values, [name]: value})
  }

  function onSubmit(e) {
    e.preventDefault();

    const method = id ? 'patch' : 'post'
    const url = id
     ? `http://localhost:3333/users/${id}`
     : `http://localhost:3333/users/`
    api[method](url, values)
    .then((response) => {
      console.log(response)
    })
   
  }

  

  return (
    <>
        <Modal isOpen={modal2} toggle={toggle2}>
          <ModalHeader toggle={toggle2}>Form</ModalHeader>
          <ModalBody>

            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Name" onChange={onChange} value={values.name}/>
              </FormGroup>
              <FormGroup>
                <Label for="LastName">LastName</Label>
                <Input type="text" name="lastName" id="LastName" placeholder="LastName" onChange={onChange} value={values.lastName}/>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" onChange={onChange} value={values.email}/>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Password" onChange={onChange} value={values.password}/>
              </FormGroup>
              <FormGroup>
                <Label for="Occupation">Occupation</Label>
                <Input type="text" name="occupation" id="Occupation" placeholder="Occupation" onChange={onChange} value={values.occupation}/>
              </FormGroup>
              <FormGroup>
                <Label for="Phone">Phone</Label>
                <Input type="password" name="phone" id="Phone" placeholder="Phone" onChange={onChange} value={values.phone}/>
              </FormGroup>

              <Button type='submit' color="primary" onClick={() => {toggle2();} } >Submit</Button>{' '}
              <Button color="secondary" onClick={toggle2}>Cancel</Button>
            </Form>

          </ModalBody>
          
        </Modal>
    </>
  );
}