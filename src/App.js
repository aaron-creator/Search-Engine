import React, { Component, StyleSheet } from "react";
import Home from "./components/Home";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
      <div className="containerholder">
        <div className="top-container">
          <h1 className="logoName">Search the Web</h1>
        </div>
        <div className="middle-container">
          <Home />
        </div>
        <div className="bottom-container">
          <div className="bottom-logo1">
          </div>
          <hr></hr>
          <div className="bottom-logo2">
            <p className="bottomlogoName">Made by Aaron.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
