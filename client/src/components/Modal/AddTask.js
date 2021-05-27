import { Row, Col, Modal, Form, Button } from "react-bootstrap";

const AddTaskModal = ({ showAddTask, setShowAddTask }) => {
  const handleClose = () => setShowAddTask(false);

  return (
    <Modal show={showAddTask} onHide={handleClose} animation={false}>
      <Modal.Body className="bg-dark">
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter title"
              id="title"
              name="title"
            />
            <Form.Text className="text-muted">
              Enter a title for the post
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              placeholder="Enter the text"
              id="text"
              name="text"
            />
            <Form.Text className="text-muted">
              Enter the text for the post
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Due Date"
              id="dueDate"
              name="dueDate"
            />
            <Form.Text className="text-muted">
              Enter a due date for the todo
            </Form.Text>
          </Form.Group>
              </Form>
              <Row>
                  <Col className="d-flex justify-content-center">
                      <Button variant="primary">Submit</Button>
                  </Col>
              </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AddTaskModal;
