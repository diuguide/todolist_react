import { Form, Button, Col, Row, Container } from "react-bootstrap";

const SignIn = ({ handleClose }) => {

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-content-center">
        <Col>
          <Row className="d-flex justify-content-center align-content-center">
            <Col className="bg-dark p-4">
              <Form>
                <Form.Group>
                  <Form.Control
                    type="email"
                    id="username"
                    name="username"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  value="Submit"
                  block
                >
                  Sign In
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default SignIn;
