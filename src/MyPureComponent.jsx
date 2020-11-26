import React, { Component } from 'react';
class MyPureComponent extends React.PureComponent {
  componentDidUpdate() {
    console.log('MyPureComponent 새로 고침');
    console.log(this.props.value);
  }
  render() {
    return <></>;
  }
}
export default MyPureComponent;
