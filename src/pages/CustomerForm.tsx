import Table from 'react-bootstrap/Table';
import {Form, Button} from 'react-bootstrap';
import React, { useState } from 'react'
import * as CustomerService from '../service/CustomerService'
import * as CreateCustomer from '../service/CustomerService'
function CustomerForm (){
      const [data,setData] = useState<Array<CustomerService.Customer>>();
      if(data === null || data === undefined)
      {
        CustomerService.GetCustomers().then(a=>setData(a));
      }

      
      return (
        <>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        
      </Form.Group>
      <Button variant="primary" type="submit" onClick={CreateCustomer}>
        Add
      </Button>
    </Form>
    <br/>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Created Date</th>
          <th>Email Address</th>

        </tr>
      </thead>
      <tbody>
 {
    data?.map(a=>{
      return <tr key={a.id}>
        <td>{a.firstname}</td>
        <td>{a.lastname}</td>
        <td></td>
        {/* <td>{a.createddate}</td> */}
        <td>{a.emailaddress}</td>
      </tr>
    })
 }
      </tbody>
    </Table>
        </>
      )
  } 
  
  
  
  export default CustomerForm