import React, { Component } from 'react';

class MyCom extends React.Component {
  componentDidUpdate() {
    console.log('MyComponent 새로 고침');
    console.log(this.props.value);
  }
  render() {
    return <></>;
  }
}

export default MyCom;
