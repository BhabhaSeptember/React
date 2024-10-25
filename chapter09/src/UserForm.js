import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAIpC6B7lpoF-KgkTJFQnhNHfRTos7cIMA",
  authDomain: "reactapp-fe112.firebaseapp.com",
  projectId: "reactapp-fe112",
  storageBucket: "reactapp-fe112.appspot.com",
  messagingSenderId: "891869149823",
  appId: "1:891869149823:web:e7fec793b67fa66d9f5d4a",
  measurementId: "G-BZ679BLSZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

class UserForm extends Component {
  title;
  id;

  constructor(props) {
    super(props);
    this.id = this.props.match.params.id; //retrieve id
    this.title = "New User";
    this.state = {
      username: "",
      email: "",
    };

    if (this.id) {
      this.title = "Edit User";
    }
  }

  componentDidMount() {
    if (this.id) {
      //Retrieving user object by providing 'id' as argument
      // Get a reference to the user
      const userRef = ref(database, "/" + this.id);

      onValue(userRef, (snapshot) => {
        //retrieve snapshot
        const data = snapshot.val();
        if (data) {
          // Set component state for username and email to snapshot values
          this.setState({
            username: data.username,
            email: data.email,
          });
        }
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <hr></hr>
        <Formik
          enableReinitialize={true}
          initialValues={{
            //Render form with initial values from db
            username: this.state.username,
            email: this.state.email,
          }}
          //Validate forms values
          validate={(values) => {
            let errors = {};

            //Check if there is an email input
            if (!values.email) {
              errors.email = "Email is required!";
            } else if (
              //Test if email is valid according to regex exp
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address!";
            } else if (values.email.length < 10) {
              errors.email = "Email address too short!";
            }
            if (!values.username) {
              errors.username = "Username is required!";
            } else if (values.username.length < 3) {
              errors.username = "Username must be atleast 3 characters long!";
            }

            return errors;
          }}
          //Alert box shows submitted form values in a JSON object
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              if (this.id) {
                //i.e. form is in edit mode
                update(ref(database, "/" + this.id), {
                  username: values.username,
                  email: values.email,
                }).then(() => this.props.history.push("/"));
              } else {
                //i.e. Form is in 'Add New User' mode
                push(ref(database, "/"), {
                  username: values.username,
                  email: values.email,
                }).then(() => this.props.history.push("/"));
              }
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* <h1>New User Form</h1> */}
              <hr></hr>
              <Field type="email" name="email" placeholder="Email" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="email" component="div" />
              </span>
              <br></br>
              <br></br>
              <Field type="text" name="username" placeholder="Username" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="username" component="div" />
              </span>
              <br></br>
              <br></br>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default UserForm;
