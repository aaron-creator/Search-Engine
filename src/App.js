import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <Jumbotron>
          <h1>Hello, Everyone!</h1>
          <p>
            Want to search out something. D-OPtimizer is there to help to find
            all your Doubts
          </p>
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
export default App;
