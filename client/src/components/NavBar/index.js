import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import SignUpModal from "../Modal/SignUp";
import SignInModal from "../Modal/SignIn";

const NavBar = () => {

  const [showSignUp, setShowSignUp] = useState(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const [showSignIn, setShowSignIn] = useState(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const toggleSignUp = () => {
    handleShowSignUp();
  };

  const toggleLogin = () => {
    handleShowSignIn();
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="text-success">Team DontBreakPlz Todo List</Navbar.Brand>
      <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
              <Nav.Link className="text-light" onClick={toggleSignUp}>
                Sign Up!
              </Nav.Link>
              <Nav.Link className="text-light" onClick={toggleLogin}>
                Login
              </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <SignUpModal showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      <SignInModal showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
    </Navbar>
  );
};
export default NavBar;
