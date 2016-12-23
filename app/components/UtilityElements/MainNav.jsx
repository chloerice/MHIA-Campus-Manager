import React, { Component } from 'react';
import { Navbar, Nav, NavItem }  from 'react-bootstrap';
import { Link } from 'react-router';


export default class MainNav extends Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">MHIA Campus Manager</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" active>Campuses</NavItem> //TODO make this a dropdown with current campus active
            <NavItem eventKey={2} href="#">Students</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
