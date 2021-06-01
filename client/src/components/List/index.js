import { Row, Col, Button } from "react-bootstrap";
import Todo from "./Task/index";
import axios from "axios";

const TodoList = () => {

  const loginApp = () => {
     axios
       .put("/api/login", { username: "cdiuguid", password: "password1!" })
       .then((response) => console.log(response))
       .catch((err) => console.log(err));
  }

  const getTodos = () => {
    axios
      .get("/api/getTasks", {
        username: "cdiuguid"
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

 
  return (
    <Row>
      <Col>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </Col>
      <Button onClick={loginApp}>Login</Button>
      <Button onClick={getTodos}>get todos</Button>
    </Row>
  );
};

export default TodoList;
