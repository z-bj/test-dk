import React, { Component } from "react";

class MyRef extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.myTitle = React.createRef();
    this.myInput = React.createRef();
  }

  addFocus = () => {
    this.myInput.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.myInput} type="text" />
      </div>
    );
  }
}

export default MyRef;
