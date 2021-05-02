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
          <p>this is Top.</p>
        </div>
        <div className="middle-container">
          <Home />
        </div>
        <div className="bottom-container">
        <p>this is bottom.</p>
        </div>
      </div>
    );
  }
}
export default App;
