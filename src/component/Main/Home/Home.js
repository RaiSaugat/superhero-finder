import React, { Component } from "react";
import List from "../List/List";

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
      <h1>Home</h1>
        <List />
      </div>
    );
  }
}

export default Home;
