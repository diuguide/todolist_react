import { Row, Col, Button } from "react-bootstrap";
import Todo from "./Task/index";
import { getTodos } from "../Utilities";

const TodoList = () => {
  const handleSubmit = () => {
    getTodos();


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
