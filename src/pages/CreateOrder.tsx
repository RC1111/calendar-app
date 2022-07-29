import Table from 'react-bootstrap/Table';
import {Form, Button} from 'react-bootstrap';
import React, { useState } from 'react'
function CreateOrder (){

      return (
        <>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Customer</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product/Service</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Cost</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
    <br/>
        </>
      )
  } 
  
  
  
  export default CreateOrder