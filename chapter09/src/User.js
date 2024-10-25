import React, { Component } from "react";
import { app } from "./index"; // Ensure you're importing app from your index
import { getDatabase, ref, onValue, remove } from "firebase/database"; // Import necessary functions
import { Table, Button, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';

class User extends Component {
  //=========================================-CONSTRUCTOR-=========================================
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showDeleteDialog: false,
      selectedUser: {},
    };
    this.add = this.add.bind(this);
    this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
    this.delete = this.delete.bind(this);
  }
  //=========================================-METHODS-=========================================

  add(e) {
    //Navigates user to specified target route
    this.props.history.push("/add");
  }

  openDeleteDialog(user) {
    this.setState({
      showDeleteDialog: true,
      selectedUser: user,
    });
  }

  closeDeleteDialog() {
    this.setState({
      showDeleteDialog: false,
      selectedUser: {},
    });
  }

  delete(e) {
    const db = getDatabase(app); // Get the database reference
    const userRef = ref(db, "/" + this.state.selectedUser.key); // Reference to the user to delete
    
    remove(userRef)
      .then(() => {
        console.log("DELETED SUCCESSFULLY!");
        this.closeDeleteDialog();
      })
      .catch((error) => {
        alert("Could not delete the user.");
        console.log("ERROR", error);
      });
  }

  // Accessing the database node
  componentDidMount() {
    const db = getDatabase(app); // Get the database reference
    const usersRef = ref(db, "/"); // Db location/Reference to the root or your desired path

    // Listen for data changes at the specified location
    onValue(usersRef, (snapshot) => {
      let returnArr = [];
      snapshot.forEach((data) => {
        const user = data.val();
        user["key"] = data.key; // Assign 'key' property value to 'user' object
        returnArr.push(user);
      });

      // Set state with the returned array
      this.setState({
        users: returnArr,
      });
      console.log(snapshot.val()); // Log the snapshot value
    });
  }

  //=========================================-RENDER-=========================================
  render() {
    const listUsers = this.state.users.map((user) => (
      <tr key={user.key}>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
            {/* //Add router link to EDIT icon with parameter 'user.key' used to 
            retrieve our user object and populate form */}
        <Link to={`/edit/${user.key}`}>Edit</Link>
        </td>
        <td>
          <Button onClick={this.openDeleteDialog.bind(this, user)}>
            Remove
          </Button>
        </td>
      </tr>
    ));
    //=========================================-RETURN-=========================================
    return (
      <div>
        <h1>LIST OF USERS</h1>
        <hr></hr>
        <Button variant="primary" onClick={this.add}>
          New User
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{listUsers}</tbody>
        </Table>
        <Modal
          show={this.state.showDeleteDialog}
          onHide={this.closeDeleteDialog}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Are you sure you want to delete
              {this.state.selectedUser.username}?
            </p>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.delete}>Delete</Button>
            <Button onClick={this.closeDeleteDialog}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default User;
