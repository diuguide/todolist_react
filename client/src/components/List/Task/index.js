import { Row, Col, Button } from "react-bootstrap";

const Todo = () => {
  return (
    <Row className="m-2">
      <Col>
        <Row className="d-flex border">
          <Col>Task ID</Col>
          <Col>Title</Col>
          <Col>Message</Col>
          <Col>Due Date</Col>
          <Col>Completed</Col>
          <Col></Col>
        </Row>
        <Row className="d-flex border bg-light" style={{ height: "50px" }}>
          <Col>1</Col>
          <Col>Test Title</Col>
          <Col>Test Message</Col>
          <Col>1/1/00</Col>
          <Col>Yes</Col>
          <Col>
            <Button>Edit</Button>
            <Button variant="warning">Delete</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Todo;
