import React from 'react';
import {connect} from 'react-redux';

import {changeCount, changeFrom, changeTo, doClick} from '../../actions/some_in_range';

let Result = ({result}) => (
  <ul>
    {result.map(item =>
      <li key={item}>{item}</li>
    )}
  </ul>
);
Result = connect(
  state => ({result: state.result}),
  null
)(Result);

let Count = ({count, dispatch}) => (
  <div>
    I want to pick
    <input type={"number"}
           value={count}
           onChange={event => dispatch(changeCount(event.target.value))}/>
  </div>
);
Count = connect(
  state => ({count: state.count}),
  dispatch => ({dispatch})
)(Count);

let Range = ({from, to, dispatch}) => (
  <div>
    From range:
    <input type={"number"}
           value={from}
           onChange={event => dispatch(changeFrom(event.target.value))}/>
    to
    <input type={"number"}
           value={to}
           onChange={event => dispatch(changeTo(event.target.value))}/>
  </div>
);
Range = connect(
  state => ({from: state.from, to: state.to}),
  dispatch => ({dispatch})
)(Range);

let Do = ({dispatch}) => (
  <button onClick={() => dispatch(doClick())}>Do!</button>
);
Do = connect()(Do);

const SomeInRange = () => (
  <div>
    <Count/>
    <Range/>
    <Do/>
    <Result/>
  </div>
);

export default SomeInRange;