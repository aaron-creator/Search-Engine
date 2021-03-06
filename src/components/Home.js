import React from "react";
import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
class Home extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearchtext = this.onChangeSearchtext.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      searchtext: "",
    };
  }

  onChangeSearchtext(e) {
    this.setState({ searchtext: e.target.value });
  }

  //   onSubmit(e) {
  //     e.preventDefault();

  //     const user = {
  //       username: this.state.username,
  //     };
  //     console.log(user);

  //     axios
  //       .post("http://localhost:5000/users/add", user)
  //       .then((res) => console.log(res.data))
  //       .catch((err) => console.error(err));

  //     this.setState({
  //       username: "",
  //     });
  //   }

  render() {
    return (
      <div className="SearchBoxHolder">
        <div className="headlabelcontainer">
          <h1 className="headlabel">Hello, Everyone!</h1>
          <p className="para">
            Want to search out something.
          </p>
        </div>
        <hr></hr>
        <br></br>
        <br></br>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label></label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.searchtext}
                onChange={this.onChangeSearchtext}
              />
            </div>
            <div className="form-group">
              <center>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Search"
                />
              </center>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Home;
