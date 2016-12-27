import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link, IndexLink } from 'react-router';

const NavBar = (props) => (
  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">MHIA Campus Manager</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem><IndexLink to={'/'}>Home</IndexLink></NavItem>
        <NavDropdown eventKey={1} active>Campuses
          {props.campuses.map(campus => {
            return (
              <MenuItem eventKey={+`1.${campus.id}`}> //'+' converts to number
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
              </MenuItem>
            )
          })}
        </NavDropdown>
        <NavItem eventKey={2}><Link to={'/students'}>Students</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)


NavBar.propTypes = {
  campuses: PropTypes.array.isRequired
}

export default NavBar
