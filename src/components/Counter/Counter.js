import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import * as actions from '../../redux/counter/counter-actions';

import './Counter.css';

const Counter = ({ step, value, handleIncrement, handleDecrement }) => {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => handleIncrement(step)}
        onDecrement={() => handleDecrement(step)}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: value => dispatch(actions.increment(value)),
    handleDecrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

/**
 * const a = (x, z) => (y) => x + y;
    a(3)(4) // 7

 */

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(({ value }) => ({
//       value: value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(({ value }) => ({
//       value: value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;

// return (
//   <div className="Counter">
//     <Value value={value} />
//     <Controls
//       onIncrement={this.handleIncrement}
//       onDecrement={this.handleDecrement}
//     />
//   </div>
// );
//   }
// }
