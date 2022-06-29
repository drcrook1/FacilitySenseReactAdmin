import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../logo.svg";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand href="/home">
          <img src={logo} width="40px" height="40px" />
          Facility Watch Admin
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Facilities">
              <NavDropdown.Item href="/facilities/create">
                Create
              </NavDropdown.Item>
              <NavDropdown.Item href="/facilities/view">View</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ratings">
              <NavDropdown.Item href="/ratings/create">Create</NavDropdown.Item>
              <NavDropdown.Item href="/ratings/view">View</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Users">
              <NavDropdown.Item href="/users/create">Create</NavDropdown.Item>
              <NavDropdown.Item href="/users/view">View</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SideNav;
