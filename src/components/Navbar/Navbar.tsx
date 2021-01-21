import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import "./Navbar.css";

const NavbarCom = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar expand="md" style={{ background: "#D5A664", color: "#5c2c06" }}>
        {/* <div className="container"> */}
          <NavbarBrand href="/">
            Diaries App
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" className="mr-4">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login" className="mr-4">
                  Login
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink to="/cart">
                  Basket {cart && cart.length ? `(${cart.length})` : ""}
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        {/* </div> */}
      </Navbar>
    </div>
  );
};

export default NavbarCom;