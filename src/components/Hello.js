import React from 'react';

class Hello extends React.Component{
  constructor() {
    super();
  }

  render() {
    console.log("this:", this);
    return <h1>Hello, {this.props.name}</h1>
  }
}

export default Hello;