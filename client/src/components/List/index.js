import { Row, Col } from 'react-bootstrap';
import Todo from './Task/index';

const TodoList = () => {
    return (
      <Row>
        <Col>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </Col>
      </Row>
    );
}

export default TodoList;