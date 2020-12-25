import React, {  useCallback, useMemo } from 'react'
import api from '../services/api'
import { useForm, Controller  } from 'react-hook-form'

import * as yup from "yup";

import {
  Form,
  FormGroup, 
  Label, 
  Input, 
  Modal ,
  ModalHeader, 
  ModalBody,
  Button,

} from 'reactstrap'

// const initialValue = {
//   name: '',
//   lastName: '',
//   email: '',
//   password: '',
//   occupation: '',
//   phone: '',
// }

//-------------RESOLVER FOR YUP AND USE FORM---------------------------
const useYupValidationResolver = validationSchema =>
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        });

        return {
          values,
          errors: {}
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message
              }
            }),
            {}
          )
        };
      }
    },
    [validationSchema]
  );

 

export const Formu = ({ modal2, toggle2, user, nameToggle }) => {

  const schema =  useMemo(() => (
    yup.object().shape({
      name: yup.string().min(2, 'too Short').required(),
      lastName: yup.string().min(2, 'too Short').required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
      occupation: yup.string(),
      phone: yup.string().required()
    })
  ))

  // const [values, setValues] = useState(id ? null: initialValue)
  

  const resolver = useYupValidationResolver(schema)
  const { handleSubmit, control, errors } = useForm({
    resolver,
    mode: 'all',
  })


  function onSubmit(data) {
    
    const method = user._id ? 'patch' : 'post'
    const url = user._id
     ? `http://localhost:3333/users/${user._id}`
     : `http://localhost:3333/users/`
    api[method](url, data)
    .then((response) => {
      // console.log(response)
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
                    defaultValue={nameToggle.name === 'edit' ? user.name : ''}
                    render={props => 
                      <>
                      <Input
                        valid={props.value === '' ? false : !errors.name}
                        invalid={!!errors.name}
                        type="text" 
                        defaultValue={props.value}
                        id="name" 
                        placeholder="Name"
                        onChange={e => props.onChange(e.target.value) } 
                      />
                      {errors.name && <span role="alert">{errors.name.message}</span>}    
                      </>
                      } 
                  />
                  

                </FormGroup>
                <FormGroup>
                  <Label for="LastName">LastName</Label>
                  <Controller 
                    name="lastName"  
                    control={control}  
                    defaultValue={nameToggle.name === 'edit' ? user.lastName : ''} 
                    render={props => 
                      <>
                      <Input
                        valid={props.value === '' ? false : !errors.lastName}
                        invalid={!!errors.lastName} 
                        type="text"
                        defaultValue={props.value} 
                        id="name" 
                        placeholder="lastName" 
                        onChange={e => props.onChange(e.target.value)} 
                      />
                      {errors.lastName && <span role="alert">{errors.lastName.message}</span>}    
                      </>
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Controller 
                    name="email"  
                    control={control}  
                    defaultValue={nameToggle.name === 'edit' ? user.email : ''}  
                    render={props => 
                      <>
                      <Input 
                        valid={props.value === '' ? false : !errors.email}
                        invalid={!!errors.email} 
                        type="text"
                        defaultValue={props.value}  
                        id="name" 
                        placeholder="email" 
                        onChange={e => props.onChange(e.target.value)} 
                      />
                      {errors.email && <span role="alert">{errors.email.message}</span>}  
                      </>}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Controller 
                    name="password"  
                    control={control}  
                    defaultValue={nameToggle.name === 'edit' ? user.password : ''} 
                    render={props => 
                      <>
                      <Input
                        valid={props.value === '' ? false : !errors.password}
                        invalid={!!errors.password}  
                        type="text"
                        defaultValue={props.value}  
                        id="name" 
                        placeholder="password" 
                        onChange={e => props.onChange(e.target.value)} 
                      />
                      {errors.password && <span role="alert">{errors.password.message}</span>}    
                      </>
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Occupation">Occupation</Label>
                  <Controller 
                    name="occupation"  
                    control={control}  
                    defaultValue={nameToggle.name === 'edit' ? user.occupation : ''} 
                    render={props => 
                      <>
                      <Input
                        valid={props.value === '' ? false : !errors.occupation}
                        invalid={!!errors.occupation}  
                        type="text"
                        defaultValue={props.value}   
                        id="name" 
                        placeholder="occupation" 
                        onChange={e => props.onChange(e.target.value)} 
                      />
                      {errors.occupation && <span role="alert">{errors.occupation.message}</span>}    
                      </>
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Phone">Phone</Label>
                  <Controller 
                    name="phone"  
                    control={control}  
                    defaultValue={nameToggle.name === 'edit' ? user.phone : ''}  
                    render={props => 
                      <>
                      <Input
                        valid={props.value === '' ? false : !errors.phone}
                        invalid={!!errors.phone}  
                        type="text"
                        defaultValue={props.value}  
                        id="name" 
                        placeholder="phone" 
                        onChange={e => props.onChange(e.target.value)} 
                      />
                      {errors.phone && <span role="alert">{errors.phone.message}</span>}    
                      </>
                    }
                  />
                </FormGroup>

                <Button type='submit' color="primary" onClick={() => {
                  if(Object.keys(errors).length === 0)
                    toggle2();
                }}>Submit</Button>{' '}
                <Button color="secondary" onClick={toggle2}>Cancel</Button>
            </Form>

          </ModalBody>
          
        </Modal>
    </>
  );
}