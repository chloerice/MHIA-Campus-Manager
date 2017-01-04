import React, { PropTypes } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'

const NavBar = (props) => (
  <Navbar collapseOnSelect={true} fixedTop={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}>MHIA Campus Manager</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavDropdown id="campus-dropdown-menu" eventKey={1} title="Campuses">
          {props.campuses.map(campus => {
            return (
              <MenuItem
                href={`/campuses/${campus.id}`}
                id={`1.${campus.id}`}
                key={+`1.${campus.id}` /* '+' converts to number */}
                onClick={(event) => props.handleClick(event, campus.id, 'campus')}>
                {campus.name}
              </MenuItem>
            )
          })}
        </NavDropdown>
        <Link to={'/students'}>
          <NavItem eventKey={2}>Students</NavItem>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

NavBar.propTypes = {
  campuses: PropTypes.array.isRequired
}

export default NavBar
