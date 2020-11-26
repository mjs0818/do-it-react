import React, { Component } from 'react';
import Counter from './03/Counter2';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }
  render() {
    return <Counter count={this.state.count} onAdd={this.increaseCount.bind(this)} />;
  }
}
