import React,{useState, useEffect} from 'react'
import api from '../services/api'
import { useForm, Controller  } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup' 
import * as yup from "yup";

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
  Button,
} from 'reactstrap'

const initialValue = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  occupation: '',
  phone: '',
}



export const Formu = ({ modal2, toggle2, user }) => {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const schema = yup.object().shape({
    name: yup.string().min(2, 'too Short').required('required'),
    lastName: yup.string().min(2, 'too Short').required('required'),
    email: yup.string().email().required(),
    password: yup.string().required(),
    occupation: yup.string(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
  })

  // const [values, setValues] = useState(id ? null: initialValue)
    const [values, setValues] = useState('')

  const { register, handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema)
  })

  console.log(user)

  // useEffect(() => {
  //     if(id) {
  //       api.get(`/users/${id}`)
  //       .then((response) => {
  //         setValues(response.data)
  //       })
  //     }
  // },[id]);




  // function onSubmit(e) {
  //   e.preventDefault();

  //   const method = id ? 'patch' : 'post'
  //   const url = id
  //    ? `http://localhost:3333/users/${id}`
  //    : `http://localhost:3333/users/`
  //   api[method](url, values)
  //   .then((response) => {
  //     console.log(response)
  //   })
   
  // }

  function onSubmit(data) {

    console.log(data)
    const method = user._id ? 'patch' : 'post'
    const url = user._id
     ? `http://localhost:3333/users/${user._id}`
     : `http://localhost:3333/users/`
    api[method](url, data)
    .then((response) => {
      console.log(response)
    })
   
  }

  

  return (
    <>
        <Modal isOpen={modal2} toggle={toggle2}>
          <ModalHeader toggle={toggle2}>Form</ModalHeader>
          <ModalBody>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <Label for="name">Name</Label>  
                  <Controller 
                    name="name"  
                    control={control}  
                    render={props => 
                      <Input 
                        type="text" 
                        defaultValue={user.name}
                        id="name" 
                        placeholder="Name" 
                        onChange={e => props.onChange(e.target.value)} 
                      />}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="LastName">LastName</Label>
                  <Controller 
                    name="lastName"  
                    control={control}  
                    render={props => 
                      <Input 
                        type="text" 
                        id="name" 
                        placeholder="Name" 
                        onChange={e => props.onChange(e.target.value)} 
                      />}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Controller 
                    name="email"  
                    control={control}  
                    render={props => 
                      <Input 
                        type="text" 
                        id="name" 
                        placeholder="Name" 
                        onChange={e => props.onChange(e.target.value)} 
                      />}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Controller 
                    name="password"  
                    control={control}  
                    render={props => 
                      <Input 
                        type="text" 
                        id="name" 
                        placeholder="Name" 
                        onChange={e => props.onChange(e.target.value)} 
                      />}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Occupation">Occupation</Label>
                  <Controller 
                    name="occupation"  
                    control={control}  
                    render={props => 
                      <Input 
                        type="text" 
                        id="name" 
                        placeholder="Name" 
                        onChange={e => props.onChange(e.target.value)} 
                      />}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Phone">Phone</Label>
                  <Controller 
                    name="phone"  
                    control={control}  
                    render={props => 
                      <Input 
                        type="text" 
                        id="name" 
                        placeholder="Name" 
                        onChange={e => props.onChange(e.target.value)} 
                      />}
                  />
                </FormGroup>

                <Button type='submit' color="primary" onClick={() => {toggle2();} } >Submit</Button>{' '}
                <Button color="secondary" onClick={toggle2}>Cancel</Button>
            </Form>

          </ModalBody>
          
        </Modal>
    </>
  );
}