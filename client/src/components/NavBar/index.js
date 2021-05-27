import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import SignUpModal from "../Modal/SignUp";
import SignInModal from "../Modal/SignIn";
import AddTaskModal from "../Modal/AddTask";

const NavBar = () => {

  const [showSignUp, setShowSignUp] = useState(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const [showSignIn, setShowSignIn] = useState(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const [showAddTask, setShowAddTask] = useState(false);
  const handleShowAddTask = () => setShowAddTask(true);

  const toggleSignUp = () => {
    handleShowSignUp();
  };

  const toggleLogin = () => {
    handleShowSignIn();
  };

  const toggleAddTask = () => {
    handleShowAddTask();
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="text-success">
        Team DontBreakPlz Todo List
      </Navbar.Brand>
      <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-light" onClick={toggleSignUp}>
            Sign Up!
          </Nav.Link>
          <Nav.Link className="text-light" onClick={toggleLogin}>
            Login
          </Nav.Link>
          <Nav.Link className="text-light" onClick={toggleAddTask}>
            Add Task
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <SignUpModal showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      <SignInModal showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      <AddTaskModal showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
    </Navbar>
  );
};
export default NavBar;
