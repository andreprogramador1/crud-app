import React, { useState ,useEffect} from 'react'
import api from '../services/api' 
import { Table, Button } from 'reactstrap';

export const Tables = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getContent() {
      const response = await api.get('/users')
      //console.log(response.data)
      setData(response.data)
    }
    getContent()
  },[data])

  return (
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
              <td><Button color="danger">Delete</Button>{' '}</td>
          </tr>
        ))}

      </tbody>
    </Table>
  );
}