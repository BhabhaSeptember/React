import React, { Component } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import Card from "react-bootstrap/Card";
import {Form, Button} from 'react-bootstrap';
import { Nav, Navbar } from "react-bootstrap";


class GitHub extends Component {
  //===============================CONSTRUCTOR===============================
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: "",
      isLoading: false, //EXAMPLE2
      //   isLoading: true, //EXAMPLE1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //Best practice: constructors should not contain costly operations e.g. calling server in constructor
    //EXAMPLE1:
    // this.getGitHubData("greg");
  }
  //===============================METHODS===============================
  //EXAMPLE2:
  //   componentDidMount() {
  //     this.getGitHubData("september");
  //   }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value }); 
    }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    this.getGitHubData(this.state.searchTerm);
  }

  //Method returns GitHub data from our API endpoint
  getGitHubData(_searchTerm) {
    //Axios library allows us to make a call to API endpoint
    axios
      .get("https://api.github.com/search/users?q=" + _searchTerm)
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.data.items,
        });
        console.log(res.data.items);
      });
  }
  //===============================RENDER===============================
  render() {
    const listUsers = this.state.data.map((user) => (
      <Card key={user.id} style={{ width: "18rem" }}>
        {/* <a href={user.html_url}> */}
        <Nav.Link href={`/github/user/${user.login}/${user.id}`}>
          <Card.Img src={user.avatar_url} alt="Generic placeholder" />
          </Nav.Link> v  
        {/* </a> */}
        <Card.Body>
          <h5>Login: {user.login}</h5>
          <p>Id: {user.id}</p>
        </Card.Body>
      </Card>
    ));
    //===============================RETURN===============================
    return (
      <div>
        {/* //Using Form inline to render a simple form with 
        single input which is binded to the states searchTerm property */}
        <Form inline onSubmit={this.handleSubmit}>
          <Form.Group controlId="formInlineName">
            <Form.Control
              type="text"
              value={this.state.searchTerm}
              placeholder="Enter Search Term"
              onChange={this.handleChange}
            />
          </Form.Group>{" "}
          <Button type="submit">Search</Button>
        </Form>
        <br></br>

        <h2>GitHub Users Results</h2>
        <hr></hr>
        {this.state.isLoading && (
          <ReactLoading type="spinningBubbles" color="#444" />
        )}
        {listUsers}
      </div>
    );
  }
}
export default GitHub;
