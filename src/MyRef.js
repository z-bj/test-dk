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

  update = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    this.myTitle.current.style.color = "red";
  }

  componentDidMount() {
    this.myInput.current.focus();
  }

  handleClick = () => {
    console.log(this.myInput.current.value);
  };

  render() {
    return (
      <div>
        <h1 ref={this.myTitle}>Value:{this.state.value}</h1> {/* ref is here*/}
        {/* <input
          ref={this.myInput}
          type="text"
          value={this.state.value}
          onChange={this.update}
        /> */}
        <input ref={this.myInput} type="text" />
        <button onClick={this.handleClick}>validate</button>
      </div>
    );
  }
}

export default MyRef;
