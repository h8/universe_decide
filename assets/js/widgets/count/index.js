import React from 'react';
import {connect} from "react-redux";

import NumberInput from '../number_input';

import {changeCount} from "../../actions/some_in_range";
import {selectCount} from "../../selectors/some_in_range";

const Count = ({count, changeCount}) => (
  <div>
    I want to pick
    <NumberInput value={count} onChange={changeCount}/>
  </div>
);

export default connect(selectCount, {changeCount})(Count);
