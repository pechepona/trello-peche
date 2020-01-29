import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

class NavBar extends Component {
    render() {
      return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Trello-Peche</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }

  export default NavBar;