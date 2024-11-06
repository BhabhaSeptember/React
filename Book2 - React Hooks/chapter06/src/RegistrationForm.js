import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

function RegistrationForm() {
  return (
    <div>
      <h1>Registration Form</h1>
      <hr></hr>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="formGridDob">
            <Form.Label>Date of Birth:</Form.Label>
            <Row>
                
            </Row>
            <Form.Select defaultValue="YYYYMMDD">
                
            </Form.Select>
          </Form.Group>

        <hr/>

        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Address (Line1):</Form.Label>
          <Form.Control placeholder="123 Beach Heights" />
        </Form.Group>
        <br/>

        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Address (Line2):</Form.Label>
          <Form.Control placeholder="47 Main St" />
        </Form.Group>
        <br/>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSuburb">
            <Form.Label>Suburb:</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City:</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>ZipCode:</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <hr/>

        <Form.Group>
          <Form.Label>
            <Form.Control></Form.Control>
          </Form.Label>
        </Form.Group>
      </Form>
    </div>
  );
}

export default RegistrationForm;
