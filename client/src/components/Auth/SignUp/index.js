import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useState } from "react";

const SignUp = ({ handleClose }) => {
  const [accountCreds, setAccountCreds] = useState({
    username: "",
    password: "",
    passwordCheck: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountCreds({ ...accountCreds, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accountCreds.password === accountCreds.passwordCheck) {
      axios.post("/api/add", accountCreds).then((res) => {});
    }
  };

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
                    value={loginCreds.username}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    value={loginCreds.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    id="passwordCheck"
                    name="passwordCheck"
                    value={accountCreds.passwordCheck}
                    onChange={handleChange}
                    placeholder="Re-enter Password"
                  />
                </Form.Group>
                <Button
                  onClick={handleSubmit}
                  variant="warning"
                  type="submit"
                  value="Submit"
                  block
                >
                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default SignUp;
