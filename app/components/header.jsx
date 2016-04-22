import React, { PropTypes } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
const Header = () => <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <IndexLinkContainer to={{pathname: '/'}}>
        <a>Site Name</a>
      </IndexLinkContainer>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <LinkContainer to={{pathname: '/'}}>
      <NavItem eventKey={1}>
        Home
      </NavItem>
    </LinkContainer>
    <LinkContainer to={{pathname: '/about'}}>
      <NavItem eventKey={2}>
        About
      </NavItem>
    </LinkContainer>
  </Nav>
</Navbar>

Header.propTypes = {
  children: PropTypes.node
}
export default Header
