import React, { Component } from "react";
import MyRef from "./MyRef";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.refComp = React.createRef();
  }

  handleClick = () => {
    this.refComp.current.addFocus();
  };

  render() {
    return (
      <div className="App">
        <MyRef ref={this.refComp} />

        <button onClick={this.handleClick}>validate</button>
      </div>
    );
  }
}
export default App;
