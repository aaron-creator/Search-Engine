import React, { Component, StyleSheet } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
      <div className="container-full">
        <div className="top-container">
          <h1 className="logoName">D-Optimizer</h1>
        </div>
        <div className="middle-container">
          <Home />
        </div>
        <div className="bottom-container">
        <h1>D-Optimizer</h1>
        </div>
      </div>
    );
  }
}
export default App;
