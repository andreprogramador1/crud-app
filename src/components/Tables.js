import React, { useState ,useEffect} from 'react'
import api from '../services/api' 
import { ModalMain } from './ModalMain'
import { Table, Button } from 'reactstrap';

export const Tables = () => {

  const [data, setData] = useState([]);
  const [id, setId] = useState('')
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    async function getContent() {
      const response = await api.get('/users')
      //console.log(response.data)
      setData(response.data)
    }
    getContent()
  },[])

  const filterData = (id) => {
    setData(data.filter((item) => (item._id !== id)))
  }

  return (
    <>
    <ModalMain toggle={toggle} modal={modal} id={id} ondelete={filterData} />
    <Table>

      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Occupation</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

        {data.map((user, i) => (
            <tr key={i}>   
              <th scope="row">1</th>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.occupation}</td>
              <td>{user.phone}</td>
              <td  width='1px'><Button color="warning">Edit</Button></td>
              <td><Button color="danger" onClick={ () => {toggle(); setId(user._id)} } >Delete</Button>{' '}</td>
          </tr>
        ))}

      </tbody>
    </Table>
    </>
  );
}