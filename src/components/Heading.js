import React from 'react';
import { Link } from "react-router-dom";
import logo from './todo.png';

import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <Navbar className="bg-warning d-flex justify-content-center">
      <Container className="d-flex justify-content-center">
        <NavbarBrand href="/">My Tasks</NavbarBrand>
        <Nav className="d-flex justify-content-center">
        <img src={logo} alt="logo"/>
          <NavItem>
            <Link className="btn btn-primary mt-3" to="/add">Add Task <i class="fa fa-plus" aria-hidden="true"></i></Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}