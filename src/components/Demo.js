import React, { Component } from "react";

export class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "shiv",
    };
  }

  handleClick = () => {
    this.setState({
      name: "teja",
    });
  };
  render() {
    return (
      <div>
        <h1>Hello I am {this.state.name}</h1>
        <button onClick={this.handleClick}>change name</button>
      </div>
    );
  }
}

export default Demo;
