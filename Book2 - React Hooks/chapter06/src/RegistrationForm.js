import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

function RegistrationForm() {
  return (
    <div>
      <h1>Code College Hackathon</h1>
      <h2>Registration Form</h2>
      <hr></hr>

      <Form style={styles.inputStyle}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            First Name:{" "}
          </Form.Label>
          <Col sm={9}>
            <Form.Control />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Last Name:{" "}
          </Form.Label>
          <Col sm={9}>
            <Form.Control />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Email Address:{" "}
          </Form.Label>
          <Col sm={9}>
            <Form.Control />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Phone:{" "}
          </Form.Label>
          <Col sm={9}>
            <Form.Control />
          </Col>
        </Form.Group>
        <hr></hr>

        <Form.Group as={Row}>
        <Form.Label column sm={3}>
            How will you attend?{" "}
          </Form.Label>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Online"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />

            <Form.Check
              inline
              label="In-person"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
          </div>
        ))}
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Dietary Requirements:{" "}
          </Form.Label>
          <Col sm={9}>
            <Form.Control />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default RegistrationForm;

const styles = {
  inputStyle: {
    width: 800,
    margin: 50,
  },
  bodyStyle: {
    // color:
  },
};
