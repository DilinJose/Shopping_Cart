import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/w-logo.webp";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const style = { color: "black",
                  margin: "auto",
                };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img src={logo} alt="No Image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link style={style} to="/">
              Dashboard
            </Link>
          </Nav>
          <Nav>
            <Link style={style} to="favorite">
              <MdFavoriteBorder />
            </Link>
            <Link style={style} to="cart">
              <AiOutlineShoppingCart />
            </Link>
            <Link style={style} to="/signin">
              Sign in
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
