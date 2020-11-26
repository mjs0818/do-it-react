import React, { Component } from 'react';
import PropsTypes from 'prop-types';
class Counter2 extends Component {
  render() {
    return (
      <div>
        현재 카운트: {this.props.count}
        <button onClick={() => this.props.onAdd()}>카운트 증가</button>
      </div>
    );
  }
}

Counter2.propTypes = {
  count: PropsTypes.number,
  onAdd: PropsTypes.func,
};
export default Counter2;
