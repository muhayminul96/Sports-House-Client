import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loadig/Loading";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
  }

  // log out section

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Sports House
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home#items">Items</Nav.Link>
            <Nav.Link as={Link} to="/qusetion">
              Question Answer
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <>
                <Nav.Link as={Link} to="/myitems">
                  My Items
                </Nav.Link>
                <Nav.Link as={Link} to="/manageitems">
                  Manage Items
                </Nav.Link>
                <Nav.Link as={Link} to="/additem">
                  Add Items
                </Nav.Link>
              </>
            ) : (
              ""
            )}
            {user ? (
              <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
