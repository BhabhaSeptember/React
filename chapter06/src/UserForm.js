import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

class UserForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>User Form!</h1>
        <hr></hr>
        <Formik
          initialValues={{ email: "", password: "" }}
          
          //Validate forms values
         validate={(values) => {
            let errors = {};

            //Check if there is an email input
            if (!values.email) {
              errors.email = "Email is required!";
            } else if ( //Test if email is valid according to regex exp
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (values.email.length < 10) {
              errors.email = 'Email address too short';
              }
              if (!values.password) {
                errors.password = 'Password is required';
                }
                else if (values.password.length < 8) {
                errors.password = 'Password must be atleast 8 characters';
                } 
             
            return errors;
          }}
          //Alert box shows submitted form values in a JSON object
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" placeholder="Email" />
              <span style={{ color:"red", fontWeight: "bold" }}>
              <ErrorMessage name="email" component="div" />
              </span>
              <br></br>
              <br></br>
              <Field type="password" name="password" placeholder="Password"/>
              <span style={{ color:"red", fontWeight: "bold" }}>
              <ErrorMessage name="password" component="div" />
              </span>
              <br></br>
              <br></br>
              <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default UserForm;
