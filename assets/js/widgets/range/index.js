import React from 'react';
import {connect} from "react-redux";

import NumberInput from '../number_input';

import {changeFrom, changeTo} from "../../actions/some_in_range";
import {selectRange} from "../../selectors/some_in_range";

const Range = ({from, to, changeFrom, changeTo}) => (
  <div>
    From range:
    <NumberInput value={from} onChange={changeFrom}/>
    to
    <NumberInput value={to} onChange={changeTo}/>
  </div>
);
export default connect(selectRange, {changeFrom, changeTo})(Range);