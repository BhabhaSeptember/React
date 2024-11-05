import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';

function UserForm() {
//Declare state variables with their state setter methods
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

//Form submission handler
    const handleSubmit = event => {

//Ensures page is not reloaded when contents of form are sent    
        event.preventDefault();  
        //EMAIL VALIDATION
        let emailValid = false;
        let passwordValid = false;
        if (email.length == 0) {
            setEmailError("Email is required!");
        } else if (email.length < 6) {
            setEmailError("Email should be minimum 6 characters!");
        } else if (email.indexOf(' ') >=0 ) {
            setEmailError("Email cannot contain spaces!");
        } else if (password.length == 0) {
            setPasswordError("Password is required!");
        } else if (password.length < 8) {
            setPasswordError("Password must be minimum 8 characters!");
        } else {
            setEmailError("");
            setPasswordError("");
            emailValid = true;           
            passwordValid = true;
        };
        if (emailValid && passwordValid) {
            alert("Email: " + email + "\nPassword: " + password);
            setEmail("");
            setPassword("");

        }

        
    }

    return (
        <div>
{/*//Binding 'handleSubmit' to onSubmit event handler in form element*/}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                    onChange={event => setEmail(event.target.value)} 
                    value={email}                  
                    />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                {emailError.length > 0 && <Alert variant="danger">{emailError}</Alert>}


                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                    />
                </Form.Group>
                {passwordError.length > 0 && <Alert variant="danger">{passwordError}</Alert>}

                <Button variant="primary" type="submit">Login</Button>
            </Form>

            Email entered: {email}
            <br/>
            Password entered: {password}
        </div>
    );
}

export default UserForm;