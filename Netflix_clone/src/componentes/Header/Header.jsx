import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import NetflixLogo from "../../assets/images/netflix-4.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        className="text-white sticky-top"
        style={{ backgroundColor: "transparent", padding: "10px 0" }}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={NetflixLogo} alt="Netflix Logo" width="100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="#action1 ">Home</Nav.Link>
              <Nav.Link href="#action2">TVShow</Nav.Link>
              <Nav.Link href="#action2">Movies</Nav.Link>
              <Nav.Link href="#action2">Latest</Nav.Link>
              <Nav.Link href="#action2">MyList</Nav.Link>
              <Nav.Link href="#action2">Browse by Languages</Nav.Link>
            </Nav>

            <Nav className="align-items-flex-start">
              <Nav.Link href="#">
                <SearchIcon />
              </Nav.Link>

              <Nav.Link href="#">
                <NotificationsNoneIcon />
              </Nav.Link>

              <Nav.Link href="#">
                <AccountBoxIcon />
              </Nav.Link>
              <Nav.Link href="#">
                <ArrowDropDownIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
