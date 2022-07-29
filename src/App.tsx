import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Schedule from './pages/Schedule';
import CustomerForm from './pages/CustomerForm';
import EmployeeForm from './pages/EmployeeForm';
import { Container,Row,Col, Nav } from 'react-bootstrap';
import ProductServiceForm from './pages/ProductServiceForm';
import CreateOrder from './pages/CreateOrder';

function App() {

  return (
    
    <div className="App">
      <Container>
        <br/>
        <br/>
        <Row>
       
          <Col md={2}>
          <Nav defaultActiveKey="/schedule" className="flex-column">
      <Nav.Link href="/schedule">Schedule</Nav.Link>
      <Nav.Link href="/customerform">Customer</Nav.Link>
      <Nav.Link href="/EmployeeForm">Employee</Nav.Link>
      <Nav.Link href="/ProductServiceForm">
        Products and Services
      </Nav.Link>
      <Nav.Link href="/CreateOrder">
        Orders
      </Nav.Link>
    </Nav>
          </Col>
          <Col md={10}>
          <Routes>
        <Route path="/Schedule" element={<Schedule />}>
        </Route>
        <Route path="/CustomerForm" element={<CustomerForm/>}></Route>
        <Route path="/EmployeeForm" element={<EmployeeForm/>}></Route>
        <Route path="/ProductServiceForm" element={<ProductServiceForm/>}></Route>
        <Route path="/CreateOrder" element={<CreateOrder/>}></Route>

        </Routes>
       
        
          </Col>
    
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
