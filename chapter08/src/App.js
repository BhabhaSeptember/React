import React, { Component } from "react";
import GitHub from "./GitHub";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import GitHubUser from './GitHubUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
                <Nav.Link href="/help">Help</Nav.Link> 
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route path="/github/user/:login/:id" component={GitHubUser} /> 
            <Route path="/github" component={GitHub} />
            <Route path="/help" component={Help} />
            <Route exact path="/" component={Home} />   
            <Route path="/*" component={NotFound} />
                  
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends Component {
  render() {
    return <div><h2>Home Page</h2></div>;
  }
}

class Help extends Component {
  render() {
    return <div><h2>How may we assist?</h2></div>;
  }
}

class NotFound extends Component {
  render() {
    return <div><h2>Page Not Found...</h2></div>;
  }
}
