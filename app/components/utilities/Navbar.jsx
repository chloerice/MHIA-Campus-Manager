import React, { PropTypes } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = (props) => (
  <Navbar collapseOnSelect={true} fixedTop={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">MHIA Campus Manager</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavDropdown id="campus-dropdown-menu" eventKey={1} title="Campuses">
          {props.campuses.map(campus => {
            return (
              <LinkContainer
                to={{pathname: `/campuses/${campus.id}`, query: ''}}
                key={+`1.${campus.id}`}>
                <MenuItem
                  eventKey={+`1.${campus.id}` /* '+' converts to number */}>
                  {campus.name}
                </MenuItem>
              </LinkContainer>
            )
          })}
        </NavDropdown>
          <LinkContainer to={{pathname: '/students'}}>
            <NavItem eventKey={2}>
              Students
            </NavItem>
          </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

NavBar.propTypes = {
  campuses: PropTypes.array.isRequired
}

export default NavBar
