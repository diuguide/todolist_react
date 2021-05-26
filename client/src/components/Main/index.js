import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../NavBar";
import TodoList from '../List/index';


const Main = () => {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row className="bg-secondary d-flex justify-content-center" style={{ height:"100vh"}}>
          <Col lg={10}>
            <Row>
              <Col>
                <TodoList />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Main;
