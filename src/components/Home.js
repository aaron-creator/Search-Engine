import React from "react";
import { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Hello, Everyone!</h1>
          <p className="para">
            Want to search out something. D-Optimizer is there to help you to
            find out all your Doubts.
          </p>
          <hr></hr>
          <br></br>
          <br></br>
          <div className="container">
            <Form>
              <Form.Group controlId="Search">
                <Form.Control type="text" placeholder="Enter the text here" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
export default Home;
