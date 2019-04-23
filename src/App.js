import React, { Component } from "react";
import Routes from "./Routes";
import BottomNavBar from "./BottomNavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Routes />
        <BottomNavBar />
      </React.Fragment>
    );
  }
}

export default App;
