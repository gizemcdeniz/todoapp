import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <Navbar className="bg-warning">
      <Container>
        <NavbarBrand href="/">My Tasks</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Add Task</Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}