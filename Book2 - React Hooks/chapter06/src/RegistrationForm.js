import React, {useState} from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";

function RegistrationForm() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [events, setEvents] = useState("");
  const [attendance, setAttendance] = useState("");

  const [emailError, setEmailError] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    let emailValid = false;

    if (email.length == 0) {
      setEmailError("Email is required!");
  } else if (email.length < 6) {
      setEmailError("Email should be minimum 6 characters!");
  } else if (email.indexOf(' ') >=0 ) {
      setEmailError("Email cannot contain spaces!");
  } else {
    setEmailError("");
    emailValid = true;

  };
  if (emailValid) {
    alert("Thank you! Now complete your registration by clicking the link in the email we sent you!")
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setEvents("");
    setAttendance("");
  }
};

  // Handle checkbox changes for events
  const handleEventChange = (event) => {
    const selectedEvent = event.target.value;
    setEvents((prevEvents) =>
      prevEvents.includes(selectedEvent)
        ? prevEvents.filter((e) => e !== selectedEvent)
        : [...prevEvents, selectedEvent]
    );
  };

  // Handle radio button change for attendance
  const handleAttendanceChange = (event) => {
    setAttendance(event.target.value);
  };

  return (
    <div>
      <h1>Code College Hackathon</h1>
      <h2>Registration Form</h2>
      <hr></hr>

      <Form style={styles.inputStyle} onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            First Name:{" "}
          </Form.Label>
          <Col sm={9}>
            <Form.Control 
            type="text"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Last Name:{" "}
          </Form.Label>
          <Col sm={9}>
            <Form.Control 
            type="text"
            value={lastName}
            onChange={event => setLastName(event.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Email Address:{" "}
          </Form.Label>
          <Col sm={9}>
            <Form.Control 
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}/>
          </Col>
        </Form.Group>
        {emailError && <Alert variant="danger">{emailError}</Alert>}

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Phone:
          </Form.Label>
          <Col sm={9}>
            <Form.Control 
            type="number"
            value={phone}
            onChange={event => setPhone(event.target.value)}/>
          </Col>
        </Form.Group>
 
        <hr/>

      {/* <Form.Group as={Row}>
        <Form.Label column sm={3}>
          Choose event/s to attend: <br/>
          <i>[All sessions: 10am - 3pm]</i> 
        </Form.Label>
        <Col sm={9}>
          
        <div className="col-sm-9">
        {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`JavaScript (10-01-2025)`}
            className="mb-1"
          />
          <hr></hr>
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`NodeJS (15-01-2025)`}
            className="mb-1"
          />
          <hr></hr>
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`React (30-01-2025)`}
            className="mb-1"
          />
          <hr></hr>
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Web Development (01-02-2025)`}
            className="mb-1"
          />
          <hr></hr>
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`SQL (15-02-2025)`}
            className="mb-1"
          />
          <hr></hr>
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Java (25-02-2025)`}
            className="mb-1"
          />
          <hr></hr>
        </div>
        
      ))}
      </div>
      </Col>
      </Form.Group>

        <Form.Group as={Row}>
        <Form.Label column sm={3}>
            How will you attend?  
           
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
        
        </Form.Group> */}

<Form.Group as={Row}>
          <Form.Label column sm={3}>
            Choose event/s to attend: <br />
            <i>[All sessions: 10am - 3pm]</i>
          </Form.Label>
          <Col sm={9}>
            {["JavaScript", "NodeJS", "React", "Web Development", "SQL", "Java"].map((event) => (
              <div key={event} className="mb-2">
                <Form.Check
                  type="checkbox"
                  label={`${event} (Date: TBD)`}
                  value={event}
                  checked={events.includes(event)}
                  onChange={handleEventChange}
                />
              </div>
            ))}
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            How will you attend?
          </Form.Label>
          <Col sm={9}>
            <Form.Check
              inline
              label="Online"
              name="attendance"
              type="radio"
              value="online"
              checked={attendance === "online"}
              onChange={handleAttendanceChange}
            />
            <Form.Check
              inline
              label="In-person"
              name="attendance"
              type="radio"
              value="in-person"
              checked={attendance === "in-person"}
              onChange={handleAttendanceChange}
            />
          </Col>
        </Form.Group>


        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Message the organizers:{" "}
          </Form.Label>
          <Col sm={9}>
            <Form.Control as="textarea"/>
          </Col>
        </Form.Group>
<hr></hr>
<br></br>
<br></br>
        <Button>SUBMIT</Button>
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
